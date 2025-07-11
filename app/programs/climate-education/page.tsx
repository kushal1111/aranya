import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, GraduationCap, Users, BookOpen, ArrowLeft, MapPin, Calendar, School, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClimateEducationPage() {
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
            <span className="text-gray-900">Climate Education</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Programs
                </Link>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  Climate Education
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  Empowering Through <span className="text-purple-600">Education</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Our climate education program focuses on raising awareness about climate change impacts, empowering
                  communities with knowledge, and promoting sustainable living practices for a better future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Become an Educator
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Climate education and community workshops"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Educational Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our climate education initiatives are creating awareness and driving behavioral change.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-600">100,000+</CardTitle>
                <CardDescription>Students Educated</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <School className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-600">500+</CardTitle>
                <CardDescription>Schools Reached</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-600">1,200</CardTitle>
                <CardDescription>Workshops Conducted</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-600">300+</CardTitle>
                <CardDescription>Trained Educators</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Educational Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer diverse educational programs tailored to different age groups and communities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <School className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-gray-900">School Programs</CardTitle>
                <CardDescription>
                  Interactive curriculum and workshops for students from elementary to high school, covering climate
                  science, environmental protection, and sustainable practices.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-gray-900">Community Workshops</CardTitle>
                <CardDescription>
                  Local community education sessions focusing on practical climate adaptation strategies, sustainable
                  living, and environmental conservation techniques.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-gray-900">Online Learning</CardTitle>
                <CardDescription>
                  Digital courses and resources accessible globally, providing climate education to remote communities
                  and individuals worldwide.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Current Educational Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our active climate education projects spreading awareness and knowledge.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="School climate education program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-purple-100 text-purple-800">Active</Badge>
                <CardTitle className="text-gray-900">Green Schools Initiative</CardTitle>
                <CardDescription>
                  Implementing comprehensive climate education curriculum in 200 schools across developing countries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Africa, Asia, Latin America
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2025
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    50,000 students reached
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Community climate workshops"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-purple-100 text-purple-800">Active</Badge>
                <CardTitle className="text-gray-900">Community Climate Hubs</CardTitle>
                <CardDescription>
                  Establishing local education centers that provide ongoing climate education and resources to
                  communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Rural Communities Worldwide
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2026
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    25,000 community members
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Online climate education platform"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Launching</Badge>
                <CardTitle className="text-gray-900">Digital Climate Academy</CardTitle>
                <CardDescription>
                  Launching a comprehensive online platform with interactive courses, resources, and certification
                  programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Global Online Platform
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024 - Ongoing
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Target: 1M+ learners
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-purple-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Join Our Educational Mission</h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Education is the foundation of change. Help us spread climate awareness and empower communities with the
              knowledge they need to create a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Become a Climate Educator
              </Button>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Support Education Programs
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
