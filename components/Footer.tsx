import Link from "next/link"
import Image from "next/image"
import { Instagram, Globe, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Obras y Diseño", href: "#servicios" },
    { name: "Consultoría Especializada", href: "#servicios" },
    { name: "Sostenibilidad", href: "#servicios" },
    { name: "Drones y Geoespacial", href: "#servicios" },
    { name: "Marketing Digital", href: "#servicios" },
    { name: "Capacitación Empresarial", href: "#servicios" },
  ]

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/torhann.ingenieriasas",
      icon: <Instagram className="h-4 w-4 md:h-5 md:w-5" />,
      color: "hover:text-pink-500"
    },
    {
      name: "Sitio Web",
      href: "http://www.torhanningenieria.com",
      icon: <Globe className="h-4 w-4 md:h-5 md:w-5" />,
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      href: "mailto:torhanningenieriasas@gmail.com",
      icon: <Mail className="h-4 w-4 md:h-5 md:w-5" />,
      color: "hover:text-green-500"
    },
    {
      name: "Teléfono",
      href: "tel:3028404105",
      icon: <Phone className="h-4 w-4 md:h-5 md:w-5" />,
      color: "hover:text-red-500"
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-accent text-light">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 md:mb-6">
              <Image 
                src="/logotC.png" 
                alt="Torhann Ingeniería S.A.S." 
                width={180}
                height={72}
                className="object-contain mb-3 md:mb-4 w-40 md:w-48"
              />
              <p className="text-light/90 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                Soluciones innovadoras y resultados reales en ingeniería civil, ambiental y agroindustrial. 
                Transformamos ideas en soluciones sostenibles con estándares internacionales de calidad.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target={social.name !== "Teléfono" && social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Teléfono" && social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`bg-light/10 p-2 md:p-3 rounded-lg md:rounded-xl text-light/80 transition-all duration-300 ${social.color} hover:bg-light/20 hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Globe className="h-4 w-4 md:h-5 md:w-5 text-gold" />
              Nuestros Servicios
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-light/80 hover:text-gold transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Phone className="h-4 w-4 md:h-5 md:w-5 text-gold" />
              Información de Contacto
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-gold mt-0.5 md:mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-light/90 text-xs md:text-sm">Teléfonos:</p>
                  <a href="tel:3028404105" className="block text-light hover:text-gold transition-colors text-xs md:text-sm">302 840 4105</a>
                  <a href="tel:3148176370" className="block text-light hover:text-gold transition-colors text-xs md:text-sm">314 817 6370</a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <Mail className="h-3 w-3 md:h-4 md:w-4 text-gold mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light/90 text-xs md:text-sm">Email:</p>
                  <a href="mailto:torhanningenieriasas@gmail.com" className="text-light hover:text-gold transition-colors text-xs md:text-sm">
                    torhanningenieriasas@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <Globe className="h-3 w-3 md:h-4 md:w-4 text-gold mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light/90 text-xs md:text-sm">Sitio Web:</p>
                  <a href="https://www.torhanningenieria.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-gold transition-colors text-xs md:text-sm">
                    www.torhanningenieria.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <Instagram className="h-3 w-3 md:h-4 md:w-4 text-gold mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light/90 text-xs md:text-sm">Instagram:</p>
                  <a href="https://www.instagram.com/Torhann.ingenieriasas" target="_blank" rel="noopener noreferrer" className="text-light hover:text-gold transition-colors text-xs md:text-sm">
                    @Torhann.ingenieriasas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-light/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-light/80 text-xs md:text-sm">
                © {new Date().getFullYear()} Torhann Ingeniería S.A.S. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2 text-light/60">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-light/60">
                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                <span>Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
