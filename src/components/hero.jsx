function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* soft background glow */}
      <div className="absolute w-[700px] h-[700px] bg-pink-100 blur-3xl opacity-40 rounded-full top-[-100px] left-[-100px]" />

      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-light tracking-wide">
          The Wedding Fairies
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
          Magische Hochzeitsfotografie zwischen Realität und Fantasie
        </p>

        <button className="mt-10 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">
          Anfrage starten
        </button>
      </div>
    </section>
  );
}

export default Hero;
