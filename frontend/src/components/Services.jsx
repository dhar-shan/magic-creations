import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { services } from "../data/services"

function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                What We Do
              </p>
            </div>

            <h2 className="max-w-4xl text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Crafted for
              <br />
              <span className="text-white/30">
                every frame.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40">
            From precision roto and prep to compositing, 3D, AI and motion
            design, our production capabilities adapt to the requirements
            of each project.
          </p>

        </div>

        {/* Services area */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Service list */}
          <div className="border-t border-white/10">

            {services.map((service) => {
              const isActive = activeService.title === service.title

              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveService(service)}
                  onFocus={() => setActiveService(service)}
                  className="group flex w-full items-center border-b border-white/10 py-6 text-left transition-all duration-300 md:py-7"
                >
                  <span className="mr-8 w-8 text-xs text-white/30">
                    {service.number}
                  </span>

                  <span
                    className={`text-2xl font-medium tracking-tight transition-all duration-300 md:text-3xl ${
                      isActive
                        ? "translate-x-2 text-white"
                        : "text-white/40 group-hover:translate-x-2 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className={`ml-auto transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              )
            })}

          </div>

          {/* Visual panel */}
          <div className="relative min-h-105 overflow-hidden border border-white/10 bg-white/2">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_60%)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="relative flex h-full min-h-105 flex-col justify-between p-8 md:p-12"
              >

                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                    {activeService.number}
                  </span>

                  <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                    MagicCreations
                  </span>
                </div>

                <div>

                  <h3 className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">
                    {activeService.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
                    {activeService.description}
                  </p>

                </div>

                {/* Abstract visual */}
                <div className="absolute right-8 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full border border-white/10 md:block">
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full bg-white/4" />
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Services