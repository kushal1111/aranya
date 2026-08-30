import type { Metadata } from "next"
import { HOME_DESCRIPTION, HOME_TITLE, ORG_NAME, SITE_URL, absoluteUrl } from "@/lib/site"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  index?: boolean
  follow?: boolean
  /** When true, `title` is used as-is and the root template is not applied. */
  absoluteTitle?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const displayTitle = absoluteTitle ? title : `${title} | ${ORG_NAME}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    authors: [{ name: ORG_NAME }],
    creator: ORG_NAME,
    publisher: ORG_NAME,
    alternates: {
      canonical,
    },
    robots: {
      index,
      follow,
    },
    openGraph: {
      title: displayTitle,
      description,
      url: canonical,
      siteName: ORG_NAME,
      locale: "en",
      type: "website",
      images: [
        {
          url: absoluteUrl("/icon.png"),
          width: 512,
          height: 512,
          alt: ORG_NAME,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: displayTitle,
      description,
      images: [absoluteUrl("/icon.png")],
    },
  }
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${ORG_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: ORG_NAME,
  authors: [{ name: ORG_NAME }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: ORG_NAME,
    locale: "en",
    type: "website",
    images: [
      {
        url: absoluteUrl("/icon.png"),
        width: 512,
        height: 512,
        alt: ORG_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [absoluteUrl("/icon.png")],
  },
  verification: {
    other: {
      "msvalidate.01": "A2C246C009BBC5731C94F1CCEAC3043F",
    },
  },
}
