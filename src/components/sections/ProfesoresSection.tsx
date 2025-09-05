"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { memo } from "react"

// Types
interface Professor {
  readonly name: string
  readonly role: string
  readonly roleShort: string
  readonly image: string
}

// Constants - Moved outside component for better performance
const PROFESSORS_DATA: readonly Professor[] = [
  { 
    name: "Alex Perez", 
    role: "Cofundador de Top Learning y Especialista en Automatización e IA", 
    roleShort: "Cofundador Top Learning",
    image: "/images/Alex Perez.jpg" 
  },
  { 
    name: "Darío Arteaga", 
    role: "Especialista en Automatización e IA", 
    roleShort: "Especialista en IA",
    image: "/images/Darío Arteaga.webp" 
  },
  { 
    name: "Gerardo Ramos", 
    role: "Especialista en Ciencia de Datos e IA", 
    roleShort: "Ciencia de Datos e IA",
    image: "/images/Gerardo Ramos.webp" 
  },
  { 
    name: "Alexis Perales", 
    role: "Project Manager en IA y VR", 
    roleShort: "Project Manager IA",
    image: "/images/Alexis Perales.webp" 
  },
  { 
    name: "Alejandro Flores", 
    role: "Actuario y Analista de Datos", 
    roleShort: "Actuario y Analista",
    image: "/images/Miguel Flores.webp" 
  },
  { 
    name: "Daniel López", 
    role: "Especialista en Tecnología y Robótica", 
    roleShort: "Tecnología y Robótica",
    image: "/images/Jorge López.webp" 
  },
  { 
    name: "Perla Arredondo", 
    role: "Consultora en Inteligencia de Negocios", 
    roleShort: "Inteligencia de Negocios",
    image: "/images/Perla Arredondo.webp" 
  },
  { 
    name: "Wendy Hernández", 
    role: "Especialista en Innovación Educativa e IA", 
    roleShort: "Innovación Educativa",
    image: "/images/Wendy Hernández.webp" 
  },
  { 
    name: "Alberto Villalobos", 
    role: "Analista de Datos y Traductor Científico", 
    roleShort: "Analista de Datos",
    image: "/images/Mario Villalobos.webp" 
  },
  { 
    name: "Ángel Casillas", 
    role: "Diseñador Instruccional y UX/UI", 
    roleShort: "Diseño UX/UI",
    image: "/images/Ángel Casillas.webp" 
  },
  { 
    name: "Sofía Kassin", 
    role: "Ingeniera en Robótica y Especialista en IA", 
    roleShort: "Robótica y IA",
    image: "/images/Sofia Kassin.webp" 
  },
] as const

// Utility functions
const getProfessorId = (professor: Professor, index: number): string => 
  `professor-${professor.name.toLowerCase().replace(/\s+/g, '-')}-${index}`

// Memoized Components
const SectionHeader = memo(function SectionHeader() {
  return (
    <div className="container px-4 md:px-6 relative z-10">
      <header className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Guías del Programa
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
          Conoce a los expertos que te acompañarán en tu transformación con IA
        </p>
      </header>
    </div>
  )
})

const ProfessorAvatar = memo(function ProfessorAvatar({ 
  professor, 
  priority = false 
}: { 
  professor: Professor
  priority?: boolean 
}) {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden shadow-lg ring-2 ring-secondary/20 group-hover:ring-secondary/40 transition-all duration-300">
      <Image
        src={professor.image}
        alt={`${professor.name} - ${professor.roleShort}`}
        width={80}
        height={80}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 640px) 64px, 80px"
      />
    </div>
  )
})

