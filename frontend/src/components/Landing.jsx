import { motion } from "motion/react"
import LandingImage from "../assets/MagicCreations.png"

function Landing() {
  return (
    <section
      id="landing"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Background image */}
      <motion.img
        src={LandingImage}
        alt="MagicCreations Visual Effects and Creative Studio"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for cinematic depth */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white/50 sm:bottom-10">
        <span className="text-[10px] uppercase tracking-[0.3em] sm:text-xs">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </div>
    </section>
  )
}

export default Landing