import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME } from "@/lib/site"
import { ArrowLeft, ArrowRight, FolderOpen } from "lucide-react"

const description =
  "Review ARANYA Initiatives climate projects, including the Just Energy Transition advocacy workshop in Bojheni, Nepal."

export const metadata = createPageMetadata({
  title: "Climate Projects",
  description,
  path: "/activities/projects",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Projects", path: "/activities/projects" },
]

export default function ProjectsPage() {
  const projects = [
    {
      title: "Just Energy Transition Advocacy Workshop",
      description:
        "A rights-based project that helps local and Indigenous communities navigate renewable energy expansion with accessible legal and policy tools.",
      href: "/activities/projects/jet-toolkit",
    },
  ]

  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/projects"
        name={`Climate Projects | ${ORG_NAME}`}
        description={description}
        type="CollectionPage"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
           
          >
            Activities
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3"
           
          >
            <FolderOpen className="h-9 w-9 text-amber-400" aria-hidden="true" />
            Projects
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Explore ARANYA&apos;s project work. Open a project to view details, implementation approach, and focus
            areas.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/activities">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Activities
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
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{project.description}</p>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                 
                >
                  Open project details
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
