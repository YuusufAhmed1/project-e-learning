import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";
import Middle from "../Components/Home/Middle";
import Middletwo from "../Components/Home/Middletwo";
import Middlethre from "../Components/Home/Middlethre";
import Quetions from "../Components/Quetions";
import Ogeysiis from "../Components/Ogeysiis";
import Foter from "../Components/Home/Foter";

import CourseCard from "../Components/CourseCard";
import { courses } from "../Data/courses";

import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";


function Home() {


  const popularCourses = courses.slice(0,8);


  return (

    <>


      {/* HERO */}

      <section className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-emerald-50
      via-white
      to-cyan-100
      ">


        <div className="
        absolute
        w-96
        h-96
        bg-emerald-200
        rounded-full
        blur-3xl
        opacity-40
        top-10
        -left-20
        "></div>


        <div className="
        absolute
        w-96
        h-96
        bg-pink-200
        rounded-full
        blur-3xl
        opacity-40
        right-0
        bottom-0
        "></div>



        <div className="relative z-10">

          <Header />

          <Hero />

        </div>


      </section>





      {/* INTRO */}

      <section className="py-16">

        <Middle />

      </section>







      {/* COURSES */}

      <section className="
      bg-gray-50
      py-20
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">


          <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.6
          }}

          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-start
          md:items-center
          mb-12
          ">


            <div>


              <span className="
              text-emerald-600
              font-semibold
              ">
                OUR COURSES
              </span>


              <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-3
              text-[#0B1F1A]
              ">

                Explore Popular Courses

              </h2>


              <p className="
              text-gray-500
              mt-4
              max-w-xl
              leading-7
              ">

                Learn from experienced instructors and gain
                practical skills that help you build your career.

              </p>


            </div>





            <Link to="/courses">


              <button className="
              mt-6
              md:mt-0
              group
              flex
              items-center
              gap-4
              rounded-full
              border
              border-black
              px-7
              py-3
              hover:bg-black
              hover:text-white
              transition
              ">


                View All Courses


                <span className="
                w-11
                h-11
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center
                group-hover:bg-white
                group-hover:text-black
                transition
                ">


                  <HiArrowUpRight

                  className="
                  text-xl
                  group-hover:rotate-45
                  transition
                  "

                  />


                </span>


              </button>


            </Link>



          </motion.div>








          <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          ">


          {
            popularCourses.map((course,index)=>(


              <motion.div

              key={course.id}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index * 0.1
              }}

              >

                <CourseCard
                course={course}
                />


              </motion.div>



            ))
          }


          </div>



        </div>


      </section>







      {/* FEATURE NOTICE */}

      <section className="
      py-20
      ">

        <Ogeysiis />

      </section>







      {/* SECOND SECTION */}


      <section className="
      bg-white
      py-20
      ">

        <Middletwo />

      </section>








      {/* FAQ */}

      <section className="
      bg-gray-50
      py-20
      ">

        <Quetions />

      </section>







      {/* THIRD SECTION */}

      <Middlethre />







      {/* FOOTER */}

      <Foter />


    </>

  );

}


export default Home;