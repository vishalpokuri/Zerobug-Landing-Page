function HeroSection() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 hero-image-container">
          <div
            className="absolute inset-0 w-full h-full hero-image-mask"
            style={{
              maskImage: "url(/MainPage.png)",
              WebkitMaskImage: "url(/MainPage.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Grain overlay */}
        {/* <div className="hero-grain absolute inset-0 z-10"></div> */}

        {/* Content overlay */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="w-full flex ml-20">
            {/* Left side - Text content */}
            <div className="w-[65%] px-10 mb-20">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold float">
                    ⚡ AI-Powered Debugging Revolution
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black mb-8 leading-tight font-rbold uppercase">
                  <span className="gradient-text ">We let you trace</span>
                  <br />
                  <span className="text-white">you fix with grace</span>
                  <br />
                  {/* <span className="text-yellow-400">Build with flow.</span> */}
                </h1>
                <p className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
                  A cutting-edge, AI-powered debugging environment for fullstack
                  developers.
                  <span className="text-yellow-400 font-medium">
                    {" "}
                    Visualize, simulate, and trace your backend logic
                  </span>
                  —fully integrated with your frontend.
                </p>
                <div className="flex gap-6 items-center">
                  <button
                    className="bg-yellow-400 text-[#141414] px-10 py-5 rounded-2xl font-bold text-sm btn-modern glow-yellow hover-lift cursor-pointer"
                    onClick={() =>
                      window.open("https://zerobugapp.vercel.app/", "_blank")
                    }
                  >
                    Try Zerobug Free
                  </button>
                  <button
                    className="border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-2xl font-bold text-sm btn-modern hover-lift cursor-pointer"
                    onClick={scrollToBottom}
                  >
                    Join the Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal interface - positioned absolutely within hero section */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[35%] pr-20 flex justify-end z-30">
          <div className="w-full max-w-md">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm">
                <div className="my-2">
                  <span className="text-gray-500">$</span>
                  <span className="text-white ml-2 ">
                    npm install -g zerobug-cli
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
