export default function About() {
  return (
    <>
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
        <div className="space-y-8">
          {/* Image and Heading Section */}
          <div className="flex justify-end">
            <div className="w-full md:w-[400px] space-y-4">
              <img
                src="team/swami.jpg"
                alt="Mr. Swaminathan"
                className="w-full h-[360px] object-cover rounded-sm"
              />
              <h2 className="text-red-600 text-sm uppercase tracking-widest">
                Mr.Swaminathan
                <br />
                Founder/Managing Director-Registered Engineer(LBS), DCE, AMIE
              </h2>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-justify space-y-6">
            <p className="text-black/80 text-base leading-8">
              Mr. Swaminathan is the Founder and Managing Director of Swami Associates, bringing over 37 years of extensive field experience in civil engineering and construction.
            </p>
            <p className="text-black/70 text-base leading-8">
              He began his professional career as a Junior Engineer with the Tamil Nadu State Public Works Department and the Tamil Nadu State Highways Department, where he gained strong technical exposure.
            </p>
            <p className="text-black/70 text-base leading-8">
              In 1988, driven by entrepreneurial vision and professional integrity, he founded Swami Associates.
              Since its inception, the firm has successfully delivered 150+ projects across diverse typologies,
              consistently upholding quality, durability, and timely execution under his leadership.
            </p>
            <p className="text-black/70 text-base leading-8">
              Beyond professional practice, Mr. Swaminathan has actively contributed to the engineering fraternity.
              He served two terms as President of the Mettupalayam Civil Engineers Association, playing a pivotal role in strengthening the local engineering community.
              He also held the position of Regional Chairman of the Federation of All Civil Engineers Associations of Tamil Nadu and Puducherry during 2018–2019.
            </p>
            <p className="text-black/70 text-base leading-8">
              Today, with decades of hands-on expertise and leadership, Mr. Swaminathan continues to guide Swami Associates with a commitment to technical excellence, ethical practice, and growth.
            </p>
          </div>
        </div>

        {/* Our Competencies */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <img
            src="/slider/kanaraj_residence.png"
            alt="Our competencies"
            className="w-full h-[360px] object-cover rounded-sm"
          />
          <div className="text-justify">
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
          <div className="text-justify">
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
    </>
  );
}
