import type React from "react"
import type { Metadata } from "next"
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
  icons: {
    icon: "/docs/logo.jpg",
    apple: "/docs/logo.jpg",
  },
  openGraph: {
    title: "Aaranya",
    description:
      "ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative strategies, inclusive renewable energy transitions, and nature-based community resilience.",
    url: "https://aranyainitiatives.org",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
