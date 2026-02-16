"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Zap, BookOpen, Trophy, Download } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

// Constants - Moved outside component for better performance
const WHATSAPP_URL = "https://wa.me/523317876251?text=Vi%20tu%20anuncio%20en%20Google.%20%C2%BFMe%20das%20informaci%C3%B3n%20del%20diplomado%20de%20IA?%20"
const PDF_URL = "https://toplearning.academy/wp-content/uploads/2026/02/TEMARIO-INTELIGENCIA-ARTIFICIAL-Y-AUTOMATIZACION-CON-n8n-DIPLOMADO-1.pdf"

// Types
type StatColor = "primary" | "secondary"

interface CourseStat {
  icon: typeof Clock | typeof Zap | typeof BookOpen | typeof Trophy
  value: string
  description: string
  color: StatColor
  delay: string
}

// Course stats data
const COURSE_STATS: readonly CourseStat[] = [
  {
    icon: Clock,
    value: "84 HRS",
    description: "de clases prácticas",
    color: "primary",
    delay: "0s"
  },
  {
    icon: Zap,
    value: "+ DE 50",
    description: "herramientas de IA",
    color: "secondary",
    delay: "1s"
  },
  {
    icon: BookOpen,
    value: "28 Semanas",
    description: "3 horas por semana",
    color: "primary",
    delay: "2s"
  },
  {
    icon: Trophy,
    value: "6 Sistemas",
    description: "empresariales hechos con IA",
    color: "secondary",
    delay: "3s"
  }
]

// Student avatars data
const STUDENT_AVATARS = [
  { src: "/images/Ángel Casillas.webp", alt: "Ángel Casillas" },
  { src: "/images/Sofia Kassin.webp", alt: "Sofia Kassin" },
  { src: "/images/Miguel Flores.webp", alt: "Miguel Flores" },
  { src: "/images/Wendy Hernández.webp", alt: "Wendy Hernández" }
] as const

// WhatsApp Icon Component - Extracted for reusability
const WhatsAppIcon = memo(({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
  </svg>
))

WhatsAppIcon.displayName = "WhatsAppIcon"

// Student Avatars Component - Extracted for better organization
const StudentAvatars = memo(() => (
  <div className="flex items-center gap-2">
    <div className="flex -space-x-2" role="group" aria-label="Estudiantes del diplomado">
      {STUDENT_AVATARS.map((student, index) => (
        <Image
          key={student.alt}
          src={student.src}
          alt={student.alt}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full border-2 border-white/50 object-cover"
          loading="lazy"
        />
      ))}
    </div>
    <span className="text-white font-semibold ml-2">+2,500 estudiantes</span>
  </div>
))

StudentAvatars.displayName = "StudentAvatars"

// Rating Component - Extracted for better organization
const CourseRating = memo(() => (
  <div className="flex items-center gap-2">
    <div className="flex gap-1" role="img" aria-label="Calificación 5 estrellas">
      {Array.from({ length: 5 }, (_, i) => (
        <Star 
          key={i} 
          className="w-5 h-5 fill-secondary text-secondary" 
          aria-hidden="true"
        />
      ))}
    </div>
    <span className="text-white font-semibold">4.9/5</span>
  </div>
))

CourseRating.displayName = "CourseRating"

// Stat Item Component - Extracted for better reusability
const StatItem = memo(({ stat }: { stat: CourseStat }) => {
  const IconComponent = stat.icon
  const isPrimary = stat.color === "primary"
  
  return (
    <div 
      className="text-center space-y-2 sm:space-y-3 md:space-y-4 astro-floating"
      style={{ animationDelay: stat.delay }}
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center astro-pulse ${
        isPrimary 
          ? "bg-gradient-to-br from-[#6a6ae2]/20 to-[#6a6ae2]/40" 
          : "bg-gradient-to-br from-secondary/20 to-secondary/40"
      }`}>
        <IconComponent 
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
            isPrimary ? "text-[#6a6ae2]" : "text-secondary"
          }`}
          aria-hidden="true"
        />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">
        {stat.value}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
        {stat.description}
      </p>
    </div>
  )
})

StatItem.displayName = "StatItem"

// CTA Buttons Component - Extracted for better organization
const CTAButtons = memo(() => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
    <a 
      href={WHATSAPP_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
      aria-label="Solicitar información por WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 text-white font-bold shadow-xl transition-all duration-300 w-full sm:w-auto hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25d366]/50"
        style={{ backgroundColor: "#25d366", borderColor: "#25d366" }}
      >
        <WhatsAppIcon className="w-5 h-5 mr-2" />
        + Información
      </Button>
    </a>
    
    <a 
      href={PDF_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
      aria-label="Descargar PDF del programa del curso"
    >
      <Button
        variant="outline"
        size="lg"
        className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 astro-card border-white/30 text-white hover:bg-white/20 font-semibold shadow-xl backdrop-blur-sm transition-all duration-300 bg-transparent w-full sm:w-auto hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F29F0E]/50"
        style={{ backgroundColor: "#F29F0E", borderColor: "#F29F0E", color: "white" }}
      >
        <Download className="w-5 h-5 mr-2" aria-hidden="true" />
        Descargar PDF del programa
      </Button>
    </a>
  </div>
))

CTAButtons.displayName = "CTAButtons"

// Main Hero Section Component
const HeroSection = memo(() => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-8 pb-8 sm:pt-4"
        style={{
          backgroundImage: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
        aria-label="Sección principal del curso de Inteligencia Artificial"
      >
        <div className="absolute inset-0 astro-hero-gradient" aria-hidden="true" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            
            {/* Logo and Main Content */}
            <div className="space-y-6 fade-in-up astro-floating">
              <header className="flex justify-center items-center pt-8 pb-4">
                <Image
                  src="/images/Logo Original.png"
                  alt="TOP LEARNING - Logo oficial"
                  width={300}
                  height={120}
                  className="h-16 sm:h-20 md:h-24 w-auto astro-glow-effect"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                />
              </header>

              <div className="space-y-2">
                <p className="text-secondary font-semibold text-lg tracking-wide uppercase astro-shimmer">
                  Diplomado de Inteligencia Artificial y n8n
                </p>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white text-balance leading-tight">
                  Domina la <span className="astro-text-gradient">IA</span> sin
                  <br className="hidden sm:block" />
                  ser <span className="astro-text-gradient">programador</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                  Aprende a usar las herramientas de IA más poderosas para automatizar tu trabajo y aumentar tu
                  productividad.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 astro-card rounded-full px-6 py-3">
                <span className="text-white font-semibold text-lg">Clases en vivo por Google Meet</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <CTAButtons />

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <StudentAvatars />
              <CourseRating />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Card */}
      <section 
        className="relative -mt-20 sm:-mt-24 md:-mt-32 z-20 pb-8"
        aria-label="Estadísticas del programa"
      >
        <div className="container px-4 md:px-6">
          <Card className="astro-card astro-border-gradient max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 astro-glow-effect">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
                {COURSE_STATS.map((stat) => (
                  <StatItem key={stat.value} stat={stat} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection
