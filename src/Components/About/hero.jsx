
import { FaAward } from "react-icons/fa";

function Hero(){
    return<>
   <div className="flex justify-between items-center">
  <div>
    <h1 className="text-6xl font-bold pl-6 pt-10">
Providing Unrivaled
    </h1>
    <h1 className="text-6xl font-bold pl-6">
Quality in Online Courses

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

    </>
}
export default Hero