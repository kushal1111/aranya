import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  LOGO_URL,
  ORG_ADDRESS,
  ORG_DESCRIPTION,
  ORG_NAME,
  ORG_SHORT,
  ORG_TAGLINE,
  ORGANIZATION_ID,
  SITE_EMAIL,
  SITE_URL,
  THEMATIC_AREAS,
  WEBSITE_ID,
  absoluteUrl,
} from "@/lib/site"
import type { Publication } from "@/lib/publications"

export type JsonLd = Record<string, unknown>

export function organizationJsonLd(): JsonLd {
  return {
    "@type": "NGO",
    "@id": ORGANIZATION_ID,
    name: ORG_NAME,
    alternateName: [ORG_SHORT, ORG_TAGLINE],
    slogan: ORG_TAGLINE,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    description: ORG_DESCRIPTION,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG_ADDRESS.streetAddress,
      addressLocality: ORG_ADDRESS.addressLocality,
      addressCountry: ORG_ADDRESS.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: ORG_ADDRESS.addressCountryName,
    },
    knowsAbout: THEMATIC_AREAS.map((area) => `${area.abbr}: ${area.title}`),
  }
}

export function websiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: ORG_NAME,
    description: HOME_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  }
}

export function siteGraphJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  }
}

type WebPageInput = {
  path: string
  name: string
  description: string
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"
}

export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
}: WebPageInput): JsonLd {
  const url = absoluteUrl(path)
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  }
}

export type BreadcrumbItem = {
  name: string
  path: string
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function reportJsonLd(publication: Publication): JsonLd {
  const pageUrl = absoluteUrl(publication.path)
  const pdfUrl = `${SITE_URL}${publication.pdfPath}`
  return {
    "@context": "https://schema.org",
    "@type": "Report",
    "@id": `${pageUrl}#report`,
    name: publication.title,
    headline: publication.title,
    description: publication.description,
    url: pageUrl,
    encodingFormat: "application/pdf",
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: pdfUrl,
      encodingFormat: "application/pdf",
    },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
  }
}

export function homeWebPageJsonLd(): JsonLd {
  return webPageJsonLd({
    path: "/",
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
    type: "WebPage",
  })
}
