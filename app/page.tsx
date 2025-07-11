import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Leaf,
  Users,
  Globe,
  TreePine,
  Sun,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">EcoFuture</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Impact
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-green-600 transition-colors">
              Programs
            </Link>
            <Link href="#get-involved" className="text-sm font-medium hover:text-green-600 transition-colors">
              Get Involved
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Donate Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100" />
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  Climate Action Now
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  Building a <span className="text-green-600">Sustainable</span> Future
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Join us in the fight against climate change. Together, we can create lasting environmental solutions
                  and build a healthier planet for future generations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Heart className="mr-2 h-4 w-4" />
                  Support Our Mission
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">25</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100K+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Climate action and environmental conservation"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EcoFuture is dedicated to combating climate change through innovative solutions, community engagement, and
              sustainable practices that protect our planet.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-gray-900">Global Impact</CardTitle>
                <CardDescription>
                  Working across continents to address climate challenges with local communities and international
                  partners.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-gray-900">Conservation</CardTitle>
                <CardDescription>
                  Protecting forests, restoring ecosystems, and promoting biodiversity through science-based
                  conservation efforts.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sun className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-gray-900">Clean Energy</CardTitle>
                <CardDescription>
                  Advancing renewable energy solutions and supporting communities in transitioning to sustainable power
                  sources.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we're making a difference in the fight against climate change through measurable, sustainable
              action.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">2.5M</div>
              <div className="text-sm text-gray-600">Tons CO₂ Reduced</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">500K</div>
              <div className="text-sm text-gray-600">People Educated</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">75</div>
              <div className="text-sm text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives addressing different aspects of climate change and environmental protection.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Reforestation program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-gray-900">Reforestation Initiative</CardTitle>
                <CardDescription>
                  Planting native trees and restoring degraded forests to combat deforestation and enhance carbon
                  sequestration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Clean water access program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-gray-900">Clean Water Access</CardTitle>
                <CardDescription>
                  Providing sustainable water solutions and protecting water resources in vulnerable communities
                  worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Climate education program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-gray-900">Climate Education</CardTitle>
                <CardDescription>
                  Educating communities about climate change impacts and empowering them with sustainable living
                  practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Get Involved</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our community of climate champions and help us create a sustainable future for all.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Donate</CardTitle>
                <CardDescription>
                  Support our mission with a financial contribution that directly funds climate action projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">Make a Donation</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Volunteer</CardTitle>
                <CardDescription>
                  Join our team of dedicated volunteers and contribute your skills to environmental conservation
                  efforts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Become a Volunteer
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Stay Updated</CardTitle>
                <CardDescription>
                  Subscribe to our newsletter for the latest updates on climate action and environmental news.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to learn more about our work or discuss partnership opportunities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Email</CardTitle>
                <CardDescription>info@ecofuture.org</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Phone</CardTitle>
                <CardDescription>+1 (555) 123-4567</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Address</CardTitle>
                <CardDescription>
                  123 Green Street
                  <br />
                  Eco City, EC 12345
                </CardDescription>
              </CardHeader>
            </Card>
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
                <span className="text-xl font-bold">EcoFuture</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building a sustainable future through climate action and environmental conservation.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Reforestation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Clean Water
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Climate Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Renewable Energy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Partner with Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Corporate Sponsorship
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Annual Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} EcoFuture. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
