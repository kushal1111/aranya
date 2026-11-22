export type Publication = {
  slug: string
  title: string
  /** Shorter title for browser/SEO when the full title exceeds ~60 characters with the brand suffix. */
  seoTitle?: string
  description: string
  pdfPath: string
  path: string
}

export const publications: Publication[] = [
  {
    slug: "just-energy-transition-toolkit",
    title: "Just Energy Transition Toolkit",
    description:
      "Resource toolkit on just energy transition frameworks and practical guidance.",
    pdfPath: "/docs/01%20Just%20energy%20transition%20toolkit-2.pdf",
    path: "/activities/publications/just-energy-transition-toolkit",
  },
  {
    slug: "feminist-just-energy-transition",
    title: "Advocacy Paper: Feminist Just Energy Transition",
    seoTitle: "Feminist Just Energy Transition",
    description:
      "Advocacy paper focused on feminist perspectives in a just energy transition.",
    pdfPath: "/docs/Feminist%20Just%20Energy%20Transition%20in%20Nepal_Paper.pdf",
    path: "/activities/publications/feminist-just-energy-transition",
  },
  {
    slug: "green-jobs-skills-development-toolkit",
    title: "Green Jobs and Skills Development Toolkit",
    seoTitle: "Green Jobs and Skills Toolkit",
    description:
      "Nepali-language guide to green skills, jobs and enterprise in Nepal across 11 sectors, from agriculture and forestry to renewable energy, waste management, green construction and electric vehicles.",
    pdfPath: "/docs/Green%20Jobs%20and%20Skills%20Development%20Toolkit.pdf",
    path: "/activities/publications/green-jobs-skills-development-toolkit",
  },
]

export function getPublication(slug: string): Publication | undefined {
  return publications.find((item) => item.slug === slug)
}
