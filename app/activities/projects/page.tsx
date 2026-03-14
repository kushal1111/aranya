import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/ui/site-footer"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "JET Consultation Project at Bojheni",
      description:
        "A rights-based project that helps local and Indigenous communities navigate renewable energy expansion with accessible legal and policy tools.",
      href: "/activities/projects/jet-toolkit",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container px-4 md:px-6 mx-auto">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Explore our ongoing project portfolio. Open a project to view full details, implementation approach, and
            impact focus areas.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/activities/campaigns">
              <Button className="bg-green-600 hover:bg-green-700">
                Next: Campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.href}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-medium text-green-700 hover:underline"
                >
                  Open project details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
