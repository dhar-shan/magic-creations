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
import Landing from "./components/Landing"

import BackgroundImage from "./assets/magic-background.png"

function App() {
  return (
    <div className="relative bg-[#050505]">

      {/* Fixed background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.3]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      />

      {/* Content before footer */}
      <main className="relative z-10 text-white">

        <Navbar />

        <Landing />

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

      </main>

      {/* Footer */}
      <div className="relative z-10 bg-[#050505]">
        <Footer />
      </div>

    </div>
  )
}

export default App