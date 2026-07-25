import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Courses from "./Pages/Courses";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Course from "./Data/Course ";
import CourseDetails from "./Pages/CourseDetails";
import Header from "./Components/Header";
import Footer from "./Components/Home/Foter";
import Mentors from "./Pages/Mentors";
import MentorProfile from "./Pages/MentorProfile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/courses"
          element={
            <Courses Course={Course} header={<Header />} footer={<Footer />} />
          }
        />
        <Route path="/CourseDetails/:slug" element={<CourseDetails />} />
        <Route
          path="/mentors"
          element={<Mentors header={<Header />} footer={<Footer />} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentors/:slug" element={<MentorProfile />} />
      </Routes>
    </div>
  );
}

export default App;
