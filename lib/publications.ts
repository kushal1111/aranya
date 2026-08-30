export type Publication = {
  slug: string
  title: string
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
    description:
      "Advocacy paper focused on feminist perspectives in a just energy transition.",
    pdfPath: "/docs/Feminist%20Just%20Energy%20Transition%20in%20Nepal_Paper.pdf",
    path: "/activities/publications/feminist-just-energy-transition",
  },
]

export function getPublication(slug: string): Publication | undefined {
  return publications.find((item) => item.slug === slug)
}
