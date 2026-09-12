import { motion } from "motion/react"
import LandingImage from "../assets/mc_logo_new.png"

function Landing() {
  return (
    <section
      id="landing"
      className="relative overflow-hidden bg-[#050505] pt-20 sm:pt-24"
    >
      {/* Banner */}
      <div className="relative w-full overflow-hidden">

        {/* Full image — no cropping */}
        <motion.img
          src={LandingImage}
          alt="MagicCreations Visual Effects and Creative Studio"
          initial={{ scale: 1.03, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="block h-auto w-full"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#050505] to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center sm:bottom-8">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-lg text-white/50"
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  )
}

export default Landing