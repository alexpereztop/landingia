"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, UserCheck, GraduationCap } from "lucide-react"
import { memo } from "react"

// Types
interface ProfileItem {
  id: string
  text: string
  ariaLabel?: string
}

interface ProfileData {
  type: "entry" | "exit"
  title: string
  description: string
  items: readonly ProfileItem[]
  colorScheme: "primary" | "secondary"
  icon: typeof UserCheck | typeof GraduationCap
}

// Constants - Moved outside component for better performance
const ENTRY_PROFILE_ITEMS: readonly ProfileItem[] = [
  {
    id: "professionals",
    text: "Profesionales, freelancers o emprendedores sin experiencia técnica en IA",
    ariaLabel: "Dirigido a profesionales sin experiencia técnica"
  },
  {
    id: "basic-skills",
    text: "Conocimientos básicos de computadora y navegación web",
    ariaLabel: "Requiere conocimientos básicos de computación"
  },
  {
    id: "motivation",
    text: "Motivación para aprender y aplicar nuevas tecnologías",
    ariaLabel: "Necesaria motivación para aprender tecnología"
  },
  {
    id: "participation",
    text: "Disposición para participar activamente en clases en vivo",
    ariaLabel: "Participación activa en clases requerida"
  },
  {
    id: "equipment",
    text: "Acceso a laptop/computadora y conexión estable a internet",
    ariaLabel: "Equipo tecnológico necesario"
  }
]

const EXIT_PROFILE_ITEMS: readonly ProfileItem[] = [
  {
    id: "tools-mastery",
    text: "Dominio de +50 herramientas de IA para diferentes propósitos",
    ariaLabel: "Dominio de más de 50 herramientas de IA"
  },
  {
    id: "systems-created",
    text: "6 sistemas empresariales funcionales creados por ti",
    ariaLabel: "Creación de 6 sistemas empresariales"
  },
  {
    id: "automation-skills",
    text: "Capacidad de automatizar procesos y ahorrar 2-3 horas diarias",
    ariaLabel: "Habilidades de automatización de procesos"
  },
  {
    id: "certification",
    text: "Certificación institucional que valida tus habilidades",
    ariaLabel: "Certificación oficial de habilidades"
  },
  {
    id: "positioning",
    text: "Posicionamiento como referente de innovación en tu sector",
    ariaLabel: "Posicionamiento como referente en innovación"
  }
]

const PROFILE_DATA: readonly ProfileData[] = [
  {
    type: "entry",
    title: "Perfil de Ingreso",
    description: "¿Quién puede tomar este curso?",
    items: ENTRY_PROFILE_ITEMS,
    colorScheme: "primary",
    icon: UserCheck
  },
  {
    type: "exit",
    title: "Perfil de Egreso",
    description: "¿Qué lograrás al completar el curso?",
    items: EXIT_PROFILE_ITEMS,
    colorScheme: "secondary",
    icon: GraduationCap
  }
]

// Utility functions
const getCardClasses = (colorScheme: "primary" | "secondary"): string => {
  const baseClasses = "border-2 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  
  return colorScheme === "primary"
    ? `${baseClasses} border-[#6a6ae2]/20 bg-gradient-to-br from-background to-[#6a6ae2]/5 hover:border-[#6a6ae2]/30`
    : `${baseClasses} border-secondary/20 bg-gradient-to-br from-background to-secondary/5 hover:border-secondary/30`
}

const getTitleClasses = (colorScheme: "primary" | "secondary"): string => {
  return colorScheme === "primary" ? "text-2xl text-[#6a6ae2] font-bold" : "text-2xl text-secondary font-bold"
}

const getIconColor = (colorScheme: "primary" | "secondary"): string => {
  return colorScheme === "primary" ? "text-[#6a6ae2]" : "text-secondary"
}

// Section Header Component - Extracted for better organization
const SectionHeader = memo(() => (
  <header className="text-center space-y-4 mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perfiles</h2>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
      Conoce el perfil de ingreso y egreso de nuestros estudiantes
    </p>
  </header>
))

SectionHeader.displayName = "SectionHeader"

// Profile Item Component - Extracted for better reusability
const ProfileItemComponent = memo(({ item, colorScheme }: { item: ProfileItem; colorScheme: "primary" | "secondary" }) => {
  const iconColor = getIconColor(colorScheme)
  
  return (
    <div className="flex items-start gap-3 group">
      <CheckCircle 
        className={`w-5 h-5 ${iconColor} mt-1 flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}
        aria-hidden="true"
      />
      <span 
        className="text-sm sm:text-base leading-relaxed"
        aria-label={item.ariaLabel}
      >
        {item.text}
      </span>
    </div>
  )
})

ProfileItemComponent.displayName = "ProfileItemComponent"

// Profile Card Component - Extracted for better organization and reusability
const ProfileCard = memo(({ profile }: { profile: ProfileData }) => {
  const cardClasses = getCardClasses(profile.colorScheme)
  const titleClasses = getTitleClasses(profile.colorScheme)
  const IconComponent = profile.icon
  const iconColor = getIconColor(profile.colorScheme)

  return (
    <Card 
      className={cardClasses}
      role="article"
      aria-labelledby={`${profile.type}-title`}
      aria-describedby={`${profile.type}-description`}
    >
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
            profile.colorScheme === "primary" 
              ? "from-[#6a6ae2]/20 to-[#6a6ae2]/40" 
              : "from-secondary/20 to-secondary/40"
          } flex items-center justify-center shadow-lg`}>
            <IconComponent 
              className={`w-8 h-8 ${iconColor}`}
              aria-hidden="true"
            />
          </div>
        </div>
        <CardTitle 
          id={`${profile.type}-title`}
          className={titleClasses}
        >
          {profile.title}
        </CardTitle>
        <CardDescription 
          id={`${profile.type}-description`}
          className="text-lg"
        >
          {profile.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className="space-y-3"
          role="list"
          aria-label={`Lista de requisitos para ${profile.title.toLowerCase()}`}
        >
          {profile.items.map((item) => (
            <div key={item.id} role="listitem">
              <ProfileItemComponent item={item} colorScheme={profile.colorScheme} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
})

ProfileCard.displayName = "ProfileCard"

// Profiles Grid Component - Extracted for better organization
const ProfilesGrid = memo(() => (
  <div 
    className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto"
    role="list"
    aria-label="Perfiles de ingreso y egreso del curso"
  >
    {PROFILE_DATA.map((profile) => (
      <div key={profile.type} role="listitem">
        <ProfileCard profile={profile} />
      </div>
    ))}
  </div>
))

ProfilesGrid.displayName = "ProfilesGrid"

// Main Profiles Section Component
const PerfilesSection = memo(() => {
  return (
    <section 
      id="perfiles" 
      className="py-24 bg-gradient-to-r from-[#6a6ae2]/10 via-background to-secondary/10"
      aria-label="Perfiles de estudiantes del curso de IA"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader />
        <ProfilesGrid />
      </div>
    </section>
  )
})

PerfilesSection.displayName = "PerfilesSection"

export default PerfilesSection