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
      className="relative overflow-hidden bg-white px-6 py-32 text-black sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-24 grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-8">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-black/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Quality & Workflow
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Every frame
              <br />
              <span className="text-black/25">
                goes further.
              </span>
            </h2>

          </div>

          <div className="flex items-end lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-black/50">
              A structured production workflow keeps creative execution,
              quality control and delivery moving together.
            </p>
          </div>

        </div>

        {/* Pipeline */}
        <div className="relative">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-black/10 lg:block" />

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-6">

            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative"
              >

                {/* Node */}
                <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white text-xs tracking-widest">
                  {stage.number}
                </div>

                <h3 className="text-2xl font-medium tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-black/50">
                  {stage.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Quality