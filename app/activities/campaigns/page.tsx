import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowLeft, ArrowRight, Megaphone, Users, Target } from "lucide-react"

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container px-4 md:px-6 mx-auto">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Campaigns</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Our campaigns mobilize people to take immediate climate action through public engagement, awareness drives,
            and grassroots participation.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/activities/projects">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <Link href="/activities/publications">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Next: Publications
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
              <Megaphone className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Public Awareness</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              City-wide and digital campaigns that promote climate-friendly choices.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Volunteer Mobilization</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Coordinated community action for cleanups, plantations, and outreach.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Policy Advocacy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Issue-based campaigns supporting stronger environmental commitments.
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
