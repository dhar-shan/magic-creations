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
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12">

          <div className="lg:col-span-8">

            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                Why MagicCreations
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Built for
              <br />

              <span className="text-white/30">
                production.
              </span>
            </h2>

          </div>

          {/* Description */}
          <div className="flex items-end lg:col-span-4">

            <p className="max-w-md text-sm leading-7 text-white/45">
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
              }}
              className="group relative border-b border-white/10"
            >

              {/* Hover background */}
              <div className="pointer-events-none absolute inset-0 bg-white/2.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Animated side line */}
              <div className="absolute bottom-0 left-0 top-0 w-px origin-top scale-y-0 bg-white/70 transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative grid gap-5 py-7 sm:gap-6 sm:py-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-10">

                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-[10px] tracking-[0.25em] text-white/30 transition-colors duration-300 group-hover:text-white/60 sm:text-xs">
                    {strength.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-5">

                  <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-white/65 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-2xl md:text-3xl">
                    {strength.title}
                  </h3>

                </div>

                {/* Description */}
                <div className="lg:col-span-5">

                  <p className="max-w-lg text-sm leading-7 text-white/40 transition-all duration-300 group-hover:text-white/60">
                    {strength.description}
                  </p>

                </div>

                {/* Arrow */}
                <div className="absolute right-0 top-7 sm:top-8 lg:static lg:col-span-1 lg:flex lg:justify-end">

                  <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/25 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.3}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom detail */}
        <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/20">

          <span>
            MagicCreations
          </span>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block">
              Built for creative production
            </span>

            <span className="h-px w-8 bg-white/15" />
            <span>06</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyMagicCreations