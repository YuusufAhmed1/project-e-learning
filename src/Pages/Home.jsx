import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";
import Middletwo from "../Components/Home/Middletwo";
import Middlethre from "../Components/Home/Middlethre";
import Quetions from "../Components/Quetions";
import Ogeysiis from "../Components/Ogeysiis";
import Middle from "../Components/Home/Middle";
import Foter from "../Components/Home/Foter";
import Course from"../Data/Course "
import { LuClock3 } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaArrowUpLong } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";



function Home() {

  const yuu = Course[1];
const yoo = Course.slice(19, 27);
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-100 via-white to-pink-200">
        <Header />
        <Hero />
      </div>

      <Middle />
<div className="max-w-7xl mx-auto my-10 bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300">


  <div className="lg:w-1/2 h-[350px]">
    <img
      src={yuu.image}
      alt={yuu.name}
      className="w-full h-full object-cover rounded-l-[24px]"
    />
  </div>


  <div className="lg:w-1/2 px-10 py-7 flex flex-col justify-between">

    <div>


      <div className="flex justify-between items-center">

        <span className="bg-gray-100 px-5 py-2 rounded-xl text-base font-semibold">JavaScrit </span>
        


        <div className="bg-[#03261F] text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
          🔥 Popular
        </div>

      </div>


    
      <h1 className="text-[36px] font-bold text-[#0B1F1A] mt-6 leading-tight">
        {yuu.name}
      </h1>


  
      <p className="text-gray-500 text-base leading-7 mt-4">
        {yuu.promise}
      </p>


      <div className="flex justify-between items-center mt-6 text-gray-700">

        <div className="flex items-center gap-3">
          <LuClock3 className="text-2xl"/>
          <span className="text-lg">
            {yuu.weeks} 
          </span>
        </div>


        <div className="flex items-center gap-3">
          <HiOutlineDocumentText className="text-2xl"/>
          <span className="text-lg">
            {yuu.lectures} 
          </span>
        </div>

      </div>


      <hr className="my-6 border-gray-200"/>


      <div className="flex justify-between items-center">

        <h2 className="text-[42px] font-bold text-emerald-500">
          {yuu.price}
        </h2>


        <button className="border-2 border-black rounded-full h-14 w-52 flex items-center justify-between pl-6 pr-2 hover:bg-black hover:text-white duration-300">

          <span className="text-lg font-semibold">
            View Details
          </span>

          <div className="w-10 h-10 bg-[#03261F] rounded-full flex items-center justify-center text-white">
            <FaArrowUpLong className="rotate-45 text-sm"/>
          </div>

        </button>

      </div>


    </div>

  </div>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {yoo.map((item) => (
    <div
      key={item.id}
      className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
    >
      <img
        src={item.image}
        alt=""
        className="w-full h-40 object-cover rounded-lg"
      />
<div className="flex gap-10 justify-between">
      <h1 className="font-bold  mt-3">{item.name}</h1>
 <p className="text-2xl font-bold text-green-600 mt-2 ">
        {item.price}
      </p>
      </div>
      <p className="text-gray-600 mt-2">{item.promise}</p>

      <div className="flex justify-between mt-3 text-sm text-gray-500">
        <span>⏳ {item.weeks} weeks</span>
        <span>📚 {item.lectures} lectures</span>

      </div>

     
    </div>
    
  ))}

</div>
          <button className="group flex items-center gap-4 border border-black rounded-full pl-8 pr-2 py-2 hover:bg-black hover:text-white duration-300 items-center ml-120 mt-10">
    View All Courses
    <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center duration-300 group-hover:bg-white">
      <HiArrowUpRight className="text-2xl duration-500 group-hover:text-black group-hover:rotate-45" />
    </div>
  </button>

      <Middletwo />
      <Ogeysiis />
      <Quetions />
      <Middlethre />
      <Foter />
    </>
  );
}

export default Home;