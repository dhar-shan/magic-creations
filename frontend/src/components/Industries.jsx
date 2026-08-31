import { motion } from "motion/react"

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
      className="relative overflow-hidden bg-white px-6 py-32 text-black sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-black/30" />

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Industries
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Built to
              <br />
              <span className="text-black/25">
                collaborate.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-8">

            <p className="mb-12 max-w-2xl text-lg leading-8 text-black/50">
              Supporting creative teams across different production
              environments, project scales and content requirements.
            </p>

            <div className="border-t border-black/10">

              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="flex items-center justify-between border-b border-black/10 py-7"
                >
                  <span className="text-2xl font-medium tracking-tight sm:text-3xl">
                    {industry}
                  </span>

                  <span className="text-xs tracking-[0.2em] text-black/30">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Industries