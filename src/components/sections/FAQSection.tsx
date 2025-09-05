"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { memo } from "react"

// Types
interface FAQItem {
  readonly id: string
  readonly pregunta: string
  readonly respuesta: string
  readonly categoria?: 'general' | 'tecnico' | 'tiempo'
}

// Constants - Moved outside component for better performance
const FAQ_DATA: readonly FAQItem[] = [
  {
    id: "faq-1",
    pregunta: "¿ESTE CURSO ES PARA MÍ?",
    respuesta: "Sí, si eres profesional, freelancer o emprendedor que busca implementar IA práctica en tu trabajo o negocio. Las clases son por Google Meet con grupos de máximo 150 estudiantes, tendrás compañeros de diferentes sectores e industrias. Contamos con 1 guía experto y 1 tutor que te acompañarán en el proceso. Es 100% online en clases en vivo, 3 horas por semana, entre semana 2 sesiones o fines de semana una sesión con horarios definidos.",
    categoria: 'general'
  },
  {
    id: "faq-2",
    pregunta: "¿QUÉ HERRAMIENTAS NECESITO PARA TOMAR EL CURSO?",
    respuesta: "Una laptop o computadora es indispensable, ya que usaremos software en navegadores web. Necesitas: Google Chrome actualizado, acceso a Google Meet, una cuenta de correo Gmail, conexión estable a internet, cámara y micrófono (pueden ser los integrados de tu laptop). La mayoría de las herramientas de IA que usaremos tienen versiones gratuitas o periodos de prueba.",
    categoria: 'tecnico'
  },
  {
    id: "faq-3",
    pregunta: "¿QUÉ CONOCIMIENTOS NECESITO PARA APROVECHAR EL PROGRAMA?",
    respuesta: "Estar dispuesto a aprender en línea, conocimientos básicos de computadora y navegación web, mucha motivación y disposición para ser parte activa del proceso. Si sabes enviar emails y navegar en internet, tienes la base técnica. Lo crucial es que vengas dispuesto a investigar, experimentar y resolver problemas. Este NO es un programa donde te sientas a recibir información pasivamente.",
    categoria: 'general'
  },
  {
    id: "faq-4",
    pregunta: "¿QUÉ PASA SI NO TENGO TIEMPO PARA COMPLETAR TODO?",
    respuesta: "Cada proyecto está diseñado para completarse en las sesiones. Además, tienes acceso a grabaciones y material complementario 24/7. Todas las sesiones se graban, el material está estructurado para que puedas completarlo a tu propio ritmo.",
    categoria: 'tiempo'
  },
] as const

// Utility functions
const getFAQItemId = (faq: FAQItem): string => `faq-item-${faq.id}`
const getFAQQuestionId = (faq: FAQItem): string => `faq-question-${faq.id}`
const getFAQAnswerId = (faq: FAQItem): string => `faq-answer-${faq.id}`

const getCategoryIcon = (categoria?: FAQItem['categoria']) => {
  // Todos usan el mismo icono ahora
  return HelpCircle
}

const getCategoryColor = (categoria?: FAQItem['categoria']): string => {
  switch (categoria) {
    case 'general':
      return 'text-primary'
    case 'tecnico':
      return 'text-blue-500'
    case 'tiempo':
      return 'text-orange-500'
    default:
      return 'text-primary'
  }
}

// Memoized Components
const SectionHeader = memo(function SectionHeader() {
  return (
    <header className="text-center space-y-4 sm:space-y-6 mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" aria-hidden="true" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          PREGUNTAS FRECUENTES
        </h2>
      </div>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
        Resolvemos las dudas más comunes sobre nuestro curso de Inteligencia Artificial
      </p>
    </header>
  )
})

const FAQItemComponent = memo(function FAQItemComponent({ 
  faq, 
  index 
}: { 
  faq: FAQItem
  index: number 
}) {
  const faqItemId = getFAQItemId(faq)
  const questionId = getFAQQuestionId(faq)
  const answerId = getFAQAnswerId(faq)
  const IconComponent = getCategoryIcon(faq.categoria)
  const iconColor = getCategoryColor(faq.categoria)

  return (
    <AccordionItem 
      value={faq.id} 
      className="border-2 rounded-lg px-4 sm:px-6 bg-background hover:shadow-lg transition-all duration-300 group astro-border-gradient"
      role="article"
      aria-labelledby={questionId}
    >
      <AccordionTrigger 
        className="text-left hover:no-underline text-base sm:text-lg font-semibold py-4 sm:py-6 group-hover:text-primary transition-colors duration-200"
        aria-describedby={answerId}
        aria-expanded="false"
      >
        <div className="flex items-start gap-3 sm:gap-4 w-full">
          <IconComponent 
            className={`w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0 ${iconColor} group-hover:scale-110 transition-transform duration-200`}
            aria-hidden="true"
          />
          <span 
            id={questionId}
            className="flex-1 text-left leading-tight"
          >
            {faq.pregunta}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent 
        id={answerId}
        className="pt-2 pb-4 sm:pt-4 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed ml-8 sm:ml-10"
        aria-labelledby={questionId}
      >
        <div className="space-y-2">
          <p className="leading-relaxed">
            {faq.respuesta}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
})

const FAQAccordion = memo(function FAQAccordion() {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion 
        type="single" 
        collapsible 
        className="space-y-4 sm:space-y-6"
        aria-label="Preguntas frecuentes sobre el curso de Inteligencia Artificial"
      >
        {FAQ_DATA.map((faq, index) => (
          <FAQItemComponent 
            key={faq.id} 
            faq={faq} 
            index={index}
          />
        ))}
      </Accordion>
    </div>
  )
})

const FAQCallToAction = memo(function FAQCallToAction() {
  return (
    <div className="text-center mt-12 sm:mt-16">
      <div className="astro-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          ¿Tienes más preguntas?
        </h3>
        <p className="text-white/80 mb-6 leading-relaxed">
          Nuestro equipo está disponible para resolver cualquier duda adicional que tengas sobre el curso.
        </p>
        <a
          href="https://wa.me/523317876251?text=Hola,%20tengo%20preguntas%20sobre%20el%20curso%20de%20IA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25d366] hover:bg-[#128c7e] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          aria-label="Contactar por WhatsApp para más información"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  )
})

export default function FAQSection() {
  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-muted/30 relative"
      aria-labelledby="faq-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" aria-hidden="true" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader />
        <FAQAccordion />
        <FAQCallToAction />
      </div>
    </section>
  )
}
