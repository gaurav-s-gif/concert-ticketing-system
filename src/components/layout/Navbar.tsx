import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { toast } from "sonner";

import { useAuth } from "../../hooks/useAuth";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Concerts", path: "/concerts" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition hover:scale-105"
        >
          <div className="rounded-xl bg-purple-600 p-2">
            <FaTicketAlt className="text-xl text-white" />
          </div>

          <span className="text-2xl font-bold text-white">
            Concert<span className="text-purple-500">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400"
                  : "text-slate-300 hover:text-white transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {isAuthenticated && (
            <>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-white transition"
                }
              >
                My Bookings
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-white transition"
                }
              >
                Profile
              </NavLink>
            </>
          )}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-purple-500 px-5 py-2 text-purple-400 transition hover:bg-purple-500 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-purple-600 px-5 py-2 text-white transition hover:bg-purple-700"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-purple-400" : "text-slate-300"
                }
              >
                {item.name}
              </NavLink>
            ))}

            {isAuthenticated && (
              <>
                <NavLink
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300"
                >
                  My Bookings
                </NavLink>

                <NavLink
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300"
                >
                  Profile
                </NavLink>
              </>
            )}

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-purple-500 py-2 text-center text-purple-400"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-purple-600 py-2 text-center text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="rounded-xl bg-red-600 py-2 text-white"
              >
                Logout
              </button>
            )}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;