"use client"

import Image from "next/image"

export default function ClientsSlider() {
  const clients = [
    { name: "Agro", logo: "/agro.png" },
    { name: "Pilis", logo: "/pill.png" },
    { name: "T", logo: "/logo.png" },
    { name: "Pan", logo: "/pan.jpg" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Clientes y Aliados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con organizaciones públicas y privadas a nivel nacional, incluyendo entidades gubernamentales y
            empresas del sector.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll space-x-8 md:space-x-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ minWidth: "200px", height: "250px" }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain max-w-full max-h-full rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
