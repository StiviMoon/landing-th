export default function Timeline() {
  const milestones = [
    {
      year: "2017",
      title: "Inicio de Experiencia",
      description: "Inicio de experiencia en obras y gestión de proyectos de ingeniería.",
    },
    {
      year: "2018-2020",
      title: "Diseño Especializado",
      description: "Diseño estructural e hidráulico de obras de protección y desarrollo de expertise técnico.",
    },
    {
      year: "2020",
      title: "Desarrollo de Marca",
      description: "Desarrollo de marca asociada e inicio de nuevas líneas de negocio.",
    },  
    {
      year: "2020 - 2021",
      title: "Diseño de plantas agroindustriales",
      description: "Diseño de plantas agroindustriales para el sector agroindustrial.",
    },
    {
      year: "2022",
      title: "Estandarización de Procesos",
      description: "Participación en estandarización de procesos con empresas aliadas del sector.",
    },
    {
      year: "2023-2024",
      title: "Supervisión de Obras Civiles",
      description: "Supervisión de obras civiles con empresas como Halliburton y consolidación de servicios.",
    },
    {
      year: "2025",
      title: "Consolidación Empresarial",
      description: "Consolidación de Torhann Ingeniería S.A.S. como empresa formal y líder en el sector.",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 leading-tight">
            Nuestra Trayectoria
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Un recorrido de crecimiento constante y consolidación en el sector de la ingeniería colombiana.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-0.5 bg-highlight/30"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-highlight rounded-full border-2 md:border-4 border-surface z-10"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-6 lg:text-right" : "lg:pl-6"}`}>
                  <div className="card p-4 md:p-6 shadow-lg max-w-full">
                    <div className="text-lg md:text-2xl font-bold text-gold mb-1 md:mb-2">{milestone.year}</div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">{milestone.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-base leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
