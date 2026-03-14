"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-emerald-800 mb-5 sm:mb-6">
              Building Climate Resilient Communities
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-emerald-800/90 max-w-2xl mx-auto lg:mx-0 mb-8">
              ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative
              strategies, inclusive renewable energy transitions, and nature-based community resilience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="#get-involved"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-700 text-white font-semibold shadow hover:bg-emerald-800 hover:shadow-lg w-full sm:w-auto"
              >
                <Heart className="mr-2 h-5 w-5" />
                Get Involved
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white w-full sm:w-auto bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
