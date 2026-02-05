# Waleed Arman - Portfolio Website

A modern, responsive 3D portfolio website showcasing my skills and experience as a Full Stack Developer, QA Engineer, and UX/UI Designer.

## Live Demo

[View Live Portfolio](https://waleed-arman-portfolio.netlify.app/)

## Features

- **3D Animated Background** - Interactive Three.js particle system
- **Smooth Scroll Animations** - GSAP-powered scroll reveal effects
- **Glassmorphism Design** - Modern glass-effect UI components
- **Fully Responsive** - Mobile-first design with hamburger menu
- **Dark Theme** - Professional dark mode with purple/indigo accents

## Sections

- **Hero** - Introduction with animated terminal window
- **About** - Profile photo, bio, and statistics
- **Services** - Full Stack, QA, UX/UI, Automation, Database Design
- **Skills** - 7 categories: Programming Languages, Frontend, Backend, Databases, QA & Testing, Tools, AI & ML
- **Projects** - 6 featured projects with GitHub/Behance links
- **Internships** - Timeline of work experience (GRIDS APPS, ASAL Technologies, eMicrolearn)
- **Education** - Academic background (An-Najah University, Udacity)
- **Certifications** - Professional certifications with verification links
- **Contact** - Email, phone, location, and social links

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite 5 | Build Tool |
| Three.js | 3D Graphics |
| GSAP | Scroll Animations |
| Tailwind CSS | Styling |
| Lucide React | Icons |

## Project Structure

```
├── src/
│   ├── App.jsx                 # Main application
│   ├── index.jsx               # Entry point
│   ├── index.css               # Global styles & Tailwind
│   ├── components/
│   │   ├── Scene3D.jsx         # Three.js 3D background
│   │   ├── AnimatedSection.jsx # GSAP scroll animations
│   │   └── MicroInteractions.jsx # Button effects
│   └── sections/
│       ├── InternshipsSection.jsx
│       ├── EducationSection.jsx
│       └── CertificationsSection.jsx
├── public/
│   └── profile.jpg             # Profile photo
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs on `http://localhost:5000`

## Contact

- **Email**: armanwaleed89@gmail.com
- **Phone**: +972 569287748
- **Location**: Qalqilya, Palestine
- **LinkedIn**: [waleed-arman](https://www.linkedin.com/in/waleed-arman/)
- **GitHub**: [waleedarman](https://github.com/waleedarman)

## License

MIT License - Feel free to use this as a template for your own portfolio!
