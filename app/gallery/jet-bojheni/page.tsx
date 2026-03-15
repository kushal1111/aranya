"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import bojheniPhoto1 from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.34 PM.jpeg"
import bojheniPhoto2 from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.35 PM.jpeg"
import bojheniPhoto3 from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.35 PM (1).jpeg"
import bojheniPhoto4 from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.35 PM (2).jpeg"

const workshopPhotos = [
  {
    src: bojheniPhoto1,
    caption: "Community dialogue on inclusive energy transition.",
  },
  {
    src: bojheniPhoto2,
    caption: "Rights mapping with local participants and facilitators.",
  },
  {
    src: bojheniPhoto3,
    caption: "Session on RTI, environmental safeguards, and FPIC.",
  },
  {
    src: bojheniPhoto4,
    caption: "Action planning for complaints, media use, and advocacy.",
  },
]

export default function JetBojheniGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="gallery" />

      <section className="py-16 sm:py-20 bg-[#0d2b1e] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/gallery">
            <Button variant="outline" className="mb-6 border-white/30 text-white hover:bg-white/10 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>

          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Just Energy Transition</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Just Energy Transition Advocacy Workshop
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-6">
            <span className="inline-flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Bojheni, Nepal
            </span>
            <span className="inline-flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              2026
            </span>
          </div>

          <p className="text-lg text-white/75 max-w-4xl leading-relaxed">
            This workshop is part of ARANYA&apos;s Just Energy Transition (JET) program. It helps communities
            understand rights frameworks, map socio-economic and land concerns, and engage decision-making processes
            so renewable energy development remains equitable, transparent, and accountable.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workshopPhotos.map((photo, idx) => (
            <figure key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <Image
                src={photo.src}
                alt={`JET Bojheni workshop photo ${idx + 1}`}
                width={1200}
                height={900}
                className="w-full h-72 object-cover"
              />
              <figcaption className="p-4 text-sm text-gray-600">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
