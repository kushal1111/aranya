"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import { Leaf, MapPin, Calendar, Images } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Aaranya</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/activities" className="text-gray-700 hover:text-green-600 transition-colors">
                Activities
              </Link>
              <Link href="/gallery" className="text-green-600 font-medium">
                Gallery
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore highlights from ARANYA's Just Energy Transition field work in Bojheni.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-all duration-300 group">
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

            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
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

            <CardContent className="flex items-center justify-between">
              <div className="inline-flex items-center text-sm text-gray-600">
                <Images className="h-4 w-4 mr-2 text-green-600" />4 workshop photos
              </div>
              <Link href={project.href}>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  View Photo Gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Next Project</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Be part of our mission to create positive environmental change. Every project starts with passionate
            individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Volunteer With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
