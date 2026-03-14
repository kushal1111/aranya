import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowLeft, ArrowRight, Megaphone } from "lucide-react"

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
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <Card className="text-center border-blue-100">
            <CardHeader>
              <Megaphone className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <CardTitle>Campaigns Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-3">
              <p>
                We are currently preparing our next set of public campaigns focused on climate awareness, rights, and
                equitable transition.
              </p>
              <p>
                Please stay connected for updates, participation opportunities, and campaign announcements.
              </p>
              <div className="pt-2">
                <Link href="/volunteer" className="text-blue-700 font-medium hover:underline">
                  Express interest in upcoming campaigns
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