const ProfessorCard = memo(function ProfessorCard({ 
  professor, 
  index,
  isMobile = false,
  priority = false 
}: { 
  professor: Professor
  index: number
  isMobile?: boolean
  priority?: boolean 
}) {
  const professorId = getProfessorId(professor, index)
  const role = isMobile ? professor.roleShort : professor.role

  return (
    <Card
      className={`
        border-0 shadow-xl bg-gradient-to-br from-background/20 to-background/10 backdrop-blur-sm 
        hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group
        ${isMobile ? 'flex-shrink-0' : ''}
      `}
      style={isMobile ? { width: '280px' } : undefined}
      role="article"
      aria-labelledby={`${professorId}-name`}
      aria-describedby={`${professorId}-role`}
    >
      <CardContent className="p-4 sm:p-6 text-center">
        <div className="space-y-3 sm:space-y-4">
          <ProfessorAvatar professor={professor} priority={priority} />
          <div className="space-y-1">
            <h3 
              id={`${professorId}-name`}
              className="font-bold text-sm sm:text-base text-white group-hover:text-secondary transition-colors duration-200"
            >
              {professor.name}
            </h3>
            <p 
              id={`${professorId}-role`}
              className="text-secondary font-medium text-xs sm:text-sm leading-tight"
            >
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

const DesktopCarousel = memo(function DesktopCarousel() {
  return (
    <div className="hidden md:block relative overflow-hidden">
      <div 
        className="flex gap-6 lg:gap-8 animate-scroll-professors"
        role="img"
        aria-label="Carrusel de profesores del programa"
        style={{
          width: `calc((320px + 2rem) * ${PROFESSORS_DATA.length * 2})`,
          animation: 'scroll-professors 45s linear infinite'
        }}
      >
        {/* Primera iteración de profesores */}
        {PROFESSORS_DATA.map((professor, index) => (
          <div key={`desktop-${index}`} className="flex-shrink-0" style={{ width: '320px' }}>
            <ProfessorCard 
              professor={professor} 
              index={index}
              priority={index < 6} // Priorizar los primeros 6 profesores visibles
            />
          </div>
        ))}
        {/* Segunda iteración para loop infinito */}
        {PROFESSORS_DATA.map((professor, index) => (
          <div key={`desktop-duplicate-${index}`} className="flex-shrink-0" style={{ width: '320px' }}>
            <ProfessorCard 
              professor={professor} 
              index={index + PROFESSORS_DATA.length}
            />
          </div>
        ))}
      </div>
    </div>
  )
})

const MobileCarousel = memo(function MobileCarousel() {
  return (
    <div className="md:hidden relative overflow-hidden w-full">
      <div 
        className="flex gap-4 animate-scroll"
        role="img"
        aria-label="Carrusel móvil de profesores del programa"
        style={{
          width: `calc((280px + 1rem) * ${PROFESSORS_DATA.length * 2})`,
          animation: 'scroll 35s linear infinite'
        }}
      >
        {/* Primera ronda de profesores */}
        {PROFESSORS_DATA.map((professor, index) => (
          <ProfessorCard
            key={`mobile-${index}`}
            professor={professor}
            index={index}
            isMobile={true}
            priority={index < 4} // Priorizar los primeros 4 profesores visibles en móvil
          />
        ))}
        {/* Segunda ronda para loop infinito */}
        {PROFESSORS_DATA.map((professor, index) => (
          <ProfessorCard
            key={`mobile-duplicate-${index}`}
            professor={professor}
            index={index + PROFESSORS_DATA.length}
            isMobile={true}
          />
        ))}
      </div>
    </div>
  )
})

export default function ProfesoresSection() {
  return (
    <section 
      id="profesores" 
      className="py-16 md:py-24 section-dark relative overflow-hidden"
      aria-labelledby="profesores-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6a6ae2]/20 via-transparent to-secondary/20" aria-hidden="true" />
      
      <SectionHeader />

      {/* Desktop Carousel */}
      <div className="container px-4 md:px-6 relative z-10 mb-8">
        <DesktopCarousel />
      </div>

      {/* Mobile Carousel */}
      <MobileCarousel />
    </section>
  )
}
