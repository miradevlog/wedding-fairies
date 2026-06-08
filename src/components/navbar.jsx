import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">
      <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="font-semibold text-lg tracking-wide hover:opacity-80 transition"
        >
          Wedding Fairies
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-700">
          <Link to="/about" className="hover:text-black transition">
            Über uns
          </Link>

          <Link to="/portfolio" className="hover:text-black transition">
            Portfolio
          </Link>

          <Link to="/contact" className="hover:text-black transition">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
