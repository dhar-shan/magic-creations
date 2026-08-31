function Intro() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:py-40 lg:px-12 lg:py-52"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-white/30" />

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Who We Are
          </p>
        </div>

        {/* Main statement */}
        <div className="grid gap-16 lg:grid-cols-12">

          <div className="lg:col-span-9">
            <h2 className="text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              We bring imagination
              <br />
              to life through
              <br />
              <span className="text-white/30">
                VFX & digital creativity.
              </span>
            </h2>
          </div>

          {/* Side description */}
          <div className="flex items-end lg:col-span-3">
            <p className="max-w-sm text-sm leading-7 text-white/50">
              MagicCreations is a Bangalore-based VFX and digital production
              company built to support creative teams with quality,
              consistency, communication and scalable production.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-20 h-px w-full bg-white/10" />

        {/* Company facts */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="text-4xl font-medium tracking-tight">
              ~200
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
              Artists
            </p>
          </div>

          <div>
            <p className="text-4xl font-medium tracking-tight">
              01
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
              Production Mindset
            </p>
          </div>

          <div>
            <p className="text-4xl font-medium tracking-tight">
              08
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
              Core Services
            </p>
          </div>

          <div>
            <p className="text-4xl font-medium tracking-tight">
              BLR
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
              Bangalore, India
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Intro