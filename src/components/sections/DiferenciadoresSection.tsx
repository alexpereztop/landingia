"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Award, CheckCircle, Zap, BookOpen, type LucideIcon } from "lucide-react"
import { memo } from "react"

// Types
type DifferentiatorColor = "primary" | "secondary" | "gradient"

interface Differentiator {
  id: string
  icon: LucideIcon
  title: string
  description: string
  colorType: DifferentiatorColor
  ariaLabel?: string
}

// Constants - Moved outside component for better performance
const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    id: "practical-learning",
    icon: Target,
    title: "Aprendizaje Práctico",
    description: "Aprende usando casos reales de tu industria. Sin teoría innecesaria, solo herramientas que puedes aplicar inmediatamente en tu trabajo diario.",
    colorType: "primary",
    ariaLabel: "Aprendizaje práctico con casos reales"
  },
  {
    id: "active-community",
    icon: Users,
    title: "Comunidad Activa", 
    description: "Únete a una comunidad de +2,500 profesionales que ya están transformando su trabajo con IA y automatización inteligente.",
    colorType: "secondary",
    ariaLabel: "Comunidad activa de profesionales"
  },
  {
    id: "recognized-certification",
    icon: Award,
    title: "Certificación Reconocida",
    description: "Obtén una certificación reconocida que valide tus nuevas habilidades en IA ante empleadores y clientes potenciales.",
    colorType: "gradient",
    ariaLabel: "Certificación reconocida oficialmente"
  },
  {
    id: "live-classes",
    icon: CheckCircle,
    title: "Clases en Vivo",
    description: "Participa en sesiones interactivas por Google Meet con expertos que resuelven tus dudas en tiempo real.",
    colorType: "primary",
    ariaLabel: "Clases en vivo interactivas"
  },
  {
    id: "immediate-results",
    icon: Zap,
    title: "Resultados Inmediatos",
    description: "Desde la primera semana comenzarás a automatizar tareas y ahorrar tiempo valioso en tu trabajo diario.",
    colorType: "secondary",
    ariaLabel: "Resultados inmediatos desde la primera semana"
  },
  {
    id: "updated-content",
    icon: BookOpen,
    title: "Contenido Actualizado",
    description: "Acceso a las herramientas de IA más recientes y actualizaciones constantes del programa según las tendencias del mercado.",
    colorType: "gradient",
    ariaLabel: "Contenido siempre actualizado"
  }
]

// Utility functions
const getIconContainerClasses = (colorType: DifferentiatorColor): string => {
  const baseClasses = "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg astro-pulse"
  
  switch (colorType) {
    case "gradient":
      return `${baseClasses} bg-gradient-to-br from-primary via-secondary to-primary`
    case "secondary":
      return `${baseClasses} bg-gradient-to-br from-secondary to-secondary/80`
    case "primary":
    default:
      return `${baseClasses} bg-gradient-to-br from-[#6a6ae2] via-secondary to-[#6a6ae2]`
  }
}

const getTitleClasses = (colorType: DifferentiatorColor): string => {
  const baseClasses = "text-xl font-semibold"
  
  switch (colorType) {
    case "gradient":
      return `${baseClasses} astro-text-gradient`
    case "secondary":
      return `${baseClasses} text-secondary`
    case "primary":
    default:
      return `${baseClasses} text-[#6a6ae2]`
  }
}

// Section Header Component - Extracted for better organization
const SectionHeader = memo(() => (
  <header className="text-center space-y-4 mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
      ¿Por qué elegir a Top Learning?
    </h2>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
      Diseñado específicamente para profesionales sin experiencia técnica
    </p>
  </header>
))

SectionHeader.displayName = "SectionHeader"

// Differentiator Card Component - Extracted for better reusability and performance
const DifferentiatorCard = memo(({ differentiator }: { differentiator: Differentiator }) => {
  const IconComponent = differentiator.icon
  const iconContainerClasses = getIconContainerClasses(differentiator.colorType)
  const titleClasses = getTitleClasses(differentiator.colorType)

  return (
    <Card 
      className="astro-card astro-border-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 astro-glow-effect group cursor-default"
      role="article"
      aria-labelledby={`title-${differentiator.id}`}
      aria-describedby={`desc-${differentiator.id}`}
    >
      <CardHeader className="text-center pb-4">
        <div 
          className={iconContainerClasses}
          role="img"
          aria-label={differentiator.ariaLabel}
        >
          <IconComponent 
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" 
            aria-hidden="true"
          />
        </div>
        <CardTitle 
          id={`title-${differentiator.id}`}
          className={titleClasses}
        >
          {differentiator.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription 
          id={`desc-${differentiator.id}`}
          className="text-base text-muted-foreground leading-relaxed"
        >
          {differentiator.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
})

DifferentiatorCard.displayName = "DifferentiatorCard"

// Differentiators Grid Component - Extracted for better organization
const DifferentiatorsGrid = memo(() => (
  <div 
    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    role="list"
    aria-label="Diferenciadores del curso"
  >
    {DIFFERENTIATORS.map((differentiator) => (
      <div key={differentiator.id} role="listitem">
        <DifferentiatorCard differentiator={differentiator} />
      </div>
    ))}
  </div>
))

DifferentiatorsGrid.displayName = "DifferentiatorsGrid"

// Main Differentiators Section Component
const DiferenciadoresSection = memo(() => {
  return (
    <section 
      id="diferenciadores" 
      className="py-24 astro-section-gradient"
      aria-label="Diferenciadores de Top Learning"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader />
        <DifferentiatorsGrid />
      </div>
    </section>
  )
})

DiferenciadoresSection.displayName = "DiferenciadoresSection"

export default DiferenciadoresSection