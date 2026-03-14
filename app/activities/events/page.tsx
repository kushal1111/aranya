import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowLeft, CalendarDays } from "lucide-react"

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
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <Card className="text-center border-purple-100">
            <CardHeader>
              <CalendarDays className="h-10 w-10 text-purple-600 mx-auto mb-2" />
              <CardTitle>Events Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-3">
              <p>
                We are currently preparing our next round of workshops, consultations, and community events.
              </p>
              <p>
                Please stay connected through our contact channels for announcements and participation opportunities.
              </p>
              <div className="pt-2">
                <Link href="/volunteer" className="text-purple-700 font-medium hover:underline">
                  Express interest in upcoming events
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
