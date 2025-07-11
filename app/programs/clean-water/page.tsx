import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Users, ArrowLeft, MapPin, Calendar, Filter, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CleanWaterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Aaranya</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Impact
            </Link>
            <Link href="/programs" className="text-sm font-medium text-green-600">
              Programs
            </Link>
            <Link href="/#get-involved" className="text-sm font-medium hover:text-green-600 transition-colors">
              Get Involved
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Donate Now</Button>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-green-600">
              Programs
            </Link>
            <span>/</span>
            <span className="text-gray-900">Clean Water Access</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Programs
                </Link>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Clean Water Access
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  Providing <span className="text-blue-600">Clean Water</span> for All
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Our clean water program focuses on providing sustainable water solutions, protecting water resources,
                  and ensuring access to safe drinking water in vulnerable communities worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Volunteer With Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Clean water access and water well construction"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Program Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our clean water initiatives are transforming lives and communities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-600">25,000+</CardTitle>
                <CardDescription>People with Clean Water Access</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Filter className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-600">150</CardTitle>
                <CardDescription>Water Filtration Systems Installed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-600">75</CardTitle>
                <CardDescription>Wells Constructed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-600">500+</CardTitle>
                <CardDescription>Local Technicians Trained</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions We Provide */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Water Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We implement diverse water solutions tailored to each community's specific needs and challenges.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-gray-900">Well Construction</CardTitle>
                <CardDescription>
                  Building sustainable water wells with proper infrastructure to provide long-term access to groundwater
                  in rural and remote communities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Filter className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-gray-900">Water Filtration</CardTitle>
                <CardDescription>
                  Installing advanced filtration systems that remove contaminants and provide safe drinking water from
                  existing water sources.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-gray-900">Rainwater Harvesting</CardTitle>
                <CardDescription>
                  Implementing rainwater collection and storage systems to maximize water availability during dry
                  seasons and reduce dependency on external sources.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Current Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our active clean water projects bringing safe water to communities in need.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Rural water well project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-blue-100 text-blue-800">Active</Badge>
                <CardTitle className="text-gray-900">Rural Wells Initiative</CardTitle>
                <CardDescription>
                  Constructing 50 new water wells in rural communities across East Africa to provide reliable water
                  access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Kenya, Tanzania, Uganda
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2024
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    15,000 people served
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Water filtration system installation"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-blue-100 text-blue-800">Active</Badge>
                <CardTitle className="text-gray-900">School Water Program</CardTitle>
                <CardDescription>
                  Installing water filtration systems in schools to ensure students have access to clean drinking water.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    India, Bangladesh
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2025
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    8,000 students served
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Rainwater harvesting project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Planning</Badge>
                <CardTitle className="text-gray-900">Rainwater Harvesting</CardTitle>
                <CardDescription>
                  Implementing rainwater collection systems in drought-prone regions to improve water security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Australia, Chile
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024 - 2026
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Target: 5,000 people
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Help Bring Clean Water to Communities
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Clean water is a basic human right. Join us in our mission to ensure everyone has access to safe, clean
              drinking water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Volunteer for Water Projects
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Fund a Water Well
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">Aaranya</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Building a sustainable future through climate action and environmental conservation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/programs/reforestation" className="hover:text-green-400 transition-colors">
                    Reforestation
                  </Link>
                </li>
                <li>
                  <Link href="/programs/clean-water" className="hover:text-green-400 transition-colors">
                    Clean Water
                  </Link>
                </li>
                <li>
                  <Link href="/programs/climate-education" className="hover:text-green-400 transition-colors">
                    Climate Education
                  </Link>
                </li>
                <li>
                  <Link href="/programs/renewable-energy" className="hover:text-green-400 transition-colors">
                    Renewable Energy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/#get-involved" className="hover:text-green-400 transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/#get-involved" className="hover:text-green-400 transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-green-400 transition-colors">
                    Partner with Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@aaranya.org</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  123 Green Street
                  <br />
                  Eco City, EC 12345
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Aaranya. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
