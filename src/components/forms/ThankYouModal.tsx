"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"
import Image from "next/image"
import { memo, useCallback, useEffect } from "react"

const PDF_URL = "https://toplearning.academy/wp-content/uploads/2026/02/TEMARIO-INTELIGENCIA-ARTIFICIAL-Y-AUTOMATIZACION-CON-n8n-DIPLOMADO-1.pdf"
const WHATSAPP_URL = "https://wa.me/523317876251?text=Hola,%20acabo%20de%20descargar%20el%20PDF%20del%20diplomado%20de%20IA%20y%20me%20gustaría%20más%20información"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

const NEXT_STEPS = [
  {
    title: "Te contactaremos por WhatsApp",
    description: "En las próximas 2-4 horas recibirás un mensaje personalizado"
  },
  {
    title: "Agendar llamada informativa",
    description: "Te ayudaremos a resolver todas tus dudas sobre el programa"
  },
  {
    title: "Proceso de inscripción",
    description: "Te guiaremos paso a paso para asegurar tu lugar en el curso"
  }
] as const

const ThankYouModal = memo(function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[10004] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thank-you-title"
      onClick={handleBackdropClick}
    >
      <div
        className="astro-card astro-border-gradient w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl rounded-xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle
              className="w-20 h-20 sm:w-24 sm:h-24 text-green-500 animate-pulse"
              aria-hidden="true"
            />
          </div>

          <Image
            src="/images/Logo Original.png"
            alt="Top Learning"
            width={200}
            height={80}
            className="h-14 sm:h-16 w-auto mx-auto"
          />

          <div>
            <h2 id="thank-you-title" className="text-2xl sm:text-3xl font-bold text-white">
              ¡Gracias por tu interés!
            </h2>
            <p className="text-white/90 mt-2 text-sm sm:text-base">
              Hemos recibido tu información correctamente. Nuestro equipo se pondrá en contacto contigo muy pronto.
            </p>
          </div>

          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="lg"
              className="w-full rounded-full py-6 text-base font-bold"
              style={{ backgroundColor: "#F29F0E", borderColor: "#F29F0E", color: "white" }}
            >
              Descargar PDF del programa
            </Button>
          </a>

          <div className="text-left space-y-4 pt-4 border-t border-white/20">
            <h3 className="text-lg font-semibold text-white">
              ¿Qué sigue ahora?
            </h3>
            <ol className="space-y-4">
              {NEXT_STEPS.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F29F0E]/20 text-[#F29F0E] font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-white">{step.title}</p>
                    <p className="text-sm text-white/80">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="rounded-full text-base font-bold"
              style={{ backgroundColor: "#25d366", borderColor: "#25d366", color: "white" }}
            >
              Contactar por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
})

export default ThankYouModal
