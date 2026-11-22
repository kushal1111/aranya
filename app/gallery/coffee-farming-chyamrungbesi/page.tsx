import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import trainingSessionHall from "@/app/images/projects/coffee-farming/training-session-hall.jpg"
import aranyaBannerSession from "@/app/images/projects/coffee-farming/aranya-banner-session.jpg"
import participantQuestionWoman from "@/app/images/projects/coffee-farming/participant-question-woman.jpg"
import participantDiscussion from "@/app/images/projects/coffee-farming/participant-discussion.jpg"
import participantsSeated from "@/app/images/projects/coffee-farming/participants-seated.jpg"
import farmerWithToolkit from "@/app/images/projects/coffee-farming/farmer-with-toolkit.jpg"
import coffeePlantVarieties from "@/app/images/projects/coffee-farming/coffee-plant-varieties.jpg"
import plantingMixtureDemo from "@/app/images/projects/coffee-farming/planting-mixture-demo.jpg"
import nurserySeedlingCloseup from "@/app/images/projects/coffee-farming/nursery-seedling-closeup.jpg"
import nurseryVisit from "@/app/images/projects/coffee-farming/nursery-visit.jpg"
import coffeeFarmFieldVisit from "@/app/images/projects/coffee-farming/coffee-farm-field-visit.jpg"
import teamWardOffice from "@/app/images/projects/coffee-farming/team-ward-office.jpg"

const description =
  "Photos from ARANYA Initiatives coffee farming training in Chyamrungbesi, Bethanchowk, linking biodiversity conservation with rural livelihoods."

export const metadata = createPageMetadata({
  title: "Biodiversity Conservation Project - Coffee Farming",
  description,
  path: "/gallery/coffee-farming-chyamrungbesi",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Coffee Farming", path: "/gallery/coffee-farming-chyamrungbesi" },
]

const photos = [
  {
    src: trainingSessionHall,
    alt: "A facilitator presenting to farmers seated in a community hall during the coffee farming training",
    caption: "Farmers gather for the two-day coffee cultivation training.",
  },
  {
    src: aranyaBannerSession,
    alt: "A facilitator speaking beside a coffee plant in front of the ARANYA Initiatives banner",
    caption: "An opening session in front of the ARANYA banner.",
  },
  {
    src: participantQuestionWoman,
    alt: "A woman participant standing to speak during the training",
    caption: "A participant shares a question from the floor.",
  },
  {
    src: participantDiscussion,
    alt: "A man standing among seated farmers and speaking during the discussion",
    caption: "Farmers discuss what coffee cultivation would mean locally.",
  },
  {
    src: participantsSeated,
    alt: "Farmers seated in rows listening during the classroom session",
    caption: "Participants follow the classroom sessions.",
  },
  {
    src: farmerWithToolkit,
    alt: "A farmer holding the Green Reskilling Toolkit booklet during the training",
    caption: "A farmer with the Green Reskilling Toolkit.",
  },
  {
    src: coffeePlantVarieties,
    alt: "A trainer holding a coffee seedling up for farmers to see",
    caption: "Identifying coffee plant varieties and leaf condition.",
  },
  {
    src: plantingMixtureDemo,
    alt: "A trainer in gloves showing farmers how to make organic compost with coloured buckets",
    caption: "A hands-on demonstration of how to make organic compost.",
  },
  {
    src: nurserySeedlingCloseup,
    alt: "Three men examining a young coffee plant in a nursery",
    caption: "Checking a healthy seedling in the nursery.",
  },
  {
    src: nurseryVisit,
    alt: "Three men talking beside trays of coffee seedlings under shade netting",
    caption: "A nursery visit under shade netting.",
  },
  {
    src: coffeeFarmFieldVisit,
    alt: "Farmers and facilitators walking through a shaded coffee farm",
    caption: "A field visit through a shade-grown coffee farm.",
  },
  {
    src: teamWardOffice,
    alt: "The training team standing outside the Bethanchowk Rural Municipality Ward No. 1 office",
    caption: "The team outside the Bethanchowk Ward No. 1 office in Chyamrungbesi.",
  },
]

export default function CoffeeFarmingGalleryPage() {
  return (
    <SiteShell active="gallery">
      <PageJsonLd
        path="/gallery/coffee-farming-chyamrungbesi"
        name={`Biodiversity Conservation Project - Coffee Farming | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <Link href="/gallery">
            <Button
              variant="outline"
              className="mb-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Gallery
            </Button>
          </Link>

          <Badge className="mb-4 bg-[#eef6e4] text-[#0B3D35]">Biodiversity Conservation</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Biodiversity Conservation Project - Coffee Farming
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-6">
            <span className="inline-flex items-center">
              <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
              Chyamrungbesi, Bethanchowk, Kavrepalanchok
            </span>
            <span className="inline-flex items-center">
              <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
              1–2 Nov 2026
            </span>
          </div>

          <p className="text-lg text-white/75 max-w-4xl leading-relaxed">
            These photographs document the coffee farming training {ORG_SHORT} organised with farmers in
            Chyamrungbesi. The sessions covered cultivation, planting mixtures, plant health, and a visit to a nursery
            and a shade-grown coffee farm.{" "}
            <Link
              href="/activities/projects/coffee-farming-chyamrungbesi"
              className="text-[#D8A84E] hover:text-[#e8c56a] font-semibold"
            >
              Read the project overview
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className="break-inside-avoid mb-6 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="p-4 text-sm text-gray-600">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
