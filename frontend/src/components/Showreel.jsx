import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Play, X } from "lucide-react"
import Demo from "../assets/Demo.mp4"

function Showreel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section
        id="showreel"
        className="relative overflow-hidden bg-[#050505]/90 px-6 py-28 text-white sm:py-36 lg:px-12 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px]">

          {/* Header */}
          <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12">

            <div className="lg:col-span-8">

              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-white/30" />

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                  Showreel
                </p>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[6rem]">
                A glimpse into
                <br />

                <span className="text-white/30">
                  what we create.
                </span>
              </h2>

            </div>

            <div className="flex items-end lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
                Explore a selection of visual work across VFX, compositing,
                3D, motion design and digital production.
              </p>
            </div>

          </div>

          {/* Video */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            whileHover="hover"
            className="group relative block aspect-video w-full overflow-hidden border border-white/10 bg-white/2 text-left"
          >

            {/* Placeholder visual */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_30%)]" />

            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%22.7%22/%3E%3C/svg%3E')]" />

            {/* Center play button */}
            <div className="absolute inset-0 flex items-center justify-center">

              <motion.div
                variants={{
                  hover: {
                    scale: 1.1,
                  },
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:h-20 sm:w-20 md:h-24 md:w-24"
              >
                <Play
                  size={22}
                  strokeWidth={1.5}
                  fill="white"
                  className="ml-1 text-white md:h-7 md:w-7"
                />
              </motion.div>

            </div>

            {/* Bottom metadata */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-linear-to-t from-black/80 via-black/30 to-transparent p-5 pt-24 sm:p-7 sm:pt-28 md:p-10 md:pt-32">

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                  MagicCreations
                </p>

                <p className="mt-2 text-base font-medium sm:text-lg">
                  Showreel
                </p>
              </div>

              <span className="text-[10px] tracking-[0.2em] text-white/40 sm:text-xs">
                2026
              </span>

            </div>

          </motion.button>

        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 sm:p-6"
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white hover:text-black sm:right-6 sm:top-6 sm:h-12 sm:w-12"
              aria-label="Close showreel"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="aspect-video w-full max-w-6xl overflow-hidden bg-[#111]"
            >

              <video
                className="h-full w-full object-contain"
                controls
                autoPlay
                playsInline
              >
                <source
                  src={Demo}
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Showreel