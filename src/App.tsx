import { useCallback, useMemo } from 'react'
import { DocumentMeta } from './components/seo/DocumentMeta'
import { Navbar } from './components/layout/Navbar'
import { SiteFooter } from './components/layout/SiteFooter'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/forms/InquiryFormSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { QualificationSection } from './components/sections/QualificationSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { navSections } from './data/portfolio'
import { useScrollSpy } from './hooks/useScrollSpy'

const navbarOrder = ['home', 'about', 'skills', 'projects', 'qualification', 'contact'] as const

function App() {
  const navbarItems = useMemo(
    () => navbarOrder.map((id) => navSections.find((section) => section.id === id)!),
    [],
  )
  const navbarIds = useMemo(() => navbarItems.map((section) => section.id), [navbarItems])
  const activeId = useScrollSpy(navbarIds)

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DocumentMeta />
      <Navbar items={navbarItems} activeId={activeId} />

      <main>
        <HeroSection
          onViewProjects={() => scrollTo('projects')}
          onContact={() => scrollTo('contact')}
        />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <QualificationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
