import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME, ORG_SHORT } from "@/lib/site"
import coffeePlantVarieties from "@/app/images/projects/coffee-farming/coffee-plant-varieties.jpg"
import trainingSessionHall from "@/app/images/projects/coffee-farming/training-session-hall.jpg"
import plantingMixtureDemo from "@/app/images/projects/coffee-farming/planting-mixture-demo.jpg"
import nurserySeedlingCloseup from "@/app/images/projects/coffee-farming/nursery-seedling-closeup.jpg"
import coffeeFarmFieldVisit from "@/app/images/projects/coffee-farming/coffee-farm-field-visit.jpg"
import nurseryVisit from "@/app/images/projects/coffee-farming/nursery-visit.jpg"
import participantQuestionWoman from "@/app/images/projects/coffee-farming/participant-question-woman.jpg"
import farmerWithToolkit from "@/app/images/projects/coffee-farming/farmer-with-toolkit.jpg"
import teamWardOffice from "@/app/images/projects/coffee-farming/team-ward-office.jpg"
import { ArrowLeft, BookOpen, Bug, CalendarDays, Leaf, MapPin, Sprout, Users } from "lucide-react"

const highlights = [
  {
    src: trainingSessionHall,
    alt: "Farmers seated in a community hall during the coffee farming training",
    caption: "Around 60 farmers joined the two-day training",
  },
  {
    src: plantingMixtureDemo,
    alt: "A trainer showing farmers how to make organic compost with buckets",
    caption: "Hands-on demonstration of how to make organic compost",
  },
  {
    src: nurserySeedlingCloseup,
    alt: "A trainer holding a young coffee plant in a nursery",
    caption: "Learning to identify healthy coffee seedlings",
  },
  {
    src: coffeeFarmFieldVisit,
    alt: "Farmers walking through a shaded coffee farm",
    caption: "Field visit to a shade-grown coffee farm",
  },
]

const description =
  "ARANYA Initiatives trained about 60 farmers in Chyamrungbesi, Kavrepalanchok, in coffee cultivation that supports biodiversity conservation and rural livelihoods."

