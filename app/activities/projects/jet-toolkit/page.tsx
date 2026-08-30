import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import workshopPhoto from "@/app/images/WhatsApp Image 2026-03-14 at 2.21.35 PM.jpeg"
import { ArrowLeft, Landmark, Scale, Users } from "lucide-react"

const description =
  "Aranya Initiatives hosted a just energy transition advocacy workshop in Bojheni, Shankharapur Municipality, to strengthen community legal literacy."

export const metadata = createPageMetadata({
  title: "JET Advocacy Workshop",
  description,
  path: "/activities/projects/jet-toolkit",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Projects", path: "/activities/projects" },
  { name: "JET Advocacy Workshop", path: "/activities/projects/jet-toolkit" },
]

export default function JetToolkitProjectPage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/projects/jet-toolkit"
        name={`JET Advocacy Workshop | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Just Energy Transition Advocacy Workshop
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-4xl leading-relaxed">
            As the world shifts from fossil fuels to renewable energy, large-scale infrastructure such as solar farms
            and wind parks often occupies vast areas of land traditionally held by local and Indigenous communities. To
            ensure this transition does not repeat exploitative patterns, {ORG_SHORT} developed the JET Toolkit to make
            legal and policy knowledge practical, accessible, and actionable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/activities/projects">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Projects
              </Button>
            </Link>
            <Link
              href="/activities/publications/just-energy-transition-toolkit"
              className="inline-flex items-center text-sm font-semibold text-[#D8A84E] hover:text-[#e8c56a]"
            >
              Read the Just Energy Transition Toolkit
            </Link>
            <Link
              href="/gallery/jet-bojheni"
              className="inline-flex items-center text-sm font-semibold text-[#D8A84E] hover:text-[#e8c56a]"
            >
              View workshop photos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Card className="border border-gray-200">
            <CardHeader>
              <h2 className="text-3xl text-gray-900">Project Overview</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This project translates complex legal and environmental policies into community-friendly guidance so
                people can understand how the global energy transition affects their lives, livelihoods, and landscapes.
                The toolkit is designed to support equitable decision-making by strengthening legal literacy, community
                participation, and accountability in renewable energy development processes. {ORG_SHORT} hosted
                intensive consultation sessions at Bojheni, Shankharapur Municipality to map socio-economic and land
                rights, helping community members identify protections they are legally entitled to and translate legal
                awareness into collective action against hydroelectric transmission line and sub-station construction.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 overflow-hidden">
            <CardHeader>
              <h2 className="text-2xl text-gray-900">Workshop Snapshot</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-md overflow-hidden border border-gray-100">
                <Image
                  src={workshopPhoto}
                  alt="Community workshop session during JET consultation in Bojheni"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Community members and facilitators co-create local strategies by discussing rights, risks, and practical
                pathways for equitable renewable energy transitions.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rights and Policy Frameworks</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Landmark className="h-6 w-6 text-[#0B3D35]" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">Right to Information (RTI)</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Practical use of RTI mechanisms to obtain project approvals, records, and implementation details.
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-[#0B3D35]" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">Environmental Protection Act</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Plain-language interpretation of environmental safeguards and legal protections tied to energy
                  infrastructure.
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-[#0B3D35]" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">ILO 169 and FPIC</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Emphasis on Free, Prior and Informed Consent (FPIC) in projects affecting Indigenous lands.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            <Card className="border border-gray-200">
              <CardHeader>
                <h2 className="text-2xl text-gray-900">Advocacy Workshops</h2>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 leading-relaxed">
                <p>Participants are equipped with strategic tools to organize effectively and influence decision-making.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Documenting rights violations and collecting evidence.</li>
                  <li>Filing formal complaints with local and district authorities.</li>
                  <li>Using media channels to amplify community voices.</li>
                  <li>
                    Applying Advocacy Planning and Power Analysis to build alliances and challenge unfair power
                    dynamics.
                  </li>
                </ul>
                <p>
                  Together, these tools support an energy transition that is equitable, transparent, and accountable to
                  affected communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
