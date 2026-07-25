import Header from "../Components/Header"
import Wac from "../Components/Conact/Wac"
import Hero from "../Components/Conact/Hero"
import Middlethre from "../Components/Home/Middlethre"
import Foter from "../Components/Home/Foter"
function Contact(){
    return<>
<div className="bg-gradient-to-r from-cyan-100 via-white to-pink-200">

    <Header/>
    <Hero/>
    </div>
     <Wac/>
     <Middlethre/>
     <Foter/>
    </>
}

export default Contact