import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const teamGroups = [
  {
    number: "01",
    title: "VFX Artists",
    description:
      "Artists supporting roto, prep, compositing and visual effects production.",
  },
  {
    number: "02",
    title: "3D Artists",
    description:
      "Creative and technical support across modeling, texturing, lighting and rendering.",
  },
  {
    number: "03",
    title: "Compositors",
    description:
      "Artists focused on integrating visual elements into cohesive final shots.",
  },
  {
    number: "04",
    title: "Motion Designers",
    description:
      "Creative talent working across 2D, 3D and promotional motion content.",
  },
  {
    number: "05",
    title: "Production",
    description:
      "Coordination and communication that keep creative production moving.",
  },
]

function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#050505]/65 px-6 py-24 text-white sm:py-32 lg:px-12 lg:py-40"
    >
      {/* Subtle readability overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12">

          <div className="lg:col-span-8">

            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-white/30 sm:w-10" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                Our Team
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Creative minds.
              <br />

              <span className="text-white/30">
                Technical precision.
              </span>
            </h2>

          </div>

          {/* Description */}
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-white/45">
              A scalable production network brings together creative and
              technical capabilities across different stages of production.
            </p>
          </div>

        </div>

        {/* Team groups */}
        <div className="border-t border-white/10">

          {teamGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              className="group grid gap-5 border-b border-white/10 py-7 transition-colors duration-300 hover:border-white/20 sm:py-8 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-10"
            >

              {/* Number */}
              <span className="text-[10px] tracking-[0.25em] text-white/30 lg:col-span-1">
                {group.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-medium tracking-tight text-white/75 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-2xl md:text-3xl lg:col-span-5">
                {group.title}
              </h3>

              {/* Description */}
              <p className="max-w-lg text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60 lg:col-span-5">
                {group.description}
              </p>

              {/* Arrow */}
              <div className="hidden justify-end lg:col-span-1 lg:flex">
                <ArrowUpRight
                  size={20}
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

export default Team