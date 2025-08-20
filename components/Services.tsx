import {
  Building,
  Users,
  Camera,
  BookOpen,
  Leaf,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Phone,
  Zap,
  Shield,
  Target,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Building className="h-6 w-6 md:h-8 md:w-8 text-light" />,
      title: "Obras y Diseño",
      description:
        "Diseño, ejecución y supervisión de obras civiles. Interventoría técnica y administrativa. Planeación estructural, hidráulica, geotécnica y sanitaria.",
      features: [
        "Diseño estructural",
        "Supervisión de obras",
        "Interventoría técnica",
        "Planeación hidráulica",
      ],
      color: "from-highlight/10 to-highlight/5 border-highlight/20",
      iconBg: "bg-highlight",
    },
    {
      icon: <Target className="h-6 w-6 md:h-8 md:w-8 text-light" />,
      title: "Consultoría Especializada",
      description:
        "Cambio climático, ordenamiento territorial y gestión de cuencas. Gestión del riesgo. Evaluación de proyectos (MGA). Lean Six Sigma, HACCP, BPM.",
      features: [
        "Gestión de cuencas",
        "Evaluación MGA",
        "Lean Six Sigma",
        "HACCP y BPM",
      ],
      color: "from-primary/10 to-primary/5 border-primary/20",
      iconBg: "bg-primary",
    },
    {
      icon: <Camera className="h-6 w-6 md:h-8 md:w-8 text-light" />,
      title: "Marketing Digital",
      description:
        "Creación de contenido audiovisual profesional. Diseño de estrategias para captar clientes potenciales. Gestión de presencia en redes sociales.",
      features: [
        "Contenido audiovisual",
        "Estrategias digitales",
        "Gestión de redes",
        "Captación de leads",
      ],
      color: "from-accent/10 to-accent/5 border-accent/20",
      iconBg: "bg-accent",
    },
    {
      icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-light" />,
      title: "Capacitación Empresarial",
      description:
        "Normativas técnicas y sanitarias. Procesos técnicos y pausas activas. Bienestar organizacional.",
      features: [
        "Normativas técnicas",
        "Pausas activas",
        "Bienestar organizacional",
        "Capacitación continua",
      ],
      color: "from-success/10 to-success/5 border-success/20",
      iconBg: "bg-success",
    },
    {
      icon: <Leaf className="h-6 w-6 md:h-8 md:w-8 text-light" />,
      title: "Sostenibilidad",
      description:
        "Planes de manejo ambiental. Implementación de Bonos de Carbono. Estrategias de adaptación al cambio climático. Aseguramiento de calidad en alimentos.",
      features: [
        "Manejo ambiental",
        "Bonos de Carbono",
        "Adaptación climática",
        "Calidad alimentaria",
      ],
      color: "from-gold/10 to-gold/5 border-gold/20",
      iconBg: "bg-gold",
    },
    {
      icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-light" />,
      title: "Drones y Geoespacial",
      description:
        "Levantamientos topográficos de alta precisión. Seguimiento de obras, agricultura y urbanismo. Análisis visual para toma de decisiones.",
      features: [
        "Topografía de precisión",
        "Seguimiento de obras",
        "Agricultura de precisión",
        "Análisis geoespacial",
      ],
      color: "from-highlight/10 to-primary/5 border-highlight/20",
      iconBg: "bg-highlight",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-16 md:py-24 bg-gradient-to-b from-light/50 to-background"
      aria-label="Servicios de ingeniería en Colombia"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
            Soluciones <span className="text-highlight">Integrales</span> en
            Ingeniería para Colombia
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Ofrecemos servicios especializados en diferentes ramas de la
            ingeniería en <strong>Colombia</strong>, adaptados a las necesidades
            específicas de cada cliente con estándares internacionales de
            calidad.
          </p>
        </header>

        {/* Services Grid */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          aria-label="Catálogo de servicios de ingeniería"
        >
          {services.map((service, index) => (
            <article key={index} className="group">
              <div
                className={`bg-gradient-to-br ${service.color} border rounded-2xl md:rounded-3xl p-6 md:p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16"
                  aria-hidden="true"
                ></div>

                {/* Icon */}
                <header className="relative mb-4 md:mb-6">
                  <div
                    className={`${service.iconBg} p-3 md:p-4 rounded-xl md:rounded-2xl w-fit text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                </header>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 group-hover:text-highlight transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 md:gap-3"
                      >
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-highlight flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-highlight font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="text-xs md:text-sm">Saber más</span>
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-highlight/5 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
              ¿Necesitas una{" "}
              <span className="text-highlight">Solución Personalizada</span> en
              Colombia?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Cada proyecto es único. Contáctanos para recibir una propuesta
              adaptada a tus necesidades específicas y objetivos de negocio en{" "}
              <strong>Colombia</strong>.
            </p>
            <nav className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a
                href="#contacto"
                className="bg-gradient-to-r from-highlight to-primary text-light font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
                aria-label="Solicitar cotización de servicios de ingeniería en Colombia"
              >
                Solicitar Cotización
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="tel:3028404105"
                className="border-2 border-highlight text-highlight font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-highlight hover:text-light transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
                aria-label="Llamar a Torhann Ingeniería en Colombia"
              >
                Llamar Ahora
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </nav>
          </div>
        </section>
      </div>

      {/* Schema.org Service Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Servicios de Ingeniería en Colombia",
            description:
              "Catálogo completo de servicios de ingeniería civil, ambiental y agroindustrial en Colombia",
            url: "https://torhanningenieriasas.com#servicios",
            numberOfItems: 6,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "Obras y Diseño",
                  description:
                    "Diseño, ejecución y supervisión de obras civiles en Colombia",
                  provider: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                  },
                  serviceType: "Ingeniería Civil",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "Consultoría Especializada",
                  description:
                    "Consultoría técnica especializada en gestión ambiental y proyectos en Colombia",
                  provider: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                  },
                  serviceType: "Consultoría Técnica",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Marketing Digital",
                  description:
                    "Servicios de marketing digital para empresas de ingeniería en Colombia",
                  provider: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                  },
                  serviceType: "Marketing Digital",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "Capacitación Empresarial",
                  description:
                    "Capacitación en normativas técnicas y procesos empresariales en Colombia",
                  provider: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                  },
                  serviceType: "Capacitación",
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "Service",
                  name: "Sostenibilidad",
                  description:
                    "Servicios de sostenibilidad ambiental y bonos de carbono en Colombia",
                  provider: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                  },
                  serviceType: "Sostenibilidad Ambiental",
                },
              },
              {
                "@type": "ListItem",
                position: 6,
                item: {
                  "@type": "Service",
                  name: "Drones y Geoespacial",
                  description:
                    "Servicios de topografía con drones y análisis geoespacial en Colombia",
                  provider: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                  },
                  serviceType: "Topografía y Geoespacial",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
}
