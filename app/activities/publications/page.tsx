import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowLeft, BookOpen, Download, ExternalLink } from "lucide-react"

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
      href: "/docs/Feminist%20Just%20Energy%20Transition%20in%20Nepal_Paper.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="activities" />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Activities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <BookOpen className="h-9 w-9 text-amber-400" />
            Publications
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Our publications share research insights, project learnings, and practical guides to accelerate climate
            action across communities and partner organizations.
          </p>
          <div className="mt-8">
            <Link href="/activities">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {publications.map((publication) => {
            return (
            <Card key={publication.href} className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {publication.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{publication.description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Open publication
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={publication.href}
                    download
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          )})}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
