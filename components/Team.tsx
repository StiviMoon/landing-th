import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "Johann Hernán León",
      position: "Gerente General",
      description:
        "Ingeniero Agroindustrial con formación en Gestión Ambiental. Experiencia en diseño de plantas alimentarias, normativas ISO y análisis financiero para PYMES.",
      image: "/johann.jpeg",
    },
    {
      name: "Néstor Miguel Ramírez",
      position: "Gerente Comercial",
      description:
        "Ingeniero Civil con especialización en Ingeniería Hidráulica y Gestión de Cuencas. Experto en modelación hidráulica, diseño de redes, gestión de riesgo y proyectos públicos.",
      image: "/miguel.jpeg",
    },
  ]

  return (
    <section id="equipo" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light mb-3 md:mb-4 leading-tight">
            Nuestro Equipo
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Profesionales altamente calificados con experiencia interdisciplinaria comprometidos con la excelencia en
            cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="card p-6 md:p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover shadow-lg"
                  style={{ objectPosition: "center top" }} // Centra horizontalmente y alinea arriba
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 leading-tight">{member.name}</h3>
              <p className="text-highlight font-semibold mb-3 md:mb-4 text-sm md:text-base">{member.position}</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
