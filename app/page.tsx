"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Languages,
  Sun,
  Moon,
  Contrast,
} from "lucide-react"

const translations = {
  pt: {
    loading: "Carregando portfolio...",
    initializing: "Inicializando...",
    fullStackDev: "Desenvolvedor Full Stack especializado em ferramentas e extensões para web",
    contact: "Contato",
    aboutMe: "Sobre Mim",
    fullStackTitle: "Desenvolvedor Full Stack",
    aboutText1:
      "Sou um desenvolvedor especializado em criar ferramentas e extensões para web que otimizam processos e melhoram a experiência do usuário. Com mais de 5 anos de experiência, desenvolvo soluções personalizadas usando JavaScript, React, Node.js e tecnologias modernas.",
    aboutText2:
      "Meu foco está em desenvolver ferramentas web inteligentes, extensões de navegador e aplicações que automatizam tarefas complexas, sempre priorizando performance e usabilidade excepcional.",
    yearsExp: "Anos de Experiência",
    webDev: "Desenvolvimento Web",
    webTools: "Ferramentas Web",
    specialization: "Especialização",
    technicalSkills: "Habilidades Técnicas",
    webExtensions: "Extensões Web",
    webExtensionsDesc: "Desenvolvimento de extensões para navegadores com foco em produtividade",
    webToolsDesc: "Aplicações web que automatizam processos e otimizam workflows",
    fullStackDesc: "Desenvolvimento completo desde o frontend até APIs e bancos de dados",
    myProjects: "Meus Projetos",
    letsChat: "Vamos Conversar",
    contactText:
      "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos criar algo incrível juntos!",
    footerText: "© 2025 Luiz Amorim Todos os direitos reservados.",
    downloadResume: "Baixar Currículo",
  },
  en: {
    loading: "Loading portfolio...",
    initializing: "Initializing...",
    fullStackDev: "Full Stack Developer specialized in web tools and extensions",
    contact: "Contact",
    aboutMe: "About Me",
    fullStackTitle: "Full Stack Developer",
    aboutText1:
      "I'm a developer specialized in creating web tools and extensions that optimize processes and improve user experience. With over 5 years of experience, I develop custom solutions using JavaScript, React, Node.js and modern technologies.",
    aboutText2:
      "My focus is on developing intelligent web tools, browser extensions and applications that automate complex tasks, always prioritizing exceptional performance and usability.",
    yearsExp: "Years of Experience",
    webDev: "Web Development",
    webTools: "Web Tools",
    specialization: "Specialization",
    technicalSkills: "Technical Skills",
    webExtensions: "Web Extensions",
    webExtensionsDesc: "Browser extension development focused on productivity",
    webToolsDesc: "Web applications that automate processes and optimize workflows",
    fullStackDesc: "Complete development from frontend to APIs and databases",
    myProjects: "My Projects",
    letsChat: "Let's Chat",
    contactText:
      "I'm always open to new opportunities and interesting projects. Get in touch and let's create something amazing together!",
    footerText: "© 2025 Luiz Amorim All rights reserved.",
    downloadResume: "Download Resume",
  },
  fr: {
    loading: "Chargement du portfolio...",
    initializing: "Initialisation...",
    fullStackDev: "Développeur Full Stack spécialisé dans les outils et extensions web",
    contact: "Contact",
    aboutMe: "À Propos",
    fullStackTitle: "Développeur Full Stack",
    aboutText1:
      "Je suis un développeur spécialisé dans la création d'outils et d'extensions web qui optimisent les processus et améliorent l'expérience utilisateur. Avec plus de 5 ans d'expérience, je développe des solutions personnalisées utilisant JavaScript, React, Node.js et les technologies modernes.",
    aboutText2:
      "Mon focus est sur le développement d'outils web intelligents, d'extensions de navigateur et d'applications qui automatisent les tâches complexes, en priorisant toujours la performance et l'utilisabilité exceptionnelle.",
    yearsExp: "Années d'Expérience",
    webDev: "Développement Web",
    webTools: "Outils Web",
    specialization: "Spécialisation",
    technicalSkills: "Compétences Techniques",
    webExtensions: "Extensions Web",
    webExtensionsDesc: "Développement d'extensions de navigateur axées sur la productivité",
    webToolsDesc: "Applications web qui automatizent les processus et optimisent les workflows",
    fullStackDesc: "Développement complet du frontend aux APIs et bases de données",
    myProjects: "Mes Projets",
    letsChat: "Discutons",
    contactText:
      "Je suis toujours ouvert aux nouvelles opportunités et projets intéressants. Contactez-moi et créons quelque chose d'incroyable ensemble !",
    footerText: "© 2025 Luiz Amorim Tous droits réservés.",
    downloadResume: "Télécharger le CV",
  },
  es: {
    loading: "Cargando portfolio...",
    initializing: "Inicializando...",
    fullStackDev: "Desarrollador Full Stack especializado en herramientas y extensiones web",
    contact: "Contacto",
    aboutMe: "Sobre Mí",
    fullStackTitle: "Desarrollador Full Stack",
    aboutText1:
      "Soy un desarrollador especializado en crear herramientas y extensiones web que optimizan procesos y mejoran la experiencia del usuario. Con más de 5 años de experiencia, desarrollo soluciones personalizadas usando JavaScript, React, Node.js y tecnologías modernas.",
    aboutText2:
      "Mi enfoque está en desarrollar herramientas web inteligentes, extensiones de navegador y aplicaciones que automatizan tareas complejas, siempre priorizando el rendimiento y la usabilidad excepcional.",
    yearsExp: "Años de Experiencia",
    webDev: "Desarrollo Web",
    webTools: "Herramientas Web",
    specialization: "Especialización",
    technicalSkills: "Habilidades Técnicas",
    webExtensions: "Extensiones Web",
    webExtensionsDesc: "Desarrollo de extensiones de navegador enfocadas en productividad",
    webToolsDesc: "Aplicaciones web que automatizan procesos y optimizan flujos de trabajo",
    fullStackDesc: "Desarrollo completo desde frontend hasta APIs y bases de datos",
    myProjects: "Mis Projetos",
    letsChat: "Hablemos",
    contactText:
      "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. ¡Contáctame y creemos algo increíble juntos!",
    footerText: "© 2025 Luiz Amorim Todos los derechos reservados.",
    downloadResume: "Descargar CV",
  },
}

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [language, setLanguage] = useState("pt")
  const [fontSize, setFontSize] = useState("normal")
  const [highContrast, setHighContrast] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)

  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prevProgress + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const root = document.documentElement

    // Remove todas as classes primeiro
    root.classList.remove("dark", "small", "normal", "large", "high-contrast")

    // Aplica as classes necessárias
    if (darkMode) {
      root.classList.add("dark")
    }
    root.classList.add(fontSize)
    if (highContrast) {
      root.classList.add("high-contrast")
    }
  }, [darkMode, fontSize, highContrast])

  const skillsSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (skillsSectionRef.current && !skillsVisible) {
        const element = skillsSectionRef.current as HTMLElement
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Verifica se 30% do elemento está visível na viewport
        const elementVisible = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3

        if (elementVisible) {
          console.log("[v0] Skills section detected via scroll, activating animation")
          setSkillsVisible(true)
          // Remove o listener após ativar a animação
          window.removeEventListener("scroll", handleScroll)
        }
      }
    }

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Verifica imediatamente se já está visível
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [skillsVisible])

  const activateSkillsAnimation = () => {
    console.log("[v0] Manually activating skills animation")
    setSkillsVisible(true)
  }

  const projects = [
    {
      title: "DaniDropper Platform",
      description:
        "Plataforma web full-stack para comunidade de streamer com sistema de sorteios Provably Fair, marketplace de skins e economia virtual com DropzCoin.",
      tech: ["React", "TypeScript", "Node.js", "Express", "OAuth2", "Random.org API"],
      image: "/danidropper-platform.jpg",
      github: "https://github.com/luizamorim2",
      live: "https://dani-dropper.com/",
    },
    {
      title: "Quik Ranking System",
      description:
        "Sistema de ranking que processa dados em tempo real de múltiplas planilhas Google Sheets, com painéis intuitivos para busca e verificação de sorteios.",
      tech: ["JavaScript", "Google Sheets API", "Real-time Processing", "Firebase"],
      image: "/quik-ranking-system.jpg",
      github: "https://github.com/luizamorim2",
      live: "https://quik-8ec12.web.app/ranking",
    },
    {
      title: "Mais Projetos",
      description:
        "Explore outros projetos e contribuições no meu GitHub, incluindo APIs, aplicações web e ferramentas de desenvolvimento.",
      tech: ["Various", "Open Source", "Full Stack"],
      image: "/code-repository-dark-theme.png",
      github: "https://github.com/luizamorim2",
      live: "https://github.com/luizamorim2",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 95, icon: Code },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 92, icon: Globe },
    { name: "Node.js", level: 88, icon: Database },
    { name: "Python", level: 85, icon: Code },
    { name: "PostgreSQL", level: 80, icon: Database },
  ]

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-transform duration-700 ${progress === 100 ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Luiz <span className="text-primary">Amorim</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t.loading}</p>
          </div>

          <div className="w-80 mx-auto space-y-3">
            <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-100 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{t.initializing}</span>
              <span className="font-mono">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-40">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
          className="bg-background/80 backdrop-blur-sm"
          aria-label="Abrir painel de acessibilidade"
        >
          <Languages className="w-4 h-4" />
        </Button>

        {showAccessibilityPanel && (
          <Card className="absolute top-12 right-0 w-80 bg-background/95 backdrop-blur-sm border-border/50 text-foreground">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-foreground">Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Idioma</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={language === "pt" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("pt")}
                  >
                    PT
                  </Button>
                  <Button
                    variant={language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                  >
                    EN
                  </Button>
                  <Button
                    variant={language === "fr" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("fr")}
                  >
                    FR
                  </Button>
                  <Button
                    variant={language === "es" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("es")}
                  >
                    ES
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Tamanho da Fonte</label>
                <div className="flex gap-2">
                  <Button
                    variant={fontSize === "small" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFontSize("small")}
                  >
                    <Code className="w-3 h-3" />
                  </Button>
                  <Button
                    variant={fontSize === "normal" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFontSize("normal")}
                  >
                    <Code className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={fontSize === "large" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFontSize("large")}
                  >
                    <Code className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Alto Contraste</label>
                <Button
                  variant={highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={() => setHighContrast(!highContrast)}
                >
                  <Contrast className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Tema</label>
                <Button variant="outline" size="sm" onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Luiz <span className="text-primary">Amorim</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">{t.fullStackDev}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:rluiz4353@gmail.com">
                <Mail className="w-4 h-4" />
                {t.contact}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://github.com/luizamorim2" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/luizamorim2/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t.aboutMe.split(" ")[0]} <span className="text-primary">{t.aboutMe.split(" ")[1]}</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    {t.fullStackTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutText1}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutText2}</p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">5+</span>
                      </div>
                      <div>
                        <p className="font-semibold">{t.yearsExp}</p>
                        <p className="text-sm text-muted-foreground">{t.webDev}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{t.webTools}</p>
                        <p className="text-sm text-muted-foreground">{t.specialization}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Card */}
            <div ref={skillsSectionRef}>
              <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm" data-skills-section>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    {t.technicalSkills}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => {
                    console.log(
                      `[v0] Rendering skill ${skill.name}: visible=${skillsVisible}, width=${skillsVisible ? skill.level : 0}%`,
                    )
                    return (
                      <div
                        key={skill.name}
                        className="space-y-3"
                        style={{
                          transform: "translateY(0)",
                          opacity: 1,
                          transition: `all 0.6s ease-out`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon className="w-4 h-4 text-primary" />
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-muted rounded-full h-3 border border-border/50 overflow-hidden shadow-inner">
                            <div
                              className="bg-gradient-to-r from-primary to-primary/80 h-full rounded-full relative overflow-hidden"
                              style={{
                                width: skillsVisible ? `${skill.level}%` : "0%",
                                transition: `width 1.2s ease-out ${index * 200}ms`,
                              }}
                            >
                              {skillsVisible && (
                                <div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"
                                  style={{
                                    animationDelay: `${index * 200}ms`,
                                    animationDuration: "1.5s",
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-border/50 bg-card/20 hover:bg-card/40 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t.webExtensions}</h3>
              <p className="text-sm text-muted-foreground">{t.webExtensionsDesc}</p>
            </Card>

            <Card className="text-center p-6 border-border/50 bg-card/20 hover:bg-card/40 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t.webTools}</h3>
              <p className="text-sm text-muted-foreground">{t.webToolsDesc}</p>
            </Card>

            <Card className="text-center p-6 border-border/50 bg-card/20 hover:bg-card/40 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Full Stack</h3>
              <p className="text-sm text-muted-foreground">{t.fullStackDesc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.myProjects.split(" ")[0]} <span className="text-primary">{t.myProjects.split(" ")[1]}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t.letsChat.split(" ")[0]} <span className="text-primary">{t.letsChat.split(" ")[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t.contactText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:rluiz4353@gmail.com">
                <Mail className="w-5 h-5" />
                rluiz4353@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://github.com/luizamorim2" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/luizamorim2/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="mailto:rluiz4353@gmail.com" className="group p-3 transition-all duration-300" aria-label="Email">
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            </a>
            <a
              href="https://github.com/luizamorim2"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            </a>
            <a
              href="https://www.linkedin.com/in/luizamorim2/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            </a>
            <a
              href="/curriculo-luiz-amorim.pdf"
              download="Curriculo-Luiz-Amorim.pdf"
              className="group p-3 transition-all duration-300"
              aria-label="Download Currículo"
            >
              <svg
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
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
            </a>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">{t.footerText}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
