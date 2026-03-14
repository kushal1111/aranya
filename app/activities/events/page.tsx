import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-purple-50 to-fuchsia-100">
        <div className="container px-4 md:px-6 mx-auto">
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Our events connect experts, volunteers, and communities through workshops, field activities, and public
            conversations on environmental action.
          </p>
          <div className="mt-8">
            <Link href="/activities/publications">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Publications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CalendarDays className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Workshops</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Practical sessions on climate education, sustainable living, and local action planning.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MapPin className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Field Activities</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Plantation drives, cleanup campaigns, and on-site environmental restoration events.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Community Forums</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Open discussions that bring citizens, institutions, and experts together.
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
