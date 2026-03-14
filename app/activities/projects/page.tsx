import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowLeft, ArrowRight, ExternalLink, FolderOpen } from "lucide-react"

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
      <SiteHeader active="activities" />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Activities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <FolderOpen className="h-9 w-9 text-amber-400" />
            Projects
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Explore our ongoing project portfolio. Open a project to view full details, implementation approach, and
            impact focus areas.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/activities/campaigns">
              <Button className="bg-amber-500 hover:bg-amber-400 text-gray-900">
                Next: Campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.href} className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{project.description}</p>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
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
