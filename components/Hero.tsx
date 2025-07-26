import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 z-0 bg-primary"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-light">
        <div className="max-w-4xl mx-auto">
          {/* Logo Container */}
          <div className="flex justify-center mb-4">
            <Image 
              src="/logotC.png" 
              alt="Torhann Ingeniería S.A.S." 
              width={400} 
              height={150} 
              className="object-contain"
            />
          </div>
          
          <span className="block text-white font-bold text-2xl md:text-3xl mb-6">
            Soluciones Innovadoras · Resultados Reales
          </span>
          
          <p className="text-xl md:text-2xl mb-8 text-light/90 max-w-3xl mx-auto">
             Empresa colombiana dedicada a la consultoría y ejecución alineadas con estándares internacionales de calidad, sostenibilidad e innovación, en áreas de la ingeniería como Agroindustrial, Civil, Ambiental, Seguridad y Salud en el Trabajo (SST) y recursos humanos.
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
