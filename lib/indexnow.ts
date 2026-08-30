/**
 * IndexNow (Bing / Yandex / others) — notify search engines of URL updates.
 * Spec: https://www.bing.com/indexnow/getstarted#implementation
 * Docs: https://www.indexnow.org/documentation
 *
 * Key file must stay at: /{INDEXNOW_KEY}.txt (see public/)
 * Run after deploy: pnpm indexnow
 */

export const INDEXNOW_KEY = "53144be4c66d061a3e66488e1cca45c3" as const

export const INDEXNOW_KEY_PATH = `/${INDEXNOW_KEY}.txt` as const
