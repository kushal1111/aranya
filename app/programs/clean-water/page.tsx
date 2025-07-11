import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Leaf, Droplets, Target, Users, Calendar, MapPin, ArrowRight, Heart, CheckCircle, Filter } from "lucide-react"

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
      <div className="container px-4 md:px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/programs">Programs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Clean Water Access</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Droplets className="mr-2 h-4 w-4" />
                Clean Water Program
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Access to Clean Water
              </h1>
              <p className="text-lg text-gray-600">
                Our clean water initiative provides sustainable water solutions to vulnerable communities worldwide,
                ensuring access to safe drinking water while protecting precious water resources for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Heart className="mr-2 h-5 w-5" />
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-blue-200 flex items-center justify-center">
                <Droplets className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Program Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clean water initiatives have transformed communities by providing reliable access to safe drinking
              water.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-blue-600">28,500</CardTitle>
                <CardDescription>People Served</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Filter className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-blue-600">145</CardTitle>
                <CardDescription>Water Systems Installed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-blue-600">95%</CardTitle>
                <CardDescription>System Reliability Rate</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-blue-600">12</CardTitle>
                <CardDescription>Countries Active</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Water Solutions</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solar-Powered Water Pumps</h3>
                      <p className="text-gray-600">
                        We install sustainable solar-powered pumping systems that provide reliable water access without
                        depending on grid electricity or fossil fuels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Water Filtration Systems</h3>
                      <p className="text-gray-600">
                        Advanced filtration technology removes contaminants and pathogens, ensuring safe drinking water
                        that meets international health standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Community Training</h3>
                      <p className="text-gray-600">
                        Local communities receive comprehensive training on system maintenance, water quality testing,
                        and sustainable water management practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Watershed Protection</h3>
                      <p className="text-gray-600">
                        We work to protect water sources through reforestation, erosion control, and sustainable land
                        management practices in watershed areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                    Current Project Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">2024 Installation Goal</span>
                      <span className="text-sm text-gray-600">68% Complete</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">34 of 50 systems installed</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Water Quality Standards</span>
                      <span className="text-sm text-gray-600">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Systems meeting WHO standards</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Community Satisfaction</span>
                      <span className="text-sm text-gray-600">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Based on community surveys</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Project Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Rural Kenya</h4>
                        <p className="text-sm text-gray-600">8,200 people served</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Bangladesh Villages</h4>
                        <p className="text-sm text-gray-600">6,500 people served</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Guatemala Highlands</h4>
                        <p className="text-sm text-gray-600">4,800 people served</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Active
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring Clean Water to More Communities</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Access to clean water is a fundamental human right. Help us expand our reach and bring safe drinking water
            to communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Heart className="mr-2 h-5 w-5" />
              Fund Water Systems
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">Aaranya</span>
              </div>
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
                  <Link href="/programs/clean-water" className="text-green-400">
                    Clean Water
                  </Link>
                </li>
                <li>
                  <Link href="/programs/renewable-energy" className="hover:text-green-400 transition-colors">
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link href="/programs/climate-education" className="hover:text-green-400 transition-colors">
                    Climate Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#volunteer" className="hover:text-green-400 transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="hover:text-green-400 transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#partner" className="hover:text-green-400 transition-colors">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="#newsletter" className="hover:text-green-400 transition-colors">
                    Newsletter
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
            <p>&copy; {new Date().getFullYear()} Aaranya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
