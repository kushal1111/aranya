import Link from "next/link"
import SiteShell from "@/components/site-shell"
import { createPageMetadata } from "@/lib/seo"
import { ORG_NAME } from "@/lib/site"

export const metadata = createPageMetadata({
  title: `Page Not Found | ${ORG_NAME}`,
  description: `This page is not available on the ${ORG_NAME} website. Return to the home page, activities, publications, or contact.`,
  path: "/404",
  absoluteTitle: true,
  index: false,
  follow: true,
})

export default function NotFound() {
  return (
    <SiteShell>
      <section className="py-20 sm:py-28 bg-[#0B3D35]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-3">Page not found</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">This page is not available</h1>
          <div className="w-12 h-1 bg-[#D8A84E] mb-6 rounded-full mx-auto" />
          <p className="text-lg text-white/75 mb-10">
            The address may be incorrect or the page may have moved. Continue from one of the pages below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#A7D46F] text-[#0B3D35] font-semibold hover:bg-[#96c45f]"
            >
              Home
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-white/30 text-white hover:bg-white/10"
            >
              Activities
            </Link>
            <Link
              href="/activities/publications"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-white/30 text-white hover:bg-white/10"
            >
              Publications
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-white/30 text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
