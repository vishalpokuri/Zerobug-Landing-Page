import { useEffect, useState, useRef, useCallback } from "react";
import SectionHeader from "./ui/SectionHeader";
import { features } from "../data/Features";

function StickyKeyFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);

  const setFeatureRef = useCallback((el: HTMLElement | null, index: number) => {
    if (el) {
      featuresRef.current[index] = el as HTMLDivElement;
    }
  }, []);

  useEffect(() => {
    let scrollTimeout: number;
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return; // Prevent multiple triggers during smooth scroll

      // Clear the timeout throughout the scroll
      clearTimeout(scrollTimeout);

      // Set a timeout to run after scrolling ends
      scrollTimeout = setTimeout(() => {
        // Find which section is most visible in the viewport
        let closestSection = 0;
        let closestDistance = Infinity;

        featuresRef.current.forEach((section, index) => {
          if (!section) return;

          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = index;
          }
        });

        // Only update if we're switching to a different section
        if (closestSection !== activeFeature) {
          isScrolling = true; // Prevent recursion during smooth scroll
          setActiveFeature(closestSection);

          // Smooth scroll to the closest section
          const targetSection = featuresRef.current[closestSection];
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }

          setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }, 150); // Debounce delay - adjust for more/less sensitivity
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeFeature]);

  return (
    <div>
      {/* Header Section */}
      <div className="px-6 my-12 max-w-6xl mx-auto">
        <SectionHeader
          title="Key Features"
          description="Revolutionary tools that transform how you debug and develop"
        />
      </div>

      {/* Features with scroll snapping */}
      <div ref={containerRef} style={{ scrollSnapType: "y mandatory" }}>
        {features.map((feature, index) => (
          <section
            key={index}
            ref={(el) => setFeatureRef(el, index)}
            data-feature-index={index}
            className="h-screen flex items-center relative border-t border-b border-[#262626]"
            style={{
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
          >
            <div className="w-full h-full flex">
              {/* Left side - Feature Description (40%) */}
              <div className="w-2/5 h-full flex items-center justify-center bg-[#141414] border-r border-[#262626] relative">
                <div className="max-w-md px-8">
                  <div
                    className="text-6xl mb-6 opacity-80 transform transition-all duration-700 ease-out"
                    style={{
                      opacity: activeFeature === index ? 0.8 : 0.4,
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Upcoming Badge */}
                  {feature.upcoming && (
                    <div
                      className="inline-flex items-center mb-3 transition-all duration-700 ease-out"
                      style={{
                        opacity: activeFeature === index ? 1 : 0.4,
                      }}
                    >
                      <div className="relative">
                        <div className="px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FF8F00] text-[#141414] text-xs font-bold rounded-full shadow-lg border border-[#FFC107]/30">
                          <span className="relative z-10">COMING SOON</span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#FFC107] rounded-full blur-sm opacity-30 animate-pulse"></div>
                        {/* Grain texture overlay */}
                        <div
                          className="absolute inset-0 rounded-full opacity-20 pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(
                              circle at 1px 1px,
                              rgba(20, 20, 20, 0.3) 1px,
                              transparent 0
                            )`,
                            backgroundSize: "3px 3px",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <h3
                    className="text-3xl font-bold text-[#FFC107] mb-6 leading-tight transition-all duration-700 ease-out delay-100"
                    style={{
                      opacity: activeFeature === index ? 1 : 0.3,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-300 text-lg leading-relaxed transition-all duration-700 ease-out delay-200"
                    style={{
                      opacity: activeFeature === index ? 1 : 0.3,
                    }}
                  >
                    {feature.desc}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-8 flex space-x-2">
                    {features.map((_, idx) => (
                      <div
                        key={idx}
                        className="h-1 w-8 rounded-full transition-all duration-500"
                        style={{
                          backgroundColor:
                            idx <= activeFeature ? "#FFC107" : "#262626",
                          opacity: idx === activeFeature ? 1 : 0.6,
                        }}
                      />
                    ))}
                  </div>

                  {/* Feature counter */}
                  <div className="mt-4 text-sm text-gray-500">
                    {String(activeFeature + 1).padStart(2, "0")} /{" "}
                    {String(features.length).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Right side - Video Area (60%) */}
              <div className="w-3/5 h-full bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden p-8">
                <div
                  className="w-full max-w-4xl aspect-video relative rounded-lg overflow-hidden transform transition-all duration-700 ease-out border border-[#262626] shadow-2xl"
                  style={{
                    transform:
                      activeFeature === index ? "scale(1)" : "scale(0.95)",
                    opacity: activeFeature === index ? 1 : 0.6,
                  }}
                >
                  {/* Conditional Video Rendering */}
                  {feature.id <= 6 ? (
                    <>
                      <video
                        key={feature.id} // Force re-render when feature changes
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={(e) => {
                          // Set playback speed when video loads
                          const video = e.target as HTMLVideoElement;
                          video.playbackRate = 1.5; // 1.5x speed (adjust as needed)
                        }}
                        style={{
                          filter:
                            activeFeature === index
                              ? "none"
                              : "brightness(0.7) contrast(0.8)",
                        }}
                      >
                        <source
                          src={`/FeatureVideos/${feature.id}.mp4`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      {/* Video overlay gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg" />
                    </>
                  ) : (
                    /* Placeholder for videos not yet available */
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg flex items-center justify-center relative">
                      <div className="text-center z-10">
                        <div
                          className="text-6xl mb-4 opacity-40 transition-all duration-700"
                          style={{
                            transform:
                              activeFeature === index
                                ? "scale(1)"
                                : "scale(0.8)",
                          }}
                        >
                          {feature.icon}
                        </div>
                        <div className="text-[#FFC107] text-lg font-bold mb-2">
                          {feature.title}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Demo video coming soon
                        </div>
                      </div>

                      {/* Animated placeholder pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#FFC107]/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                  )}

                  {/* Grain texture overlay */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none rounded-lg"
                    style={{
                      backgroundImage: `radial-gradient(
                        circle at 1px 1px,
                        rgba(255, 255, 255, 0.2) 1px,
                        transparent 0
                      )`,
                      backgroundSize: "15px 15px",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default StickyKeyFeatures;
