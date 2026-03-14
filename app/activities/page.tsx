import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowRight, TreePine, Droplets, Sun, GraduationCap } from "lucide-react"

const activities = [
  {
    title: "Projects",
    href: "/activities/projects",
    description: "Long-term initiatives designed for measurable environmental impact.",
    icon: TreePine,
    color: "text-green-600",
  },
  {
    title: "Campaigns",
    href: "/activities/campaigns",
    description: "Community and public mobilization for climate awareness and action.",
    icon: Droplets,
    color: "text-blue-600",
  },
  {
    title: "Publications",
    href: "/activities/publications",
    description: "Reports, insights, and practical resources to spread knowledge.",
    icon: Sun,
    color: "text-yellow-600",
  },
  {
    title: "Events",
    href: "/activities/events",
    description: "Workshops, forums, and field activities connecting people and ideas.",
    icon: GraduationCap,
    color: "text-purple-600",
  },
]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
            Aaranya
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Our Activities</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how we create environmental impact through projects, campaigns, publications, and events.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon

            return (
              <Link key={activity.href} href={activity.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader className="text-center">
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${activity.color} group-hover:scale-110 transition-transform`} />
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{activity.description}</CardDescription>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View {activity.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
