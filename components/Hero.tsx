import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      aria-label="Página principal de Torhann Ingeniería S.A.S. en Colombia"
    >
      {/* Background Color */}
      <div className="absolute inset-0 z-0 bg-primary" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-light">
        <div className="max-w-4xl mx-auto">
          {/* Logo Container */}
          <header className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/logotC.png"
              alt="Logo de Torhann Ingeniería S.A.S. - Empresa líder en servicios de ingeniería en Colombia"
              width={300}
              height={112}
              className="object-contain w-64 md:w-80 lg:w-96"
              priority
              title="Torhann Ingeniería S.A.S. - Servicios de Ingeniería en Colombia"
            />
          </header>

          <h1 className="block text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-tight">
            <span className="sr-only">Torhann Ingeniería S.A.S.</span>
            Soluciones Innovadoras · Resultados Reales
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-light/90 max-w-4xl mx-auto leading-relaxed px-2">
            Empresa colombiana dedicada a la consultoría y ejecución alineadas
            con estándares internacionales de calidad, sostenibilidad e
            innovación, en áreas de la ingeniería como{" "}
            <strong>Agroindustrial</strong>, <strong>Civil</strong>,
            <strong>Ambiental</strong>,{" "}
            <strong>Seguridad y Salud en el Trabajo (SST)</strong> y{" "}
            <strong>recursos humanos</strong>.
          </p>

          <nav
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            aria-label="Navegación principal"
          >
            <Link
              href="#servicios"
              className="btn btn-lg bg-highlight text-light hover:bg-primary font-semibold w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Ver nuestros servicios de ingeniería en Colombia"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="#contacto"
              className="btn btn-lg btn-outline border-light text-light hover:bg-light hover:text-primary w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Solicitar cotización de servicios de ingeniería"
            >
              Solicitar Cotización
            </Link>
          </nav>

          {/* Local Business Information */}
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-light/10 rounded-xl md:rounded-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">
              <div className="text-center">
                <div className="font-semibold text-gold mb-1">📍 Ubicación</div>
                <div className="text-light/90">Colombia</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gold mb-1">📞 Contacto</div>
                <div className="text-light/90">302 840 4105</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gold mb-1">
                  ⭐ Calificación
                </div>
                <div className="text-light/90">5.0 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-light rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-light rounded-full mt-1.5 md:mt-2"></div>
        </div>
      </div>

      {/* Schema.org Local Business Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Torhann Ingeniería S.A.S.",
            description:
              "Empresa líder en servicios de ingeniería civil, ambiental y agroindustrial en Colombia",
            url: "https://torhanningenieria.com",
            telephone: "+57-302-840-4105",
            email: "torhanningenieriasas@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CO",
              addressRegion: "Colombia",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "4.7110",
              longitude: "-74.0721",
            },
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            serviceType: [
              "Ingeniería Civil",
              "Ingeniería Ambiental",
              "Ingeniería Agroindustrial",
              "Consultoría Técnica",
              "SST",
            ],
            openingHours: "Mo-Fr 08:00-18:00",
            priceRange: "$$",
            paymentAccepted: "Cash, Credit Card, Bank Transfer",
            currenciesAccepted: "COP, USD",
          }),
        }}
      />
    </section>
  );
}
