import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aaranya - Building a Sustainable Future",
  description:
    "Join Aaranya in the fight against climate change through innovative solutions, community engagement, and sustainable practices that protect our planet.",
  keywords:
    "climate change, sustainability, environment, reforestation, clean water, renewable energy, climate education",
  authors: [{ name: "Aaranya" }],
  creator: "Aaranya",
  publisher: "Aaranya",
  openGraph: {
    title: "Aaranya - Building a Sustainable Future",
    description: "Join us in the fight against climate change through innovative environmental solutions.",
    url: "https://aaranya.org",
    siteName: "Aaranya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaranya - Building a Sustainable Future",
    description: "Join us in the fight against climate change through innovative environmental solutions.",
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
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
