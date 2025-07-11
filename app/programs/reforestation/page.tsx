import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Users, ArrowLeft, MapPin, Calendar, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReforestationPage() {
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
            <span className="text-gray-900">Reforestation Initiative</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Programs
                </Link>
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  Reforestation Initiative
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  Restoring <span className="text-green-600">Forests</span> for Future Generations
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Our reforestation program focuses on planting native trees, restoring degraded ecosystems, and
                  enhancing carbon sequestration to combat climate change while supporting local communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Volunteer With Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Reforestation and tree planting activities"
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
              See the measurable difference our reforestation efforts are making across the globe.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-600">50,000+</CardTitle>
                <CardDescription>Trees Planted</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-600">15</CardTitle>
                <CardDescription>Countries Reached</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-600">5,000+</CardTitle>
                <CardDescription>Community Members Involved</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-600">1.2M</CardTitle>
                <CardDescription>Tons CO₂ Sequestered</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">How Our Program Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures sustainable reforestation with long-term community benefits.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-gray-900">Site Assessment</CardTitle>
                <CardDescription>
                  We conduct thorough environmental assessments to identify optimal locations for reforestation,
                  considering soil quality, climate conditions, and biodiversity needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-gray-900">Community Engagement</CardTitle>
                <CardDescription>
                  We work closely with local communities, providing training and employment opportunities while ensuring
                  the program meets their needs and cultural values.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-gray-900">Planting & Monitoring</CardTitle>
                <CardDescription>
                  We plant native species and implement long-term monitoring systems to ensure high survival rates and
                  track the ecological impact of our reforestation efforts.
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
              Explore our active reforestation projects making a difference around the world.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Amazon rainforest restoration"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-green-100 text-green-800">Active</Badge>
                <CardTitle className="text-gray-900">Amazon Restoration Project</CardTitle>
                <CardDescription>
                  Restoring 10,000 hectares of degraded Amazon rainforest in partnership with indigenous communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Brazil, South America
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - 2026
                  </div>
                  <div className="flex items-center">
                    <TreePine className="h-4 w-4 mr-2" />
                    25,000 trees planted
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="African savanna reforestation"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-green-100 text-green-800">Active</Badge>
                <CardTitle className="text-gray-900">Sahel Green Belt Initiative</CardTitle>
                <CardDescription>
                  Creating a green belt across the Sahel region to combat desertification and support local livelihoods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    West Africa
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2022 - 2025
                  </div>
                  <div className="flex items-center">
                    <TreePine className="h-4 w-4 mr-2" />
                    15,000 trees planted
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Urban forest project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Planning</Badge>
                <CardTitle className="text-gray-900">Urban Forest Expansion</CardTitle>
                <CardDescription>
                  Expanding urban canopy coverage in major cities to improve air quality and reduce urban heat islands.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Multiple Cities
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024 - 2027
                  </div>
                  <div className="flex items-center">
                    <TreePine className="h-4 w-4 mr-2" />
                    Target: 10,000 trees
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-green-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Help Us Plant More Trees</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Every tree planted makes a difference. Join our reforestation efforts and help us create a greener, more
              sustainable future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Volunteer for Tree Planting
              </Button>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Sponsor a Forest
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
