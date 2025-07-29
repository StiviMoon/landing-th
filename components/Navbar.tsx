"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#equipo", label: "Equipo" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-light/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center space-x-2">
            <div className="w-16 md:w-20 rounded-lg flex items-center justify-center">
             <img src="/logo.png" alt="logo" className="w-full h-auto" />
            </div>
            <span className="font-bold text-lg md:text-xl text-primary">Torhann</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-medium text-primary hover:text-highlight transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#contacto" className="btn btn-primary btn-sm lg:btn-md">
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-light/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-highlight hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="block mx-3 mt-4 btn btn-primary btn-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
