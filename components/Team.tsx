import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "Johann Hernán León",
      position: "Gerente General",
      description:
        "Ingeniero Agroindustrial con formación en Gestión Ambiental. Especialista en diseño de plantas alimentarias, normativas ISO y análisis financiero para PYMES.",
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
    <section id="equipo" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales altamente calificados con experiencia interdisciplinaria comprometidos con la excelencia en
            cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-highlight font-semibold mb-4">{member.position}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
