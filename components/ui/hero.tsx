"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 opacity-90 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
              Climate Action Now
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Building a sustainable future together
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              Join our community to plant trees, restore ecosystems, and empower climate education for generations to
              come.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#get-involved" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-green-700 font-semibold shadow hover:shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                Get Involved
              </Link>

              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-6 text-sm text-white/80">
              <span className="font-medium">Recent impact:</span> Planted 50K+ trees across 25 countries.
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img
                src="/images/hero-forest.jpg"
                alt="Forest restoration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
