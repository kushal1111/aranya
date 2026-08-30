import type React from "react"
import type { Viewport } from "next"
import { Figtree, Plus_Jakarta_Sans } from "next/font/google"
import { JsonLdScript } from "@/components/json-ld"
import { siteGraphJsonLd } from "@/lib/jsonld"
import { rootMetadata } from "@/lib/seo"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata = rootMetadata

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body className={`${figtree.className} min-h-screen bg-background antialiased`}>
        <JsonLdScript data={siteGraphJsonLd()} />
        {children}
      </body>
    </html>
  )
}
