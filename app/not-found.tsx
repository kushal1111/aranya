import Link from "next/link"
import SiteShell from "@/components/site-shell"

export default function NotFound() {
  return (
    <SiteShell>
      <section className="py-20 sm:py-28 bg-[#0d2b1e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
           
          >
            Page not found
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
           
          >
            This page is not available
          </h1>
          <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full mx-auto" />
          <p className="text-lg text-white/75 mb-10">
            The address may be incorrect or the page may have moved. Continue from one of the pages below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-amber-500 text-gray-900 font-semibold hover:bg-amber-400"
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
