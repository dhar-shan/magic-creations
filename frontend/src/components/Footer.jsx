import { ArrowUpRight } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#050505] px-6 py-14 text-white sm:py-16 lg:px-12 lg:py-20">

      <div className="mx-auto max-w-[1600px]">

        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-20">

          {/* Brand */}
          <div className="lg:col-span-5">

            <a
              href="#"
              className="group relative inline-flex items-baseline leading-none"
            >
              <span className="text-3xl font-bold tracking-[-0.06em] text-white transition-all duration-300 sm:text-4xl">
                MAGIC
              </span>

              <span className="ml-1 text-3xl font-semibold tracking-[-0.06em] text-white/35 transition-colors duration-300 group-hover:text-white/60 sm:text-4xl">
                CREATIONS
              </span>

              {/* Hover line */}
              <span className="absolute -bottom-3 left-0 h-px w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
              VFX and digital production support built around quality,
              consistency and creative collaboration.
            </p>

          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-3.5">

              <a
                href="#about"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Portfolio
              </a>

              <a
                href="#showreel"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Showreel
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Contact
              </a>

            </nav>

          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-4 lg:pl-8">

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
              Start a project
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-white/80 transition-colors duration-300 hover:text-white sm:text-3xl"
            >
              Let's talk

              <ArrowUpRight
                size={22}
                strokeWidth={1.2}
                className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">
              Have a project in mind? Get in touch and let's explore how we
              can work together.
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:pt-8 sm:text-xs">

          <p>
            © {new Date().getFullYear()} MagicCreations. All rights reserved.
          </p>

          <p>
            Bangalore, India
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer