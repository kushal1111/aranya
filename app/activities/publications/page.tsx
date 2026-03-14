import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react"

export default function PublicationsPage() {
  const publications = [
    {
      title: "Just Energy Transition Toolkit",
      description: "Resource toolkit on just energy transition frameworks and practical guidance.",
      href: "/docs/01%20Just%20energy%20transition%20toolkit-2.pdf",
    },
    {
      title: "Advocacy Paper: Feminist Just Energy Transition",
      description: "Advocacy paper focused on feminist perspectives in a just energy transition.",
      href: "/docs/Advocacy%20Paper%20Feminist%20Just%20Energy%20Transition.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-100">
        <div className="container px-4 md:px-6 mx-auto">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Our publications share research insights, project learnings, and practical guides to accelerate climate
            action across communities and partner organizations.
          </p>
          <div className="mt-8">
            <Link href="/activities">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto grid gap-6 md:grid-cols-2">
          {publications.map((publication) => (
            <Card key={publication.href}>
              <CardHeader>
                <FileText className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>{publication.title}</CardTitle>
                <CardDescription>{publication.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-yellow-700 hover:underline"
                  >
                    Open publication
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={publication.href}
                    download
                    className="inline-flex items-center text-sm font-medium text-yellow-700 hover:underline"
                  >
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
