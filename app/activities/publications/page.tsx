import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { publications } from "@/lib/publications"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import { ArrowLeft, BookOpen } from "lucide-react"

const description =
  "Read ARANYA Initiatives publications on just energy transition, including the JET Toolkit and a feminist advocacy paper."

export const metadata = createPageMetadata({
  title: "Publications",
  description,
  path: "/activities/publications",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Publications", path: "/activities/publications" },
]

export default function PublicationsPage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/publications"
        name={`Publications | ${ORG_NAME}`}
        description={description}
        type="CollectionPage"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Activities</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            <BookOpen className="h-9 w-9 text-[#D8A84E]" aria-hidden="true" />
            Publications
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            {ORG_SHORT} publications share research insights, project learnings, and practical guides to support
            advocacy and actions across communities and partner organizations.
          </p>
          <div className="mt-8">
            <Link href="/activities">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {publications.map((publication) => (
            <Card key={publication.slug} className="border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{publication.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{publication.description}</p>
                <Link
                  href={publication.path}
                  className="inline-flex items-center text-sm font-semibold text-[#0B3D35] hover:text-[#164f45]"
                >
                  Open publication page
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
