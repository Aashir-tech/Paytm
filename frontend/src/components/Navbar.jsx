import React, { useState } from "react";
import walletgo from "../../src/assets/images/walletlogo-light-sm.png";
import walletgodark from "../../src/assets/images/walletlogo-dark-sm.png";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#F2EEEC] dark:bg-[#050D2A] dark:bg-gradient-to-l dark:from-slate-900 dark:via-slate-850 dark:to-purple-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl font-bold">
              {isDarkMode ? (
                <img src={walletgodark} alt="logo" width={100} />
              ) : (
                <img src={walletgo} alt="logo" width={100} />
              )}
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-xl font-semibold">
              <a href="/" className="nav-link">Home</a>
              <a href="/service" className="nav-link">Services</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>

            {/* Right Side: Login + Theme Toggle + Hamburger */}
            <div className="flex items-center space-x-4">
              <Link
                to="/signin"
                className="text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Login
              </Link>

              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Hamburger Icon (only on small screens) */}
              <button
                className="md:hidden p-2 text-gray-700 dark:text-gray-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-4 text-xl font-semibold text-center">
              <a href="/" className="nav-link block">Home</a>
              <a href="/service" className="nav-link block">Services</a>
              <a href="/about" className="nav-link block">About</a>
              <a href="/contact" className="nav-link block">Contact</a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
