import { motion } from "motion/react"
import LandingImage from "../assets/MagicCreations.png"

function Landing() {
  return (
    <section
      id="landing"
      className="relative overflow-hidden bg-[#050505] pt-20 sm:pt-24"
    >
      {/* Banner */}
      <div className="relative h-[60vh] min-h-105 w-full overflow-hidden sm:h-[65vh] lg:h-[70vh]">

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
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#050505] to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white/50 sm:bottom-10">


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
      </div>
    </section>
  )
}

export default Landing