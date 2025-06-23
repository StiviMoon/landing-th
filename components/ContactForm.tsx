"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, Instagram, Globe } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!response.ok) throw new Error("Error en la solicitud")

    alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.")
    setFormData({ name: "", email: "", message: "" })
  } catch (error) {
    console.error("Error al enviar:", error)
    alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.")
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría escuchar sobre él y ayudarte a transformar tus ideas en
            soluciones reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <Phone className="h-6 w-6 text-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Teléfonos</p>
                    <p className="text-muted-foreground">302 840 4105 | 314 817 6370</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <Mail className="h-6 w-6 text-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-muted-foreground">torhanningenieriasas@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <Globe className="h-6 w-6 text-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Sitio Web</p>
                    <p className="text-muted-foreground">www.torhanningenieria.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Instagram</p>
                    <p className="text-muted-foreground">@Torhann_ingenieria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-6 rounded-lg text-light">
              <h4 className="text-xl font-bold mb-4">Soporte y Acompañamiento</h4>
              <div className="space-y-2">
                <p>
                  <strong>Soporte técnico:</strong> 24/7
                </p>
                <p>
                  <strong>Consultoría:</strong> Lunes - Viernes
                </p>
                <p>
                  <strong>Seguimiento de proyectos:</strong> Permanente
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6 shadow-xl">
            <h3 className="text-2xl text-primary font-bold mb-6">Solicitar Cotización</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Nombre Completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Correo Electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Describe tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto, necesidades específicas y objetivos..."
                  rows={5}
                  className="textarea"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-md w-full">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
