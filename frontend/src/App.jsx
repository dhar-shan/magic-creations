import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Services from "./components/Services"
import WhyMagicCreations from "./components/WhyMagicCreations"
import Quality from "./components/Quality"
import Showreel from "./components/Showreel"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Industries from "./components/Industries"
import Partnership from "./components/Partnership"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <WhyMagicCreations />
      <Quality />
      <Showreel />
      <Portfolio />
      <Team />
      <Industries />
      <Partnership />
      <Contact />
      <Footer />
    </main>
  )
}

export default App