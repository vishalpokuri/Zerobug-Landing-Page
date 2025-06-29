import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.email.trim()) {
      // Here you would typically send the data to your backend
      setIsSubmitted(true);
    }
  };
  return (
    <footer className="relative px-6 py-24 mt-24">
      <div className="hero-grain absolute inset-0"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-black pb-8 gradient-text">
          Ready to Transform Your Debugging?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join Zerobug and starting saving hours of time weekly
        </p>
        <div className="flex justify-center mb-16">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex max-w-3xl w-full card-grain rounded-2xl p-2 border border-gray-700 gap-2"
            >
              <input
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
                type="text"
                placeholder="Name"
                required
                className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none rounded-lg text-lg"
              />
              <div className="h-12 w-[2px] bg-gradient-to-b from-[#676767] via-[#aaa] to-[#676767] z-20 my-auto"></div>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                value={form.email}
                placeholder="Email for early access"
                required
                className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none rounded-lg text-lg"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-[#141414] px-8 py-4 rounded-xl font-bold text-lg btn-modern glow-yellow cursor-pointer hover:scale-105 transition-transform"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 193, 7, 0.15))",
                border: "2px solid #FFC107",
                borderRadius: "1.5rem",
                padding: "3rem 2rem",
                maxWidth: "600px",
                width: "100%",
                boxShadow:
                  "0 0 60px rgba(255, 204, 0, 0.4), 0 0 120px rgba(255, 204, 0, 0.2)",
                backdropFilter: "blur(10px)",
                animation: "fadeInScale 0.6s ease-out",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <style>
                {`
                  @keyframes fadeInScale {
                    0% {
                      opacity: 0;
                      transform: scale(0.8) translateY(20px);
                    }
                    100% {
                      opacity: 1;
                      transform: scale(1) translateY(0);
                    }
                  }
                  
                  @keyframes shine {
                    0% {
                      transform: translateX(-150%) translateY(-150%);
                    }
                    100% {
                      transform: translateX(150%) translateY(150%);
                    }
                  }
                `}
              </style>

              {/* Diagonal Shine Effect */}
              <div
                style={{
                  position: "absolute",
                  top: "-100%",
                  left: "-100%",
                  width: "300%",
                  height: "300%",
                  background:
                    "linear-gradient(135deg, transparent 20%, oklch(85.2% 0.199 91.936/0.25) 50%, transparent 80%)",
                  animation: "shine 2.5s ease-out 0.8s infinite",
                  pointerEvents: "none",
                }}
              />
              <div className="flex items-center justify-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    You're All Set!
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We'll notify you the moment Zerobug is ready to transform
                    your debugging experience.
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255, 204, 0, 0.1)",
                  border: "1px solid rgba(255, 204, 0, 0.3)",
                  borderRadius: "1rem",
                  padding: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                <p className="text-yellow-400 text-sm font-medium">
                  Keep an eye on your inbox for exclusive early access updates!
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-gray-800 pt-12">
          <p className="text-gray-400 text-lg">
            © 2025 Zerobug. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
