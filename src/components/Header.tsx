import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50);

      // Determine visibility based on scroll direction
      if (currentScrollY < 700) {
        // Always show when near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed left-1/2 transform -translate-x-1/2 z-50 w-[65%] 
        transition-all duration-300 ease-in-out
        ${isVisible ? "top-6 translate-y-0" : "-top-24 -translate-y-full"}
      `}
    >
      <div
        className={`
           transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-[#141414]/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-yellow-400/10"
              : "bg-[#1a1a1a]/80 backdrop-blur-lg border border-gray-800/30"
          }
          rounded-full px-8 py-4 flex items-center w-full
          hover:bg-[#141414]/95 hover:border-yellow-400/30
          hover:shadow-2xl hover:shadow-yellow-400/20 justify-between
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="h-7 p-4 flex items-center justify-center">
            {/* <span className="text-[#141414] font-black text-sm">Z</span> */}
            <span className="text-lg font-black text-white logo-text-shadow">
              Zerobug
            </span>
          </div>
        </div>

        {/* Navigation - Hidden on mobile, shown on larger screens */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a
            href="#features"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium text-sm"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium text-sm"
          >
            Demo
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium text-sm"
          >
            Pricing
          </a>
          <a
            href="#docs"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium text-sm"
          >
            Docs
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <button className="cursor-pointer hidden md:block text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">
            Sign In
          </button>
          <button className="cursor-pointer bg-yellow-400 text-[#141414] px-5 py-2 rounded-full font-bold text-sm  transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-400/30">
            Get Started
          </button>
        </div>

        {/* Mobile menu indicator */}
        <button className="cursor-pointer lg:hidden text-white p-1.5 hover:text-yellow-400 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
