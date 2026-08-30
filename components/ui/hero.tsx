import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import heroBackground from "@/app/images/hero/WhatsApp Image 2026-03-14 at 7.49.50 PM.jpeg"
import { ORG_EXPANDED, ORG_NAME, ORG_SHORT } from "@/lib/site"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[88vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-[#0d2b1e]" />
      <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-1/2">
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.22]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,120,60,0.55),transparent_60%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,60,30,0.7),transparent_60%)]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.35rem] lg:text-6xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight">
            Building{" "}
            <span className="text-amber-400">Climate-Resilient</span> Communities Through Equitable Climate Action
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            {ORG_NAME}—{ORG_EXPANDED}—is a Nepal-based non-profit organization advancing equitable climate solutions.
            {ORG_SHORT} works through carbon-negative strategies, just energy transitions, and nature-based community
            resilience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#get-involved"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:shadow-xl w-full sm:w-auto"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Get Involved
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border border-white/25 hover:border-white/60 text-white/85 hover:text-white font-semibold text-base transition-all duration-200 bg-white/5 hover:bg-white/10 w-full sm:w-auto"
            >
              About ARANYA
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
            {[
              { value: "3", label: "Core Thematic Areas" },
              { value: "100+", label: "People Reached" },
              { value: "2", label: "Publications" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-amber-400">
                  {stat.value}
                </div>
                <div className="text-sm text-white/55 mt-0.5 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
