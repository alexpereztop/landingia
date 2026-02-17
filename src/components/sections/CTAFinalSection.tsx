"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Download } from "lucide-react"
import { memo } from "react"

// Constants - Moved outside component for better performance
const WHATSAPP_URL = "https://wa.me/523317876251?text=Vi%20tu%20anuncio%20en%20Google.%20%C2%BFMe%20das%20informaci%C3%B3n%20del%20diplomado%20de%20IA?%20"
const WHATSAPP_COLOR = "#25d366"
const PDF_COLOR = "#F29F0E"
const STUDENT_COUNT = "2,500"

// Memoized Components
const WhatsAppIcon = memo(function WhatsAppIcon({ 
  className 
}: { 
  className?: string 
}) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
    </svg>
  )
})

const SectionHeader = memo(function SectionHeader() {
  return (
    <header className="text-center space-y-6 sm:space-y-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
        ¿Listo para hacer de la IA tu{" "}
        <span className="astro-text-gradient">superpoder secreto</span>?
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-pretty leading-relaxed max-w-3xl mx-auto">
        Únete a más de {STUDENT_COUNT} profesionales que ya están transformando su trabajo con inteligencia artificial
      </p>
    </header>
  )
})

const PromotionBadge = memo(function PromotionBadge() {
  return (
    <div className="w-full flex justify-center px-4">
      <Badge
        variant="destructive"
        className="rounded-full px-4 sm:px-8 py-3 text-sm sm:text-lg font-bold animate-pulse astro-glow-effect max-w-full text-center break-words group"
        role="alert"
        aria-live="polite"
        aria-label="Promoción por tiempo limitado"
      >
        <Timer 
          className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 group-hover:animate-spin" 
          aria-hidden="true"
        />
        <span className="text-xs sm:text-base font-bold">
          PROMOCIÓN LIMITADA - SOLO POR UNOS DÍAS
        </span>
      </Badge>
    </div>
  )
})

const WhatsAppButton = memo(function WhatsAppButton() {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block w-full sm:w-auto"
      aria-label="Solicitar información del diplomado por WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full group astro-button-primary"
        style={{ backgroundColor: WHATSAPP_COLOR, borderColor: WHATSAPP_COLOR }}
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-200" />
        Solicitar Información
      </Button>
    </a>
  )
})

interface PDFButtonProps {
  onOpenContactForm?: () => void
}

const PDFButton = memo(function PDFButton({ onOpenContactForm }: PDFButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={onOpenContactForm}
      className="rounded-full text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full text-white group astro-button-secondary inline-flex"
      style={{ backgroundColor: PDF_COLOR, borderColor: PDF_COLOR }}
      aria-label="Descargar PDF completo del programa del diplomado"
    >
      <Download 
        className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-200" 
        aria-hidden="true"
      />
      Descargar PDF del programa
    </Button>
  )
})

interface CTAButtonsProps {
  onOpenContactForm?: () => void
}

const CTAButtons = memo(function CTAButtons({ onOpenContactForm }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
      <WhatsAppButton />
      <PDFButton onOpenContactForm={onOpenContactForm} />
    </div>
  )
})

interface CTAFinalSectionProps {
  onOpenContactForm?: () => void
}

export default function CTAFinalSection({ onOpenContactForm }: CTAFinalSectionProps) {
  return (
    <section 
      className="py-16 md:py-24 astro-hero-gradient relative overflow-hidden"
      aria-labelledby="cta-final-title"
      role="banner"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6a6ae2]/30 via-transparent to-secondary/30" aria-hidden="true" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          <SectionHeader />
          
          <div className="space-y-6 sm:space-y-8">
            <PromotionBadge />
            <CTAButtons onOpenContactForm={onOpenContactForm} />
          </div>
        </div>
      </div>
    </section>
  )
}
