import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Documents from "@/components/ui/documents"
import Hero from "@/components/ui/hero"
import SiteFooter from "@/components/ui/site-footer"
import { Badge } from "@/components/ui/badge"
import { Droplets, Sun, GraduationCap, Users, Heart, ArrowRight, TreePine, Globe, Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div id="main-content" role="main" className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav aria-label="Primary navigation" className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/docs/logo.jpg"
                alt="Aaranya logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/activities" className="text-gray-700 hover:text-green-600 transition-colors">
                Activities
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

      {/* Mission Section */}
      <section id="about" role="region" aria-labelledby="about-heading" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              About ARANYA
            </h2>
            <div className="max-w-5xl mx-auto space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                The climate crisis is not a singular challenge; it is a complex intersection of environmental degradation and systemic inequality. 
                Action for Resilient Adaptation and Nature-based Energy Alternatives (ARANYA) is a non-governmental,
                not-for-profit organization dedicated to advancing sustainable and equitable climate solutions.
              </p>
              <p>
                Our work integrates mitigation, adaptation, and resilience, to tackle the intertwined challenges of
                climate change through a holistic and interdisciplinary approach.
              </p>
              <p className="font-semibold text-gray-900">Our work is anchored in three core thematic areas:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              role="article"
              aria-labelledby="cnn-title"
              aria-describedby="cnn-desc"
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle id="cnn-title">Carbon Net Negative (CNN)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription id="cnn-desc">
                  Developing and promoting strategies that move beyond carbon neutrality towards emission removal
                  through scientific and technological intervention that are community-driven and rooted in nature.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              role="article"
              aria-labelledby="jet-title"
              aria-describedby="jet-desc"
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle id="jet-title">Just Energy Transition (JET)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription id="jet-desc">
                  Supporting a fair and inclusive shift from fossil fuels to renewable energy systems, ensuring that
                  women, Indigenous peoples, and marginalized communities are meaningfully included in decision-making
                  and benefit equitably from the transition.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              role="article"
              aria-labelledby="crc-title"
              aria-describedby="crc-desc"
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle id="crc-title">Climate Resilient Communities (CRC)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription id="crc-desc">
                  Strengthening local capacities to tackle cross-cutting impacts of climate change by promoting
                  resilience-building measures, knowledge sharing, and nature-based solutions tailored to diverse
                  socio-ecological contexts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section role="region" aria-labelledby="programs-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our key activity areas where we engage communities and drive climate action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/activities/projects">
              <Card role="article" aria-labelledby="prog-ref-title" aria-describedby="prog-ref-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-ref-title" className="text-lg">Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-ref-desc" className="text-center">
                    Long-term, on-ground initiatives delivering measurable environmental impact.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/campaigns">
              <Card role="article" aria-labelledby="prog-water-title" aria-describedby="prog-water-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-water-title" className="text-lg">Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-water-desc" className="text-center">
                    Awareness and mobilization drives that encourage immediate climate action.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/publications">
              <Card role="article" aria-labelledby="prog-energy-title" aria-describedby="prog-energy-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-energy-title" className="text-lg">Publications</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-energy-desc" className="text-center">
                    Research, reports, and practical resources to inform and inspire action.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/events">
              <Card role="article" aria-labelledby="prog-edu-title" aria-describedby="prog-edu-desc" className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle id="prog-edu-title" className="text-lg">Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription id="prog-edu-desc" className="text-center">
                    Workshops, forums, and field events that connect people and ideas.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/activities">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                View All Activities
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
              <Link href="/volunteer" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-green-700 font-semibold hover:bg-gray-100">
                Become a Volunteer
              </Link>
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

      <SiteFooter />
    </div>
  )
}
