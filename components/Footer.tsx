import Link from "next/link"
import { Instagram, Globe, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl">Torhann Ingeniería S.A.S.</span>
            </div>
            <p className="text-light/80 mb-4">
              Soluciones innovadoras y resultados reales en ingeniería civil, ambiental y agroindustrial. Transformamos
              ideas en soluciones sostenibles.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/torhann_ingenieria"
                className="text-light/80 hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="http://www.torhanningenieria.com" className="text-light/80 hover:text-gold transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:torhanningenieriasas@gmail.com"
                className="text-light/80 hover:text-gold transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="tel:3028404105" className="text-light/80 hover:text-gold transition-colors">
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-light/80 hover:text-gold transition-colors">
                  Obras y Diseño
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-light/80 hover:text-gold transition-colors">
                  Consultoría Especializada
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-light/80 hover:text-gold transition-colors">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-light/80 hover:text-gold transition-colors">
                  Drones y Geoespacial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-light/80">
              <p>📞 302 840 4105</p>
              <p>📞 314 817 6370</p>
              <p>📧 torhanningenieriasas@gmail.com</p>
              <p>🌐 www.torhanningenieria.com</p>
              <p>📲 @Torhann_ingenieria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-light/20 mt-8 pt-8 text-center">
          <p className="text-light/80">
            © {new Date().getFullYear()} Torhann Ingeniería S.A.S.  Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
