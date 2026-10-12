import { skillCategories, type SkillEntry } from '../../data/portfolio'
import { useI18n } from '../../providers/i18n-context'
import { SlashTitle } from '../ui/SlashTitle'
import { Reveal } from '../ui/Reveal'
import { SkillIcon } from './SkillIcon'

const displayOrder = [
  'react',
  'typescript',
  'tailwind',
  'vite',
  'zustand',
  'react-query',
  'rhf',
  'zod',
  'git',
  'github',
  'javascript',
  'html5',
  'css3',
  'rest',
  'supabase',
  'postgresql',
  'gitlab',
]

function orderedSkills(): SkillEntry[] {
  const flat = skillCategories.flatMap((category) => category.skills)
  return [...flat].sort((a, b) => {
    const ai = displayOrder.indexOf(a.id)
    const bi = displayOrder.indexOf(b.id)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })
}

export function SkillsSection() {
  const { t } = useI18n()
  const skills = orderedSkills()

  return (
    <section id="skills" className="section-shell border-t border-border/80" aria-labelledby="skills-heading">
      <div className="section-wrap">
        <Reveal>
          <SlashTitle id="skills-heading" className="mb-8">
            {t('skills.title')}
          </SlashTitle>
        </Reveal>
        <Reveal delayMs={40}>
          <ul className="flex flex-wrap items-start justify-center gap-x-4 gap-y-6 sm:gap-x-6">
            {skills.map((skill) => (
              <li key={skill.id} className="flex w-[4.6rem] flex-col items-center gap-2 text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-accent-warm/30">
                  <SkillIcon skillId={skill.id} />
                </span>
                <span dir="ltr" className="text-[11px] font-medium leading-tight text-muted-foreground">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
