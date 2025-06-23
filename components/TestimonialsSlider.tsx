"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Ministerio de Ambiente",
      role: "Entidad Gubernamental",
      comment:
        "Torhann ha demostrado excelencia técnica en proyectos de gestión ambiental y sostenibilidad, cumpliendo con los más altos estándares de calidad.",
      rating: 5,
    },
    {
      name: "Gobernación del Meta",
      role: "Administración Pública",
      comment:
        "Su expertise en ordenamiento territorial y gestión de cuencas ha sido fundamental para el desarrollo de nuestros proyectos regionales.",
      rating: 5,
    },
    {
      name: "Sector Agroindustrial",
      role: "Empresas Privadas",
      comment:
        "Las soluciones integrales de Torhann han optimizado nuestros procesos y mejorado significativamente nuestra eficiencia operacional.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Resultados Garantizados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios de organizaciones que han confiado en nuestras soluciones de ingeniería integral.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          <div className="card p-6 md:p-8 text-center shadow-xl">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold fill-current" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic">
              "{testimonials[currentSlide].comment}"
            </blockquote>
            <div>
              <p className="font-bold text-primary text-lg">{testimonials[currentSlide].name}</p>
              <p className="text-muted-foreground">{testimonials[currentSlide].role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 btn btn-outline p-2 bg-light hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 btn btn-outline p-2 bg-light hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-highlight" : "bg-highlight/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
