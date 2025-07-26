import { Building, Users, Camera, BookOpen, Leaf, TrendingUp, ArrowRight, CheckCircle, Phone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-highlight" />,
      title: "Obras y Diseño",
      description: "Diseño, ejecución y supervisión de obras civiles. Interventoría técnica y administrativa. Planeación estructural, hidráulica, geotécnica y sanitaria.",
      features: ["Diseño estructural", "Supervisión de obras", "Interventoría técnica", "Planeación hidráulica"],
      color: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
      iconBg: "bg-blue-500"
    },
    {
      icon: <Users className="h-8 w-8 text-highlight" />,
      title: "Consultoría Especializada",
      description: "Cambio climático, ordenamiento territorial y gestión de cuencas. Gestión del riesgo. Evaluación de proyectos (MGA). Lean Six Sigma, HACCP, BPM.",
      features: ["Gestión de cuencas", "Evaluación MGA", "Lean Six Sigma", "HACCP y BPM"],
      color: "from-green-500/10 to-green-600/5 border-green-500/20",
      iconBg: "bg-green-500"
    },
    {
      icon: <Camera className="h-8 w-8 text-highlight" />,
      title: "Marketing Digital",
      description: "Creación de contenido audiovisual profesional. Diseño de estrategias para captar clientes potenciales. Gestión de presencia en redes sociales.",
      features: ["Contenido audiovisual", "Estrategias digitales", "Gestión de redes", "Captación de leads"],
      color: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
      iconBg: "bg-purple-500"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-highlight" />,
      title: "Capacitación Empresarial",
      description: "Normativas técnicas y sanitarias. Procesos técnicos y pausas activas. Bienestar organizacional.",
      features: ["Normativas técnicas", "Pausas activas", "Bienestar organizacional", "Capacitación continua"],
      color: "from-orange-500/10 to-orange-600/5 border-orange-500/20",
      iconBg: "bg-orange-500"
    },
    {
      icon: <Leaf className="h-8 w-8 text-highlight" />,
      title: "Sostenibilidad",
      description: "Planes de manejo ambiental. Implementación de Bonos de Carbono. Estrategias de adaptación al cambio climático. Aseguramiento de calidad en alimentos.",
      features: ["Manejo ambiental", "Bonos de Carbono", "Adaptación climática", "Calidad alimentaria"],
      color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20",
      iconBg: "bg-emerald-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-highlight" />,
      title: "Drones y Geoespacial",
      description: "Levantamientos topográficos de alta precisión. Seguimiento de obras, agricultura y urbanismo. Análisis visual para toma de decisiones.",
      features: ["Topografía de precisión", "Seguimiento de obras", "Agricultura de precisión", "Análisis geoespacial"],
      color: "from-red-500/10 to-red-600/5 border-red-500/20",
      iconBg: "bg-red-500"
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-light/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Soluciones <span className="text-highlight">Integrales</span> en Ingeniería
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios especializados en diferentes ramas de la ingeniería, adaptados a las necesidades 
            específicas de cada cliente con estándares internacionales de calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${service.color} border rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`${service.iconBg} p-4 rounded-2xl w-fit text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-highlight transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-highlight flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-highlight font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm">Saber más</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-highlight/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Necesitas una <span className="text-highlight">Solución Personalizada</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada proyecto es único. Contáctanos para recibir una propuesta adaptada a tus necesidades específicas 
              y objetivos de negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-gradient-to-r from-highlight to-primary text-light font-semibold px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="tel:3028404105" 
                className="border-2 border-highlight text-highlight font-semibold px-8 py-4 rounded-xl hover:bg-highlight hover:text-light transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Llamar Ahora
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
