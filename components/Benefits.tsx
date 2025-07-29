import { CheckCircle } from "lucide-react"

export default function Benefits() {
  const benefits = [
    "Monitoreo y mejora continua de los proyectos",
    "Diseños estructurados y seguimiento profesional",
    "Capacitación continua para el personal de nuestros clientes",
    "Estrategias alineadas con las metas de sostenibilidad de Colombia 2050",
    "Producción de contenido de valor para captar nuevos clientes",
    "Acompañamiento técnico permanente durante todo el proceso",
  ]

  return (
    <section className="py-16 md:py-20 bg-primary text-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
            Beneficios de Trabajar con Nosotros
          </h2>
          <p className="text-base md:text-lg text-light/90 max-w-2xl mx-auto leading-relaxed px-2">
            Resultados garantizados con soporte 24/7 y compromiso con la excelencia en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 md:space-x-4">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-success flex-shrink-0 mt-0.5" />
              <p className="text-sm md:text-lg text-light/90 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
