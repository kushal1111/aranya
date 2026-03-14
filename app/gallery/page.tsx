"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { MapPin, Calendar, Images } from "lucide-react"
import bojheniPhoto1 from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.34 PM.jpeg"
const project = {
  title: "Just Energy Transition Consultation Workshop",
  location: "Bojheni, Nepal",
  date: "2026",
  image: bojheniPhoto1,
  href: "/gallery/jet-bojheni",
  description:
    "ARANYA's JET program supports a fair and inclusive renewable energy transition by helping communities understand rights, map risks, and engage decision-making processes.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="gallery" />

      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Visual Stories
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Project Gallery
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Explore highlights from ARANYA's Just Energy Transition field work in Bojheni.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="max-w-4xl mx-auto overflow-hidden border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200 group">
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={420}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-emerald-100 text-emerald-800">Just Energy Transition</Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-2xl md:text-3xl text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {project.title}
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
                </div>
              </div>
              <CardDescription className="text-gray-600">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="inline-flex items-center text-sm text-gray-600">
                <Images className="h-4 w-4 mr-2 text-emerald-700" />4 workshop photos
              </div>
              <Link href={project.href}>
                <Button size="sm" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 bg-transparent">
                  View Photo Gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0d2b1e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Join Our Next Project
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/75">
            Be part of our mission to create positive environmental change. Every project starts with passionate
            individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-gray-900">
              Volunteer With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Support Our Work
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
