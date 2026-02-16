"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Download } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

// Constants - Moved outside component for better performance
const PDF_URL = "https://toplearning.academy/wp-content/uploads/2026/02/TEMARIO-INTELIGENCIA-ARTIFICIAL-Y-AUTOMATIZACION-CON-n8n-DIPLOMADO-1.pdf"
const PDF_COLOR = "#F29F0E"
const TOTAL_AI_TOOLS = 31
const MOBILE_VISIBLE_TOOLS = 24

// Module data -ELIMINADA

// Utility functions
const generateLogoImagePath = (index: number): string => 
  `/images/Logos Apps-${String(index).padStart(2, '0')}.png`

const generateLogoAlt = (index: number): string => 
  `Herramienta de Inteligencia Artificial ${index}`

// Memoized Components
const SectionHeader = memo(function SectionHeader() {
  return (
    <header className="text-center space-y-4 sm:space-y-6 mb-12 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
        PROGRAMA
      </h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        Dominarás las <span className="astro-text-gradient">Mejores Herramientas de IA</span>
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto text-pretty leading-relaxed">
        Aprendizaje por proyectos encadenados con el acompañamiento de un guía experto usando más de 30 herramientas profesionales de Inteligencia Artificial.
        <strong className="astro-text-gradient"> 80% práctica, 20% teoría aplicada</strong>
      </p>
    </header>
  )
})

const AIToolLogo = memo(function AIToolLogo({ 
  index, 
  className,
  priority = false 
}: { 
  index: number
  className?: string
  priority?: boolean 
}) {
  return (
    <div className="flex-shrink-0 flex justify-center">
      <Image
        src={generateLogoImagePath(index)}
        alt={generateLogoAlt(index)}
        width={128}
        height={128}
        className={`ai-logo object-contain ${className || ''}`}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
      />
    </div>
  )
})

const DesktopCarousel = memo(function DesktopCarousel() {
  return (
    <div 
      className="hidden md:block relative overflow-hidden"
      role="img"
      aria-label="Carrusel infinito de herramientas de Inteligencia Artificial"
    >
      <div className="flex animate-scroll-logos gap-8 md:gap-12 py-8">
        {/* Primera iteración de logos */}
        {Array.from({ length: TOTAL_AI_TOOLS }, (_, i) => (
          <AIToolLogo
            key={`logo-1-${i + 1}`}
            index={i + 1}
            className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
            priority={i < 8} // Priorizar los primeros logos visibles
          />
        ))}
        {/* Segunda iteración para loop infinito */}
        {Array.from({ length: TOTAL_AI_TOOLS }, (_, i) => (
          <AIToolLogo
            key={`logo-2-${i + 1}`}
            index={i + 1}
            className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
          />
        ))}
      </div>
    </div>
  )
})

const MobileGrid = memo(function MobileGrid() {
  return (
    <div className="md:hidden">
      <div 
        className="grid grid-cols-3 sm:grid-cols-4 gap-6 px-4"
        role="img"
        aria-label="Grid de herramientas de Inteligencia Artificial"
      >
        {Array.from({ length: MOBILE_VISIBLE_TOOLS }, (_, i) => (
          <AIToolLogo
            key={`mobile-logo-${i + 1}`}
            index={i + 1}
            className="w-18 h-18 sm:w-20 sm:h-20"
            priority={i < 12} // Priorizar los primeros logos visibles en móvil
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-white/60">Y muchas más herramientas profesionales...</p>
      </div>
    </div>
  )
})

const DownloadButton = memo(function DownloadButton() {
  return (
    <div className="text-center mt-12">
      <a 
        href={PDF_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
        aria-label="Descargar PDF completo del programa del curso"
      >
        <Button
          size="lg"
          className="rounded-full text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-white w-full max-w-xs mx-auto group astro-button-secondary"
          style={{ backgroundColor: PDF_COLOR, borderColor: PDF_COLOR }}
        >
          <Download 
            className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" 
            aria-hidden="true"
          />
          Descargar PDF del programa
        </Button>
      </a>
    </div>
  )
})

export default function ProgramaSection() {
  return (
    <section 
      id="programa" 
      className="py-16 md:py-24 astro-hero-gradient"
      aria-labelledby="programa-title"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader />

        {/* AI Tools Showcase */}
        <div className="mb-12" aria-label="Herramientas de Inteligencia Artificial que aprenderás">
          <DesktopCarousel />
          <MobileGrid />
        </div>

        <ModulesAccordion />
        <DownloadButton />
      </div>
    </section>
  )
}
