import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT, SITE_EMAIL } from "@/lib/site"
import { ArrowLeft, Mail } from "lucide-react"

const description =
  "Volunteer with Aranya Initiatives on community outreach, research, communications, and advocacy. Contact the team by email."

export const metadata = createPageMetadata({
  title: "Volunteer With Us",
  description,
  path: "/volunteer",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Volunteer", path: "/volunteer" },
]

export default function VolunteerPage() {
  return (
    <SiteShell>
      <PageJsonLd
        path="/volunteer"
        name={`Volunteer | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Get Involved</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Volunteer With {ORG_SHORT}
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            If you are interested in volunteering, collaborating, or sharing ideas, we would be glad to hear from you.
            Reach out through the contact details below, and the {ORG_SHORT} team will connect with you.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <h2 className="text-3xl text-gray-900">Contact Details</h2>
              <CardDescription>
                Support is welcome in community outreach, field facilitation, research, communications, and advocacy
                initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#0B3D35]" aria-hidden="true" />
                <a href={`mailto:${SITE_EMAIL}`} className="text-[#0B3D35] hover:text-[#164f45]">
                  {SITE_EMAIL}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  )
}
