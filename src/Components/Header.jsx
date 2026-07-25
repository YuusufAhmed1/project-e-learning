import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { HiMiniHome } from "react-icons/hi2";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItem);
  const cartCount = cartItems.length;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <HiMiniHome className="text-white text-3xl" />
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Maskax Academy
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
          </li>

          <li>
            <Link to="/mentors" className="hover:text-blue-600 transition">
              Mentors
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-blue-600 transition"
          >
            <FaShoppingCart size={24} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Desktop Button */}
          <Link
            to="/courses"
            className="hidden md:block px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-6 gap-5 font-medium text-gray-700">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/courses" onClick={() => setIsOpen(false)}>
                Courses
              </Link>
            </li>

            <li>
              <Link to="/mentors" onClick={() => setIsOpen(false)}>
                Mentors
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;