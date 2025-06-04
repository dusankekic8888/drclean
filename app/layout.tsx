import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DrClean.com.au - Professional Drone Cleaning Services Australia",
  description:
    "Expert drone cleaning services for gutters, windows, skylights, solar panels, pressure washing and specialised cleaning across Australia. Safe, efficient, and affordable cleaning solutions using advanced drone technology.",
  keywords:
    "drone cleaning, gutter cleaning, window cleaning, skylight cleaning, solar panel cleaning, pressure washing, Australia, professional cleaning services, exterior cleaning",
  authors: [{ name: "DrClean Australia" }],
  openGraph: {
    title: "DrClean.com.au - Professional Drone Cleaning Services",
    description: "Expert drone cleaning services for gutters, windows, skylights, and solar panels across Australia.",
    url: "https://drclean.com.au",
    siteName: "DrClean Australia",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
