import { BiCategoryAlt } from "react-icons/bi";
import { SiDevelopmentcontainers } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";


function Middle(){
    return<>
    
    <div>

<h1 className="text-5xl text-center font-bold pt-10">Become In Demand On the  <br/><span className="pl-15">Job Market Today!</span>

</h1>
<div className="flex flex-wrap gap-6 mt-10 ml-30">

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <BiCategoryAlt className="text-2xl" />
    <span>All Categories</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <SiDevelopmentcontainers className="text-2xl" />
    <span>Development</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <FaPaintBrush className="text-2xl" />
    <span>UI/UX Design</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <MdManageAccounts className="text-2xl" />
    <span>Project Management</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <FaCalculator className="text-2xl" />
    <span>Accounting</span>
  </button>

  <button className="flex items-center gap-2 border border-black rounded-full px-3 py-2 hover:bg-green-500 hover:text-white duration-300">
    <MdCampaign className="text-2xl" />
    <span>Marketing</span>
  </button>

</div>
    </div>
    </>
}



export default Middle