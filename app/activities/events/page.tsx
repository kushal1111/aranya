import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import roundtablePhoto from "@/app/images/events/youth-climate-justice/roundtable-panel.jpg"
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react"

const description =
  "Events hosted and joined by ARANYA Initiatives, including the Global Youth Roundtable on Climate Justice at COP31."

export const metadata = createPageMetadata({
  title: "Events",
  description,
  path: "/activities/events",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Events", path: "/activities/events" },
]

const events = [
  {
    title: "Bringing Young People Together for Climate Justice",
    date: "November 2026",
    location: "Nepal Pavilion, COP31, Antalya, Türkiye",
    excerpt:
      "Young climate advocates from Nepal, Türkiye, Bangladesh, Germany, and beyond shared experiences and connected the Bhote Koshi flash flood with the global climate justice conversation.",
    href: "/activities/events/youth-climate-justice-roundtable",
    image: roundtablePhoto,
    imageAlt: "Global Youth Climate Justice Roundtable at the Nepal Pavilion during COP31",
  },
]

export default function EventsPage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/events"
        name={`Events | ${ORG_NAME}`}
        description={description}
        type="CollectionPage"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Activities</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            <CalendarDays className="h-9 w-9 text-[#D8A84E]" aria-hidden="true" />
            Events
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            {ORG_SHORT} events connect young people, experts, and communities through roundtables, workshops, and public
            conversations on climate justice and local action.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          {events.map((event) => (
            <Card key={event.href} className="border border-gray-200 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative h-52 md:h-full min-h-[200px]">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-[#0B3D35]" aria-hidden="true" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#0B3D35]" aria-hidden="true" />
                        {event.location}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{event.excerpt}</p>
                    <Link
                      href={event.href}
                      className="inline-flex items-center text-sm font-semibold text-[#0B3D35] hover:text-[#164f45]"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
