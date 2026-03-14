import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowLeft, Mail, Phone } from "lucide-react"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Get Involved
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Volunteer With ARANYA
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            If you are interested in volunteering, collaborating, or sharing ideas, we would be glad to hear from
            you. Reach out through the contact details below, and our team will connect with you.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Contact Details
              </CardTitle>
              <CardDescription>
                We welcome support in community outreach, field facilitation, research, communications, and advocacy
                initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-700" />
                <a href="mailto:aranyainitiatives@gmail.com" className="text-emerald-700 hover:text-emerald-900">
                  aranyainitiatives@gmail.com
                </a>
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-700" />
                <a href="tel:+9779841564743" className="text-emerald-700 hover:text-emerald-900">
                  +977 9841 564743
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
