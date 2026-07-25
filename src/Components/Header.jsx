import { Link } from "react-router-dom";
import { HiMiniHome } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { FaShoppingCart} from "react-icons/fa";

function Header() {
  const cartItems = useSelector(
  (state) => state.cart.cartItem
);

const cartCount = cartItems.length;




  return (
    <header className="w-full h-20 px-10 flex items-center justify-between bg-transparent">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
          <HiMiniHome className="text-white text-3xl" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Maskax Academy</h1>
      </div>

      <ul className="flex items-center gap-10 font-semibold text-gray-800">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/mentors">Mentors</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative p-2 text-dark-text hover:text-primary transition-colors"
          >
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-white text-xs flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/courses"
            className="hidden md:inline-block px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Get Started
          </Link>


        </div>
        
      </ul>


    </header>
  );
}

export default Header;
