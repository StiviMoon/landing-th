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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Trayectoria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un recorrido de crecimiento constante y consolidación en el sector de la ingeniería colombiana.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-highlight/30"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-highlight rounded-full border-4 border-surface z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="card p-6 shadow-lg max-w-full">
                    <div className="text-2xl font-bold text-gold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{milestone.description}</p>
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
