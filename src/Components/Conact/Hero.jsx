
import { FaAward } from "react-icons/fa";

function Hero(){
    return<>
   <div className="flex justify-between items-center">
  <div>
    <h1 className="text-8xl font-bold pl-90 pt-10">
Contact Us    
</h1>
    <h1 className="text-4xl font-bold pl-20 text-green-500 pt-6">
Need help? Contact our team and we will get back to you
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