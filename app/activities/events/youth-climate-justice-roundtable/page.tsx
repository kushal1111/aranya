import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import panelPhoto from "@/app/images/events/youth-climate-justice/roundtable-panel.jpg"
import circlePhoto from "@/app/images/events/youth-climate-justice/roundtable-circle.jpg"
import { ArrowLeft, CalendarDays, MapPin, Mountain, Quote, Users } from "lucide-react"

const description =
  "ARANYA Initiatives joined young climate advocates from Nepal, Türkiye, Bangladesh, Germany, and beyond at the Global Youth Roundtable on Climate Justice during COP31."

export const metadata = createPageMetadata({
  title: "Bringing Young People Together for Climate Justice",
  description,
  path: "/activities/events/youth-climate-justice-roundtable",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Events", path: "/activities/events" },
  {
    name: "Climate Justice Roundtable",
    path: "/activities/events/youth-climate-justice-roundtable",
  },
]

const partners = [
  "NCID",
  "All In Foundation",
  "World Youth for Climate Justice",
  "Nepal Climate Centre",
  "and others",
]

const countries = ["Nepal", "Türkiye", "Bangladesh", "Germany", "and more"]

export default function YouthClimateJusticeRoundtablePage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/events/youth-climate-justice-roundtable"
        name={`Bringing Young People Together for Climate Justice | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Events</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            Bringing Young People Together for Climate Justice
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
              <Users className="h-4 w-4 text-[#D8A84E]" aria-hidden="true" />
              COP31
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
              <MapPin className="h-4 w-4 text-[#D8A84E]" aria-hidden="true" />
              Nepal Pavilion, Antalya, Türkiye
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
              <CalendarDays className="h-4 w-4 text-[#D8A84E]" aria-hidden="true" />
              November 2026
            </span>
          </div>
          <p className="text-lg text-white/75 max-w-4xl leading-relaxed">
            {ORG_SHORT} partnered with youth organisations to bring young climate advocates together at the Global
            Youth Roundtable on Climate Justice, connecting local mountain challenges with the global call for climate
            justice.
          </p>
          <div className="mt-8">
            <Link href="/activities/events">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="relative w-full h-[260px] sm:h-[420px] md:h-[520px] rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={panelPhoto}
              alt="Young climate advocates seated in front of the Nepal Pavilion screen announcing the Global Youth Climate Justice Roundtable at COP31"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
              priority
            />
          </div>

          <div className="max-w-3xl space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              Climate change affects everyone, and tackling it requires us to work together. At the Global Youth
              Roundtable on Climate Justice during COP31, {ORG_NAME} partnered with organisations including NCID, All
              In Foundation, World Youth for Climate Justice, Nepal Climate Centre, and others to bring together young
              climate advocates from Nepal, Türkiye, Bangladesh, Germany, and several other countries.
            </p>
            <p>
              The roundtable gave young people a chance to share their experiences, discuss common challenges, and
              learn from each other. One of the key discussions focused on the Bhote Koshi flash flood in Nepal and its
              impact on mountain communities. The discussion helped connect Nepal’s local climate challenges with the
              wider global conversation on climate change and justice.
            </p>
            <p>
              The meeting showed how young people from different countries can work together to raise awareness, share
              knowledge, and call for action. By building connections and supporting each other’s efforts, youth can
              bring local issues to the global stage and make their voices stronger.
            </p>
            <p>
              Climate justice cannot be achieved by working alone. It needs solidarity, cooperation, and collective
              action. When young people come together, they can help build a future where every community is heard and
              no one is left behind.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Partners</h2>
                <ul className="flex flex-wrap gap-2">
                  {partners.map((partner) => (
                    <li
                      key={partner}
                      className="rounded-full bg-[#e4efe9] px-3 py-1.5 text-sm font-medium text-[#0B3D35]"
                    >
                      {partner}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Countries represented</h2>
                <ul className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <li
                      key={country}
                      className="rounded-full bg-[#E8F4F8] px-3 py-1.5 text-sm font-medium text-[#276d8f]"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-[#D8A84E]/40 bg-[#f8f1e3]">
            <CardContent className="p-6 sm:p-8 flex gap-4">
              <Mountain className="h-8 w-8 shrink-0 text-[#0B3D35]" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Bhote Koshi flash flood</h2>
                <p className="text-gray-700 leading-relaxed">
                  A key discussion focused on the Bhote Koshi flash flood in Nepal and its impact on mountain
                  communities, linking a local disaster to the wider global conversation on climate change and justice.
                </p>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">From the roundtable</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <figure className="space-y-3">
                <div className="relative w-full h-[240px] sm:h-[300px] rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={panelPhoto}
                    alt="Panel discussion at the Nepal Pavilion during the Global Youth Climate Justice Roundtable"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="text-sm text-gray-600 leading-relaxed">
                  Advocates speak at the Nepal Pavilion, with the Himalayan range and the roundtable programme on
                  screen.
                </figcaption>
              </figure>
              <figure className="space-y-3">
                <div className="relative w-full h-[240px] sm:h-[300px] rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={circlePhoto}
                    alt="Young people seated in a circle at the Health Pavilion during the climate justice roundtable"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="text-sm text-gray-600 leading-relaxed">
                  Participants sit in a circle at the Health Pavilion, sharing experiences from mountain communities.
                </figcaption>
              </figure>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#D8A84E] bg-white rounded-r-lg px-6 py-5 sm:px-8">
            <Quote className="h-6 w-6 text-[#D8A84E] mb-3" aria-hidden="true" />
            <p className="text-xl sm:text-2xl font-semibold text-[#0B3D35] leading-snug">
              Climate justice cannot be achieved by working alone.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              It needs solidarity, cooperation, and collective action, so that every community is heard and no one is
              left behind.
            </p>
          </blockquote>
        </div>
      </section>
    </SiteShell>
  )
}
