import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowRight, FolderOpen, Megaphone, BookOpen, CalendarDays } from "lucide-react"

const activities = [
  {
    title: "Projects",
    href: "/activities/projects",
    description: "Long-term initiatives designed for measurable environmental impact.",
    icon: FolderOpen,
    color: "text-green-600",
  },
  {
    title: "Campaigns",
    href: "/activities/campaigns",
    description: "Community and public mobilization for climate awareness and action.",
    icon: Megaphone,
    color: "text-blue-600",
  },
  {
    title: "Publications",
    href: "/activities/publications",
    description: "Reports, insights, and practical resources to spread knowledge.",
    icon: BookOpen,
    color: "text-yellow-600",
  },
  {
    title: "Events",
    href: "/activities/events",
    description: "Workshops, forums, and field activities connecting people and ideas.",
    icon: CalendarDays,
    color: "text-purple-600",
  },
]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="activities" />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Climate Action Areas
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Our Activities
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Discover how we create environmental impact through projects, campaigns, publications, and events.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon

            return (
              <Link key={activity.href} href={activity.href} className="group">
                <Card className="h-full border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-white shadow-sm border border-gray-100 mb-5">
                      <Icon className={`h-6 w-6 ${activity.color}`} />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{activity.description}</p>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 uppercase tracking-wide"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      View {activity.title}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
