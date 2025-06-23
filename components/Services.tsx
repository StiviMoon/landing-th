import { Building, Users, Camera, BookOpen, Leaf, DrillIcon as Drone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-highlight" />,
      title: "Obras y Diseño",
      description:
        "Diseño, ejecución y supervisión de obras civiles. Interventoría técnica y administrativa. Planeación estructural, hidráulica, geotécnica y sanitaria.",
    },
    {
      icon: <Users className="h-8 w-8 text-highlight" />,
      title: "Consultoría Especializada",
      description:
        "Cambio climático, ordenamiento territorial y gestión de cuencas. Gestión del riesgo. Evaluación de proyectos (MGA). Lean Six Sigma, HACCP, BPM.",
    },
    {
      icon: <Camera className="h-8 w-8 text-highlight" />,
      title: "Marketing Digital",
      description:
        "Creación de contenido audiovisual profesional. Diseño de estrategias para captar clientes potenciales. Gestión de presencia en redes sociales.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-highlight" />,
      title: "Capacitación Empresarial",
      description: "Normativas técnicas y sanitarias. Procesos técnicos y pausas activas. Bienestar organizacional.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-highlight" />,
      title: "Sostenibilidad",
      description:
        "Planes de manejo ambiental. Implementación de Bonos de Carbono. Estrategias de adaptación al cambio climático. Aseguramiento de calidad en alimentos.",
    },
    {
      icon: <Drone className="h-8 w-8 text-highlight" />,
      title: "Drones y Geoespacial",
      description:
        "Levantamientos topográficos de alta precisión. Seguimiento de obras, agricultura y urbanismo. Análisis visual para toma de decisiones.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en diferentes ramas de la ingeniería, adaptadas a las necesidades
            específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-background rounded-full w-fit">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
