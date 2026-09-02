import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

function Partnership() {
  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Partnership container */}
        <div className="group relative overflow-hidden border border-white/10 px-6 py-16 sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-20 lg:py-28">

          {/* Ambient background */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px] md:h-125 md:w-125"
          />

          {/* Background gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_35%)]" />

          {/* Subtle grid/detail lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="absolute bottom-0 left-0 h-px w-0 bg-white/70 transition-all duration-700 group-hover:w-full" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl">

            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                Partnership
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Let's create
              <br />

              <span className="text-white/30">
                something together.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/50 md:mt-10 md:text-base md:leading-8">
              Whether you need additional production capacity, specialist
              artists or end-to-end creative support, let's explore how
              MagicCreations can become part of your workflow.
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="group/button mt-8 inline-flex items-center gap-4 border border-white/80 px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black md:mt-10 md:px-7 md:py-4 md:text-xs"
            >
              Start a Conversation

              <ArrowUpRight
                size={17}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
              />
            </motion.a>

          </div>

          {/* Decorative corner details */}
          <div className="absolute right-6 top-6 hidden text-[10px] uppercase tracking-[0.3em] text-white/20 sm:block">
            MagicCreations
          </div>

          <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/20 sm:flex">
            <span>01</span>
            <span className="h-px w-8 bg-white/20" />
            <span>Partner With Us</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Partnership