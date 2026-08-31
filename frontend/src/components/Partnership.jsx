import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

function Partnership() {
  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        <div className="relative overflow-hidden border border-white/10 px-6 py-20 sm:px-12 md:py-28 lg:px-20 lg:py-36">

          {/* Ambient background */}
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/4 blur-[120px]" />

          <div className="relative z-10 max-w-5xl">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Partnership
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Let's create
              <br />
              <span className="text-white/30">
                something together.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 md:text-lg">
              Whether you need additional production capacity, specialist
              artists or end-to-end creative support, let's explore how
              MagicCreations can become part of your workflow.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="mt-10 inline-flex items-center gap-4 border border-white px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Start a Conversation

              <ArrowUpRight size={18} strokeWidth={1.3} />
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Partnership