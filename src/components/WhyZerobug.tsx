function WhyZerobug() {
  const challenges = [
    "Endless console.log() debugging sessions",
    "Switching between 5+ different tools daily",
    "Manual API payload construction",
    "Fragmented debugging workflow",
    "Time-consuming try-catch cycles",
    "Lost context when switching tools",
  ];

  const solutions = [
    "Visual flow debugging with AI insights",
    "Unified development interface",
    "AI-generated test scenarios automatically",
    "Seamless frontend-backend synchronization",
    "Zero configuration automation",
    "Contextual debugging environment",
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl lg:text-6xl font-black pb-6 gradient-text">
          Why Choose Zerobug?
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          The traditional way vs. the revolutionary approach to debugging
        </p>
      </div>

      <div className="relative">
        {/* Vertical Divider Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "2rem",
            bottom: "1rem",
            width: "2px",
            background:
              "linear-gradient(180deg, rgba(255, 204, 0, 0.2), rgba(255, 204, 0, 0.8), rgba(255, 204, 0, 0.2))",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        />

        {/* VS Badge */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(135deg, #FFC107, #FF9800)",
            color: "#141414",
            padding: "0.75rem 1.5rem",
            borderRadius: "2rem",
            fontWeight: "black",
            fontSize: "1.25rem",
            zIndex: 2,
            border: "3px solid #141414",
            boxShadow: "0 0 30px rgba(255, 204, 0, 0.4)",
          }}
        >
          VS
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Way */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(185, 28, 28, 0.05))",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.5)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="text-center mb-8">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #EF4444, #DC2626)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem auto",
                  fontSize: "2rem",
                }}
              >
                ⚠️
              </div>
              <h3 className="text-3xl font-bold text-red-300 mb-2">
                Traditional Debugging
              </h3>
              <p className="text-red-400/80 text-sm">
                The painful reality most developers face
              </p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#EF4444",
                      borderRadius: "50%",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <p className="text-gray-300 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "1rem",
                padding: "1rem",
                marginTop: "1.5rem",
                textAlign: "center",
              }}
            >
              <p className="text-red-400 font-semibold text-sm">
                Result: 70% of dev time wasted on debugging
              </p>
            </div>
          </div>

          {/* Zerobug Way */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.08))",
              border: "1px solid rgba(34, 197, 94, 0.4)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.6)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(34, 197, 94, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.4)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="text-center mb-8">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #22C55E, #10B981)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem auto",
                  fontSize: "2rem",
                }}
              >
                ⚡
              </div>
              <h3 className="text-3xl font-bold text-green-300 mb-2">
                The Zerobug Revolution
              </h3>
              <p className="text-green-400/80 text-sm">
                How modern debugging should work
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#22C55E",
                      borderRadius: "50%",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <p className="text-gray-300 leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                borderRadius: "1rem",
                padding: "1rem",
                marginTop: "1.5rem",
                textAlign: "center",
              }}
            >
              <p className="text-green-400 font-semibold text-sm">
                Result: 10x faster debugging & development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <button
          style={{
            background: "linear-gradient(135deg, #FFC107, #FF9800)",
            color: "#141414",
            border: "none",
            borderRadius: "1rem",
            padding: "1rem 2.5rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(255, 204, 0, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Make the Switch to Zerobug Today
        </button>
      </div>
    </section>
  );
}

export default WhyZerobug;
