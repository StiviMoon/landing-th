"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: "Suslym Baquero",
      role: "Administradora Productos Almopan",
      comment:
        "Los profesionales con los que cuenta Torhann Ingeniería son expertos en el tema de normatividad sanitaria y en el área de ingeniería civil. Me han ayudado en mi fábrica apuntando a objetivos que han contribuido a la organización de mi compañía.",
      rating: 5,
    },
    {
      name: "María del Pilar Londoño Cardenas",
      role: "Propietaria Empresa Pilis",
      comment:
        "Me encanta que mi empresa tenga una consultoría 10/10. El profesionalismo con que ejecutan los proyectos es excelente y me han ayudado a que la producción sea mejor que meses atrás. He contado con la estandarización de procesos de mis productos.",
      rating: 5,
    },
    {
      name: "Johana Romero Rojas",
      role: "Propietaria Agrosolar",
      comment:
        "El equipo de Torhann Ingeniería S.A.S me ha ayudado a tener un control en el área de recursos humanos. Recomiendo la consultoría y los servicios que ofrece Torhann por su profesionalismo y experiencia.",
      rating: 5,
    },
    {
      name: "Jerley Pimentel",
      role: "Propietario El Trigal Fabricación S.A.S",
      comment:
        "Agradezco inmensamente por la capacidad de sostener en mi planta la consultoría en normatividad sanitaria y el diseño de planos de la fábrica del Trigal, lo cual me ha ayudado a estandarizar los procesos y organizar la planta.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonios"
      className="py-16 md:py-20 bg-light overflow-hidden"
      aria-label="Testimonios de clientes de Torhann Ingeniería en Colombia"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 leading-tight">
            Resultados Garantizados
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Testimonios de organizaciones que han confiado en nuestras
            soluciones de ingeniería integral.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          <div className="card p-4 md:p-6 lg:p-8 text-center shadow-xl">
            <div className="flex justify-center mb-3 md:mb-4">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 md:h-5 md:w-5 text-gold fill-current"
                />
              ))}
            </div>
            <blockquote className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 italic leading-relaxed">
              "{testimonials[currentSlide].comment}"
            </blockquote>
            <div>
              <p className="font-bold text-primary text-base md:text-lg leading-tight">
                {testimonials[currentSlide].name}
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                {testimonials[currentSlide].role}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 btn btn-outline p-2 bg-light hover:bg-background rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 btn btn-outline p-2 bg-light hover:bg-background rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-highlight" : "bg-highlight/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
