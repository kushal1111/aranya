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
import { Leaf, Sun, Target, Users, Calendar, MapPin, ArrowRight, Heart, CheckCircle, Zap } from "lucide-react"

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
              <BreadcrumbPage>Renewable Energy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                <Sun className="mr-2 h-4 w-4" />
                Renewable Energy Program
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Powering a Clean Future
              </h1>
              <p className="text-lg text-gray-600">
                Our renewable energy initiative promotes solar, wind, and other clean energy solutions to reduce carbon
                emissions, create sustainable power systems, and support communities in transitioning away from fossil
                fuels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <Heart className="mr-2 h-5 w-5" />
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-yellow-200 flex items-center justify-center">
                <Sun className="h-32 w-32 text-yellow-600" />
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
              Our renewable energy projects have significantly reduced carbon emissions while providing clean power to
              communities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-yellow-600">525</CardTitle>
                <CardDescription>MW Capacity Installed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-yellow-600">45,000</CardTitle>
                <CardDescription>Households Powered</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-yellow-600">850K</CardTitle>
                <CardDescription>Tons CO₂ Avoided</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-yellow-600">8</CardTitle>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Energy Solutions</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solar Power Systems</h3>
                      <p className="text-gray-600">
                        We design and install solar photovoltaic systems for communities, schools, and healthcare
                        facilities, providing reliable clean energy with minimal maintenance requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Wind Energy Projects</h3>
                      <p className="text-gray-600">
                        Small and medium-scale wind turbines are deployed in suitable locations to harness wind power,
                        complementing solar installations for consistent energy generation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Energy Storage Solutions</h3>
                      <p className="text-gray-600">
                        Advanced battery systems store excess renewable energy for use during peak demand or when
                        renewable sources are not generating power.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Grid Integration</h3>
                      <p className="text-gray-600">
                        We work with local utilities to integrate renewable energy systems into existing grids, enabling
                        communities to sell excess power back to the grid.
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
                    <Calendar className="mr-2 h-5 w-5 text-yellow-600" />
                    Current Project Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">2024 Capacity Goal</span>
                      <span className="text-sm text-gray-600">72% Complete</span>
                    </div>
                    <Progress value={72} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">180 of 250 MW installed</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">System Efficiency</span>
                      <span className="text-sm text-gray-600">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Average system performance</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Community Adoption</span>
                      <span className="text-sm text-gray-600">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Households using renewable energy</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Project Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Morocco Solar Farm</h4>
                        <p className="text-sm text-gray-600">150 MW capacity</p>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">India Wind Project</h4>
                        <p className="text-sm text-gray-600">85 MW capacity</p>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Chile Solar Initiative</h4>
                        <p className="text-sm text-gray-600">120 MW capacity</p>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
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
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Power the Clean Energy Revolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Renewable energy is key to fighting climate change. Help us expand clean energy access and reduce global
            carbon emissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Heart className="mr-2 h-5 w-5" />
              Fund Clean Energy
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-600 bg-transparent"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Mission
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
                  <Link href="/programs/clean-water" className="hover:text-green-400 transition-colors">
                    Clean Water
                  </Link>
                </li>
                <li>
                  <Link href="/programs/renewable-energy" className="text-green-400">
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
