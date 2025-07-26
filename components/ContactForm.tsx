"use client"

import { useState } from "react"
import { Mail, Phone, Instagram, Globe, Clock, CheckCircle, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error al enviar:", error)
      alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Teléfonos",
      content: (
        <div className="space-y-1">
          <a href="tel:3028404105" className="block hover:text-highlight transition-colors">302 840 4105</a>
          <a href="tel:3148176370" className="block hover:text-highlight transition-colors">314 817 6370</a>
        </div>
      ),
      color: "bg-blue-500"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: (
        <a href="mailto:torhanningenieriasas@gmail.com" className="hover:text-highlight transition-colors">
          torhanningenieriasas@gmail.com
        </a>
      ),
      color: "bg-green-500"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Sitio Web",
      content: (
        <a href="https://www.torhanningenieria.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
          www.torhanningenieria.com
        </a>
      ),
      color: "bg-purple-500"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      content: (
        <a href="https://www.instagram.com/Torhann.ingenieriasas" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
          @Torhann.ingenieriasas
        </a>
      ),
      color: "bg-pink-500"
    },
  ]

  const supportFeatures = [
    { icon: <Clock className="h-4 w-4" />, text: "Soporte técnico 24/7" },
    { icon: <CheckCircle className="h-4 w-4" />, text: "Consultoría Lunes - Viernes" },
    { icon: <CheckCircle className="h-4 w-4" />, text: "Seguimiento permanente" },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-light/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Send className="h-4 w-4" />
            Contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ¿Listo para <span className="text-highlight">Transformar</span> tu Proyecto?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto y te ayudaremos a transformar tus ideas en soluciones reales 
            con la calidad y profesionalismo que mereces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="bg-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className={`${info.color} p-3 rounded-xl text-white flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-lg mb-2">{info.title}</h4>
                        <div className="text-muted-foreground text-sm">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Section */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-light">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-gold" />
                Soporte y Acompañamiento
              </h4>
              <div className="space-y-4">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-gold">
                      {feature.icon}
                    </div>
                    <span className="text-light/90">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-light/10 rounded-xl">
                <p className="text-sm text-light/80">
                  <strong>Respuesta garantizada:</strong> Te contactaremos en menos de 24 horas con una propuesta personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-light rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  Solicitar Cotización
                </h3>
                <p className="text-muted-foreground">
                  Completa el formulario y recibe una propuesta personalizada
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Describe tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, objetivos y cualquier detalle relevante..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-highlight to-primary text-light font-semibold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
