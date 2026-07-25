import { TbConfucius } from "react-icons/tb";
import Header from "../Components/Header";
import Middle from "../Components/Home/Middle";
import { BiCategoryAlt } from "react-icons/bi";
import { SiDevelopmentcontainers } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import Middlethre from "../Components/Home/Middlethre";
import Foter from "../Components/Home/Foter";

import { FaCartShopping } from "react-icons/fa6";


function Courses({ Course }) {
  const item = Course.find((course) => course.id === 1);

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-100 via-white to-pink-200">
        <Header />
      </div>

         <div className="flex justify-between items-center">
  <div>
    <h1 className="text-6xl font-bold pl-6 pt-10">
We Offer an Outstanding
    </h1>
    <h1 className="text-6xl font-bold pl-6">
 Learning Experience

    </h1>
  </div>
<div className="grid grid-cols-6 gap-2 pr-12">
  {Array.from({ length: 18 }).map((_, index) => (
    <div
      key={index}
      className="w-2 h-2 bg-gray-400 rounded-full"
    ></div>
  ))}
</div>
</div>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2 p-10 flex flex-col justify-between">
            <div>
              <span className="bg-gray-100 px-4 py-2 rounded-xl">
            <span>popular🔥</span>
              </span>

              <h1 className="text-5xl font-bold mt-6">{item.name}</h1>

              <p className="text-gray-500 mt-5 text-lg">
                {item.whatYouWillLearn}
              </p>

              <div className="flex gap-50 mt-8">
                <p>⏳ {item.weeks} Weeks</p>
                <p>📚 {item.lectures} Lectures</p>
              </div>

          

              <p className="mt-4 text-green-600 font-semibold">
                {item.promise}
              </p>
            </div>

            <div className="flex justify-between items-center mt-10">
              <h2 className="text-5xl font-bold text-green-600">
                {item.price}
              </h2>

              <button className="px-8 py-4 bg-green-600 text-white rounded-full">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </section>

<h1 className="text-6xl font-bold text-center">Explore Our All Courses</h1>
     
<div className="flex flex-wrap gap-6 mt-10 ml-30">

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <BiCategoryAlt className="text-2xl" />
    <span>All Categories</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <SiDevelopmentcontainers className="text-2xl" />
    <span>WordPress Development</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <FaPaintBrush className="text-2xl" />
    <span>UI/UX Design</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <MdManageAccounts className="text-2xl" />
    <span>Data Science</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <FaCalculator className="text-2xl" />
    <span>Java Programming</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <MdCampaign className="text-2xl" />
    <span>c#</span>
  </button>

</div>


<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
    {Course?.filter((item) => item.id >= 2 && item.id <= 13).map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 text-center">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
        {item.name}
            </span>

            <span className="text-4xl font-bold text-green-600">
              {item.price}
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-3">
            {item.promise}
          </h2>

        
          <div className="flex justify-between  pt-4">
            <p>⏳ {item.weeks} Weeks</p>
            <p>📚 {item.lectures} Lectures</p>
          </div>
          <hr />
<button
  className="bg-blue-500 rounded px-20 py-2 flex gap-4 mt-4 text-center mx-auto"
  onClick={() => alert("Added to Cart")}
>
  <FaCartShopping />
  Add to Cart
</button>        </div>
      </div>
    ))}
  </div>

        
<button className="group flex items-center gap-4 border border-black rounded-full pl-8 pr-2 py-2 hover:bg-black hover:text-white duration-300 mt-10 ml-120">

  View All Courses

  <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center duration-300 group-hover:bg-white">
    <HiArrowUpRight className="text-2xl duration-500 group-hover:text-black group-hover:rotate-45" />
  </div>

</button>
</section>
      

<Middlethre/>
<Foter/>

</>
  )
}
export default Courses;