export const metadata = createPageMetadata({
  title: "Coffee Farming for Biodiversity Conservation",
  description,
  path: "/activities/projects/coffee-farming-chyamrungbesi",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Activities", path: "/activities" },
  { name: "Projects", path: "/activities/projects" },
  {
    name: "Coffee Farming",
    path: "/activities/projects/coffee-farming-chyamrungbesi",
  },
]

const facts = [
  { label: "Training", value: "2 days", icon: CalendarDays },
  { label: "Dates", value: "1–2 Nov 2026", icon: CalendarDays },
  { label: "Participants", value: "About 60 farmers", icon: Users },
  { label: "Facilitators", value: "2 horticulture experts", icon: Sprout },
]

const topics = [
  {
    title: "Cultivation and growing conditions",
    description: "Suitable growing conditions, plant spacing, and soil preparation for coffee.",
    icon: Sprout,
  },
  {
    title: "Manure, fertiliser, and planting pits",
    description: "Appropriate use of manure and fertilisers, and how to prepare planting pits and mixtures.",
    icon: Leaf,
  },
  {
    title: "Varieties, leaves, pests, and disease",
    description:
      "Identification of coffee plant varieties and leaf conditions, plus prevention and management of insects and common plant diseases.",
    icon: Bug,
  },
]

export default function CoffeeFarmingProjectPage() {
  return (
    <SiteShell active="activities">
      <PageJsonLd
        path="/activities/projects/coffee-farming-chyamrungbesi"
        name={`Promoting Biodiversity Conservation through Sustainable Agriculture — Coffee Farming | ${ORG_NAME}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            Promoting Biodiversity Conservation through Sustainable Agriculture: Coffee Farming
          </h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="inline-flex items-start gap-2 text-white/80 mb-6 max-w-3xl">
            <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-[#D8A84E]" aria-hidden="true" />
            Chyamrungbesi, Bethanchowk Rural Municipality, Kavrepalanchok
          </p>
          <p className="text-lg text-white/75 max-w-4xl leading-relaxed">
            {ORG_SHORT} is working with local communities to connect biodiversity conservation with livelihoods, using
            coffee farming as a way to encourage sustainable land use and diversify rural income.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
              href="/gallery/coffee-farming-chyamrungbesi"
              className="inline-flex items-center text-sm font-semibold text-[#D8A84E] hover:text-[#e8c56a]"
            >
              View project photos
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div key={fact.label}>
                <Icon className="h-5 w-5 text-[#0B3D35] mb-2" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#2F80A8]">{fact.label}</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{fact.value}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="relative w-full h-[260px] sm:h-[420px] md:h-[520px] rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={coffeePlantVarieties}
              alt="A trainer holding a coffee seedling so farmers can see the leaves and stem"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
              priority
            />
          </div>

          <Card className="border border-gray-200">
            <CardHeader>
              <h2 className="text-3xl text-gray-900">Project Overview</h2>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p>
                {ORG_NAME} is working with local communities in Chyamrungbesi, Bethanchowk Rural Municipality,
                Kavrepalanchok, to promote biodiversity conservation through sustainable agricultural practices. The
                initiative recognises the importance of connecting environmental conservation with local livelihoods and
                creating economic opportunities for rural communities. Coffee farming offers an opportunity to encourage
                sustainable land use while supporting farmers in diversifying their sources of income.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project highlights</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((photo) => (
                <figure key={photo.caption} className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-600 leading-relaxed">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Coffee farming training</h2>
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
              As part of this initiative, {ORG_SHORT} organised a two-day coffee farming training programme on 1 and 2
              November 2026. Around 60 local farmers, including both men and women, participated in the programme. Two
              horticulture experts facilitated the training, sharing technical knowledge on coffee cultivation, suitable
              growing conditions, plant spacing, soil preparation, and the prevention and management of common plant
              diseases.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {topics.map((topic) => {
                const Icon = topic.icon
                return (
                  <Card key={topic.title} className="border border-gray-200">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Icon className="h-6 w-6 text-[#0B3D35]" aria-hidden="true" />
                        <h3 className="text-lg font-semibold">{topic.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600 leading-relaxed">{topic.description}</CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <Card className="border border-gray-200">
            <CardHeader>
              <h2 className="text-2xl text-gray-900">From the classroom to the field</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The training combined theoretical sessions with practical demonstrations. Farmers learned about the
                appropriate use of manure and fertilisers, preparation of planting pits, identification of coffee plant
                varieties and leaf conditions, and management of insects affecting coffee plants. The practical
                demonstration helped participants understand the preparation of planting mixtures and the techniques
                required for healthy coffee cultivation.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <figure className="space-y-2">
                  <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={nurseryVisit}
                      alt="Trainers and a farmer beside coffee seedlings under shade netting"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-600">A nursery visit during the field session.</figcaption>
                </figure>
                <figure className="space-y-2">
                  <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={participantQuestionWoman}
                      alt="A woman farmer standing to ask a question during the training"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-600">
                    Participants raise questions from their own farms.
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 rounded-lg bg-[#e4efe9] p-4 text-[#0B3D35]">
                <div className="relative h-56 w-full sm:h-40 sm:w-36 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={farmerWithToolkit}
                    alt="A farmer holding the Green Reskilling Toolkit booklet"
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
                <div className="flex gap-3">
                  <BookOpen className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <p>
                    {ORG_SHORT} also distributed its Green Reskilling Toolkit so farmers have additional learning
                    resources after the training.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <h2 className="text-2xl text-gray-900">Livelihoods and next steps</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Beyond technical training, the initiative aims to explore coffee farming as a sustainable livelihood
                opportunity for local communities. By improving agricultural knowledge and encouraging responsible
                farming practices, the programme seeks to support farmers in increasing productivity and developing
                opportunities for commercial coffee production.
              </p>
              <div className="rounded-lg border border-[#D8A84E]/50 bg-[#f8f1e3] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#8a6a2a] mb-1">Follow-up</p>
                <p className="text-gray-800">
                  {ORG_SHORT} plans to distribute coffee seedlings to participating farmers, helping them put the
                  knowledge gained during the training into practice.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Looking ahead</h2>
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={teamWardOffice}
                alt="The project team standing outside the Bethanchowk Ward No. 1 office in Chyamrungbesi"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Through this initiative, {ORG_SHORT} hopes to contribute to a future where biodiversity conservation and
              community prosperity go hand in hand. By supporting sustainable farming practices and strengthening local
              capacities, we aim to encourage agricultural approaches that benefit both people and the environment.
              Continued community engagement, access to agricultural resources, and follow-up support will be essential
              to making this effort a lasting contribution to local livelihoods and environmental sustainability.
            </p>
            <Link
              href="/gallery/coffee-farming-chyamrungbesi"
              className="inline-flex items-center text-sm font-semibold text-[#0B3D35] hover:text-[#164f45]"
            >
              See all 12 photos in the gallery
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
