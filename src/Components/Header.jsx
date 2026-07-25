import { Link } from "react-router-dom";
import { HiMiniHome } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";

function Header() {
  return (
    <header className="w-full h-20 px-10 flex items-center justify-between bg-transparent">

    <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
          <HiMiniHome className="text-white text-3xl" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Maskax Academy
        </h1>
   
</div>
      
        <ul className="flex items-center gap-10 font-semibold text-gray-800">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/teachers">Teachers</Link>
          </li>

          <li className="relative">
            <Link to="/cart">
              Cart

              <span className="absolute -top-2 -right-4 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                0
              </span>

            </Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      
<button className="group flex items-center gap-4 border border-black rounded-full pl-8 pr-2 py-2 hover:bg-black hover:text-white duration-300">

  View All Teachers

  <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center duration-300 group-hover:bg-white">
    <HiArrowUpRight className="text-2xl duration-500 group-hover:text-black group-hover:rotate-45" />
  </div>

</button>

    </header>
  );
}

export default Header;