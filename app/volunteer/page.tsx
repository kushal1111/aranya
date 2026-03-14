import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowLeft, Mail, Phone } from "lucide-react"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
            Get Involved
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Volunteer With ARANYA</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            If you are interested in volunteering, collaborating, or sharing ideas, we would be glad to hear from
            you. Reach out through the contact details below, and our team will connect with you.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
              <CardDescription>
                We welcome support in community outreach, field facilitation, research, communications, and advocacy
                initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-600" />
                <a href="mailto:aranyainitiatives@gmail.com" className="text-green-700 hover:underline">
                  aranyainitiatives@gmail.com
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
