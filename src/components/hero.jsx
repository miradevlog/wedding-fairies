import heroImage from "../assets/Nadia_Flo-Hochzeit-web-351.webp";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={heroImage}
        alt="Wedding Fairies Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK / SOFT OVERLAY (für Lesbarkeit) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT OVER IMAGE */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide text-white">
          The Wedding Fairies
        </h1>

        <p className="mt-6 text-white/80 text-lg max-w-xl">Lass ma heiraten</p>

        <button className="mt-10 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Anfrage starten
        </button>
      </div>
    </section>
  );
}

export default Hero;
