function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="font-semibold text-lg tracking-wide">
        Wedding Fairies
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-700">
          <a href="#about" className="hover:text-black transition">
            Über uns
          </a>
          <a href="#portfolio" className="hover:text-black transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-black transition">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
