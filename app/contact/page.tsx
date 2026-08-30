import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageJsonLd } from "@/components/page-json-ld"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_ADDRESS_LINE, ORG_NAME, SITE_EMAIL } from "@/lib/site"
import { Mail, MapPin } from "lucide-react"

const description =
  "Contact ARANYA Initiatives in Suryabinayak-5, Bhaktapur, Nepal, or email aranyainitiatives@gmail.com."

export const metadata = createPageMetadata({
  title: "Contact in Nepal",
  description,
  path: "/contact",
})

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]

export default function ContactPage() {
  return (
    <SiteShell active="contact">
      <PageJsonLd
        path="/contact"
        name={`Contact | ${ORG_NAME}`}
        description={description}
        type="ContactPage"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 sm:py-20 bg-[#0B3D35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">{ORG_NAME}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full" />
          <p className="text-lg text-white/75 max-w-3xl">
            Use the details below to reach {ORG_NAME}. There is no contact form on this website.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F1F6F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Email</h2>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0B3D35]" aria-hidden="true" />
              <a href={`mailto:${SITE_EMAIL}`} className="text-[#0B3D35] hover:text-[#164f45]">
                {SITE_EMAIL}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Address</h2>
            <address className="not-italic inline-flex items-start gap-2">
              <MapPin className="h-4 w-4 text-[#0B3D35] mt-1" aria-hidden="true" />
              {ORG_ADDRESS_LINE}
            </address>
          </div>
          <p>
            For volunteering, see the{" "}
            <Link href="/volunteer" className="text-[#0B3D35] font-semibold hover:text-[#164f45]">
              volunteer page
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  )
}
