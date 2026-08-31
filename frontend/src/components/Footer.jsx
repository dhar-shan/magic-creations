import { ArrowUpRight } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#050505] px-6 py-16 text-white lg:px-12">

      <div className="mx-auto max-w-[1600px]">

        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-12">

          {/* Logo */}
          <div className="lg:col-span-5">

            <a
              href="#"
              className="text-2xl font-semibold tracking-[-0.04em]"
            >
              MAGIC<span className="text-white/30">CREATIONS</span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              VFX and digital production support built around quality,
              consistency and creative collaboration.
            </p>

          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">

            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">

              <a
                href="#about"
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                Portfolio
              </a>

              <a
                href="#showreel"
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                Showreel
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                Contact
              </a>

            </nav>

          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-4">

            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Start a project
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 text-2xl font-medium tracking-tight"
            >
              Let's talk

              <ArrowUpRight
                size={22}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-white/30 sm:flex-row">

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