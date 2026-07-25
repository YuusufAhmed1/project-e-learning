import { FaAward } from "react-icons/fa";
function Sectionone(){
    return<>
    <div>

  <div className="max-w-7xl mx-auto p-6">
      <div className="relative">
        <img
          src="https://i.pinimg.com/736x/f7/2b/25/f72b250166dbe2a67d0e112fdd00d39f.jpg"
          alt=""
          className="w-full h-[600px] object-cover rounded-3xl"
        />

        <div className="absolute    top-10 left-190  bg-white/90 rounded-3xl p-8 w-[420px] shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-6xl font-bold text-green-900">
                10+
              </h1>

              <h2 className="text-3xl font-semibold mt-2">
                Years of Experience
              </h2>

              <p className="text-gray-600 mt-4">
                Leveraging 10+ years in the field, our online courses offer
                expertly developed content, designed to support learners.
              </p>
            </div>

            <FaAward className="text-8xl text-green-600" />
          </div>
        </div>
      </div>
    </div>

    

    </div>
    </>
}

export default Sectionone