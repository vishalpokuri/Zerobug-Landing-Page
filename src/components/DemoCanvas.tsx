function DemoCanvas() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="card-grain rounded-3xl p-12 border border-gray-700 noise-overlay hover-lift">
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
          <div className="text-center z-10">
            <h3 className="text-2xl font-bold mb-2">
              Interactive Demo{" "}
              <span className="text-yellow-400">(Coming soon)</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Experience the future of debugging
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoCanvas;
