export default function About() {
  return (
    <section className="w-full bg-white text-black">
      {/* Page Title */}
      <div className="w-full border-b border-black/10 py-16">
        <h1 className="max-w-6xl mx-auto px-6 text-4xl md:text-5xl font-semibold tracking-tight">
          About Us
        </h1>
        <div className="max-w-6xl mx-auto px-6 mt-3">
          <div className="h-[3px] w-16 bg-red-600" />
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-red-600 text-sm uppercase tracking-widest mb-4">
              Who We Are
            </h2>

            <p className="text-black/80 text-base leading-8 mb-6">
              We are a construction-focused architectural practice delivering
              robust, functional, and contemporary building solutions across
              residential and commercial projects.
            </p>

            <p className="text-black/70 text-base leading-8">
              Our design philosophy emphasizes clarity, durability, and
              efficiency — creating spaces that stand the test of time.
            </p>
          </div>

          <img
            src="team/swami.jpg"
            alt="Who we are"
            className="w-full h-[360px] object-cover rounded-sm"
          />
        </div>

        {/* Our Competencies */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <img
            src="/slider/kanaraj_residence.png"
            alt="Our competencies"
            className="w-full h-[360px] object-cover rounded-sm"
          />

          <div>
            <h2 className="text-red-600 text-sm uppercase tracking-widest mb-4">
              Our Competencies
            </h2>

            <p className="text-black/80 text-base leading-8 mb-6">
              Our core competencies span Architectural Design, Structural
              Planning, and integrated construction coordination.
            </p>

            <p className="text-black/70 text-base leading-8">
              Supported by experienced consultants and in-house project
              engineering, we deliver reliable end-to-end solutions.
            </p>
          </div>
        </div>

        {/* Our Strength */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-red-600 text-sm uppercase tracking-widest mb-4">
              Our Strength
            </h2>

            <p className="text-black/80 text-base leading-8 mb-6">
              Our strength lies in our people — a disciplined team of architects,
              engineers, and project coordinators.
            </p>

            <p className="text-black/70 text-base leading-8">
              Strong systems, clear communication, and strict quality control
              ensure consistency across every project we deliver.
            </p>
          </div>

          <img
            src="/images/RSR Srinvasan.png"
            alt="Our strength"
            className="w-full h-[360px] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
