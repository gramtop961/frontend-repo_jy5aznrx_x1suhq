import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Modules from './components/Modules'
import Resources from './components/Resources'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Modules />
      <Resources />
      <Footer />
    </div>
  )
}

export default App
