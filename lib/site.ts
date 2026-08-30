export const SITE_URL = "https://aranyainitiatives.org" as const

export const ORG_NAME = "ARANYA Initiatives" as const
export const ORG_SHORT = "ARANYA" as const
export const ORG_EXPANDED =
  "Action for Resilient Adaptation and Nature-based Energy Alternatives" as const

export const SITE_EMAIL = "aranyainitiatives@gmail.com" as const

export const ORG_ADDRESS = {
  streetAddress: "Suryabinayak-5",
  addressLocality: "Bhaktapur",
  addressCountry: "NP",
  addressCountryName: "Nepal",
} as const

export const ORG_ADDRESS_LINE = "Suryabinayak-5, Bhaktapur, Nepal" as const

export const LOGO_PATH = "/docs/logo.jpg" as const
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}` as const

export const ORGANIZATION_ID = `${SITE_URL}/#organization` as const
export const WEBSITE_ID = `${SITE_URL}/#website` as const

export const HOME_TITLE = "ARANYA Initiatives | Climate-Resilient Communities" as const

export const HOME_DESCRIPTION =
  "ARANYA Initiatives advances equitable climate solutions through carbon-negative strategies, just energy transitions and community resilience." as const

export const ORG_DESCRIPTION =
  "ARANYA Initiatives is a Nepal-based non-governmental, not-for-profit organization advancing equitable climate solutions through carbon-negative strategies, just energy transitions, and nature-based community resilience." as const

export const THEMATIC_AREAS = [
  {
    abbr: "CNN",
    title: "Carbon Net Negative",
    description:
      "Carbon Net Negative (CNN) work develops and promotes strategies that move beyond carbon neutrality towards emission removal through scientific and technological intervention that are community-driven and rooted in nature.",
  },
  {
    abbr: "JET",
    title: "Just Energy Transition",
    description:
      "Just Energy Transition (JET) work supports a fair and inclusive shift from fossil fuels to renewable energy systems, ensuring that women, Indigenous peoples, and marginalized communities are meaningfully included in decision-making.",
  },
  {
    abbr: "CRC",
    title: "Climate Resilient Communities",
    description:
      "Climate Resilient Communities (CRC) work strengthens local capacities to tackle cross-cutting impacts of climate change by promoting resilience-building measures, knowledge sharing, and nature-based solutions.",
  },
] as const

export const DONATION_MAILTO =
  `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Donation enquiry")}` as const

export const INDEXABLE_PATHS = [
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
] as const

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`
  return `${SITE_URL}${path}`
}
