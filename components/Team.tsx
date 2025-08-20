import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Johann Hernán León",
      position: "Gerente General",
      description:
        "Ingeniero Agroindustrial con formación en Gestión Ambiental. Experiencia en diseño de plantas alimentarias, normativas ISO y análisis financiero para PYMES en Colombia.",
      image: "/johann.jpeg",
      expertise: [
        "Ingeniería Agroindustrial",
        "Gestión Ambiental",
        "Normativas ISO",
        "Análisis Financiero",
      ],
      education: "Ingeniero Agroindustrial",
      experience: "7+ años",
    },
    {
      name: "Néstor Miguel Ramírez",
      position: "Gerente Comercial",
      description:
        "Ingeniero Civil con especialización en Ingeniería Hidráulica y Gestión de Cuencas. Experto en modelación hidráulica, diseño de redes, gestión de riesgo y proyectos públicos en Colombia.",
      image: "/miguel.jpeg",
      expertise: [
        "Ingeniería Civil",
        "Ingeniería Hidráulica",
        "Gestión de Cuencas",
        "Proyectos Públicos",
      ],
      education: "Ingeniero Civil",
      experience: "7+ años",
    },
  ];

  return (
    <section
      id="equipo"
      className="py-16 md:py-20 bg-primary"
      aria-label="Equipo de ingenieros en Colombia"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light mb-3 md:mb-4 leading-tight">
            Nuestro Equipo de <span className="text-highlight">Ingenieros</span>{" "}
            en Colombia
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Profesionales altamente calificados con experiencia
            interdisciplinaria comprometidos con la excelencia en cada proyecto
            en <strong>Colombia</strong>.
          </p>
        </header>

        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          aria-label="Miembros del equipo"
        >
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="card p-6 md:p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <header className="mb-4 md:mb-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.position} en Torhann Ingeniería Colombia`}
                    fill
                    className="rounded-full object-cover shadow-lg"
                    style={{ objectPosition: "center top" }}
                    title={`${member.name} - ${member.position}`}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-highlight font-semibold mb-3 md:mb-4 text-sm md:text-base">
                  {member.position}
                </p>
              </header>

              <div className="mb-4 md:mb-6">
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-3 md:mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-highlight/10 text-highlight text-xs px-2 py-1 rounded-full border border-highlight/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Education & Experience */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-primary mb-1">
                      Formación
                    </div>
                    <div className="text-muted-foreground">
                      {member.education}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary mb-1">
                      Experiencia
                    </div>
                    <div className="text-muted-foreground">
                      {member.experience}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Team Stats */}
        <section className="mt-12 md:mt-16 text-center">
          <div className="bg-light/10 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-light mb-4 md:mb-6">
              Experiencia <span className="text-gold">Consolidada</span> en
              Colombia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                  14+
                </div>
                <div className="text-light/90">Años Combinados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                  50+
                </div>
                <div className="text-light/90">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                  100%
                </div>
                <div className="text-light/90">Compromiso Colombia</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Schema.org Person Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Equipo de Ingenieros en Colombia",
            description:
              "Equipo profesional de ingenieros especializados en servicios de ingeniería en Colombia",
            url: "https://torhanningenieriasas.com/#equipo",
            numberOfItems: 2,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Person",
                  name: "Johann Hernán León",
                  jobTitle: "Gerente General",
                  description:
                    "Ingeniero Agroindustrial con formación en Gestión Ambiental en Colombia",
                  knowsAbout: [
                    "Ingeniería Agroindustrial",
                    "Gestión Ambiental",
                    "Normativas ISO",
                    "Análisis Financiero",
                  ],
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Universidad Colombiana",
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "CO",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Person",
                  name: "Néstor Miguel Ramírez",
                  jobTitle: "Gerente Comercial",
                  description:
                    "Ingeniero Civil especializado en Ingeniería Hidráulica y Gestión de Cuencas en Colombia",
                  knowsAbout: [
                    "Ingeniería Civil",
                    "Ingeniería Hidráulica",
                    "Gestión de Cuencas",
                    "Proyectos Públicos",
                  ],
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Universidad Colombiana",
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "Torhann Ingeniería S.A.S.",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "CO",
                  },
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
}
