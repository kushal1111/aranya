import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Documents from "@/components/ui/documents"
import Hero from "@/components/ui/hero"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { FolderOpen, Megaphone, BookOpen, CalendarDays, ArrowRight, Globe, Users, Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div id="main-content" role="main" className="min-h-screen bg-white">

      <SiteHeader active="home" />

      {/* ── Hero ── */}
      <Hero />

      {/* ── About / Mission ── */}
      <section id="about" role="region" aria-labelledby="about-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Who We Are</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                About ARANYA
              </h2>
              <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
            </div>
            <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                The climate crisis is not a singular challenge; it is a complex intersection of environmental
                degradation and systemic inequality. <strong className="text-gray-800">Action for Resilient Adaptation
                and Nature-based Energy Alternatives (ARANYA)</strong> is a non-governmental, not-for-profit
                organization dedicated to advancing sustainable and equitable climate solutions.
              </p>
              <p>
                Our work integrates mitigation, adaptation, and resilience to tackle the intertwined challenges
                of climate change through a holistic and interdisciplinary approach.
              </p>
            </div>
          </div>

          {/* Three thematic areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-l-emerald-500",
                abbr: "CNN",
                title: "Carbon Net Negative",
                desc: "Developing and promoting strategies that move beyond carbon neutrality towards emission removal through scientific and technological intervention that are community-driven and rooted in nature.",
              },
              {
                icon: Users,
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-l-blue-500",
                abbr: "JET",
                title: "Just Energy Transition",
                desc: "Supporting a fair and inclusive shift from fossil fuels to renewable energy systems, ensuring that women, Indigenous peoples, and marginalized communities are meaningfully included in decision-making.",
              },
              {
                icon: Lightbulb,
                color: "text-amber-600",
                bg: "bg-amber-50",
                border: "border-l-amber-500",
                abbr: "CRC",
                title: "Climate Resilient Communities",
                desc: "Strengthening local capacities to tackle cross-cutting impacts of climate change by promoting resilience-building measures, knowledge sharing, and nature-based solutions.",
              },
            ].map((area) => (
              <div
                key={area.abbr}
                className={`border-l-4 ${area.border} ${area.bg} p-6 rounded-r-lg hover:shadow-md transition-shadow duration-200`}
              >
                <area.icon className={`h-8 w-8 ${area.color} mb-4`} />
                <div
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {area.abbr}
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities ── */}
      <section role="region" aria-labelledby="activities-heading" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">What We Do</p>
            <h2
              id="activities-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Our Activities
            </h2>
            <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our key activity areas where we engage communities and drive climate action.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                href: "/activities/projects",
                icon: FolderOpen,
                iconColor: "text-emerald-600",
                iconBg: "bg-emerald-100",
                label: "Projects",
                desc: "Long-term, on-ground initiatives delivering measurable environmental impact.",
              },
              {
                href: "/activities/publications",
                icon: BookOpen,
                iconColor: "text-amber-600",
                iconBg: "bg-amber-100",
                label: "Publications",
                desc: "Research, reports, and practical resources to inform and inspire action.",
              },
              {
                href: "/activities/events",
                icon: CalendarDays,
                iconColor: "text-purple-600",
                iconBg: "bg-purple-100",
                label: "Events",
                desc: "Workshops, forums, and field events that connect people and ideas.",
              },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="group block">
                <div className="bg-white rounded-lg p-6 h-full border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-lg ${item.iconBg} mb-5`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 uppercase tracking-wide transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              View All Activities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Get Involved ── */}
      <section id="get-involved" className="py-20 bg-[#0d2b1e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Take Action</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Get Involved Today
              </h2>
              <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
              <p className="text-white/70 text-lg leading-relaxed">
                Every action counts. Join us — volunteer, donate, or learn more
                about our organization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold transition-all duration-200 w-full sm:w-auto"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Become a Volunteer
              </Link>
              <button
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border border-white/25 hover:border-white/60 text-white/80 hover:text-white font-semibold transition-all duration-200 bg-white/5 hover:bg-white/10 w-full sm:w-auto"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Make a Donation
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-6">Organizational Documents</p>
            <Documents />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
