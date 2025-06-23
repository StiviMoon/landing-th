import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Torhann Ingeniería S.A.S. - Soluciones Innovadoras · Resultados Reales",
  description:
    "Empresa colombiana dedicada al diseño y ejecución de soluciones integrales en ingeniería civil, ambiental y agroindustrial. Consultoría técnica y estratégica con estándares internacionales.",
  keywords:
    "ingeniería civil, ingeniería ambiental, agroindustrial, consultoría técnica, sostenibilidad, Colombia, obras civiles, gestión ambiental",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
