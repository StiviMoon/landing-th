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
    <section className="py-20 bg-primary text-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de Trabajar con Nosotros</h2>
          <p className="text-lg text-light/90 max-w-2xl mx-auto">
            Resultados garantizados con soporte 24/7 y compromiso con la excelencia en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <p className="text-lg text-light/90">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
