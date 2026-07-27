import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { CoreValues } from './components/CoreValues'
import { ProjectTypes } from './components/ProjectTypes'
import { Solutions } from './components/Solutions'
import { Features } from './components/Features'
import { Timeline } from './components/Timeline'
import { About } from './components/About'
import { DemoForm } from './components/DemoForm'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      {/* Background animation blobs */}
      <div className="bg-animation">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Page content */}
      <div className="page-content">
        <Navbar />
        <main>
          <HeroSection />
          <CoreValues />
          <ProjectTypes />
          <Solutions />
          <Features />
          <Timeline />
          <About />
          <DemoForm />
        </main>
        <Footer />
      </div>
    </>
  )
}
