"use client";

import Image from "next/image";

export default function ClientsSlider() {
  const clients = [
    { name: "Agro", logo: "/agro.png" },
    { name: "Pilis", logo: "/pill.png" },
    { name: "T", logo: "/logo.png" },
    { name: "Pan", logo: "/pan.jpg" },
  ];

  return (
    <section
      id="clientes"
      className="py-16 md:py-20 bg-background"
      aria-label="Clientes y aliados de Torhann Ingeniería en Colombia"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 leading-tight">
            Clientes y Aliados
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Trabajamos con organizaciones públicas y privadas a nivel nacional,
            incluyendo entidades gubernamentales y empresas del sector.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll space-x-6 md:space-x-8 lg:space-x-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ minWidth: "150px", height: "200px" }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="object-contain max-w-full max-h-full rounded-lg md:rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
