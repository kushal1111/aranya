/**
 * Submit indexable site URLs to IndexNow (Bing and participating engines).
 * Requires the key file to be live at https://aranyainitiatives.org/{key}.txt
 *
 * Usage: pnpm indexnow
 * Docs: https://www.bing.com/indexnow/getstarted#implementation
 */

import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const SITE_URL = "https://aranyainitiatives.org"
const HOST = "aranyainitiatives.org"
const INDEXNOW_KEY = "53144be4c66d061a3e66488e1cca45c3"
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`
const ENDPOINT = "https://api.indexnow.org/IndexNow"

const INDEXABLE_PATHS = [
  "/",
  "/activities",
  "/activities/projects",
  "/activities/projects/jet-toolkit",
  "/activities/publications",
  "/activities/publications/just-energy-transition-toolkit",
  "/activities/publications/feminist-just-energy-transition",
  "/gallery",
  "/gallery/jet-bojheni",
  "/partners",
  "/volunteer",
  "/contact",
]

function absoluteUrl(path) {
  if (path === "/") return `${SITE_URL}/`
  return `${SITE_URL}${path}`
}

async function ensureKeyIsLive() {
  const res = await fetch(KEY_LOCATION, { method: "GET", redirect: "follow" })
  const body = (await res.text()).trim()
  if (!res.ok) {
    throw new Error(
      `IndexNow key file not reachable (${res.status}) at ${KEY_LOCATION}. Deploy the site first, then re-run pnpm indexnow.`
    )
  }
  if (body !== INDEXNOW_KEY) {
    throw new Error(
      `IndexNow key file content mismatch at ${KEY_LOCATION}. Expected the key string only.`
    )
  }
}

async function submitUrls(urlList) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  })

  return { status: res.status, statusText: res.statusText, body: await res.text() }
}

async function main() {
  const urlList = INDEXABLE_PATHS.map(absoluteUrl)
  console.log(`IndexNow: verifying key at ${KEY_LOCATION}`)
  await ensureKeyIsLive()
  console.log(`IndexNow: submitting ${urlList.length} URLs to ${ENDPOINT}`)
  const result = await submitUrls(urlList)

  // 200 = OK, 202 = Accepted (also success for IndexNow)
  if (result.status === 200 || result.status === 202) {
    console.log(`IndexNow: success (${result.status} ${result.statusText})`)
    console.log("Verify in Bing Webmaster Tools that URLs were received.")
    process.exit(0)
  }

  console.error(`IndexNow: failed (${result.status} ${result.statusText})`)
  if (result.body) console.error(result.body)
  process.exit(1)
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
