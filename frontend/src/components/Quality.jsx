import { motion } from "motion/react"

const stages = [
  {
    number: "01",
    title: "Brief",
    description: "Understanding the creative requirement and production scope.",
  },
  {
    number: "02",
    title: "Production",
    description: "Artists execute the work according to defined project requirements.",
  },
  {
    number: "03",
    title: "QC Review",
    description: "Shots are reviewed against quality and technical requirements.",
  },
  {
    number: "04",
    title: "Feedback",
    description: "Client and internal feedback is incorporated through review cycles.",
  },
  {
    number: "05",
    title: "Final Validation",
    description: "Final checks ensure consistency and delivery readiness.",
  },
]

function Quality() {
  return (
    <section
      id="quality"
      className="relative overflow-hidden bg-white/92 px-6 py-28 text-black sm:px-8 sm:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12">

          <div className="lg:col-span-8">

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-black/30" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
                Quality & Workflow
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[6rem]"
            >
              Every frame
              <br />

              <span className="text-black/25">
                goes further.
              </span>
            </motion.h2>

          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-end lg:col-span-4"
          >
            <p className="max-w-md text-sm leading-7 text-black/50 md:text-base">
              A structured production workflow keeps creative execution,
              quality control and delivery moving together throughout
              every stage of production.
            </p>
          </motion.div>

        </div>

        {/* Pipeline */}
        <div className="relative border-t border-black/10 pt-10 sm:pt-14">

          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-black/10 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">

            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative"
              >

                {/* Number node */}
                <div className="relative z-10 mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white text-[10px] font-medium tracking-[0.15em] transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white sm:h-12 sm:w-12 sm:text-xs">
                  {stage.number}
                </div>

                {/* Stage number */}
                <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-black/30">
                  Stage {stage.number}
                </p>

                {/* Title */}
                <h3 className="text-xl font-medium tracking-tight transition-colors duration-300 sm:text-2xl group-hover:text-black/60">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-xs text-sm leading-7 text-black/50">
                  {stage.description}
                </p>

                {/* Bottom line */}
                <div className="mt-7 h-px w-12 bg-black/10 transition-all duration-300 group-hover:w-full group-hover:bg-black/30 lg:hidden" />

              </motion.div>
            ))}

          </div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-t border-black/10 pt-7 sm:mt-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-black/35">
            Brief → Production → Review → Feedback → Delivery
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Quality