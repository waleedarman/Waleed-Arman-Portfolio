import { useEffect, useRef, useState } from 'react'
import { Briefcase, Building2, Calendar, CheckCircle2, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

function useInView(ref, threshold = 0.2) {
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [ref, threshold])
  
  return isInView
}

export default function InternshipsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  const internships = [
    {
      role: "Intern",
      company: "eMicrolearn",
      logo: "eM",
      date: "Jul – Sep 2025",
      achievements: [
        "Educational content digitalization"
      ]
    },
    {
      role: "Full Stack Intern",
      company: "GRIDS APPS",
      logo: "GA",
      date: "Jul – Sep 2025",
      achievements: [
        "Web apps with HTML, CSS, Bootstrap, JS, React, Node.js"
      ]
    },
    {
      role: "QA Intern",
      company: "ASAL Technologies",
      logo: "AT",
      date: "Sep – Dec 2025",
      achievements: [
        "Manual & Automation Testing with Selenium"
      ]
    }
  ]

  return (
    <section id="internships" className="py-6 relative bg-dark-300/50 stars-bg" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
            <Briefcase size={16} />
            Experience
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Internships</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded" />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0 z-10 shadow-lg shadow-purple-500/30">
                  {internship.logo}
                </div>
                
                <div className="glass rounded-xl p-5 flex-1 hover:border-purple-500/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{internship.role}</h3>
                    <span className="text-purple-400 text-sm">{internship.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{internship.company}</p>
                  <p className="text-gray-500 text-sm">{internship.achievements[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
