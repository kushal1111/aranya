import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Leaf, TreePine, Droplets, Sun, GraduationCap, ArrowRight, Users, Target, Globe } from "lucide-react"

export default function ProgramsPage() {
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
              <BreadcrumbPage>Programs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
              Environmental Programs
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Our Climate Action Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives addressing the most critical environmental challenges through innovative
              solutions, community engagement, and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/programs/reforestation">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="text-center">
                  <TreePine className="h-16 w-16 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">Reforestation Initiative</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    Restoring degraded forests and planting native trees to combat deforestation, enhance carbon
                    sequestration, and protect biodiversity.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2 text-green-600" />
                      50,000+ trees planted
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-green-600" />
                      15 countries active
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-green-50 bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/clean-water">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="text-center">
                  <Droplets className="h-16 w-16 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">Clean Water Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    Providing sustainable water solutions and protecting water resources in vulnerable communities
                    worldwide through innovative technology.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2 text-blue-600" />
                      25,000+ people served
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-blue-600" />
                      12 countries active
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/renewable-energy">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="text-center">
                  <Sun className="h-16 w-16 text-yellow-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">Renewable Energy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    Promoting solar, wind, and other renewable energy solutions to reduce carbon emissions and create
                    sustainable energy systems.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2 text-yellow-600" />
                      500MW+ capacity installed
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-yellow-600" />8 countries active
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-yellow-50 bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/climate-education">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="text-center">
                  <GraduationCap className="h-16 w-16 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">Climate Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    Educating communities about climate change impacts and empowering them with knowledge and tools for
                    sustainable living practices.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2 text-purple-600" />
                      100,000+ people educated
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-purple-600" />
                      20 countries active
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-purple-50 bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Combined Program Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our integrated approach to environmental action has created measurable positive change across the globe.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">2.5M</div>
              <div className="text-sm text-gray-600">Tons CO₂ Reduced</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">175K+</div>
              <div className="text-sm text-gray-600">People Directly Impacted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">35</div>
              <div className="text-sm text-gray-600">Countries Reached</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every program needs dedicated supporters. Choose how you want to make a difference in the fight against
            climate change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Support Our Programs
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
