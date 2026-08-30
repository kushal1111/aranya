export const SITE_URL = "https://aranyainitiatives.org" as const

export const ORG_NAME = "Aranya Initiatives" as const
export const ORG_SHORT = "Aranya" as const
export const ORG_EXPANDED =
  "Aranya Initiatives for Advocacy, Research and Accountability" as const
export const ORG_TAGLINE = ORG_EXPANDED
export const ORG_TAGLINE_SUFFIX = "for Advocacy, Research and Accountability" as const

export const ORG_VISION =
  "We envision a just, inclusive and democratic Nepal where institutions are accountable to its people." as const

export const ORG_MISSION =
  "Our mission is to build a fair and democratic Nepal where justice, equality and dignity are for everyone. Our organization fights for protecting the environment, reducing socio-economic and technological inequalities, and standing up for democracy and human rights." as const

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

export const HOME_TITLE =
  "Aranya Initiatives | Advocacy, Research and Accountability" as const

export const HOME_DESCRIPTION =
  "Aranya Initiatives for Advocacy, Research and Accountability — building a fair and democratic Nepal through democracy and governance, human rights, just energy transition and climate resilience, disaster preparedness, and reducing inequalities." as const

export const ORG_DESCRIPTION =
  "Aranya Initiatives is a Nepal-based organization working for advocacy, research and accountability across democracy and governance, human rights, just energy transition and climate resilient communities, disaster preparedness, and reducing social, economic and digital inequalities." as const

export const THEMATIC_AREAS = [
  {
    id: "democracy",
    title: "Democracy and Governance",
    description:
      "We work to strengthen democratic institutions, civic participation, and accountable governance so that public systems remain responsive to people across Nepal.",
    href: "/activities",
    linkLabel: `See ${ORG_SHORT} activities`,
  },
  {
    id: "human-rights",
    title: "Human Rights and Advocacy",
    description:
      "We stand up for human rights through research, advocacy, and accountability, supporting communities to claim dignity, justice, and equal protection under the law.",
    href: "/activities",
    linkLabel: `See ${ORG_SHORT} activities`,
  },
  {
    id: "jet-crc",
    title: "Just Energy Transition and Climate Resilient Communities",
    description:
      "We advance a fair energy transition and community climate resilience so that women, Indigenous peoples, and marginalized communities shape solutions that protect people and the environment.",
    href: "/activities/projects/jet-toolkit",
    linkLabel: "Read about the JET advocacy workshop",
    focusAreas: [
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
    ],
  },
  {
    id: "disaster",
    title: "Disaster Preparedness and Response",
    description:
      "We support communities to prepare for, respond to, and recover from disasters with approaches that prioritize local knowledge, inclusion, and lasting resilience.",
    href: "/activities",
    linkLabel: `See ${ORG_SHORT} activities`,
  },
  {
    id: "inequalities",
    title: "Reducing Inequalities: Social, Economic and Digital",
    description:
      "We work to reduce socio-economic and technological inequalities so that justice, equality, and dignity are accessible to everyone, including those excluded by digital divides.",
    href: "/activities",
    linkLabel: `See ${ORG_SHORT} activities`,
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
