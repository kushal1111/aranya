"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Leaf, Droplets, Sun, GraduationCap, TreePine, MapPin, Calendar, Users, Filter, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Amazon Rainforest Restoration",
    category: "reforestation",
    location: "Brazil",
    date: "2023",
    image: "/placeholder.svg?height=300&width=400",
    description: "Successfully planted 15,000 native trees across 500 hectares of degraded rainforest land.",
    impact: {
      trees: "15,000",
      area: "500 hectares",
      co2: "2,500 tons/year",
    },
    participants: 150,
  },
  {
    id: 2,
    title: "Solar Village Initiative",
    category: "renewable-energy",
    location: "Kenya",
    date: "2023",
    image: "/placeholder.svg?height=300&width=400",
    description: "Installed solar panels providing clean energy to 200 rural households.",
    impact: {
      households: "200",
      energy: "500 kWh/day",
      co2: "180 tons/year",
    },
    participants: 75,
  },
  {
    id: 3,
    title: "Clean Water Wells Project",
    category: "clean-water",
    location: "India",
    date: "2023",
    image: "/placeholder.svg?height=300&width=400",
    description: "Constructed 25 water wells providing clean drinking water to 5,000 people.",
    impact: {
      wells: "25",
      people: "5,000",
      water: "10,000L/day",
    },
    participants: 100,
  },
  {
    id: 4,
    title: "Urban Forest Creation",
    category: "reforestation",
    location: "Philippines",
    date: "2023",
    image: "/placeholder.svg?height=300&width=400",
    description: "Transformed vacant urban lots into green spaces with 3,000 trees and native plants.",
    impact: {
      trees: "3,000",
      area: "50 hectares",
      co2: "400 tons/year",
    },
    participants: 200,
  },
  {
    id: 5,
    title: "Climate Education Program",
    category: "climate-education",
    location: "Mexico",
    date: "2023",
    image: "/placeholder.svg?height=300&width=400",
    description: "Educated 2,000 students across 50 schools about climate change and sustainability.",
    impact: {
      students: "2,000",
      schools: "50",
      teachers: "150",
    },
    participants: 25,
  },
  {
    id: 6,
    title: "Wind Farm Development",
    category: "renewable-energy",
    location: "Morocco",
    date: "2022",
    image: "/placeholder.svg?height=300&width=400",
    description: "Supported the installation of 10 wind turbines generating clean energy for 1,000 homes.",
    impact: {
      turbines: "10",
      homes: "1,000",
      energy: "2 MW",
    },
    participants: 50,
  },
  {
    id: 7,
    title: "Mangrove Restoration",
    category: "reforestation",
    location: "Indonesia",
    date: "2022",
    image: "/placeholder.svg?height=300&width=400",
    description: "Restored 200 hectares of mangrove forests protecting coastal communities.",
    impact: {
      mangroves: "8,000",
      area: "200 hectares",
      protection: "5 villages",
    },
    participants: 120,
  },
  {
    id: 8,
    title: "Water Purification Systems",
    category: "clean-water",
    location: "Bangladesh",
    date: "2022",
    image: "/placeholder.svg?height=300&width=400",
    description: "Installed advanced water purification systems serving 10,000 people.",
    impact: {
      systems: "15",
      people: "10,000",
      water: "50,000L/day",
    },
    participants: 80,
  },
]

const categories = [
  { id: "all", name: "All Projects", icon: Leaf, color: "bg-green-100 text-green-800" },
  { id: "reforestation", name: "Reforestation", icon: TreePine, color: "bg-green-100 text-green-800" },
  { id: "clean-water", name: "Clean Water", icon: Droplets, color: "bg-blue-100 text-blue-800" },
  { id: "renewable-energy", name: "Renewable Energy", icon: Sun, color: "bg-yellow-100 text-yellow-800" },
  { id: "climate-education", name: "Climate Education", icon: GraduationCap, color: "bg-purple-100 text-purple-800" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getCategoryInfo = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId) || categories[0]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Aaranya</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/#impact" className="text-gray-700 hover:text-green-600 transition-colors">
                Impact
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-green-600 transition-colors">
                Programs
              </Link>
              <Link href="/gallery" className="text-green-600 font-medium">
                Gallery
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our completed environmental projects from around the world. Each initiative represents our
            commitment to creating lasting positive change for our planet.
          </p>

          {/* Filter Toggle for Mobile */}
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-green-600 text-green-600"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Projects
              {showFilters && <X className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          {/* Category Filters */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "border-green-600 text-green-600 hover:bg-green-50"
                    }`}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-8">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            {selectedCategory !== "all" && ` in ${getCategoryInfo(selectedCategory).name}`}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const categoryInfo = getCategoryInfo(project.category)
              const CategoryIcon = categoryInfo.icon

              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={categoryInfo.color}>
                        <CategoryIcon className="mr-1 h-3 w-3" />
                        {categoryInfo.name}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-green-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Impact Metrics */}
                    <div className="space-y-3 mb-4">
                      <h4 className="font-semibold text-gray-900">Project Impact:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(project.impact).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                            <span className="font-medium text-green-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Participants */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {project.participants} volunteers
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to see more projects.</p>
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Next Project</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Be part of our mission to create positive environmental change. Every project starts with passionate
            individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Volunteer With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Support Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
