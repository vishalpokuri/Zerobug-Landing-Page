function Footer() {
  return (
    <footer className="relative px-6 py-24 mt-24">
      <div className="hero-grain absolute inset-0"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-black pb-8 gradient-text">
          Ready to Transform Your Debugging?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join thousands of developers who've already revolutionized their
          workflow
        </p>
        <div className="flex justify-center mb-16">
          <div className="flex max-w-lg w-full card-grain rounded-2xl p-2 border border-gray-700">
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-lg"
            />
            <button className="bg-yellow-400 text-[#141414] px-8 py-4 rounded-xl font-bold text-lg btn-modern glow-yellow">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-12">
          <p className="text-gray-400 text-lg">
            © 2024 Zerobug. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
