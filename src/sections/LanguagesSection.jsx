import { useEffect, useRef, useState } from 'react'
import { Languages, Globe, Sparkles } from 'lucide-react'
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

function ProgressBar({ level, delay, isInView }) {
  return (
    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ 
          width: isInView ? `${level}%` : '0%',
          transitionDelay: `${delay}ms`
        }}
      />
    </div>
  )
}

export default function LanguagesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  const languages = [
    { name: "Arabic", level: 100, proficiency: "Native" },
    { name: "English", level: 90, proficiency: "Professional" }
  ]

  return (
    <section id="languages" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-4">
            <Languages size={16} />
            Languages
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Language Proficiency</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
        </AnimatedSection>

        <div className="grid gap-6">
          {languages.map((lang, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                      <Globe size={20} className="text-indigo-400" />
                    </div>
                    <span className="text-lg font-semibold">{lang.name}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
                    {lang.proficiency}
                  </span>
                </div>
                <ProgressBar level={lang.level} delay={200 + index * 150} isInView={isInView} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
