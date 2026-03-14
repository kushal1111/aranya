"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

type SiteHeaderProps = {
  active?: "home" | "activities" | "gallery"
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About", href: "/#about", key: "about" as const },
    { label: "Activities", href: "/activities", key: "activities" as const },
    { label: "Gallery", href: "/gallery", key: "gallery" as const },
    { label: "Get Involved", href: "/#get-involved", key: "get-involved" as const },
    { label: "Contact", href: "/#contact", key: "contact" as const },
  ]

  return (
    <nav aria-label="Primary navigation" className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link href="/" aria-label="Aaranya home">
            <Image src="/docs/logo.jpg" alt="Aaranya logo" width={250} height={100} className="h-14 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                (active === "gallery" && item.key === "gallery") ||
                (active === "activities" && item.key === "activities") ||
                (active === "home" && item.key === "about")

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-150 ${
                    isActive ? "text-emerald-700" : "text-gray-600 hover:text-emerald-700"
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.07em" }}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button
              className="hidden md:inline-flex bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-sm px-5 py-2 text-sm uppercase tracking-wide shadow-none border-0"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Donate Now
            </Button>
            <button
              className="md:hidden p-2 rounded text-gray-600 hover:text-emerald-700"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type="button"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t border-gray-200 bg-white px-4 py-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-emerald-700"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.07em" }}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="mt-2 w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-sm px-5 py-2 text-sm uppercase tracking-wide shadow-none border-0"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
