import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLdScript } from "@/components/json-ld"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { reportJsonLd } from "@/lib/jsonld"
import { getPublication, publications } from "@/lib/publications"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const publication = getPublication(slug)
  if (!publication) return {}

  return createPageMetadata({
    title: publication.seoTitle ?? publication.title,
    description: publication.description,
    path: publication.path,
  })
}

export default async function PublicationPage({ params }: PageProps) {
  const { slug } = await params
  const publication = getPublication(slug)
  if (!publication) notFound()

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    { name: "Publications", path: "/activities/publications" },
    { name: publication.title, path: publication.path },
  ]

  return (
    <SiteShell active="activities">
      <PageJsonLd
        path={publication.path}
        name={`${publication.title} | ${ORG_NAME}`}
        description={publication.description}
        breadcrumbs={breadcrumbs}
      />
      <JsonLdScript data={reportJsonLd(publication)} />

      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Publication</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{publication.title}</h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 leading-relaxed">{publication.description}</p>
          <p className="mt-4 text-sm text-white/60">Published by {ORG_NAME}.</p>
          <p className="mt-2 text-sm text-white/45">
            Author and publication date are not listed here and will be added when confirmed.
          </p>
          <div className="mt-8">
            <Link href="/activities/publications">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Publications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Full publication</h2>
          <p className="text-gray-600 leading-relaxed">
            Download or open the PDF. Related {ORG_SHORT} work includes the{" "}
            <Link
              href="/activities/projects/jet-toolkit"
              className="text-[#0B3D35] font-semibold hover:text-[#164f45]"
            >
              Just Energy Transition advocacy workshop
            </Link>{" "}
            and other{" "}
            <Link href="/activities/publications" className="text-[#0B3D35] font-semibold hover:text-[#164f45]">
              publications
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={publication.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-[#0B3D35] hover:text-[#164f45]"
            >
              Open {publication.title} PDF
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={publication.pdfPath}
              download
              className="inline-flex items-center text-sm font-semibold text-[#0B3D35] hover:text-[#164f45]"
            >
              Download {publication.title}
              <Download className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
