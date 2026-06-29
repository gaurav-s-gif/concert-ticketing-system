import { Link } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Concerts", path: "/concerts" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <FaTicketAlt className="text-purple-500 text-3xl" />
          ConcertHub
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-300 hover:text-purple-400 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
            <Link
                to="/login"
                className="px-5 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition duration-300"
            >
                Login
            </Link>

            <Link
                to="/register"
                className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition duration-300"
            >
                Register
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 px-6 pb-6">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-purple-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="bg-purple-600 text-center py-2 rounded-lg text-white"
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;