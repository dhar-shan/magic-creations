import { motion } from "motion/react"

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]/35"
    >

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">

        {/* Ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]"
        />

        {/* Subtle dark readability overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Very subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,5,0.55)_100%)]" />

      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 sm:px-8 lg:px-12 lg:pt-32">

        <div className="max-w-4xl">

          {/* Category */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 text-xs font-medium uppercase tracking-[0.35em] text-white/60"
          >
            VFX • POST PRODUCTION • 3D • AI • MOTION DESIGN
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]"
          >
            Where Creativity
            <br />
            Meets Precision.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Bringing imagination to life through VFX and digital creativity.
            From Roto and Compositing to 3D, AI and Motion Design,
            MagicCreations delivers scalable production support for creative teams worldwide.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >

            <a
              href="#showreel"
              className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              View Showreel

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white/80 transition-all duration-300 hover:border-white/50 hover:text-white"
            >
              Our Services
            </a>

          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 lg:right-12 lg:flex">
          <span>Scroll</span>
          <span className="h-px w-12 bg-white/20" />
          <span>↓</span>
        </div>

      </div>

    </section>
  )
}

export default Hero