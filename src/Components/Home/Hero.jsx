import { FaGraduationCap } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Hero() {

  return (
    <>
      <div>
        <h1 className="w-70 bg-white font-bold flex items-center ml-129 mt-10 h-10 rounded-2xl pl-3">
          <FaGraduationCap className="text-green-500 text-2xl mr-2" />
          Learn From the Top Experts
        </h1>

        <h1 className="font-bold text-7xl pl-60 pt-10">
          Building Futures Together <br />
          <span className="pl-15">By Empowering Minds</span>
        </h1>
<div className="flex">
  <img src="https://i.pinimg.com/1200x/c2/c9/96/c2c996ef12f74583cc109bad0fb884d0.jpg"alt=""  className="w-60  bg-white ml-10 mt-20"/>
        <p className="pl-40 text-2xl pt-10">
          Join us in shaping a brighter future by nurturing potential,
            <br />
          <span className="pl-10">
            minds and fostering growth through education and .
          </span>
        </p>
<img src="/Images/image.png" alt=""  className="w-30 mt-20 mr-10 "/>
        </div>
        <form className="ml-60  w-[260px] h-10 bg-white rounded-full shadow-[0_0_25px_rgba(0,0,0,0.25)] flex items-center px-6 ml-140">
          <input
            type="text"
            required
            placeholder="e.g. web development"
            className="flex-1 outline-none bg-transparent "
          />

          <button type="submit">
            <FaSearch className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />
          </button>
        </form>











      </div>
    </>
  )
}

export default Hero