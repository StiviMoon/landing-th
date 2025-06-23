"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/puente.jpeg",
      alt: "Equipo de Torhann realizando levantamiento topográfico con drones",
      title: "Levantamiento Topográfico",
    },
    {
       
      src: "/rio.jpeg",
      alt: "Ingenieros de Torhann supervisando obra civil",
      title: "Supervisión de Obras",
    },
    {
      src: "/mesa.jpeg",
      alt: "Consultoría ambiental en campo",
      title: "Consultoría Ambiental",
    },
    {
      src: "/puente2.jpeg",
      alt: "Equipo trabajando en diseño estructural",
      title: "Diseño Estructural",
    },
    {
      src: "/charla1.jpeg",
      alt: "Análisis de calidad en planta agroindustrial",
      title: "Control de Calidad",
    },
    {
      
      src: "/charla.jpeg",
      alt: "Capacitación empresarial en normativas técnicas",
      title: "Capacitación Técnica",
    },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestro Trabajo en Acción</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce de cerca cómo nuestro equipo desarrolla proyectos de ingeniería con los más altos estándares de
            calidad y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                  <h3 className="text-light font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-light hover:text-gold transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="rounded-lg max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-light font-bold text-xl mb-2">{galleryImages[selectedImage].title}</h3>
                  <p className="text-light/90 text-sm">{galleryImages[selectedImage].alt}</p>
                </div>
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light hover:text-gold transition-colors"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-light hover:text-gold transition-colors"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
