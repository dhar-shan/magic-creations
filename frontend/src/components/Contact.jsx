import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-28 text-black sm:px-8 sm:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-12">

          <div className="lg:col-span-8">

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-black/30" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
                Contact
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[6rem]"
            >
              Have a project
              <br />

              <span className="text-black/25">
                in mind?
              </span>
            </motion.h2>

          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-end lg:col-span-4"
          >
            <p className="max-w-md text-sm leading-7 text-black/50 md:text-base">
              Let's discuss how MagicCreations can support your production.
              Whether you need VFX, compositing, 3D, AI or motion design,
              we're ready to understand your requirements.
            </p>
          </motion.div>

        </div>

        {/* Contact information */}
        <div className="border-t border-black/10 pt-12 sm:pt-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          >

            {/* Founder */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Founder
              </p>

              <p className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                Samuvel V
              </p>

              <p className="mt-2 text-sm text-black/40">
                Founder, MagicCreations
              </p>
            </div>

            {/* Phone */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Phone
              </p>

              <a
                href="tel:8553158510"
                className="group mt-4 inline-flex items-center gap-3 text-lg font-medium tracking-tight transition-opacity hover:opacity-60 sm:text-xl"
              >
                8553158510

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Email */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Email
              </p>

              <a
                href="mailto:magiccreations9397@gmail.com"
                className="group mt-4 inline-flex items-center gap-3 break-all text-lg font-medium tracking-tight transition-opacity hover:opacity-60 sm:text-xl"
              >
                magiccreations9397@gmail.com

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                />
              </a>
            </div>

            {/* Location */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Location
              </p>

              <p className="mt-4 text-lg font-medium tracking-tight sm:text-xl">
                Bangalore,
                <br />
                Karnataka, India
              </p>
            </div>

          </motion.div>

        </div>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-8 border-t border-black/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            Start a conversation
          </p>

          <a
            href="mailto:magiccreations9397@gmail.com"
            className="group inline-flex items-center gap-4 self-start border border-black px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white sm:self-auto"
          >
            Contact Samuvel

            <ArrowUpRight
              size={18}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact