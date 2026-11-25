if (globalThis.__windowsOpenNextPatch) {
  module.exports = {}
  return
}
globalThis.__windowsOpenNextPatch = true

const fs = require("node:fs")
const path = require("node:path")
const Module = require("node:module")

const sharpStub = path.join(__dirname, "sharp-stub.cjs")
const symlinkSync = fs.symlinkSync

fs.symlinkSync = function symlinkOrCopy(target, dest, type) {
  try {
    return symlinkSync.call(fs, target, dest, type)
  } catch (error) {
    if (error.code !== "EPERM" && error.code !== "EACCES") throw error

    const absTarget = path.isAbsolute(target) ? target : path.resolve(path.dirname(dest), target)
    fs.mkdirSync(path.dirname(dest), { recursive: true })

    if (fs.statSync(absTarget).isDirectory()) {
      try {
        return symlinkSync.call(fs, absTarget, dest, "junction")
      } catch (junctionError) {
        if (junctionError.code === "EEXIST") return
        fs.cpSync(absTarget, dest, { recursive: true, dereference: true })
        return
      }
    }

    fs.copyFileSync(absTarget, dest)
  }
}

const compileJs = Module._extensions[".js"]
Module._extensions[".js"] = function compileWithSharpStub(module, filename) {
  const normalized = filename.replaceAll("\\", "/")
  if (!normalized.endsWith("/esbuild/lib/main.js")) {
    return compileJs(module, filename)
  }

  const source = fs.readFileSync(filename, "utf8")
  const needle = "var build = (options) => ensureServiceIsRunning().build(options);"
  if (!source.includes(needle)) {
    return compileJs(module, filename)
  }

  const stub = JSON.stringify(sharpStub)
  const replacement = `var build = (options = {}) => {
    if (options.bundle) {
      options = {
        ...options,
        alias: { ...(options.alias || {}), sharp: ${stub} },
        plugins: [...(options.plugins || []), {
          name: "stub-native-addons",
          setup(esbuild) {
            esbuild.onResolve({ filter: /\\.node$/ }, (args) => ({ path: args.path, namespace: "native-addon-stub" }))
            esbuild.onLoad({ filter: /.*/, namespace: "native-addon-stub" }, () => ({ contents: "module.exports = {}", loader: "js" }))
          }
        }]
      };
    }
    return ensureServiceIsRunning().build(options);
  };`
  module._compile(source.replace(needle, replacement), filename)
}
