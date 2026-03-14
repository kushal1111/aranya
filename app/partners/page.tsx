import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { Handshake, Mail } from "lucide-react"
import partner1 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.45 PM.jpeg"
import partner2 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.46 PM.jpeg"
import partner3 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.46 PM (1).jpeg"
import partner4 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.46 PM (2).jpeg"
import partner5 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.47 PM.jpeg"
import partner6 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.47 PM (1).jpeg"
import partner7 from "@/app/images/partners/WhatsApp Image 2026-03-14 at 7.49.47 PM (2).jpeg"

const partners = [
  {
    name: "Clean Energy Nepal",
    image: partner1,
  },
  {
    name: "Focus For Indigenous Girls",
    image: partner2,
  },
  {
    name: "Digo Bikash Institute",
    image: partner3,
  },
  {
    name: "Women of the South Speakout",
    image: partner4,
  },
  {
    name: "Harin Nepal",
    image: partner5,
  },
  {
    name: "Nepal Center for Integrated Development",
    image: partner6,
  },
  {
    name: "Bighnaharta Nepal",
    image: partner7,
  },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Collaboration Network
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Handshake className="h-9 w-9 text-amber-400" />
            Our Partners
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            We work with like-minded institutions and grassroots actors to advance equitable climate action, community
            resilience, and a just energy transition.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card
                key={partner.name}
                className="border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="relative h-40 w-full overflow-hidden rounded-md bg-white border border-gray-100">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h2
                    className="mt-4 text-lg font-bold text-gray-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {partner.name}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Become a Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            If your organization shares our commitment to climate justice and nature-based resilience, we would love to
            collaborate.
          </p>
          <Link
            href="mailto:aranyainitiatives@gmail.com"
            className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-amber-400 transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Mail className="h-4 w-4" />
            Contact for Partnership
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
