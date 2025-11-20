import { Menu, BookOpen, Gamepad2 } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="pixel-shadow grid place-items-center h-10 w-10 rounded-sm bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white">
              <Gamepad2 className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-black tracking-tight text-xl">Retro Media</p>
              <p className="text-fuchsia-300 text-xs">Media Literacy Curriculum</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#curriculum" className="text-sm text-fuchsia-200 hover:text-white transition-colors inline-flex items-center gap-2"><BookOpen className="h-4 w-4"/> Curriculum</a>
            <a href="#resources" className="text-sm text-fuchsia-200 hover:text-white transition-colors">Resources</a>
            <a href="#about" className="text-sm text-fuchsia-200 hover:text-white transition-colors">About</a>
          </nav>

          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/15 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
