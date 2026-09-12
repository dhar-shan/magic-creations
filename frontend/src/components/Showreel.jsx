import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Play, X } from "lucide-react"
import {
  showreelCategories,
  showreelVideos,
} from "../data/showreel"

function Showreel() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeVideo, setActiveVideo] = useState(null)

  const filteredVideos =
    activeCategory === "All"
      ? showreelVideos
      : showreelVideos.filter(
          (video) => video.category === activeCategory
        )

  return (
    <>
      <section
        id="showreel"
        className="relative overflow-hidden bg-[#050505]/90 px-6 py-28 text-white sm:py-36 lg:px-12 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px]">

          {/* Header */}
          <div className="mb-14 grid gap-10 lg:mb-20 lg:grid-cols-12">

            <div className="lg:col-span-8">

              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-white/30" />

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                  Showreel
                </p>
              </div>

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
                Explore selected work across visual effects, compositing,
                3D, AI, motion design and digital production.
              </p>

            </div>

          </div>

          {/* Categories */}
          <div className="mb-12 overflow-x-auto border-y border-white/10">

            <div className="flex min-w-max">

              {showreelCategories.map((category) => {
                const isActive = activeCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-5 py-5 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 sm:px-7 ${
                      isActive
                        ? "text-white"
                        : "text-white/30 hover:text-white/70"
                    }`}
                  >
                    {category}

                    {isActive && (
                      <motion.div
                        layoutId="active-category"
                        className="absolute bottom-0 left-0 right-0 h-px bg-white"
                      />
                    )}
                  </button>
                )
              })}

            </div>

          </div>

          {/* Video grid */}
          <motion.div
            layout
            className="grid gap-5 md:grid-cols-2"
          >

            <AnimatePresence mode="popLayout">

              {filteredVideos.map((video, index) => (

                <motion.button
                  key={video.id}
                  type="button"
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  onClick={() => setActiveVideo(video)}
                  className="group relative aspect-video overflow-hidden border border-white/10 bg-[#111] text-left"
                >

                  {/* Video preview */}
                  <video
                    src={video.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    onMouseEnter={(event) => {
                      event.currentTarget.play()
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.pause()
                      event.currentTarget.currentTime = 0
                    }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/20" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-white group-hover:text-black">
                      <Play
                        size={18}
                        fill="currentColor"
                        className="ml-0.5"
                      />
                    </div>

                  </div>

                  {/* Metadata */}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/50 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">

                    <div className="flex items-end justify-between gap-5">

                      <div>

                        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                          {video.category}
                        </p>

                        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                          {video.title}
                        </h3>

                        <p className="mt-2 max-w-md text-xs leading-6 text-white/40">
                          {video.description}
                        </p>

                      </div>

                      <span className="shrink-0 text-[10px] tracking-[0.2em] text-white/30">
                        0{video.id}
                      </span>

                    </div>

                  </div>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />

                </motion.button>

              ))}

            </AnimatePresence>

          </motion.div>

        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>

        {activeVideo && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white hover:text-black sm:right-6 sm:top-6 sm:h-12 sm:w-12"
              aria-label="Close video"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Video */}
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative aspect-video w-full max-w-6xl overflow-hidden bg-[#111]"
              onClick={(event) => event.stopPropagation()}
            >

              <video
                src={activeVideo.video}
                className="h-full w-full object-contain"
                controls
                autoPlay
                playsInline
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}

export default Showreel