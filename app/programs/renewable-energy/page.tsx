import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Sun, Users, Zap, ArrowLeft, MapPin, Calendar, TrendingUp, Wind, Battery } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RenewableEnergyPage() {
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
            <span className="text-gray-900">Renewable Energy</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Programs
                </Link>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  Renewable Energy
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  Powering the Future with <span className="text-yellow-600">Clean Energy</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Our renewable energy program focuses on advancing clean energy solutions, supporting communities in
                  transitioning to sustainable power sources, and reducing carbon emissions worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Solar panels and renewable energy installations"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Energy Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our renewable energy initiatives are transforming communities and reducing carbon footprints.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-yellow-600">500+</CardTitle>
                <CardDescription>Solar Installations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-yellow-600">5MW</CardTitle>
                <CardDescription>Clean Energy Generated</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-yellow-600">10,000+</CardTitle>
                <CardDescription>People with Clean Energy Access</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-yellow-600">800K</CardTitle>
                <CardDescription>Tons CO₂ Emissions Avoided</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Energy Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Energy Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We implement diverse renewable energy technologies tailored to each community's needs and resources.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sun className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-gray-900">Solar Power Systems</CardTitle>
                <CardDescription>
                  Installing solar panels and photovoltaic systems to provide clean, sustainable electricity to homes,
                  schools, and community centers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wind className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-gray-900">Wind Energy</CardTitle>
                <CardDescription>
                  Developing small and medium-scale wind turbines to harness wind power in suitable geographic locations
                  and weather conditions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-gray-900">Energy Storage</CardTitle>
                <CardDescription>
                  Implementing battery storage systems to ensure reliable power supply and maximize the efficiency of
                  renewable energy installations.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Current Energy Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our active renewable energy projects bringing clean power to communities worldwide.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Rural solar electrification project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Active</Badge>
                <CardTitle className="text-gray-900">Rural Solar Electrification</CardTitle>
                <CardDescription>
                  Bringing solar power to 100 remote villages that lack access to the electrical grid.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Sub-Saharan Africa
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2025
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    25,000 people served
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Community solar garden project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Active</Badge>
                <CardTitle className="text-gray-900">Community Solar Gardens</CardTitle>
                <CardDescription>
                  Establishing shared solar installations that provide clean energy to multiple households and
                  businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Latin America
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2024
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    5,000 households
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Wind energy development project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-green-100 text-green-800">Planning</Badge>
                <CardTitle className="text-gray-900">Coastal Wind Initiative</CardTitle>
                <CardDescription>
                  Developing small-scale wind farms in coastal regions with optimal wind conditions for sustainable
                  energy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Southeast Asia
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024 - 2027
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Target: 15,000 people
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-yellow-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Power the Clean Energy Revolution
            </h2>
            <p className="text-lg text-yellow-100 max-w-3xl mx-auto">
              Clean energy is the key to a sustainable future. Join us in accelerating the transition to renewable
              energy and creating energy independence for communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-600 bg-transparent"
              >
                Become an Energy Partner
              </Button>
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                Fund Solar Projects
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
