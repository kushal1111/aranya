function sharp() {
  const error = new Error("sharp is not included in the Cloudflare worker bundle")
  error.code = "MODULE_NOT_FOUND"
  throw error
}

sharp.default = sharp
module.exports = sharp
