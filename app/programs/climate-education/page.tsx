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
import {
  Leaf,
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Heart,
  CheckCircle,
  BookOpen,
  Award,
} from "lucide-react"

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
              <BreadcrumbPage>Climate Education</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                <GraduationCap className="mr-2 h-4 w-4" />
                Climate Education Program
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Educating for Change
              </h1>
              <p className="text-lg text-gray-600">
                Our climate education initiative empowers communities with knowledge about climate change impacts,
                sustainable practices, and environmental stewardship to create lasting behavioral change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Heart className="mr-2 h-5 w-5" />
                  Support This Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-purple-200 flex items-center justify-center">
                <GraduationCap className="h-32 w-32 text-purple-600" />
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
              Our education programs have reached communities worldwide, creating awareness and inspiring climate
              action.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-purple-600">125,000</CardTitle>
                <CardDescription>People Educated</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-purple-600">850</CardTitle>
                <CardDescription>Workshops Conducted</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-purple-600">2,500</CardTitle>
                <CardDescription>Educators Trained</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-purple-600">20</CardTitle>
                <CardDescription>Countries Reached</CardDescription>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Educational Approach</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Community Workshops</h3>
                      <p className="text-gray-600">
                        Interactive workshops that teach climate science, environmental impacts, and practical solutions
                        tailored to local contexts and challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">School Programs</h3>
                      <p className="text-gray-600">
                        Age-appropriate curriculum for students from elementary to university level, fostering
                        environmental awareness and sustainable thinking from an early age.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Digital Learning Platform</h3>
                      <p className="text-gray-600">
                        Online courses, webinars, and resources accessible globally, making climate education available
                        to anyone with internet access.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Train-the-Trainer Programs</h3>
                      <p className="text-gray-600">
                        Empowering local educators and community leaders with the knowledge and tools to become climate
                        education ambassadors in their regions.
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
                    <Calendar className="mr-2 h-5 w-5 text-purple-600" />
                    Current Project Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">2024 Education Goal</span>
                      <span className="text-sm text-gray-600">83% Complete</span>
                    </div>
                    <Progress value={83} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">41,500 of 50,000 people reached</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Knowledge Retention</span>
                      <span className="text-sm text-gray-600">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Post-training assessment scores</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Behavior Change</span>
                      <span className="text-sm text-gray-600">74%</span>
                    </div>
                    <Progress value={74} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Participants adopting sustainable practices</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Education Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Schools Climate Initiative</h4>
                        <p className="text-sm text-gray-600">45,000 students reached</p>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Community Leader Training</h4>
                        <p className="text-sm text-gray-600">1,200 leaders trained</p>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Digital Learning Platform</h4>
                        <p className="text-sm text-gray-600">25,000 online learners</p>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spread Climate Awareness</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Education is the foundation of change. Help us reach more communities and empower people with the knowledge
            to protect our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Heart className="mr-2 h-5 w-5" />
              Fund Education Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Users className="mr-2 h-5 w-5" />
              Become an Educator
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
                  <Link href="/programs/climate-education" className="text-green-400">
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
