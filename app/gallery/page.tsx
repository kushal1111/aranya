import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { DONATION_MAILTO, ORG_NAME, ORG_SHORT } from "@/lib/site"
import { MapPin, Calendar, Images } from "lucide-react"
import bojheniPhoto1 from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.34 PM.jpeg"

const description =
  "Photographs from ARANYA Initiatives field work on just energy transition, including the advocacy workshop in Bojheni, Nepal."

export const metadata = createPageMetadata({
  title: "Project Gallery",
  description,
  path: "/gallery",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]

const project = {
  title: "Just Energy Transition Advocacy Workshop",
  location: "Bojheni, Nepal",
  date: "2026",
  image: bojheniPhoto1,
  href: "/gallery/jet-bojheni",
  description: `${ORG_SHORT}'s JET program supports a fair and inclusive renewable energy transition by helping communities understand rights, map risks, and engage decision-making processes.`,
}

export default function GalleryPage() {
  return (
    <SiteShell active="gallery">
      <PageJsonLd
        path="/gallery"
        name={`Project Gallery | ${ORG_NAME}`}
        description={description}
        type="CollectionPage"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Visual Stories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Explore highlights from {ORG_SHORT}&apos;s Just Energy Transition field work in Bojheni.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="max-w-4xl mx-auto overflow-hidden border border-gray-200 hover:border-[#2F80A8] hover:shadow-md transition-all duration-200 group">
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={420}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#eef6e4] text-[#0B3D35]">Just Energy Transition</Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <h2 className="text-2xl md:text-3xl text-gray-900">{project.title}</h2>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                  {project.date}
                </div>
              </div>
              <CardDescription className="text-gray-600">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="inline-flex items-center text-sm text-gray-600">
                <Images className="h-4 w-4 mr-2 text-[#0B3D35]" aria-hidden="true" />4 workshop photos
              </div>
              <Link href={project.href}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#0B3D35] text-[#0B3D35] hover:bg-[#F1F6F7] bg-transparent"
                >
                  View photo gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-[#123B5D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Next Project</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/75">
            Be part of {ORG_SHORT}&apos;s work on advocacy, research, and actions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg" className="bg-[#A7D46F] hover:bg-[#96c45f] text-[#0B3D35]">
                Volunteer With Us
              </Button>
            </Link>
            <Link href={DONATION_MAILTO}>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#2F80A8] hover:bg-[#276d8f] text-white border-0"
              >
                Donation Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
