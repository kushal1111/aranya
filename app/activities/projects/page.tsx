import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, TreePine, Globe, Users } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container px-4 md:px-6 mx-auto">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Our projects focus on long-term climate solutions through ecosystem restoration, sustainable infrastructure,
            and community-led environmental initiatives.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/activities/campaigns">
              <Button className="bg-green-600 hover:bg-green-700">
                Next: Campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <TreePine className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Forest Restoration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Native tree plantation and soil rehabilitation in degraded landscapes.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Climate Resilience</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Local adaptation projects that reduce climate risks for vulnerable communities.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Community Partnerships</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Collaborative project delivery with municipalities, schools, and civil groups.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
