import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
  { label: "Showreel", href: "#showreel" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Quality", href: "#quality" },
  { label: "Team", href: "#team" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#050505]/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-6 lg:px-12 lg:py-8">

          {/* Logo */}
          <a
            href="#hero"
            className="group relative z-10 flex items-baseline leading-none"
          >
            <span className="text-2xl font-bold tracking-[-0.06em] text-white transition-all duration-300 sm:text-3xl lg:text-4xl group-hover:tracking-[-0.04em]">
              MAGIC
            </span>

            <span className="ml-1 text-2xl font-semibold tracking-[-0.06em] text-white/45 transition-all duration-300 sm:text-3xl lg:text-4xl group-hover:text-white/70">
              CREATIONS
            </span>

            {/* Subtle highlight line */}
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-white/70 transition-all duration-500 group-hover:w-full" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="group ml-4 flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>

        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col justify-center px-6"
            >
              <div className="flex flex-col">

                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="border-b border-white/10 py-5 text-3xl font-medium tracking-tight text-white/70 transition-colors hover:text-white"
                  >
                    <span className="mr-5 text-xs tracking-[0.2em] text-white/20">
                      0{index + 1}
                    </span>

                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white"
                >
                  Start a conversation

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                  />
                </a>

              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar