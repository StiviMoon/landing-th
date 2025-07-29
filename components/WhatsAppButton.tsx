"use client"

import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  const whatsappNumber = "573148176370"
  const message =
    "Hola, me interesa conocer más sobre los servicios de Torhann Ingeniería. ¿Podrían brindarme información?"

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(url, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button
          onClick={handleClick}
          aria-label="Chatea con nosotros en WhatsApp"
          className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-2.5 md:p-3 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110 animate-pulse hover:animate-none w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        >
          <img
            src="/was.webp"
            alt="WhatsApp"
            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
          />

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-xs md:text-sm rounded-md px-2 md:px-3 py-1 md:py-1.5 shadow-md whitespace-nowrap">
              ¡Chatea con nosotros!
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* Notificación */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] md:text-[10px] lg:text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center animate-bounce font-bold">
            1
          </div>
        </button>
      </div>

      {/* Ondas (efecto de radar) */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 pointer-events-none">
        <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-green-500 opacity-20 animate-ping"></div>
        <div
          className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-green-500 opacity-20 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </>
  )
}
