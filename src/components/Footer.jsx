function Footer() {
  return (
    <footer id="about" className="relative bg-slate-950 py-12 border-t border-fuchsia-400/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold">Retro Media</p>
            <p className="text-sm text-fuchsia-200/70">Playful learning for a critical world.</p>
          </div>
          <p className="text-xs text-fuchsia-300/60">© {new Date().getFullYear()} Retro Media Curriculum</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
