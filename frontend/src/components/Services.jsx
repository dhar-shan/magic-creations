import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { services } from "../data/services"

function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-8 sm:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-10 lg:mb-20 lg:flex-row lg:items-end">

          <div>

            {/* Section label */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                What We Do
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[6rem]">
              Crafted for
              <br />

              <span className="text-white/30">
                every frame.
              </span>
            </h2>

          </div>

          {/* Description */}
          <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
            From precision roto and prep to compositing, 3D, AI and motion
            design, our production capabilities adapt to the creative and
            technical requirements of every project.
          </p>

        </div>

        {/* Services area */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

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
                  onClick={() => setActiveService(service)}
                  className="group flex w-full items-center border-b border-white/10 py-5 text-left transition-all duration-300 sm:py-6 md:py-7"
                >

                  {/* Number */}
                  <span
                    className={`mr-5 w-8 shrink-0 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 sm:mr-8 sm:text-xs ${
                      isActive
                        ? "text-white/60"
                        : "text-white/25 group-hover:text-white/50"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Service name */}
                  <span
                    className={`text-xl font-medium tracking-tight transition-all duration-300 sm:text-2xl md:text-3xl ${
                      isActive
                        ? "translate-x-2 text-white"
                        : "text-white/40 group-hover:translate-x-2 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </span>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.4}
                    className={`ml-auto shrink-0 transition-all duration-300 ${
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
          <div className="relative min-h-105 overflow-hidden border border-white/10 bg-white/2 sm:min-h-120 lg:min-h-140">

            {/* Background atmosphere */}
            <div className="absolute inset-0">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.10),transparent_35%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%,rgba(255,255,255,0.02))]" />

            </div>

            {/* Service content */}
            <AnimatePresence mode="wait">

              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex min-h-105 flex-col justify-between p-6 sm:min-h-120 sm:p-8 md:p-10 lg:min-h-140 lg:p-12"
              >

                {/* Top metadata */}
                <div className="flex items-start justify-between">

                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                    {activeService.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                    MagicCreations
                  </span>

                </div>

                {/* Main service content */}
                <div className="max-w-xl">

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30"
                  >
                    Service
                  </motion.p>

                  <h3 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                    {activeService.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 md:mt-6 md:text-base">
                    {activeService.description}
                  </p>

                </div>

                {/* Bottom indicator */}
                <div className="flex items-center gap-4">

                  <span className="h-px w-12 bg-white/20" />

                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                    Production Services
                  </p>

                </div>

              </motion.div>

            </AnimatePresence>

            {/* Decorative line */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Services