"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Download } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

// Constants - Moved outside component for better performance
const PDF_URL = "https://toplearning.academy/wp-content/uploads/2025/09/Curso-Inteligencia-Artificial-Top-Learning.pdf"
const PDF_COLOR = "#F29F0E"
const TOTAL_AI_TOOLS = 31
const MOBILE_VISIBLE_TOOLS = 24

// Types
interface ModuleItem {
  readonly id: string
  readonly numero: string
  readonly titulo: string
  readonly subtitulo: string
  readonly items: readonly string[]
}

// Module data
const COURSE_MODULES: readonly ModuleItem[] = [
  {
    id: "modulo-1",
    numero: "M1",
    titulo: "FUNDAMENTOS (Semanas 1-2)",
    subtitulo: "Domina la comunicación con IA como un profesional",
    items: [
      "Conocer y dominar los mejores chatbots del momento (ChatGPT, Deepseek, Claude, Gemini y más)",
      "Generar contenido escrito y documentos de calidad (emails, propuestas, informes)",
      "Hacer investigación profunda en minutos lo que antes te tomaba horas",
      "Crear prompts efectivos que te den exactamente lo que necesitas"
    ]
  },
  {
    id: "modulo-2",
    numero: "M2",
    titulo: "CREACIÓN AUDIOVISUAL (Semanas 3-5)",
    subtitulo: "Conviértete en diseñador, editor y productor multimedia con IA",
    items: [
      "Crear imágenes profesionales para tu trabajo o negocio (logos, banners, ilustraciones)",
      "Generar videos promocionales sin cámara ni experiencia en edición",
      "Producir audio y locuciones en diferentes voces e idiomas",
      "Diseñar presentaciones impactantes que compitan con agencias creativas"
    ]
  },
  {
    id: "modulo-3",
    numero: "M3",
    titulo: "AUTOMATIZACIÓN (Semanas 6-8)",
    subtitulo: "Libérate de tareas repetitivas con automatización inteligente",
    items: [
      "Conectar diferentes aplicaciones para que trabajen juntas automáticamente",
      "Automatizar flujos de trabajo desde emails hasta actualizaciones de bases de datos",
      "Crear disparadores inteligentes que activen actions según condiciones específicas",
      "Escalar tu capacidad sin contratar más personal"
    ]
  },
  {
    id: "modulo-4",
    numero: "M4",
    titulo: "AGENTES INTELIGENTES (Semanas 9-12)",
    subtitulo: "Clónate y crea empleados virtuales que atiendan 24/7",
    items: [
      "Entrenar chatbots personalizados con el conocimiento específico de tu negocio",
      "Crear asistentes especializados para ventas, atención al cliente y soporte técnico",
      "Configurar múltiples canales (web, WhatsApp, redes sociales y llamadas telefónicas)",
      "Establecer escalamientos inteligentes cuando el bot no puede resolver algo"
    ]
  },
  {
    id: "modulo-5",
    numero: "M5",
    titulo: "ANÁLISIS E INTELIGENCIA ESTRATÉGICA (Semanas 13-14)",
    subtitulo: "Convierte datos en decisiones más inteligentes",
    items: [
      "Analizar grandes volúmenes de datos y extraer insights accionables",
      "Crear dashboards inteligentes que se actualicen automáticamente",
      "Generar predicciones sobre tendencias de tu mercado y comportamiento de clientes",
      "Tomar decisiones informadas con reportes automáticos y recomendaciones de IA"
    ]
  }
] as const

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

const ModuleItem = memo(function ModuleItem({ 
  module, 
  index 
}: { 
  module: ModuleItem
  index: number 
}) {
  const moduleId = `module-${module.id}`
  const contentId = `content-${module.id}`

  return (
    <AccordionItem 
      value={module.id} 
      className="astro-card astro-border-gradient rounded-xl px-4 md:px-8 hover:shadow-lg transition-all duration-300"
    >
      <AccordionTrigger 
        className="text-left hover:no-underline py-4 md:py-6 group"
        aria-describedby={contentId}
      >
        <div className="flex items-start gap-2 sm:gap-3 md:gap-6">
          <Badge 
            className="astro-button-primary rounded-full px-2 py-1 text-xs font-bold text-white flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
            aria-label={`Módulo ${module.numero}`}
          >
            {module.numero}
          </Badge>
          <div className="text-left flex-1 min-w-0">
            <h3 
              id={moduleId}
              className="font-bold text-sm sm:text-lg md:text-xl text-white leading-tight"
            >
              {module.titulo}
            </h3>
            <p className="text-secondary font-medium text-xs sm:text-sm mt-1">
              {module.subtitulo}
            </p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent 
        id={contentId}
        className="pt-3 pb-4 md:pt-4 md:pb-8"
        aria-labelledby={moduleId}
      >
        <div className="space-y-3 md:space-y-4 text-white/90">
          <p className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Aprenderás a usar IA para:
          </p>
          <ul 
            className="grid gap-3 md:grid-cols-2"
            role="list"
            aria-label={`Objetivos de aprendizaje del ${module.titulo}`}
          >
            {module.items.map((item, itemIndex) => (
              <li 
                key={itemIndex} 
                className="flex items-start gap-3"
                role="listitem"
              >
                <CheckCircle 
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0" 
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
})

const ModulesAccordion = memo(function ModulesAccordion() {
  return (
    <div className="max-w-5xl mx-auto">
      <Accordion 
        type="single" 
        collapsible 
        defaultValue="modulo-1" 
        className="space-y-4 md:space-y-6"
        aria-label="Módulos del programa de Inteligencia Artificial"
      >
        {COURSE_MODULES.map((module, index) => (
          <ModuleItem 
            key={module.id} 
            module={module} 
            index={index}
          />
        ))}
      </Accordion>
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
