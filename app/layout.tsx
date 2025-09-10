import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohamed Othman Shaker - Data Analyst Portfolio",
  description:
    "Professional portfolio of Mohamed Othman Shaker, Data Analyst specializing in data visualization, insights, and machine learning. Skilled in Python, R, SQL, and Power BI.",
  generator: "v0.app",
  keywords: ["Data Analyst", "Data Visualization", "Python", "R", "SQL", "Power BI", "Machine Learning", "Portfolio"],
  authors: [{ name: "Mohamed Othman Shaker" }],
  openGraph: {
    title: "Mohamed Othman Shaker - Data Analyst Portfolio",
    description:
      "Turning data into insights. Professional Data Analyst with expertise in Python, R, SQL, and Power BI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
