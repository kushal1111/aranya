import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowLeft, ArrowRight, Megaphone } from "lucide-react"

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="activities" />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Activities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <Megaphone className="h-9 w-9 text-amber-400" />
            Campaigns
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Our campaigns mobilize people to take immediate climate action through public engagement, awareness drives,
            and grassroots participation.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/activities/projects">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <Link href="/activities/publications">
              <Button className="bg-amber-500 hover:bg-amber-400 text-gray-900">
                Next: Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border border-gray-200 shadow-sm">
            <CardHeader>
              <Megaphone className="h-10 w-10 text-emerald-700 mx-auto mb-2" />
              <CardTitle className="text-3xl text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>Campaigns Coming Soon</CardTitle>
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
                <Link href="/volunteer" className="text-emerald-700 font-semibold hover:text-emerald-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
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
