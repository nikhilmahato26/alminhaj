import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Packages from './components/sections/Packages'
import Destinations from './components/sections/Destinations'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Destinations />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
