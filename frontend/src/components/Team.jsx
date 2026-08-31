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
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        <div className="mb-20 grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-8">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Our Team
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Creative minds.
              <br />
              <span className="text-white/30">
                Technical precision.
              </span>
            </h2>

          </div>

          <div className="flex items-end lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-white/50">
              A scalable production network brings together creative and
              technical capabilities across different stages of production.
            </p>
          </div>

        </div>

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
              className="group grid gap-6 border-b border-white/10 py-8 lg:grid-cols-12 lg:items-center lg:py-10"
            >

              <span className="text-xs tracking-[0.25em] text-white/30 lg:col-span-1">
                {group.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-white/70 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white md:text-3xl lg:col-span-5">
                {group.title}
              </h3>

              <p className="max-w-lg text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60 lg:col-span-5">
                {group.description}
              </p>

              <div className="hidden justify-end lg:col-span-1 lg:flex">
                <ArrowUpRight
                  size={21}
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