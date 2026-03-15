import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"
import { ArrowLeft, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Program Coordination",
    bio: "Leads coordination of ARANYA's community programs and helps align field implementation with climate justice goals.",
  },
  {
    name: "Team Member 2",
    role: "Research and Policy",
    bio: "Supports legal and policy research, translating complex frameworks into practical guidance for local communities.",
  },
  {
    name: "Team Member 3",
    role: "Community Engagement",
    bio: "Works directly with partner communities to facilitate participation, consultations, and inclusive decision-making.",
  },
  {
    name: "Team Member 4",
    role: "Communications and Outreach",
    bio: "Builds public engagement through storytelling, media outreach, and strategic communications for ARANYA's initiatives.",
  },
]

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="py-16 sm:py-20 bg-[#0d2b1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Contact
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Users className="h-9 w-9 text-amber-400" />
            Our Team
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-4xl">
            Meet the people behind ARANYA's work across climate justice, community resilience, and just energy
            transition advocacy.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {member.name}
                  </CardTitle>
                  <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
