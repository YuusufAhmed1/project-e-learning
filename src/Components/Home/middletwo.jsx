import {
  HiOutlineUser,HiOutlineAcademicCap,} from "react-icons/hi";

import { FiTrendingUp } from "react-icons/fi";



function Middletwo(){

return<>(
<section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">

          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
              className="w-full h-[400px] object-cover rounded-[40px]"
            />

            <div className="absolute -right-20 top-10 bg-white p-6 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold text-center">
                100K Students
              </h3>

              <div className="flex mt-5">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/50?img=2"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                />
                <img
                  src="https://i.pravatar.cc/50?img=3"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                />
                <img
                  src="https://i.pravatar.cc/50?img=4"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                />

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center -ml-3 text-2xl">
                  +
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt=""
            className="w-96 h-72 object-cover rounded-[40px] ml-24 -mt-10 shadow-lg"
          />
        </div>

        <div>

          <h2 className="text-6xl font-bold text-slate-900 leading-tight">
            Take Your Expertise
            <br />
            to the Next Level
          </h2>

          <div className="mt-12 space-y-6">

            <div className="bg-white rounded-3xl p-8 shadow-md flex gap-5">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <HiOutlineUser className="text-3xl text-green-600" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold">
                  Sign up and get started
                </h3>

                <p className="text-gray-500 mt-2">
                  Create your account, and start learning instantly.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md flex gap-5">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <HiOutlineAcademicCap className="text-3xl text-pink-500" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold">
                  Explore courses tailored to you
                </h3>

                <p className="text-gray-500 mt-2">
                  Browse a range of courses across various fields.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md flex gap-5">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <FiTrendingUp className="text-3xl text-purple-600" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold">
                  Keep learning and growing
                </h3>

                <p className="text-gray-500 mt-2">
                  Continue exploring and advancing your skills.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );


</>


}
export default Middletwo