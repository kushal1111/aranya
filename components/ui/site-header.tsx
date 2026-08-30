"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { DONATION_MAILTO, LOGO_PATH, ORG_NAME } from "@/lib/site"

type SiteHeaderProps = {
  active?: "home" | "activities" | "gallery" | "contact"
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About", href: "/#about", key: "about" as const },
    { label: "Activities", href: "/activities", key: "activities" as const },
    { label: "Gallery", href: "/gallery", key: "gallery" as const },
    { label: "Get Involved", href: "/#get-involved", key: "get-involved" as const },
    { label: "Contact", href: "/contact", key: "contact" as const },
  ]

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link href="/" aria-label={`${ORG_NAME} home`}>
            <Image
              src={LOGO_PATH}
              alt={`${ORG_NAME} logo`}
              width={250}
              height={100}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                (active === "gallery" && item.key === "gallery") ||
                (active === "activities" && item.key === "activities") ||
                (active === "contact" && item.key === "contact") ||
                (active === "home" && item.key === "about")

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-heading px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-150 ${
                    isActive ? "text-[#0B3D35]" : "text-gray-600 hover:text-[#0B3D35]"
                  }`}
                  style={{ letterSpacing: "0.07em" }}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={DONATION_MAILTO}
              className="font-heading hidden md:inline-flex bg-[#A7D46F] hover:bg-[#96c45f] text-[#0B3D35] font-semibold rounded-sm px-5 py-2 text-sm uppercase tracking-wide"
            >
              Donation Enquiry
            </Link>
            <button
              className="md:hidden p-2 rounded text-gray-600 hover:text-[#0B3D35]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
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
                className="font-heading px-2 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#0B3D35]"
                style={{ letterSpacing: "0.07em" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={DONATION_MAILTO}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading mt-2 inline-flex items-center justify-center w-full bg-[#A7D46F] hover:bg-[#96c45f] text-[#0B3D35] font-semibold rounded-sm px-5 py-2 text-sm uppercase tracking-wide"
            >
              Donation Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
