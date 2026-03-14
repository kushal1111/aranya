import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SiteFooter from "@/components/ui/site-footer";
import {
  ArrowLeft,
  Landmark,
  Scale,
  Users,
} from "lucide-react";

export default function JetToolkitProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container px-4 md:px-6 mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-800 hover:bg-green-200"
          >
            Projects
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            JET Consultation Project at Bojheni
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
            As the world shifts from fossil fuels to renewable energy,
            large-scale infrastructure such as solar farms and wind parks often
            occupies vast areas of land traditionally held by local and
            Indigenous communities. To ensure this transition does not repeat
            exploitative patterns, ARANYA developed the JET Toolkit to make
            legal and policy knowledge practical, accessible, and actionable.
          </p>
          <div className="mt-8">
            <Link href="/activities/projects">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto space-y-10">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This project translates complex legal and environmental policies
                into community-friendly guidance so people can understand how
                the global energy transition affects their lives, livelihoods,
                and landscapes. The toolkit is designed to support equitable
                decision-making by strengthening legal literacy, community
                participation, and accountability in renewable energy
                development processes. ARANYA hosted intensive consultation
                sessions at Bojheni, Shankharapur Municipality to map
                socio-economic and land rights, helping community members
                identify protections they are legally entitled to and translate
                legal awareness into collective action against hydroelectric
                transmission line and sub-station construction.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Rights and Policy Frameworks
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Landmark className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-lg">
                      Right to Information (RTI)
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Practical use of RTI mechanisms to obtain project approvals,
                  records, and implementation details.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-lg">
                      Environmental Protection Act
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Plain-language interpretation of environmental safeguards and
                  legal protections tied to energy infrastructure.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-lg">ILO 169 and FPIC</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Emphasis on Free, Prior and Informed Consent (FPIC) in
                  projects affecting Indigenous lands.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Workshops</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 leading-relaxed">
                <p>
                  Participants are equipped with strategic tools to organize
                  effectively and influence decision-making.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Documenting rights violations and collecting evidence.
                  </li>
                  <li>
                    Filing formal complaints with local and district
                    authorities.
                  </li>
                  <li>Using media channels to amplify community voices.</li>
                  <li>
                    Applying Advocacy Planning and Power Analysis to build
                    alliances and challenge unfair power dynamics.
                  </li>
                </ul>
                <p>
                  Together, these tools support an energy transition that is
                  equitable, transparent, and accountable to affected
                  communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
