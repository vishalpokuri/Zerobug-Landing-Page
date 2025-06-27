function Testimonials() {
  return (
    <div>
      {" "}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black pb-6 gradient-text">
            What Developers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from real developers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Chen",
              role: "Senior Developer",
              company: "Tech Corp",
              quote:
                "Zerobug revolutionized our debugging workflow. What used to take hours now takes minutes.",
              rating: 5,
            },
            {
              name: "Sarah Kim",
              role: "Tech Lead",
              company: "StartupXYZ",
              quote:
                "The AI-powered node flows are game-changing. Finally, debugging feels intuitive.",
              rating: 5,
            },
            {
              name: "Mike Rodriguez",
              role: "Full Stack Developer",
              company: "DevStudio",
              quote:
                "No more switching between tools. Zerobug is the unified debugging solution we needed.",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="card-grain rounded-2xl p-8 border border-gray-700 hover-lift noise-overlay"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#141414] font-bold text-lg">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
