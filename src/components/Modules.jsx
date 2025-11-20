import { Shield, Brain, Share2, AlertTriangle, Trophy } from 'lucide-react'

const modules = [
  {
    icon: Shield,
    title: 'Level 1: Spot the Trick',
    desc: 'Identify clickbait, deepfakes, and manipulative design through mini missions and pixel puzzles.',
    tags: ['bias', 'clickbait', 'design'],
  },
  {
    icon: Brain,
    title: 'Level 2: Algorithm 101',
    desc: 'Learn how feeds rank content, what signals matter, and how to shape your own info diet.',
    tags: ['algorithms', 'ranking', 'signals'],
  },
  {
    icon: Share2,
    title: 'Level 3: Credibility Quest',
    desc: 'Source-checking, lateral reading, and verifying claims with quick-play activities.',
    tags: ['sources', 'verification', 'lateral reading'],
  },
  {
    icon: AlertTriangle,
    title: 'Level 4: Safety & Wellbeing',
    desc: 'Navigate privacy, safety, and civic engagement while staying kind online.',
    tags: ['privacy', 'civics', 'wellbeing'],
  },
]

function Modules() {
  return (
    <section id="modules" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Core Worlds</h2>
            <p className="mt-2 text-fuchsia-200/80">Four structured units, each with lesson plans, activities, and assessments.</p>
          </div>
          <a href="#resources" className="hidden md:inline-block rounded-md bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">Teacher Resources</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => (
            <div key={i} className="group rounded-lg border border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-950/40 to-slate-950 p-5 hover:border-fuchsia-400/40 transition-colors">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded bg-fuchsia-500/20 text-fuchsia-300">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-bold">{m.title}</h3>
              <p className="mt-2 text-sm text-fuchsia-100/80">{m.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-fuchsia-200">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
