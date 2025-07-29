import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Color */}
      <div className="absolute inset-0 z-0 bg-primary"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-light">
        <div className="max-w-4xl mx-auto">
          {/* Logo Container */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Image 
              src="/logotC.png" 
              alt="Torhann Ingeniería S.A.S." 
              width={300}
              height={112}
              className="object-contain w-64 md:w-80 lg:w-96"
              priority
            />
          </div>
          
          <h1 className="block text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-tight">
            Soluciones Innovadoras · Resultados Reales
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-light/90 max-w-4xl mx-auto leading-relaxed px-2">
             Empresa colombiana dedicada a la consultoría y ejecución alineadas con estándares internacionales de calidad, sostenibilidad e innovación, en áreas de la ingeniería como Agroindustrial, Civil, Ambiental, Seguridad y Salud en el Trabajo (SST) y recursos humanos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link 
              href="#servicios" 
              className="btn btn-lg bg-highlight text-light hover:bg-primary font-semibold w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="#contacto"
              className="btn btn-lg btn-outline border-light text-light hover:bg-light hover:text-primary w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-light rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-light rounded-full mt-1.5 md:mt-2"></div>
        </div>
      </div>
    </section>
  )
}
