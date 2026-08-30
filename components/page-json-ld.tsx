import { JsonLdScript } from "@/components/json-ld"
import {
  breadcrumbJsonLd,
  type BreadcrumbItem,
  webPageJsonLd,
} from "@/lib/jsonld"

type PageJsonLdProps = {
  path: string
  name: string
  description: string
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"
  breadcrumbs?: BreadcrumbItem[]
}

export function PageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
  breadcrumbs,
}: PageJsonLdProps) {
  return (
    <>
      <JsonLdScript data={webPageJsonLd({ path, name, description, type })} />
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <JsonLdScript data={breadcrumbJsonLd(breadcrumbs)} />
      ) : null}
    </>
  )
}
