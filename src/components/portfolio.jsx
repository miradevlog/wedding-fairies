function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-gray-50">

      <h2 className="text-3xl font-light text-center mb-12">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="h-64 bg-white shadow rounded-xl"></div>
        <div className="h-64 bg-white shadow rounded-xl"></div>
        <div className="h-64 bg-white shadow rounded-xl"></div>

      </div>

    </section>
  );
}

export default Portfolio;