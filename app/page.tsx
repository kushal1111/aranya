import Link from "next/link"
import Documents from "@/components/ui/documents"
import Hero from "@/components/ui/hero"
import { JsonLdScript } from "@/components/json-ld"
import SiteShell from "@/components/site-shell"
import { homeWebPageJsonLd } from "@/lib/jsonld"
import { createPageMetadata } from "@/lib/seo"
import {
  DONATION_MAILTO,
  HOME_DESCRIPTION,
  HOME_TITLE,
  ORG_MISSION,
  ORG_SHORT,
  ORG_VISION,
  THEMATIC_AREAS,
} from "@/lib/site"
import { FolderOpen, BookOpen, CalendarDays, ArrowRight, Scale, HeartHandshake, Leaf, ShieldAlert, Equal } from "lucide-react"

export const metadata = createPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
})

const thematicIcons = {
  democracy: Scale,
  "human-rights": HeartHandshake,
  "jet-crc": Leaf,
  disaster: ShieldAlert,
  inequalities: Equal,
} as const

const thematicStyles = {
  democracy: { color: "text-[#0B3D35]", bg: "bg-[#F1F6F7]", border: "border-l-[#0B3D35]" },
  "human-rights": { color: "text-[#123B5D]", bg: "bg-[#eef3f7]", border: "border-l-[#123B5D]" },
  "jet-crc": { color: "text-[#2F80A8]", bg: "bg-[#E8F4F8]", border: "border-l-[#2F80A8]" },
  disaster: { color: "text-[#b8892e]", bg: "bg-[#f8f1e3]", border: "border-l-[#D8A84E]" },
  inequalities: { color: "text-[#0B3D35]", bg: "bg-[#F1F6F7]", border: "border-l-[#A7D46F]" },
} as const

export default function HomePage() {
  return (
    <SiteShell active="home">
      <JsonLdScript data={homeWebPageJsonLd()} />
      <Hero />

      <section id="about" aria-labelledby="about-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Who We Are</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2
                id="about-heading"
                className="font-heading text-4xl md:text-5xl font-bold text-[#0B3D35] mb-6 leading-tight"
              >
                About {ORG_SHORT}
              </h2>
              <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
            </div>
            <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-[#0B3D35] mb-2">Vision</h3>
                <p>{ORG_VISION}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B3D35] mb-2">Mission</h3>
                <p>{ORG_MISSION}</p>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B3D35] mb-6">
            Our Thematic Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {THEMATIC_AREAS.map((area) => {
              const Icon = thematicIcons[area.id]
              const styles = thematicStyles[area.id]
              const focusAreas = "focusAreas" in area ? area.focusAreas : undefined

              return (
                <article
                  key={area.id}
                  className={`border-l-4 ${styles.border} ${styles.bg} p-6 rounded-r-lg hover:shadow-md transition-shadow duration-200 ${
                    focusAreas ? "md:col-span-2" : ""
                  }`}
                >
                  <Icon className={`h-8 w-8 ${styles.color} mb-4`} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#0B3D35] mb-3">{area.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{area.description}</p>

                  {focusAreas ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                      {focusAreas.map((focus) => (
                        <div
                          key={focus.abbr}
                          className="rounded-lg bg-white/70 border border-white/80 p-4"
                        >
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                            {focus.abbr}
                          </div>
                          <h4 className="text-base font-bold text-[#0B3D35] mb-2">{focus.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{focus.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <Link
                    href={area.href}
                    className="text-sm font-semibold text-[#0B3D35] hover:text-[#164f45]"
                  >
                    {area.linkLabel}
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="activities-heading" className="py-20 bg-[#F1F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2F80A8] mb-3">What We Do</p>
            <h2 id="activities-heading" className="text-4xl md:text-5xl font-bold text-[#0B3D35] mb-4">
              Our Activities
            </h2>
            <div className="w-12 h-1 bg-[#2F80A8] mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore {ORG_SHORT} projects, publications, and events that support advocacy, research, and
              accountability across communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "/activities/projects",
                icon: FolderOpen,
                iconColor: "text-[#0B3D35]",
                iconBg: "bg-[#e4efe9]",
                label: "Projects",
                desc: "On-ground initiatives, including just energy transition advocacy with communities.",
              },
              {
                href: "/activities/publications",
                icon: BookOpen,
                iconColor: "text-[#D8A84E]",
                iconBg: "bg-[#f8f1e3]",
                label: "Publications",
                desc: "Research, reports, and practical resources on just energy transition.",
              },
              {
                href: "/activities/events",
                icon: CalendarDays,
                iconColor: "text-[#2F80A8]",
                iconBg: "bg-[#E8F4F8]",
                label: "Events",
                desc: "Workshops, forums, and field events. Upcoming listings are added when confirmed.",
              },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="group block">
                <div className="bg-white rounded-lg p-6 h-full border border-gray-200 hover:border-[#2F80A8] hover:shadow-md transition-all duration-200">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-lg ${item.iconBg} mb-5`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3D35] mb-2 group-hover:text-[#164f45] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3D35] uppercase tracking-wide">
                    View {item.label} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D35] hover:text-[#164f45] uppercase tracking-wide transition-colors"
            >
              View all activities <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="get-involved" aria-labelledby="get-involved-heading" className="py-20 bg-[#123B5D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Take Action</p>
              <h2
                id="get-involved-heading"
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Get Involved
              </h2>
              <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
              <p className="text-white/70 text-lg leading-relaxed">
                Volunteer with {ORG_SHORT}, send a donation enquiry by email, or read organizational documents. There
                is currently no online payment form on this website.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#A7D46F] hover:bg-[#96c45f] text-[#0B3D35] font-semibold transition-all duration-200 w-full sm:w-auto"
              >
                Become a Volunteer
              </Link>
              <Link
                href={DONATION_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#2F80A8] hover:bg-[#276d8f] text-white font-semibold transition-all duration-200 w-full sm:w-auto"
              >
                Donation Enquiry
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-6">Organizational Documents</p>
            <Documents />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
