"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Globe } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

// Constants - Moved outside component for better performance
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/toplearningoficial/",
  facebook: "https://www.facebook.com/toplearningoficial",
  tiktok: "https://www.tiktok.com/@toplearningoficial",
  website: "https://toplearning.academy/"
} as const

// Types
interface SocialButtonProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  hoverColors: string
}

// TikTok Icon Component
const TikTokIcon = memo(function TikTokIcon({ 
  className 
}: { 
  className?: string 
}) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
})

// Memoized Components
const FooterLogo = memo(function FooterLogo() {
  return (
    <div className="flex justify-center items-center mb-6">
      <Image
        src="/images/Logo Original.png"
        alt="TOP LEARNING - Curso de Inteligencia Artificial"
        width={200}
        height={80}
        className="h-12 sm:h-16 w-auto astro-glow-effect"
        priority
        sizes="(max-width: 768px) 200px, 250px"
      />
    </div>
  )
})

const SectionTitle = memo(function SectionTitle() {
  return (
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6a6ae2] to-secondary bg-clip-text text-transparent mb-6">
      Síguenos en nuestras redes sociales
    </h3>
  )
})

const SocialButton = memo(function SocialButton({ 
  href, 
  icon: Icon, 
  label, 
  hoverColors 
}: SocialButtonProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={`Seguir a Top Learning en ${label}`}
      className="group"
    >
      <Button
        variant="outline"
        size="icon"
        className={`
          rounded-full w-14 h-14 sm:w-16 sm:h-16 
          ${hoverColors} 
          transition-all duration-300 transform hover:scale-110 hover:shadow-lg
          bg-transparent border-[#6a6ae2]/30 hover:border-opacity-100
          group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2
        `}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-200" />
      </Button>
    </a>
  )
})

const SocialLinks = memo(function SocialLinks() {
  const socialButtons: SocialButtonProps[] = [
    {
      href: SOCIAL_LINKS.instagram,
      icon: Instagram,
      label: "Instagram",
      hoverColors: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 hover:text-white hover:border-pink-500"
    },
    {
      href: SOCIAL_LINKS.facebook,
      icon: Facebook,
      label: "Facebook", 
      hoverColors: "hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-blue-600"
    },
    {
      href: SOCIAL_LINKS.tiktok,
      icon: TikTokIcon,
      label: "TikTok",
      hoverColors: "hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:text-white hover:border-black"
    }
  ]

  return (
    <nav 
      className="flex justify-center gap-4 sm:gap-6"
      aria-label="Enlaces a redes sociales de Top Learning"
    >
      {socialButtons.map((social) => (
        <SocialButton
          key={social.label}
          href={social.href}
          icon={social.icon}
          label={social.label}
          hoverColors={social.hoverColors}
        />
      ))}
    </nav>
  )
})

const OfficialWebsite = memo(function OfficialWebsite() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center justify-center gap-2">
        <Globe className="w-5 h-5 text-[#6a6ae2]" aria-hidden="true" />
        <p className="text-base sm:text-lg font-semibold text-foreground">
          Sitio web oficial
        </p>
      </div>
      <a 
        href={SOCIAL_LINKS.website}
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block text-[#6a6ae2] font-bold text-lg sm:text-xl md:text-2xl hover:text-[#5a5ad2] transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
        aria-label="Visitar el sitio web oficial de Top Learning"
      >
        toplearning.academy
      </a>
    </div>
  )
})

const Copyright = memo(function Copyright() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className="pt-8 mt-8 border-t border-[#6a6ae2]/20">
      <p className="text-sm text-muted-foreground text-center">
        © {currentYear} Top Learning. Todos los derechos reservados.
      </p>
    </div>
  )
})

export default function FooterSection() {
  return (
    <footer 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#6a6ae2]/10 via-background to-secondary/10 border-t border-[#6a6ae2]/20 relative"
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" aria-hidden="true" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-8 sm:space-y-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            <FooterLogo />
            <SectionTitle />
          </div>
          
          <SocialLinks />
          <OfficialWebsite />
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
