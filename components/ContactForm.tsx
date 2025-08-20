"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Globe,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error en la solicitud");

      alert(
        "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto."
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Teléfonos",
      content: (
        <div className="space-y-1">
          <a
            href="tel:3028404105"
            className="block hover:text-highlight transition-colors text-sm md:text-base"
            aria-label="Llamar al 302 840 4105"
          >
            302 840 4105
          </a>
          <a
            href="tel:3148176370"
            className="block hover:text-highlight transition-colors text-sm md:text-base"
            aria-label="Llamar al 314 817 6370"
          >
            314 817 6370
          </a>
        </div>
      ),
      color: "bg-blue-500",
    },
    {
      icon: <Mail className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Email",
      content: (
        <a
          href="mailto:torhanningenieriasas@gmail.com"
          className="hover:text-highlight transition-colors text-sm md:text-base"
          aria-label="Enviar email a torhanningenieriasas@gmail.com"
        >
          torhanningenieriasas@gmail.com
        </a>
      ),
      color: "bg-green-500",
    },
    {
      icon: <Globe className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Sitio Web",
      content: (
        <a
          href="https://www.torhanningenieriasas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors text-sm md:text-base"
          aria-label="Visitar sitio web principal de Torhann Ingeniería"
        >
          www.torhanningenieriasas.com
        </a>
      ),
      color: "bg-purple-500",
    },
    {
      icon: <Instagram className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Instagram",
      content: (
        <a
          href="https://www.instagram.com/Torhann.ingenieriasas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors text-sm md:text-base"
          aria-label="Seguir a Torhann Ingeniería en Instagram"
        >
          @Torhann.ingenieriasas
        </a>
      ),
      color: "bg-pink-500",
    },
  ];

  const supportFeatures = [
    {
      icon: <Clock className="h-3 w-3 md:h-4 md:w-4" />,
      text: "Soporte técnico 24/7",
    },
    {
      icon: <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />,
      text: "Consultoría Lunes - Viernes",
    },
    {
      icon: <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />,
      text: "Seguimiento permanente",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-16 md:py-20 bg-gradient-to-b from-background to-light/30"
      aria-label="Contactar a Torhann Ingeniería en Colombia"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Send className="h-3 w-3 md:h-4 md:w-4" />
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
            ¿Listo para <span className="text-highlight">Transformar</span> tu
            Proyecto en Colombia?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Cuéntanos sobre tu proyecto y te ayudaremos a transformar tus ideas
            en soluciones reales con la calidad y profesionalismo que mereces en{" "}
            <strong>Colombia</strong>.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <section
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
            aria-label="Información de contacto"
          >
            {/* Contact Cards */}
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => (
                <article key={index} className="group">
                  <div className="bg-light rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div
                        className={`${info.color} p-2 md:p-3 rounded-lg md:rounded-xl text-white flex-shrink-0`}
                        aria-hidden="true"
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-base md:text-lg mb-1 md:mb-2">
                          {info.title}
                        </h4>
                        <div className="text-muted-foreground text-xs md:text-sm">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Support Section */}
            <aside className="bg-gradient-to-br from-primary to-accent rounded-xl md:rounded-2xl p-6 md:p-8 text-light">
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-gold" />
                Soporte y Acompañamiento en Colombia
              </h4>
              <div className="space-y-3 md:space-y-4">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="text-gold" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <span className="text-light/90 text-sm md:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-light/10 rounded-lg md:rounded-xl">
                <p className="text-xs md:text-sm text-light/80 leading-relaxed">
                  <strong>Respuesta garantizada:</strong> Te contactaremos en
                  menos de 24 horas con una propuesta personalizada para{" "}
                  <strong>Colombia</strong>.
                </p>
              </div>
            </aside>
          </section>

          {/* Contact Form */}
          <section
            className="relative order-1 lg:order-2"
            aria-label="Formulario de contacto"
          >
            <div className="bg-light rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100">
              <header className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2 md:mb-3 leading-tight">
                  Solicitar Cotización en Colombia
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Completa el formulario y recibe una propuesta personalizada
                  para tu proyecto
                </p>
              </header>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                aria-label="Formulario de solicitud de cotización"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2"
                    >
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
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white text-sm md:text-base"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2"
                    >
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
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white text-sm md:text-base"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2"
                  >
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
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white text-sm md:text-base"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2"
                  >
                    Describe tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, objetivos y cualquier detalle relevante para Colombia..."
                    rows={4}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent transition-all duration-300 bg-white resize-none text-sm md:text-base"
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-highlight to-primary text-light font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg md:rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                  aria-label="Enviar solicitud de cotización para Colombia"
                >
                  <Send className="h-4 w-4 md:h-5 md:w-5" />
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {/* Schema.org Contact Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Torhann Ingeniería S.A.S. Colombia",
            description:
              "Contacta con Torhann Ingeniería para servicios de ingeniería en Colombia",
            url: "https://torhanningenieriasas.com#contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Torhann Ingeniería S.A.S.",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+57-302-840-4105",
                  contactType: "customer service",
                  areaServed: "CO",
                  availableLanguage: "Spanish",
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:00",
                    closes: "18:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+57-314-817-6370",
                  contactType: "customer service",
                  areaServed: "CO",
                  availableLanguage: "Spanish",
                },
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "torhanningenieriasas@gmail.com",
                  areaServed: "CO",
                  availableLanguage: "Spanish",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
                addressRegion: "Colombia",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
            },
          }),
        }}
      />
    </section>
  );
}
