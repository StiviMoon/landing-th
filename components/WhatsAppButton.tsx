"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Número de WhatsApp de la empresa (formato internacional sin +)
  const whatsappNumber = "573148176370" // Reemplaza con el número real
  const message =
    "Hola, me interesa conocer más sobre los servicios de Torhann Ingeniería. ¿Podrían brindarme información?"

  // Mostrar el botón después de un pequeño delay para mejor UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Contactar por WhatsApp"
        >

          <img src="/was.webp" alt="whatsapp" className="h-12 " />
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
              ¡Chatea con nosotros!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* Indicador de notificación */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
            1
          </div>
        </button>
      </div>

      {/* Versión móvil más grande */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />

          {/* Tooltip móvil */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
              ¡Chatea con nosotros!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* Indicador de notificación móvil */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
            1
          </div>
        </button>
      </div>

      {/* Animación de ondas (opcional) */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
        <div
          className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </>
  )
}
