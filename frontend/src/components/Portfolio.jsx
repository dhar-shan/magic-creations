import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { portfolioItems } from "../data/portfolio"

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-10 lg:mb-20 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Selected Work
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Work that
              <br />

              <span className="text-white/30">
                speaks visually.
              </span>
            </h2>

          </div>

          {/* Description */}
          <p className="max-w-sm text-sm leading-7 text-white/45">
            A selection of work across visual effects, 3D, motion design,
            AI-assisted workflows and experimental creative production.
          </p>

        </div>

        {/* Portfolio grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">

          {portfolioItems.map((item, index) => {

            const gridClass =
              item.size === "large"
                ? "min-h-[420px] md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[700px]"
                : item.size === "wide"
                  ? "min-h-[320px] md:col-span-2 lg:col-span-7"
                  : "min-h-[320px] lg:col-span-5"

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden border border-white/10 bg-white/2 ${gridClass}`}
              >

                {/* Background visual */}
                <div className="absolute inset-0">

                  {/* Abstract background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_35%)] transition-transform duration-700 group-hover:scale-110" />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/40" />

                  {/* Subtle grain */}
                  <div className="absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

                </div>

                {/* Content */}
                <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 sm:p-8 lg:p-10">

                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">

                    <div className="flex items-center gap-3">

                      <span className="h-px w-6 bg-white/30 transition-all duration-500 group-hover:w-10 group-hover:bg-white/60" />

                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
                        {item.category}
                      </span>

                    </div>

                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.3}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                    </div>

                  </div>

                  {/* Bottom content */}
                  <div className="max-w-xl">

                    <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/25">
                      MagicCreations
                    </p>

                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/60">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Bottom progress line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />

              </motion.article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Portfolio