"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  Star,
  Clock,
  Zap,
  MessageCircle,
  BookOpen,
  Trophy,
  Target,
  Users,
  Award,
  Navigation,
  ArrowRight,
  Timer,
  Percent,
  Instagram,
  Facebook,
  Globe,
  Music,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AICourseLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3">
        {/* Navigation menu */}
        <div className="relative">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size="icon"
            variant="outline"
            className="rounded-full w-12 h-12 bg-background/95 hover:bg-muted shadow-lg backdrop-blur-sm border-2"
            style={{ backgroundColor: "#6a6ae2", borderColor: "#6a6ae2" }}
          >
            <Navigation className="w-5 h-5 text-white" />
          </Button>

          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-background/98 backdrop-blur-sm border-2 rounded-xl shadow-2xl p-2 min-w-[220px] animate-in slide-in-from-top-2 z-[9999]">
              <nav className="space-y-1">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Inicio</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("diferenciadores")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Diferenciadores</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("perfiles")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Perfiles</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("programa")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Programa</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("precios")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Precios</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("profesores")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Profesores</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("testimonios")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>Credibilidad</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors group"
                >
                  <span>FAQ</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="border-t pt-2 mt-2">
                  <Button size="sm" className="w-full rounded-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Inscríbete Ahora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <div className="absolute inset-0 astro-hero-gradient" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 fade-in-up astro-floating">
              <Image
                src="/images/Logo-Black.png"
                alt="TOP LEARNING"
                width={300}
                height={120}
                className="mx-auto h-20 w-auto astro-glow-effect brightness-0 invert"
                priority
              />

              <div className="space-y-2">
                <p className="text-secondary font-semibold text-lg tracking-wide uppercase astro-shimmer">
                  Curso de Inteligencia Artificial
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-balance">
                  Domina la <span className="astro-text-gradient">IA</span> sin
                  <br />
                  ser <span className="astro-text-gradient">programador</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Aprende a usar las herramientas de IA más poderosas para automatizar tu trabajo, aumentar tu
                  productividad y destacar en tu carrera profesional.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 astro-card rounded-full px-6 py-3">
                <span className="text-white font-semibold text-lg">Clases en vivo por Google Meet</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="astro-button-secondary rounded-full text-lg px-8 py-6 text-white font-bold shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
                + Información
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 py-6 astro-card border-white/30 text-white hover:bg-white/20 font-semibold shadow-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar PDF del programa
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <Image
                    src="/images/Ángel Casillas.webp"
                    alt="Ángel Casillas"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white/50 object-cover"
                  />
                  <Image
                    src="/images/Sofia Kassin.webp"
                    alt="Sofia Kassin"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white/50 object-cover"
                  />
                  <Image
                    src="/images/Miguel Flores.webp"
                    alt="Miguel Flores"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white/50 object-cover"
                  />
                  <Image
                    src="/images/Wendy Hernández.webp"
                    alt="Wendy Hernández"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white/50 object-cover"
                  />
                </div>
                <span className="text-white font-semibold ml-2">+2,500 estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Card */}
      <section className="relative -mt-32 z-20">
        <div className="container px-4 md:px-6">
          <Card className="astro-card astro-border-gradient max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 astro-glow-effect">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-4">
                {/* Características del Programa */}
                <div className="text-center space-y-4 astro-floating">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#6a6ae2]/20 to-[#6a6ae2]/40 flex items-center justify-center astro-pulse">
                    <Clock className="w-8 h-8 text-[#6a6ae2]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">42 HRS</h3>
                  <p className="text-muted-foreground">de clases prácticas</p>
                </div>
                <div className="text-center space-y-4 astro-floating" style={{ animationDelay: "1s" }}>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center astro-pulse">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">+ DE 50</h3>
                  <p className="text-muted-foreground">herramientas de IA</p>
                </div>
                <div className="text-center space-y-4 astro-floating" style={{ animationDelay: "2s" }}>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#6a6ae2]/20 to-[#6a6ae2]/40 flex items-center justify-center astro-pulse">
                    <BookOpen className="w-8 h-8 text-[#6a6ae2]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">14 Semanas</h3>
                  <p className="text-muted-foreground">3 horas por semana</p>
                </div>
                <div className="text-center space-y-4 astro-floating" style={{ animationDelay: "3s" }}>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center astro-pulse">
                    <Trophy className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">6 Sistemas</h3>
                  <p className="text-muted-foreground">empresariales hechos con IA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diferenciadores */}
      <section id="diferenciadores" className="py-24 astro-section-gradient">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              ¿Por qué elegir a Top Learning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Diseñado específicamente para profesionales sin experiencia técnica
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="astro-card astro-border-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 astro-glow-effect">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6a6ae2] via-secondary to-[#6a6ae2] flex items-center justify-center shadow-lg astro-pulse">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#6a6ae2]">Aprendizaje Práctico</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Aprende usando casos reales de tu industria. Sin teoría innecesaria, solo herramientas que puedes
                  aplicar inmediatamente en tu trabajo diario.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="astro-card astro-border-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 astro-glow-effect">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg astro-pulse">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Comunidad Activa</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Únete a una comunidad de +2,500 profesionales que ya están transformando su trabajo con IA y
                  automatización inteligente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="astro-card astro-border-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 astro-glow-effect">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-lg astro-pulse">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl astro-text-gradient">Certificación Reconocida</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Obtén una certificación reconocida que valide tus nuevas habilidades en IA ante empleadores y clientes
                  potenciales.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfiles */}
      <section id="perfiles" className="py-24 bg-gradient-to-r from-[#6a6ae2]/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perfiles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Conoce el perfil de ingreso y egreso de nuestros estudiantes
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Perfil de Ingreso */}
            <Card className="border-2 border-[#6a6ae2]/20 shadow-xl bg-gradient-to-br from-background to-[#6a6ae2]/5">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-[#6a6ae2]">Perfil de Ingreso</CardTitle>
                <CardDescription className="text-lg">¿Quién puede tomar este curso?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2] mt-1 flex-shrink-0" />
                    <span>Profesionales, freelancers o emprendedores sin experiencia técnica en IA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2] mt-1 flex-shrink-0" />
                    <span>Conocimientos básicos de computadora y navegación web</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2] mt-1 flex-shrink-0" />
                    <span>Motivación para aprender y aplicar nuevas tecnologías</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2] mt-1 flex-shrink-0" />
                    <span>Disposición para participar activamente en clases en vivo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2] mt-1 flex-shrink-0" />
                    <span>Acceso a laptop/computadora y conexión estable a internet</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Perfil de Egreso */}
            <Card className="border-2 border-secondary/20 shadow-xl bg-gradient-to-br from-background to-secondary/5">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-secondary">Perfil de Egreso</CardTitle>
                <CardDescription className="text-lg">¿Qué lograrás al completar el curso?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Dominio de +50 herramientas de IA para diferentes propósitos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>6 sistemas empresariales funcionales creados por ti</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Capacidad de automatizar procesos y ahorrar 2-3 horas diarias</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Certificación institucional que valida tus habilidades</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Posicionamiento como referente de innovación en tu sector</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section id="programa" className="py-24 astro-hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">PROGRAMA</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Aprendizaje por proyectos encadenados con el acompañamiento de un guía experto.
              <strong className="astro-text-gradient"> 80% práctica, 20% teoría aplicada</strong>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="modulo-1" className="astro-card astro-border-gradient rounded-xl px-8">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-6">
                    <Badge className="astro-button-primary rounded-full px-4 py-2 text-base font-bold text-white">
                      MÓDULO 1
                    </Badge>
                    <div className="text-left">
                      <h3 className="font-bold text-xl text-white">FUNDAMENTOS (Semanas 1-2)</h3>
                      <p className="text-secondary font-semibold">Domina la comunicación con IA como un profesional</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="space-y-4 text-white/90">
                    <p className="text-lg font-semibold mb-4">Aprenderás a usar IA para:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>
                          Conocer y dominar los mejores chatbots del momento (ChatGPT, Deepseek, Claude, Gemini y más)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Generar contenido escrito y documentos de calidad (emails, propuestas, informes)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Hacer investigación profunda en minutos lo que antes te tomaba horas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Crear prompts efectivos que te den exactamente lo que necesitas</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="modulo-2" className="astro-card astro-border-gradient rounded-xl px-8">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-6">
                    <Badge className="astro-button-primary rounded-full px-4 py-2 text-base font-bold text-white">
                      MÓDULO 2
                    </Badge>
                    <div className="text-left">
                      <h3 className="font-bold text-xl text-white">CREACIÓN AUDIOVISUAL (Semanas 3-5)</h3>
                      <p className="text-secondary font-semibold">
                        Conviértete en diseñador, editor y productor multimedia con IA
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="space-y-4 text-white/90">
                    <p className="text-lg font-semibold mb-4">Aprenderás a usar IA para:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>
                          Crear imágenes profesionales para tu trabajo o negocio (logos, banners, ilustraciones)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Generar videos promocionales sin cámara ni experiencia en edición</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Producir audio y locuciones en diferentes voces e idiomas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Diseñar presentaciones impactantes que compitan con agencias creativas</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="modulo-3" className="astro-card astro-border-gradient rounded-xl px-8">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-6">
                    <Badge className="astro-button-primary rounded-full px-4 py-2 text-base font-bold text-white">
                      MÓDULO 3
                    </Badge>
                    <div className="text-left">
                      <h3 className="font-bold text-xl text-white">AUTOMATIZACIÓN (Semanas 6-8)</h3>
                      <p className="text-secondary font-semibold">
                        Libérate de tareas repetitivas con automatización inteligente
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="space-y-4 text-white/90">
                    <p className="text-lg font-semibold mb-4">Aprenderás a usar IA para:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Conectar diferentes aplicaciones para que trabajen juntas automáticamente</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Automatizar flujos de trabajo desde emails hasta actualizaciones de bases de datos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Crear disparadores inteligentes que activen actions según condiciones específicas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Escalar tu capacidad sin contratar más personal</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="modulo-4" className="astro-card astro-border-gradient rounded-xl px-8">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-6">
                    <Badge className="astro-button-primary rounded-full px-4 py-2 text-base font-bold text-white">
                      MÓDULO 4
                    </Badge>
                    <div className="text-left">
                      <h3 className="font-bold text-xl text-white">AGENTES INTELIGENTES (Semanas 9-12)</h3>
                      <p className="text-secondary font-semibold">
                        Clónate y crea empleados virtuales que atiendan 24/7
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="space-y-4 text-white/90">
                    <p className="text-lg font-semibold mb-4">Aprenderás a usar IA para:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Entrenar chatbots personalizados con el conocimiento específico de tu negocio</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Crear asistentes especializados para ventas, atención al cliente y soporte técnico</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Configurar múltiples canales (web, WhatsApp, redes sociales y llamadas telefónicas)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Establecer escalamientos inteligentes cuando el bot no puede resolver algo</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="modulo-5" className="astro-card astro-border-gradient rounded-xl px-8">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-6">
                    <Badge className="astro-button-primary rounded-full px-4 py-2 text-base font-bold text-white">
                      MÓDULO 5
                    </Badge>
                    <div className="text-left">
                      <h3 className="font-bold text-xl text-white">
                        ANÁLISIS E INTELIGENCIA ESTRATÉGICA (Semanas 13-14)
                      </h3>
                      <p className="text-secondary font-semibold">Convierte datos en decisiones más inteligentes</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="space-y-4 text-white/90">
                    <p className="text-lg font-semibold mb-4">Aprenderás a usar IA para:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Analizar grandes volúmenes de datos y extraer insights accionables</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Crear dashboards inteligentes que se actualicen automáticamente</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Generar predicciones sobre tendencias de tu mercado y comportamiento de clientes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>Tomar decisiones informadas con reportes automáticos y recomendaciones de IA</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 py-6 astro-card border-white/30 text-white hover:bg-white/20 font-semibold shadow-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar PDF del programa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-24 bg-gradient-to-br from-[#6a6ae2]/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Planes de Inversión</h2>
            <div className="space-y-4">
              <Badge variant="destructive" className="rounded-full px-8 py-3 text-lg font-bold animate-pulse">
                <Percent className="w-5 h-5 mr-2" />
                BECA DEL 50% - SOLO POR UNOS DÍAS
              </Badge>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-2 border-[#6a6ae2]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-[#6a6ae2]/5">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-[#6a6ae2]">Semanal</CardTitle>
                <CardDescription>14 pagos semanales</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-muted-foreground line-through">$400 semanal</div>
                  <div>
                    <span className="text-4xl font-bold text-[#6a6ae2]">$350</span>
                    <span className="text-muted-foreground">/semana</span>
                  </div>
                  <Badge className="rounded-full bg-[#6a6ae2]/10 text-[#6a6ae2] border-[#6a6ae2]">Total: $5,600</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Clases en vivo por Google Meet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Guía y tutor personal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Soporte del equipo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Grabaciones y materiales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Certificación institucional</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plan 3 Pagos */}
            <Card className="border-2 border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative bg-gradient-to-br from-background to-secondary/5">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="rounded-full px-6 py-2 bg-secondary text-white font-bold">Más Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-secondary">C/4 Semanas</CardTitle>
                <CardDescription>3 pagos cada 4 semanas</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-muted-foreground line-through">$1,660 cada 4 semanas</div>
                  <div>
                    <span className="text-4xl font-bold text-secondary">$1,460</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <Badge className="rounded-full bg-secondary/10 text-secondary border-secondary">Total: $4,980</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Clases en vivo por Google Meet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Guía y tutor personal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Soporte del equipo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Grabaciones y materiales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Certificación institucional</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plan Único - MEJOR PRECIO */}
            <Card className="border-2 border-[#6a6ae2] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative bg-gradient-to-br from-background to-[#6a6ae2]/10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="rounded-full px-6 py-2 bg-gradient-to-r from-[#6a6ae2] to-secondary text-white font-bold">
                  MEJOR PRECIO
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-[#6a6ae2]">Curso Completo</CardTitle>
                <CardDescription>Pago único - Máximo ahorro</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-muted-foreground line-through">$4,070 precio regular</div>
                  <div>
                    <span className="text-4xl font-bold text-[#6a6ae2]">$3,570</span>
                    <span className="text-muted-foreground">/una vez</span>
                  </div>
                  <Badge className="rounded-full bg-gradient-to-r from-[#6a6ae2]/10 to-secondary/10 text-[#6a6ae2] border-[#6a6ae2]">
                    + $500 inscripción
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Clases en vivo por Google Meet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Guía y tutor personal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Soporte del equipo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Grabaciones y materiales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm">Certificación institucional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm font-semibold">Hasta 3 meses sin intereses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6a6ae2]" />
                    <span className="text-sm font-semibold">Curso virtual de regalo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-6">
            <Button
              size="lg"
              className="rounded-full text-xl px-16 py-8 bg-gradient-to-r from-[#6a6ae2] to-secondary hover:from-[#6a6ae2]/90 hover:to-secondary/90 text-white font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Inscríbete por WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground">
              Aceptamos tarjetas de crédito • Hasta 3 meses sin intereses en curso completo
            </p>
          </div>
        </div>
      </section>

      {/* Profesores */}
      <section id="profesores" className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6a6ae2]/20 via-transparent to-secondary/20" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Guías del Programa</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              Conoce a los expertos que te acompañarán en tu transformación con IA
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { name: "Ángel Casillas", role: "Especialista en IA", image: "/images/Ángel Casillas.webp" },
              { name: "Sofia Kassin", role: "Experta en Automatización", image: "/images/Sofia Kassin.webp" },
              { name: "Alexis Perales", role: "Consultor en IA", image: "/images/Alexis Perales.webp" },
              { name: "Mario Villalobos", role: "Analista de Datos", image: "/images/Mario Villalobos.webp" },
              { name: "Perla Arredondo", role: "Especialista en Marketing IA", image: "/images/Perla Arredondo.webp" },
              { name: "Miguel Flores", role: "Desarrollador de Agentes IA", image: "/images/Miguel Flores.webp" },
            ].map((profesor, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-gradient-to-br from-background/20 to-background/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={profesor.image || "/placeholder.svg"}
                        alt={profesor.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{profesor.name}</h3>
                      <p className="text-secondary font-medium">{profesor.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios/Credibilidad */}
      <section id="testimonios" className="py-24 bg-gradient-to-br from-background via-[#6a6ae2]/5 to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen nuestros estudiantes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Más de 2,500 profesionales ya han transformado su carrera con IA
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Wendy Hernández",
                role: "Directora de Marketing",
                content:
                  "Este curso cambió completamente mi forma de trabajar. Ahora automatizo tareas que me tomaban horas y puedo enfocarme en estrategia.",
                rating: 5,
                image: "/images/Wendy Hernández.webp",
              },
              {
                name: "Darío Arteaga",
                role: "Consultor de Negocios",
                content:
                  "Sin experiencia técnica previa, logré implementar IA en mi consultora. Mis clientes están impresionados con los resultados.",
                rating: 5,
                image: "/images/Darío Arteaga.webp",
              },
              {
                name: "Gerardo Ramos",
                role: "Gerente de RRHH",
                content:
                  "Las herramientas de IA me ayudan a filtrar CVs, crear descripciones de puestos y automatizar procesos. Increíble ROI.",
                rating: 5,
                image: "/images/Gerardo Ramos.webp",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">PREGUNTAS FRECUENTES</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Resolvemos las dudas más comunes sobre nuestro curso
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="border-2 rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                  ¿ESTE CURSO ES PARA MÍ?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Sí, si eres profesional, freelancer o emprendedor que busca implementar IA práctica en tu trabajo o
                  negocio. Las clases son por Google Meet con grupos de máximo 150 estudiantes, tendrás compañeros de
                  diferentes sectores e industrias. Contamos con 1 guía experto y 1 tutor que te acompañarán en el
                  proceso. Es 100% online en clases en vivo, 3 horas por semana, entre semana 2 sesiones o fines de
                  semana una sesión con horarios definidos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border-2 rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                  ¿QUÉ HERRAMIENTAS NECESITO PARA TOMAR EL CURSO?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Una laptop o computadora es indispensable, ya que usaremos software en navegadores web. Necesitas:
                  Google Chrome actualizado, acceso a Google Meet, una cuenta de correo Gmail, conexión estable a
                  internet, cámara y micrófono (pueden ser los integrados de tu laptop). La mayoría de las herramientas
                  de IA que usaremos tienen versiones gratuitas o periodos de prueba.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border-2 rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                  ¿QUÉ CONOCIMIENTOS NECESITO PARA APROVECHAR EL PROGRAMA?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Estar dispuesto a aprender en línea, conocimientos básicos de computadora y navegación web, mucha
                  motivación y disposición para ser parte activa del proceso. Si sabes enviar emails y navegar en
                  internet, tienes la base técnica. Lo crucial es que vengas dispuesto a investigar, experimentar y
                  resolver problemas. Este NO es un programa donde te sientas a recibir información pasivamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border-2 rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                  ¿QUÉ PASA SI NO TENGO TIEMPO PARA COMPLETAR TODO?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Cada proyecto está diseñado para completarse en las sesiones. Además, tienes acceso a grabaciones y
                  material complementario 24/7. Todas las sesiones se graban, el material está estructurado para que
                  puedas completarlo a tu propio ritmo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 astro-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6a6ae2]/30 via-transparent to-secondary/30" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
              ¿Listo para hacer de la IA tu <span className="astro-text-gradient">superpoder secreto</span>?
            </h2>
            <p className="text-xl text-white/80 text-pretty">
              Únete a más de 2,500 profesionales que ya están transformando su trabajo con inteligencia artificial
            </p>
            <div className="space-y-6">
              <div className="w-full flex justify-center px-4">
                <Badge
                  variant="destructive"
                  className="rounded-full px-4 sm:px-8 py-3 text-sm sm:text-lg font-bold animate-pulse astro-glow-effect max-w-full text-center break-words"
                >
                  <Timer className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-base">PROMOCIÓN LIMITADA - SOLO POR UNOS DÍAS</span>
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button
                  size="lg"
                  className="astro-button-secondary rounded-full text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 text-white font-bold shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Inscríbete por WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="astro-card rounded-full text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 border-white/30 text-white hover:bg-white/20 font-bold shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 bg-transparent w-full sm:w-auto"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Descargar PDF del programa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Redes Sociales */}
      <footer className="py-16 bg-gradient-to-br from-[#6a6ae2]/10 via-background to-secondary/10 border-t border-[#6a6ae2]/20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Image
                src="/images/Logo-Black.png"
                alt="TOP LEARNING"
                width={200}
                height={80}
                className="mx-auto h-12 w-auto brightness-0 invert mb-4"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#6a6ae2] to-secondary bg-clip-text text-transparent">
                Síguenos en nuestras redes sociales
              </h3>
            </div>
            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-14 h-14 hover:bg-gradient-to-br hover:from-[#6a6ae2] hover:to-[#6a6ae2]/80 hover:text-white hover:border-[#6a6ae2] transition-all duration-300 transform hover:scale-110 bg-transparent border-[#6a6ae2]/30"
              >
                <Instagram className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-14 h-14 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 bg-transparent border-[#6a6ae2]/30"
              >
                <Facebook className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-14 h-14 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 hover:text-white hover:border-pink-500 transition-all duration-300 transform hover:scale-110 bg-transparent border-[#6a6ae2]/30"
              >
                <Music className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-14 h-14 hover:bg-gradient-to-br hover:from-secondary hover:to-secondary/80 hover:text-white hover:border-secondary transition-all duration-300 transform hover:scale-110 bg-transparent border-[#6a6ae2]/30"
              >
                <Globe className="w-6 h-6" />
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Sitio web oficial</p>
              <p className="text-[#6a6ae2] font-bold text-xl">toplearning.academy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
