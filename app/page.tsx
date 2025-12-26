import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Documents from "@/components/ui/documents"
import Hero from "@/components/ui/hero"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Leaf, Droplets, Sun, GraduationCap, Users, Heart, ArrowRight, TreePine, Globe, Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div id="main-content" role="main" className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav aria-label="Primary navigation" className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Aaranya</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">
                Impact
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-green-600 transition-colors">
                Programs
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-green-600 transition-colors">
                Gallery
              </Link>
              <Link href="#get-involved" className="text-gray-700 hover:text-green-600 transition-colors">
                Get Involved
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Impact Stats */}
      <section role="region" aria-labelledby="impact-heading" className="py-16 bg-white">
        <h2 id="impact-heading" className="sr-only">Impact statistics</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2" role="article" aria-labelledby="impact-trees" aria-describedby="impact-trees-desc">
              <div id="impact-trees" className="text-4xl font-bold text-green-600">50K+</div>
              <div id="impact-trees-desc" className="text-gray-600">Trees Planted</div>
            </div>
            <div className="space-y-2" role="article" aria-labelledby="impact-countries" aria-describedby="impact-countries-desc">
              <div id="impact-countries" className="text-4xl font-bold text-green-600">25</div>
              <div id="impact-countries-desc" className="text-gray-600">Countries</div>
            </div>
            <div className="space-y-2" role="article" aria-labelledby="impact-lives" aria-describedby="impact-lives-desc">
              <div id="impact-lives" className="text-4xl font-bold text-green-600">100K+</div>
              <div id="impact-lives-desc" className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" role="region" aria-labelledby="about-heading" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aaranya is dedicated to combating climate change through innovative solutions, community engagement, and
              sustainable practices that protect our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card role="article" aria-labelledby="env-title" aria-describedby="env-desc" className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle id="env-title">Environmental Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription id="env-desc">
                  Preserving ecosystems and biodiversity through conservation efforts and sustainable practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Empowering local communities to become environmental stewards and climate action leaders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Developing cutting-edge solutions and technologies to address climate challenges effectively.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section role="region" aria-labelledby="programs-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives addressing the most critical environmental challenges of our time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/programs/reforestation">
              <Card role="article" aria-labelledby="prog-ref-title" aria-describedby="prog-ref-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-ref-title" className="text-lg">Reforestation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-ref-desc" className="text-center">
                    Restoring forests and planting trees to combat deforestation and carbon emissions.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/clean-water">
              <Card role="article" aria-labelledby="prog-water-title" aria-describedby="prog-water-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-water-title" className="text-lg">Clean Water</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-water-desc" className="text-center">
                    Providing access to clean water and protecting water resources worldwide.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/renewable-energy">
              <Card role="article" aria-labelledby="prog-energy-title" aria-describedby="prog-energy-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-energy-title" className="text-lg">Renewable Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-energy-desc" className="text-center">
                    Promoting solar, wind, and other renewable energy solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/climate-education">
              <Card role="article" aria-labelledby="prog-edu-title" aria-describedby="prog-edu-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-edu-title" className="text-lg">Climate Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-edu-desc" className="text-center">
                    Educating communities about climate change and sustainable practices.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="get-involved-heading" className="text-3xl md:text-4xl font-bold mb-4">Get Involved Today</h2> 
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Every action counts. Join us—volunteer, donate, partner, or access official documents to learn more about our organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#volunteer" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-green-700 font-semibold hover:bg-gray-100">
                Become a Volunteer
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent">
                Make a Donation
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <Documents />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" aria-labelledby="footer-heading" className="bg-gray-900 text-white py-12">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">Aaranya</span>
              </div>
              <p className="text-gray-400">
                Building a sustainable future through environmental action and community engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/programs/reforestation" className="hover:text-white transition-colors">
                    Reforestation
                  </Link>
                </li>
                <li>
                  <Link href="/programs/clean-water" className="hover:text-white transition-colors">
                    Clean Water
                  </Link>
                </li>
                <li>
                  <Link href="/programs/renewable-energy" className="hover:text-white transition-colors">
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link href="/programs/climate-education" className="hover:text-white transition-colors">
                    Climate Education
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#volunteer" className="hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#partner" className="hover:text-white transition-colors">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="#newsletter" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="#get-involved" className="hover:text-white transition-colors">
                    Organization Documents
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    Project Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
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

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Aaranya. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
