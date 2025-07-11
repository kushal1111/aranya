import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Droplets, GraduationCap, Sun, ArrowRight } from "lucide-react"
import Link from "next/link"

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

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
              Our Programs
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Creating <span className="text-green-600">Lasting Change</span> Together
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive programs designed to address climate change through innovative solutions,
              community engagement, and sustainable practices that protect our planet for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Reforestation</CardTitle>
                <CardDescription>
                  Restoring forests and planting native trees to combat deforestation and enhance carbon sequestration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/programs/reforestation">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Clean Water</CardTitle>
                <CardDescription>
                  Providing sustainable water solutions and protecting water resources in vulnerable communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/programs/clean-water">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Climate Education</CardTitle>
                <CardDescription>
                  Educating communities about climate change impacts and empowering sustainable living practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/programs/climate-education">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Renewable Energy</CardTitle>
                <CardDescription>
                  Advancing clean energy solutions and supporting communities in transitioning to sustainable power.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/programs/renewable-energy">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Collective Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Together, our programs have created meaningful change across communities worldwide.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">50K+</div>
              <div className="text-sm text-gray-600">Trees Planted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">25K</div>
              <div className="text-sm text-gray-600">People with Clean Water</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">100K+</div>
              <div className="text-sm text-gray-600">Students Educated</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">500</div>
              <div className="text-sm text-gray-600">Solar Installations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Ready to Make a Difference?</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Join us in our mission to create a sustainable future. Every action counts, and together we can build a
              better world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  Get Involved
                </Button>
              </Link>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Support Our Work
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
