import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/he.jpg"
          alt="Ingeniería civil y ambiental"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-light">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Torhann Ingeniería S.A.S.
            <span className="block text-gold text-2xl md:text-3xl font-medium mt-2">
              Soluciones Innovadoras · Resultados Reales
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light/90 max-w-3xl mx-auto">
            Empresa colombiana dedicada al diseño y ejecución de soluciones integrales en ingeniería civil, ambiental y
            agroindustrial, alineadas con estándares internacionales de calidad, sostenibilidad e innovación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#servicios" className="btn btn-lg bg-highlight text-light hover:bg-primary font-semibold">
              Nuestros Servicios
            </Link>
            <Link
              href="#contacto"
              className="btn btn-lg btn-outline border-light text-light hover:bg-light hover:text-primary"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
