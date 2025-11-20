import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

function Hero() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded border border-fuchsia-300/30 bg-fuchsia-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-fuchsia-200">8‑bit vibes • modern learning</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(236,72,153,0.35)]">
            Media Literacy, Reimagined in Pixel Art
          </h1>
          <p className="mt-5 text-lg md:text-xl text-fuchsia-100/90">
            A playful, standards-aligned curriculum that teaches critical thinking about media, platforms, and algorithms — with the charm of classic retro games.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#modules" className="inline-flex items-center justify-center gap-2 rounded-md bg-fuchsia-500 px-5 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-600 transition-colors">
              Explore Modules <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`${backendUrl}/api/hello`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/15 transition-colors">
              Check API
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
