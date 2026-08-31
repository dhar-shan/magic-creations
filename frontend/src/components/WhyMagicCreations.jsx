import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const strengths = [
  {
    number: "01",
    title: "Scalable Artist Capacity",
    description:
      "Flexible artist availability that can scale according to project requirements and production schedules.",
  },
  {
    number: "02",
    title: "Quality-Focused Workflow",
    description:
      "Structured production workflows designed to maintain consistency and quality throughout delivery.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "Transparent communication and coordination throughout the production process.",
  },
  {
    number: "04",
    title: "Flexible Engagement",
    description:
      "Production support that can adapt to different project sizes, requirements and collaboration models.",
  },
  {
    number: "05",
    title: "Consistent Delivery",
    description:
      "A production mindset focused on dependable output and maintaining delivery commitments.",
  },
  {
    number: "06",
    title: "Long-Term Partnerships",
    description:
      "Building reliable creative relationships that can grow with the needs of production teams.",
  },
]

function WhyMagicCreations() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-24 grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Why MagicCreations
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Built for
              <br />
              <span className="text-white/30">
                production.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-white/50">
              Creative production is more than the final frame. It is the
              people, processes and communication behind every successful
              delivery.
            </p>
          </div>

        </div>

        {/* Strengths */}
        <div className="border-t border-white/10">

          {strengths.map((strength, index) => (
            <motion.div
              key={strength.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
              }}
              className="group grid gap-6 border-b border-white/10 py-8 lg:grid-cols-12 lg:items-center lg:py-10"
            >

              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-xs tracking-[0.25em] text-white/30">
                  {strength.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-5">
                <h3 className="text-2xl font-medium tracking-tight text-white/70 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white md:text-3xl">
                  {strength.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="max-w-lg text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60">
                  {strength.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden justify-end lg:col-span-1 lg:flex">
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.2}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WhyMagicCreations