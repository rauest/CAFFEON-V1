import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display_SC, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "CAFFEON | Café de Especialidad Colombiano para Alta Cocina",
  description:
    "Café de especialidad colombiano premium para negocios de alta cocina. Origen, trazabilidad y calidad constante del grano a la mesa.",
  keywords: ["café de especialidad", "café colombiano", "alta cocina", "B2B", "café premium", "CAFFEON"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
