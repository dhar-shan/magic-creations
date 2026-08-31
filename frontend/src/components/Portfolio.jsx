import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { portfolioItems } from "../data/portfolio"

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Selected Work
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Work that
              <br />
              <span className="text-white/30">
                speaks visually.
              </span>
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40">
            A selection of work across visual effects, 3D, motion design,
            AI-assisted workflows and experimental creative production.
          </p>

        </div>

        {/* Portfolio grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">

          {portfolioItems.map((item, index) => {

            const gridClass =
              item.size === "large"
                ? "md:col-span-2 lg:col-span-7 lg:row-span-2"
                : item.size === "wide"
                  ? "md:col-span-2 lg:col-span-7"
                  : "lg:col-span-5"

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`group relative min-h-80 overflow-hidden border border-white/10 bg-white/2 ${gridClass}`}
              >

                {/* Visual */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.1),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_30%)]" />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative flex h-full min-h-80 flex-col justify-between p-6 md:p-8">

                  <div className="flex items-start justify-between">

                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {item.category}
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.2}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/60">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Portfolio