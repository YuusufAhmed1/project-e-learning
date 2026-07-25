import Header from "../Components/Header"
import Hero from "../Components/About/Hero"
import Sectionone from "../Components/About/sectionone"
import Chooseus from "../Components/About/Chooseus"
import Sectiontwo from "../Components/About/Sectiontwo"
import Sectionthre from "../Components/About/Sectionthre"
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
      </>
}

export default About