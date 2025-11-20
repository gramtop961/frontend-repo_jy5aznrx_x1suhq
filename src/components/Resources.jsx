import { FileText, Download, Link2 } from 'lucide-react'

const resources = [
  { title: 'Scope & Sequence', type: 'PDF', action: 'Download', icon: FileText },
  { title: 'Lesson Plan Template', type: 'Google Doc', action: 'Open', icon: Link2 },
  { title: 'Family Media Agreement', type: 'PDF', action: 'Download', icon: Download },
]

function Resources() {
  return (
    <section id="resources" className="relative bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white">Resources</h2>
          <p className="mt-2 text-fuchsia-200/80">Editable docs, handouts, and teacher guides.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="rounded-lg border border-fuchsia-400/20 bg-slate-900/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded bg-fuchsia-500/20 text-fuchsia-300">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{r.title}</h3>
              <p className="text-sm text-fuchsia-100/80">Type: {r.type}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded bg-fuchsia-500 px-3 py-2 text-white text-sm font-semibold hover:bg-fuchsia-600">
                {r.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
