import './index.css'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene3D from './components/Scene3D'
import AnimatedSection, { StaggerChildren } from './components/AnimatedSection'
import { MagneticButton, TiltCard, RippleButton } from './components/MicroInteractions'
import InternshipsSection from './sections/InternshipsSection'
import EducationSection from './sections/EducationSection'
import CertificationsSection from './sections/CertificationsSection'
import { 
  Github, Linkedin, Twitter, Mail, MapPin, Briefcase,
  Code2, TestTube2, Database, Server, Globe, Smartphone,
  CheckCircle2, ExternalLink, ChevronRight, ChevronDown,
  Terminal, Bug, Layers, Cpu, GitBranch, Menu, X, Sparkles,
  Download, User, Phone
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    gsap.fromTo('.hero-text', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      }
    )

    gsap.fromTo('.hero-badge',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
    )
  }, [])

  const projects = [
    {
      title: "SauceDemo E2E Testing Framework",
      description: "End-to-end test automation framework using Playwright, TypeScript, and POM to validate login, cart, checkout, and sorting functionalities.",
      tech: ["Playwright", "TypeScript", "POM"],
      category: "QA",
      gradient: "from-emerald-500 to-teal-500",
      github: "https://github.com/waleedarman/SauceDemo-E2E-Testing-Playwright.git"
    },
    {
      title: "Technician Hiring Platform (THP)",
      description: "Full-stack web application using Angular and Laravel that connects job owners with technicians. Includes job posting, offer submissions, and bid management.",
      tech: ["Angular", "Laravel", "MySQL"],
      category: "Full Stack",
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/ali-yaqoup/Backend-THP.git"
    },
    {
      title: "Real Estate Management System",
      description: "Desktop system using JavaFX, Scene Builder, MySQL, and Hibernate with DAO, Factory, Singleton patterns for property/offer management.",
      tech: ["JavaFX", "MySQL", "Hibernate"],
      category: "Full Stack",
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/waleedarman/Real-Estate-Management-System.git"
    },
    {
      title: "Sit Spark LLC Website",
      description: "Responsive static website showcasing web design services, portfolio pages, and business landing features.",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "Full Stack",
      gradient: "from-cyan-500 to-blue-500",
      github: "https://github.com/waleedarman/Site-Spark-LLC..git"
    },
    {
      title: "Time4meds App",
      description: "UI/UX design for medication reminder app with healthcare provider communication and health articles access.",
      tech: ["Figma", "UI/UX", "Prototyping"],
      category: "UX/UI",
      gradient: "from-pink-500 to-rose-500",
      link: "https://www.behance.net/gallery/211753891/Time4Meds-(Ui-Ux)"
    },
    {
      title: "Arman-Production",
      description: "A modern and responsive portfolio website for Arman Production, a creative studio specializing in photography, videography, and digital media.",
      tech: ["React", "CSS", "JavaScript"],
      category: "Full Stack",
      gradient: "from-orange-500 to-amber-500",
      github: "https://github.com/waleedarman/Arman-Production.git"
    }
  ]

  const skillsData = [
    {
      title: "Programming Languages",
      icon: Terminal,
      gradient: "from-orange-500 to-amber-500",
      skills: ["C", "C++", "C#", "Java", "Python", "SQL", "JavaScript", "TypeScript", "PHP"]
    },
    {
      title: "Frontend",
      icon: Globe,
      gradient: "from-cyan-500 to-blue-500",
      skills: ["HTML & CSS", "SCSS", "JSX", "React.js", "Angular 19", "Bootstrap", "Webpack", "Vite"]
    },
    {
      title: "Backend",
      icon: Server,
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Node.js", "Laravel", "REST APIs", "Next.js"]
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-emerald-500 to-teal-500",
      skills: ["MySQL", "MongoDB", "Firebase"]
    },
    {
      title: "QA & Testing",
      icon: Bug,
      gradient: "from-rose-500 to-pink-500",
      skills: ["Selenium", "Manual Testing", "Automation Testing", "Test Case Execution", "Bug Reporting", "Playwright"]
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      gradient: "from-violet-500 to-purple-500",
      skills: ["Git", "GitHub", "Figma", "Canva", "Jira", "Trello", "Vercel", "GitHub Pages"]
    },
    {
      title: "AI & ML",
      icon: Cpu,
      gradient: "from-pink-500 to-rose-500",
      skills: ["AI Fundamentals", "Machine Learning", "ChatGPT", "LLMs", "Generative AI", "AI Ethics"]
    }
  ]

  const services = [
    { icon: Code2, title: "Full Stack Development", description: "Building responsive web applications using React, Angular, Laravel, and Node.js", gradient: "from-indigo-500 to-purple-500" },
    { icon: TestTube2, title: "QA & Testing", description: "Manual & Automation Testing using Selenium and Playwright", gradient: "from-emerald-500 to-teal-500" },
    { icon: Layers, title: "UX/UI Design", description: "Crafting intuitive, user-centric designs with Figma and Canva", gradient: "from-pink-500 to-rose-500" },
    { icon: Database, title: "Database Design", description: "Designing efficient database architectures", gradient: "from-cyan-500 to-blue-500" }
  ]

  return (
    <div className="min-h-screen bg-dark-400 text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-gradient">Waleed Arman</span>
          </a>
          
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-dark-400 md:bg-transparent p-6 md:p-0 gap-4 md:gap-8 border-b md:border-none border-white/10`}>
            {['Home', 'About', 'Services', 'Skills', 'Projects', 'Internships', 'Education', 'Certifications', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Scene3D className="opacity-60" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-400 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for new opportunities
            </div>
            
            <h1 className="hero-text text-5xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Waleed Arman</span>
            </h1>
            
            <h2 className="hero-text text-2xl lg:text-3xl text-gray-400 font-medium mb-6 flex flex-wrap items-center gap-3">
              <span>Full Stack Developer</span>
              <span className="text-primary">|</span>
              <span>QA Engineer</span>
              <span className="text-primary">|</span>
              <span>UX/UI Designer</span>
            </h2>
            
            <p className="hero-text text-gray-500 text-lg max-w-xl mb-8 leading-relaxed">
              Versatile Software Engineering student passionate about Frontend, Backend, QA, and UX/UI design. 
              Driven by innovation and efficiency, with a strong focus on crafting intuitive, high-performance digital experiences.
            </p>
            
            <div className="hero-text flex flex-wrap gap-4 mb-10">
              <a href="https://drive.google.com/file/d/1kxISgsA1OCMivh8keqKYczAts2nNZJeF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <RippleButton className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1">
                  <Download size={18} />
                  <span>Download CV</span>
                </RippleButton>
              </a>
              
              <a href="#contact">
                <MagneticButton className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:border-primary/50 transition-all duration-300">
                  <Mail size={18} />
                  <span>Contact Me</span>
                </MagneticButton>
              </a>
            </div>
            
            <div className="hero-text flex gap-4">
              {[
                { icon: Github, href: "https://github.com/waleedarman" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/waleed-arman/" }
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center glass rounded-xl text-gray-400 hover:text-white hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative glass rounded-2xl p-8 glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-gray-500 text-sm font-mono">waleed@dev</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p><span className="text-emerald-400">$</span> <span className="text-white">whoami</span></p>
                  <p className="text-gray-400">
                    <span className="text-indigo-400">name:</span> "Waleed Arman"
                  </p>
                  <p className="text-gray-400">
                    <span className="text-indigo-400">role:</span> "Full Stack & QA & UX/UI"
                  </p>
                  <p className="text-gray-400">
                    <span className="text-indigo-400">education:</span> "An-Najah University"
                  </p>
                  <p className="text-gray-400">
                    <span className="text-indigo-400">passion:</span> "Building & Testing"
                  </p>
                  <p><span className="text-emerald-400">$</span> <span className="animate-pulse text-indigo-400">_</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </section>

      <section id="about" className="py-12 relative stars-bg">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              <Sparkles size={16} />
              About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Passionate Developer & Quality Advocate</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/30" style={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' }}>
                    <img 
                      src="/profile.jpg" 
                      alt="Waleed Arman" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl rounded-2xl -z-10" />
                </div>
                <div>
                  <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                    Versatile <span className="text-primary font-semibold">Software Engineering student</span> passionate about Frontend, Backend, QA, and UX/UI design. 
                    Driven by innovation and efficiency.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    My dual expertise in full-stack development and QA allows me to write testable code from the 
                    start and identify potential issues before they become problems.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Clean & maintainable architecture",
                  "Test-driven workflow",
                  "Agile development practices",
                  "CI/CD automation integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <StaggerChildren className="grid grid-cols-2 gap-6">
              {[
                { number: "20+", label: "Projects Completed" },
                { number: "1+", label: "Years Experience" }
              ].map((stat, i) => (
                <TiltCard key={i} className="glass rounded-2xl p-8 text-center hover:glow transition-all duration-300">
                  <span className="text-4xl font-bold text-gradient">{stat.number}</span>
                  <p className="text-gray-500 mt-2">{stat.label}</p>
                </TiltCard>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 bg-dark-300/50 stars-bg">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              What I Do
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
          </AnimatedSection>
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <TiltCard key={i} className="group glass rounded-2xl p-8 text-center hover:glow transition-all duration-500">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </TiltCard>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section id="skills" className="py-12 stars-bg">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-4">
              <Sparkles size={16} />
              My Toolbox
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded" />
          </AnimatedSection>
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
            {skillsData.map((category, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-dark-100 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-dark-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section id="projects" className="py-12 bg-dark-300/50 stars-bg">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
          </AnimatedSection>
          
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <TiltCard key={i} tiltStrength={5} className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'Full Stack' 
                        ? 'bg-indigo-500/20 text-indigo-400' 
                        : project.category === 'QA'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}>
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-100 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-100 text-gray-400 hover:text-white hover:bg-primary transition-all duration-300">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">{project.title}</h3>
                  <p className="text-gray-500 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-dark-100 rounded-lg text-sm text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <InternshipsSection />
      <EducationSection />
      <CertificationsSection />

      <section id="contact" className="py-12 stars-bg">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </AnimatedSection>
          
          <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-8" staggerDelay={100}>
            <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <Mail size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-medium text-sm">armanwaleed89@gmail.com</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <Phone size={24} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-cyan-400 font-medium text-sm">+972 569287748</p>
              </div>
            </div>
          </StaggerChildren>
          
          <AnimatedSection className="text-center">
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/waleedarman", color: "hover:border-gray-400" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/waleed-arman/", color: "hover:border-blue-500" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center glass rounded-xl text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-xl font-bold">
            <span className="text-gradient">Waleed Arman</span>
          </a>
          <p className="text-gray-500 text-sm">© 2026 Waleed Arman. All rights reserved</p>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/waleedarman" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/waleed-arman/" }
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
