import type React from "react"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aaranya",
  description:
    "ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative strategies, inclusive renewable energy transitions, and nature-based community resilience.",
  keywords:
    "climate change, sustainability, environment, reforestation, clean water, renewable energy, climate education",
  authors: [{ name: "Aaranya" }],
  creator: "Aaranya",
  publisher: "Aaranya",
  openGraph: {
    title: "Aaranya",
    description:
      "ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative strategies, inclusive renewable energy transitions, and nature-based community resilience.",
    url: "https://aaranya.org",
    siteName: "Aaranya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaranya",
    description:
      "ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative strategies, inclusive renewable energy transitions, and nature-based community resilience.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children} <SpeedInsights /></body>
    </html> 
  )
}
