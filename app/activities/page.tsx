import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME } from "@/lib/site"
import { ArrowRight, FolderOpen, BookOpen, CalendarDays } from "lucide-react"

const description =
  "Explore ARANYA Initiatives projects, publications and events supporting climate resilience, community adaptation and just energy transition."

export const metadata = createPageMetadata({
  title: "Activities",
  description,
  path: "/activities",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
]

const activities = [
  {
    title: "Projects",
    href: "/activities/projects",
    description: "On-ground initiatives, including just energy transition advocacy with communities.",
    icon: FolderOpen,
    color: "text-green-600",
  },
  {
    title: "Publications",
    href: "/activities/publications",
    description: "Reports, insights, and practical resources on just energy transition.",
    icon: BookOpen,
    color: "text-yellow-600",
  },
  {
    title: "Events",
    href: "/activities/events",
    description: "Workshops, forums, and field activities. Listings appear here when confirmed.",
    icon: CalendarDays,
    color: "text-purple-600",
  },
]

export default function ActivitiesPage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities"
        name={`Activities | ${ORG_NAME}`}
        description={description}
        type="CollectionPage"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
           
          >
            Climate Action Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Activities
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Discover how ARANYA creates environmental impact through projects, publications, and events.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon

            return (
              <Link key={activity.href} href={activity.href} className="group">
                <Card className="h-full border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-white shadow-sm border border-gray-100 mb-5">
                      <Icon className={`h-6 w-6 ${activity.color}`} aria-hidden="true" />
                    </div>
                    <h2
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors"
                     
                    >
                      {activity.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{activity.description}</p>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 uppercase tracking-wide"
                     
                    >
                      View {activity.title}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>
    </SiteShell>
  )
}
