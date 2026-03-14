"use client"

import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[88vh] flex items-center">
      {/* Dark forest-green layered background */}
      <div className="absolute inset-0 z-0 bg-[#0d2b1e]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,120,60,0.55),transparent_60%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,60,30,0.7),transparent_60%)]" />
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-4xl">

          {/* Label chip */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            Non-Profit · Climate Action · Nepal
          </div>

          {/* Main headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-none"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.01em" }}
          >
            Building
            <span className="text-amber-400"> Climate</span>
            <br />
            Resilient
            <br />
            Communities
          </h1>

          {/* Sub-tagline */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            ARANYA is a non-profit dedicated to advancing equitable climate solutions through
            carbon-negative strategies, inclusive renewable energy transitions, and
            nature-based community resilience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#get-involved"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:shadow-xl w-full sm:w-auto"
            >
              <Heart className="h-4 w-4" />
              Get Involved
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border border-white/25 hover:border-white/60 text-white/85 hover:text-white font-semibold text-base transition-all duration-200 bg-white/5 hover:bg-white/10 w-full sm:w-auto"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
            {[
              { value: "3", label: "Core Thematic Areas" },
              { value: "100+", label: "Communities Reached" },
              { value: "2", label: "Publications" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl sm:text-4xl font-bold text-amber-400"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
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
