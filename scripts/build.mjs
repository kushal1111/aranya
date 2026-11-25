import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const env = { ...process.env };

if (process.platform === "win32") {
  const preload = path
    .join(path.dirname(fileURLToPath(import.meta.url)), "windows-symlink-fallback.cjs")
    .replaceAll("\\", "/");
  env.NODE_OPTIONS = [env.NODE_OPTIONS, `--require ${preload}`].filter(Boolean).join(" ");
}

if (env.OPENNEXT_INTERNAL_BUILD === "1") {
  execSync("next build", { stdio: "inherit", env, shell: true });
} else {
  execSync("opennextjs-cloudflare build", {
    stdio: "inherit",
    env: { ...env, OPENNEXT_INTERNAL_BUILD: "1" },
    shell: true,
  });
}
