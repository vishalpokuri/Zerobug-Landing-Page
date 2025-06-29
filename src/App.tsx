import "./App.css";
import DemoCanvas from "./demo/DemoCanvas";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KeyFeatures from "./components/KeyFeatures";
import Testimonials from "./components/Testimonials";
import WhatIncludesSection from "./components/WhatIncludesSection";
import WhyZerobug from "./components/WhyZerobug";

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white main-content font-rlight">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* What Includes Section */}
      <WhatIncludesSection />

      {/* Demo Preview Section */}
      <DemoCanvas />
      {/* Key features section */}
      <KeyFeatures />

      {/* Why Zerobug Section */}
      <WhyZerobug />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
