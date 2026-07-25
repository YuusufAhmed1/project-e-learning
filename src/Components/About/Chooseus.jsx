import { FaUser, FaGraduationCap, FaChartLine } from "react-icons/fa";

function Chooseus() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 gap-10 items-center">

      
        <div>
          <h1 className="text-5xl font-bold text-[#00251d] leading-tight">
            Why Choose Us for Your
            <br />
            Learning Journey
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Our team combines innovation, expertise, and a client-centered
            approach, delivering projects with outstanding quality,
            meticulous attention to detail, and a focus on meaningful growth.
          </p>


          <div className="mt-10 space-y-8">

            <Item
              icon={<FaUser />}
              title="Expert-led courses"
              text="Learn from experienced professionals in fields like marketing, design, development, finance, and more."
            />

            <Item icon={<FaGraduationCap />}
              title="Personalized learning paths"
              text="Tailor your journey with courses that align with your unique goals and pace."/>

            <Item icon={<FaChartLine />}
              title="Interactive learning"
              text="Engage with multimedia content, quizzes, and assignments designed to make learning dynamic and enjoyable."
            />

          </div>
        </div>


        <div className="relative h-[650px]">

          {/* Top Image */}
          <img src="https://i.pinimg.com/1200x/f3/c1/c7/f3c1c7fe1bb0d88a6dd30f677e9d6c4e.jpg"
            className="absolute top-0 left-20 w-[500px] h-[660px] object-cover rounded-[40px]"/>


   

 
          <div className="absolute bottom-20 left-0  grid grid-cols-4 gap-5 font-bold">
            {Array.from({length:16}).map((_,i)=>(
              <span 
                key={i}
                className="w-2 h-2 bg-gray-300 rounded-full"
              ></span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}



function Item({icon,title,text}) {
  return (
    <div className="flex gap-5 items-start">

      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-3xl text-green-600">
        {icon}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#00251d]">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {text}
        </p>
      </div>

    </div>
  )
}

export default Chooseus;