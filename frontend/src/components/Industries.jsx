import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const industries = [
  "VFX Studios",
  "Production Houses",
  "Advertising Agencies",
  "OTT Platforms",
  "Film & Media",
  "Brands",
]

function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white/82 px-6 py-28 text-black sm:py-32 lg:px-12 lg:py-40"
    >
      {/* Subtle readability layer */}
      <div className="pointer-events-none absolute inset-0 bg-white/20" />

      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.04),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12">

          <div className="lg:col-span-5">

            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-black/30" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 sm:text-xs">
                Industries
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Built to
              <br />

              <span className="text-black/25">
                collaborate.
              </span>
            </h2>

          </div>

          {/* Description */}
          <div className="flex items-end lg:col-span-7">

            <p className="max-w-xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
              Supporting creative teams across different production
              environments, project scales and content requirements.
            </p>

          </div>

        </div>

        {/* Industries list */}
        <div className="border-t border-black/10">

          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="group relative overflow-hidden border-b border-black/10"
            >

              {/* Hover background */}
              <div className="pointer-events-none absolute inset-0 bg-black/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Left animated line */}
              <div className="absolute bottom-0 left-0 top-0 w-px origin-top scale-y-0 bg-black transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative flex items-center justify-between gap-6 py-6 sm:py-7 md:py-8">

                {/* Industry title */}
                <div className="flex items-center gap-5 sm:gap-8">

                  <span className="text-[10px] tracking-[0.25em] text-black/30 transition-colors duration-300 group-hover:text-black/60 sm:text-xs">
                    0{index + 1}
                  </span>

                  <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-black/70 transition-all duration-300 group-hover:translate-x-2 group-hover:text-black sm:text-2xl md:text-3xl">
                    {industry}
                  </h3>

                </div>

                {/* Arrow */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/10 text-black/30 transition-all duration-300 group-hover:border-black/30 group-hover:bg-black group-hover:text-white">

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom detail */}
        <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-black/25">

          <span>
            Creative Production
          </span>

          <div className="flex items-center gap-3">

            <span className="hidden sm:block">
              Multiple industries
            </span>

            <span className="h-px w-8 bg-black/15" />

            <span>
              06
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Industries