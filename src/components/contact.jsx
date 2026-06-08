function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-light text-center mb-6">Kontakt</h2>

      <p className="text-gray-600 text-center mb-12">
        Schreibt uns für eure Hochzeitsanfrage ✨
      </p>

      {/* Formular */}
      <form className="space-y-6">
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Nachricht */}
        <textarea
          placeholder="Nachricht"
          rows="5"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:scale-[1.02] transition"
        >
          Anfrage senden
        </button>
      </form>
    </section>
  );
}

export default Contact;
