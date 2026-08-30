import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, SITE_EMAIL } from "@/lib/site"
import { ArrowLeft, Users } from "lucide-react"

const description =
  "Team profiles for ARANYA Initiatives will be published here when staff names and biographies are confirmed."

export const metadata = createPageMetadata({
  title: "Our Team",
  description,
  path: "/our-team",
  index: false,
  follow: true,
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Our Team", path: "/our-team" },
]

export default function OurTeamPage() {
  return (
    <SiteShell>
      <PageJsonLd
        path="/our-team"
        name={`Our Team | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
           
          >
            Contact
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3"
           
          >
            <Users className="h-9 w-9 text-amber-400" aria-hidden="true" />
            Our Team
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-4xl">
            Named team profiles are not published on this website yet. Contact ARANYA Initiatives for current staff
            and collaboration enquiries.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <h2 className="text-2xl text-gray-900">
                Profiles forthcoming
              </h2>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                This page will list people working with ARANYA once names, roles, and biographies are confirmed for
                public use.
              </p>
              <p>
                Email{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="text-emerald-700 hover:text-emerald-900">
                  {SITE_EMAIL}
                </a>{" "}
                or visit the{" "}
                <Link href="/contact" className="text-emerald-700 font-semibold hover:text-emerald-900">
                  contact page
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  )
}
