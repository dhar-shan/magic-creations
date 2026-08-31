import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-32 text-black sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-20 grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-8">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-black/30" />

              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Contact
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              Have a project
              <br />
              <span className="text-black/25">
                in mind?
              </span>
            </h2>

          </div>

          <div className="flex items-end lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-black/50">
              Tell us a little about your project, production requirements
              and how we can support your team.
            </p>
          </div>

        </div>

        {/* Contact layout */}
        <div className="grid gap-16 border-t border-black/10 pt-16 lg:grid-cols-12">

          {/* Left information */}
          <div className="lg:col-span-4">

            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Start a conversation
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/30">
                  Location
                </p>

                <p className="mt-2 text-lg">
                  Bangalore, India
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/30">
                  Availability
                </p>

                <p className="mt-2 text-lg">
                  Production Partnerships
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-8">

            {submitted ? (
              <div className="flex min-h-125 flex-col items-center justify-center border border-black/10 p-10 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/20">
                  <Check size={24} strokeWidth={1.5} />
                </div>

                <h3 className="mt-8 text-3xl font-medium tracking-tight">
                  Thanks for reaching out.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/50">
                  Your message has been captured for this frontend prototype.
                  We'll connect the form to the Django backend later.
                </p>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >

                <div className="grid gap-10 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-[0.2em] text-black/40"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-3 w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-xs uppercase tracking-[0.2em] text-black/40"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company / Studio"
                      className="mt-3 w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </div>

                </div>

                <div className="grid gap-10 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-[0.2em] text-black/40"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-3 w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="text-xs uppercase tracking-[0.2em] text-black/40"
                    >
                      Project Type
                    </label>

                    <select
                      id="project"
                      name="project"
                      required
                      defaultValue=""
                      className="mt-3 w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none focus:border-black"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="vfx">
                        VFX
                      </option>

                      <option value="3d">
                        3D
                      </option>

                      <option value="compositing">
                        Compositing
                      </option>

                      <option value="motion">
                        Motion Graphics
                      </option>

                      <option value="ai">
                        AI
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.2em] text-black/40"
                  >
                    Tell us about the project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Project details, timeline, scope..."
                    className="mt-3 w-full resize-none border-b border-black/20 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 border border-black px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Send Enquiry

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact