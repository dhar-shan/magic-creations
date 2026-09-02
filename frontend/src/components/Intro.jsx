import { motion } from "motion/react"

function Intro() {
  const facts = [
    {
      value: "~200",
      label: "Artists",
    },
    {
      value: "01",
      label: "Production Mindset",
    },
    {
      value: "08",
      label: "Core Services",
    },
    {
      value: "BLR",
      label: "Bangalore, India",
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-8 sm:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-4 lg:mb-16"
        >
          <span className="h-px w-10 bg-white/30" />

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Who We Are
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">

          {/* Main statement */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[6rem]"
            >
              We bring imagination
              <br />
              to life through
              <br />

              <span className="text-white/30">
                VFX & digital creativity.
              </span>
            </motion.h2>
          </div>

          {/* Side description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="flex items-end lg:col-span-3"
          >
            <p className="max-w-sm text-sm leading-7 text-white/50 md:text-base">
              MagicCreations is a Bangalore-based VFX and digital production
              company built to support creative teams with quality,
              consistency, communication and scalable production.
            </p>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="my-16 h-px w-full origin-left bg-white/10 sm:my-20"
        />

        {/* Company facts */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border-l border-white/10 pl-5 transition-colors duration-300 hover:border-white/40"
            >
              <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                {fact.value}
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
                {fact.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Intro