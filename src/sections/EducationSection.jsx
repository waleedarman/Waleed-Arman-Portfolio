import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function EducationSection() {
  const education = [
    {
      degree: "High School Diploma",
      institution: "Jit Secondary School",
      logo: "JS",
      period: "2022",
      description: "Completed secondary education."
    },
    {
      degree: "Front End Web Developer Nanodegree",
      institution: "Udacity",
      logo: "U",
      period: "Jun 2025",
      description: "Modern frontend technologies and responsive design."
    },
    {
      degree: "B.A. Software Engineering",
      institution: "An-Najah National University",
      logo: "NU",
      period: "Expected Sep 2026",
      description: "Full Stack Development, QA Engineering, UX/UI Design."
    }
  ]

  return (
    <section id="education" className="py-6 relative stars-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            Education
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Academic Background</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded" />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-rose-500"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0 z-10 shadow-lg shadow-pink-500/30">
                  {edu.logo}
                </div>
                
                <div className="glass rounded-xl p-5 flex-1 hover:border-pink-500/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <span className="text-pink-400 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
