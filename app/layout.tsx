import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Torhann Ingeniería S.A.S. - Soluciones Innovadoras · Resultados Reales",
  description:
    "Empresa colombiana dedicada a la consultoría y ejecución alineadas con estándares internacionales de calidad, sostenibilidad e innovación, en áreas de la ingeniería como Agroindustrial, Civil, Ambiental, Seguridad y Salud en el Trabajo (SST) y recursos humanos.",
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
