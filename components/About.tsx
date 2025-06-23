import Image from "next/image"

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">¿Quiénes Somos?</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Torhann Ingeniería S.A.S. es una empresa colombiana dedicada al diseño y ejecución de soluciones integrales
            en ingeniería, alineadas con estándares internacionales de calidad, sostenibilidad e innovación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/equipo.png"
              alt="Equipo de ingenieros de Torhann trabajando en campo"
              width={550}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-2 text-xl text-muted-foreground">
            <div>
              <p className="text-muted-foreground mb-6 ">
                Desarrollamos proyectos en áreas como ingeniería civil, ambiental y agroindustrial, sistemas integrados
                de gestión, y consultoría técnica y estratégica.
              </p>
              <p className="text-muted-foreground">
                Contamos con experiencia interdisciplinaria que nos permite transformar ideas en soluciones sostenibles,
                eficientes y con impacto positivo en el entorno social y ambiental.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground">
              Identificar, gestionar y resolver las necesidades técnicas, operativas y estratégicas de nuestros
              clientes, ofreciendo soluciones innovadoras y sostenibles en diferentes ramas de la ingeniería.
            </p>
          </div>
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground">
              Ser en 2030 una empresa líder a nivel nacional en servicios de ingeniería y consultoría integral,
              reconocida por su capacidad de transformar necesidades empresariales en soluciones efectivas y
              sostenibles.
            </p>
          </div>
        </div>

        <div className="card p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Valores Corporativos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-light font-bold text-xl">C</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Compromiso</h4>
              <p className="text-sm text-muted-foreground">Nos alineamos con los objetivos de nuestros clientes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-light font-bold text-xl">E</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Excelencia Técnica</h4>
              <p className="text-sm text-muted-foreground">Garantizamos calidad respaldada por experiencia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">I</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Innovación</h4>
              <p className="text-sm text-muted-foreground">Aplicamos metodologías modernas que generan valor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-light font-bold text-xl">I</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Integridad</h4>
              <p className="text-sm text-muted-foreground">Actuamos con ética, respeto y transparencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
