import Header from "../Components/Header"
import Hero from "../Components/About/Hero"
import Sectionone from "../Components/About/sectionone"
import Chooseus from "../Components/About/Chooseus"
import Sectiontwo from "../Components/About/Sectiontwo"
import Sectionthre from "../Components/About/Sectionthre"
import Quetions from "../Components/Quetions";
import Middlethre from "../Components/Home/Middlethre"
import Foter from "../Components/Home/Foter"

function About(){
    return<>
      <div className="bg-gradient-to-r from-cyan-100 via-white to-pink-200">
        <Header />
        <Hero />
          </div>
        <Sectionone/>
        <Chooseus/>
    <Sectiontwo/>
    <Sectionthre/>
    <Quetions/>
    <Middlethre/>
    <Foter/>
      </>
}

export default About