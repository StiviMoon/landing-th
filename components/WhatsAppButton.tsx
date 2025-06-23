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
          className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110 animate-pulse hover:animate-none w-14 h-14 md:w-16 md:h-16"
        >
          <img
            src="/was.webp"
            alt="WhatsApp"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-xs md:text-sm rounded-md px-3 py-1 shadow-md">
              ¡Chatea con nosotros!
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* Notificación */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce font-bold">
            1
          </div>
        </button>
      </div>

      {/* Ondas (efecto de radar) */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 pointer-events-none">
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-500 opacity-20 animate-ping"></div>
        <div
          className="absolute inset-0 w-16 h-16 rounded-full bg-green-500 opacity-20 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </>
  )
}
