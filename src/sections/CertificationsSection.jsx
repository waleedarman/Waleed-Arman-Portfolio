import { useEffect, useRef, useState } from 'react'
import { Award, BadgeCheck, Sparkles } from 'lucide-react'
import AnimatedSection, { StaggerChildren } from '../components/AnimatedSection'

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Front-End Web Developer Nanodegree",
      organization: "Udacity",
      year: "May 2025",
      verified: true,
      link: "https://drive.google.com/file/d/1Xis9KUpZeNh0kDuYjrATSr1tdfYUGoU9/view?usp=sharing"
    },
    {
      name: "AI Fundamentals Certification",
      organization: "DataCamp",
      year: "2025",
      verified: true,
      link: "https://drive.google.com/file/d/1IEd4uuuUBP8-Nb8qH3R1fEJj0iM6OhBb/view?usp=sharing"
    },
    {
      name: "Climate Justice: Inequality to Inclusion",
      organization: "CliVEx",
      year: "2025",
      verified: true,
      link: "https://drive.google.com/file/d/1qpGrtZEQ8lcyTInN1ghsUotGWWJRKjW8/view?usp=sharing"
    },
    {
      name: "Git & GitHub Training Course",
      organization: "Entrepreneurs Association",
      year: "2024",
      verified: true,
      link: "https://drive.google.com/file/d/1Kx5v4r5Dt6wJTchHwVlgKJxzZSnppr7z/view?usp=sharing"
    }
  ]

  return (
    <section id="certifications" className="py-6 relative bg-dark-300/50 stars-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
            <Award size={16} />
            Achievements
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded" />
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={100}>
          {certifications.map((cert, index) => (
            <a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                    <Award size={28} className="text-emerald-400" />
                  </div>
                  {cert.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <BadgeCheck size={14} className="text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.organization}</p>
                  <span className="text-emerald-400 text-sm font-medium">{cert.year}</span>
                </div>
              </div>
            </a>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
