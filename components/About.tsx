import Image from "next/image"
import { Award, Users, Target, TrendingUp, CheckCircle, Globe } from "lucide-react"

export default function About() {
  const stats = [
    { number: "7+", label: "Años de Experiencia", icon: <TrendingUp className="h-5 w-5 md:h-6 md:w-6" /> },
    { number: "50+", label: "Proyectos Exitosos", icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6" /> },
    { number: "100%", label: "Satisfacción del Cliente", icon: <Award className="h-5 w-5 md:h-6 md:w-6" /> },
    { number: "24/7", label: "Soporte Técnico", icon: <Users className="h-5 w-5 md:h-6 md:w-6" /> },
  ]

  const values = [
    {
      icon: <Target className="h-6 w-6 md:h-8 md:w-8 text-highlight" />,
      title: "Compromiso",
      description: "Nos alineamos completamente con los objetivos de nuestros clientes, garantizando resultados que superan las expectativas.",
      color: "bg-highlight/10 border-highlight/20"
    },
    {
      icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-success" />,
      title: "Excelencia Técnica",
      description: "Garantizamos calidad respaldada por experiencia y metodologías probadas en cada proyecto.",
      color: "bg-success/10 border-success/20"
    },
    {
      icon: <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-gold" />,
      title: "Innovación",
      description: "Aplicamos tecnologías y metodologías modernas que generan valor tangible y ventajas competitivas.",
      color: "bg-gold/10 border-gold/20"
    },
    {
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8 text-accent" />,
      title: "Sostenibilidad",
      description: "Actuamos con ética, respeto y transparencia, priorizando el impacto positivo en el medio ambiente.",
      color: "bg-accent/10 border-accent/20"
    },
  ]

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-b from-background to-light/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Users className="h-3 w-3 md:h-4 md:w-4" />
            Sobre Nosotros
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
            Líderes en <span className="text-highlight">Ingeniería Integral</span>
          </h2>
          <p className="text-base md:text-lg lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Transformamos ideas en soluciones sostenibles con estándares internacionales de calidad, 
            innovación y compromiso con el futuro de Colombia.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-light rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-highlight mb-2 md:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
              <Image
                src="/equipo.png"
                alt="Equipo de ingenieros de Torhann trabajando en campo"
                width={600}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-light rounded-lg md:rounded-xl p-3 md:p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-highlight rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 md:h-6 md:w-6 text-light" />
                </div>
                <div>
                  <div className="font-bold text-primary text-xs md:text-sm">Certificados ISO</div>
                  <div className="text-xs text-muted-foreground">Calidad Garantizada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                Experiencia que <span className="text-highlight">Transforma</span>
              </h3>
              <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Somos una empresa colombiana especializada en <strong className="text-primary">ingeniería civil, ambiental y agroindustrial</strong>, 
                  con más de 7 años de experiencia en el diseño y ejecución de soluciones integrales.
                </p>
                <p>
                  Nuestro equipo interdisciplinario combina <strong className="text-primary">expertise técnico</strong> con metodologías innovadoras 
                  para transformar desafíos complejos en oportunidades de crecimiento sostenible.
                </p>
                <p>
                  Trabajamos con <strong className="text-primary">estándares internacionales</strong> y nos alineamos con las metas de sostenibilidad 
                  de Colombia 2050, garantizando resultados que impactan positivamente el entorno social y ambiental.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-highlight/10 to-highlight/5 border border-highlight/20 rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-highlight rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 md:h-5 md:w-5 text-light" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary">Nuestra Misión</h4>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Identificar, gestionar y resolver las necesidades técnicas, operativas y estratégicas de nuestros 
                  clientes, ofreciendo soluciones innovadoras y sostenibles.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gold rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary">Nuestra Visión</h4>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Ser en 2030 una empresa líder a nivel nacional en servicios de ingeniería y consultoría integral, 
                  reconocida por su capacidad de transformar necesidades en soluciones efectivas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary/5 to-highlight/5 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 leading-tight">
              Valores que nos <span className="text-highlight">Definen</span>
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Los principios fundamentales que guían cada decisión y acción en Torhann Ingeniería S.A.S.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className={`${value.color} border rounded-xl md:rounded-2xl p-6 md:p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  <div className="mb-4 md:mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 text-center leading-tight">{value.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
