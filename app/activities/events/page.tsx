import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME } from "@/lib/site"
import { ArrowLeft, CalendarDays } from "lucide-react"

const description =
  "ARANYA Initiatives event listings will appear here when workshops, consultations, or public conversations are confirmed."

export const metadata = createPageMetadata({
  title: "Upcoming Events",
  description,
  path: "/activities/events",
  index: false,
  follow: true,
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Events", path: "/activities/events" },
]

export default function EventsPage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/events"
        name={`Events | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
           
          >
            Activities
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3"
           
          >
            <CalendarDays className="h-9 w-9 text-amber-400" aria-hidden="true" />
            Events
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            ARANYA events connect experts, volunteers, and communities through workshops, field activities, and public
            conversations. No upcoming events are listed at this time.
          </p>
          <div className="mt-8">
            <Link href="/activities">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border border-gray-200 shadow-sm">
            <CardHeader>
              <CalendarDays className="h-10 w-10 text-emerald-700 mx-auto mb-2" aria-hidden="true" />
              <h2 className="text-3xl text-gray-900">
                No events listed yet
              </h2>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-3">
              <p>Confirmed workshops, consultations, and community events will be published on this page.</p>
              <p>Use the volunteer contact details to express interest in future participation.</p>
              <div className="pt-2">
                <Link
                  href="/volunteer"
                  className="text-emerald-700 font-semibold hover:text-emerald-900"
                 
                >
                  Express interest in upcoming events
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  )
}
