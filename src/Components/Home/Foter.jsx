import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Foter() {
  return (
    <>
      <footer className="bg-gradient-to-r from-cyan-100 via-white to-pink-100 py-20 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Maskax<span className="text-green-600 pl-5">Academy</span>
            </h1>

            <p className="text-gray-600 leading-7 mb-6">
              Unlock knowledge with expert-led online courses.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-14 h-14 rounded-full border flex items-center justify-center text-2xl hover:bg-blue-600 hover:text-white hover:scale-110 duration-300 shadow-md"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border flex items-center justify-center text-2xl hover:bg-black hover:text-white hover:scale-110 duration-300 shadow-md"
              >
                <FaTiktok />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border flex items-center justify-center text-2xl hover:bg-green-500 hover:text-white hover:scale-110 duration-300 shadow-md"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          <div className="pl-20">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <ul className="space-y-4 text-lg">
              <li className="hover:text-green-600 duration-300 cursor-pointer">Home</li>
              <li className="hover:text-green-600 duration-300 cursor-pointer">About</li>
              <li className="hover:text-green-600 duration-300 cursor-pointer">Courses</li>
              <li className="hover:text-green-600 duration-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Others</h2>
            <ul className="space-y-4 text-lg">
              <li className="hover:text-green-600 duration-300 cursor-pointer">Mentors</li>
              <li className="hover:text-green-600 duration-300 cursor-pointer">Blog</li>
            
            </ul>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-5 text-lg text-gray-700 ">
<a href="tel:+252619371500"className="block hover:text-green-500 hover:underline cursor-pointer">📞 +252 619371500</a>
<a href="tel:+252614668477"className="block hover:text-green-500 hover:underline cursor-pointer">📞 +252 614668477</a>
<a href="email:yuuzufcadde@gmail.com"className="block hover:text-green-500 hover:underline cursor-pointer">📧 yuuzufcadde@gmail.com</a>
<a href="email:xeydarabdi@gmail.com"className="block hover:text-green-500 hover:underline cursor-pointer">📧 xeydarabdi@gmail.com</a>
<p className="hover:text-green-500 hover:underline cursor-pointer">📍 Mogadishu, Somalia</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-16 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © 2026 All Rights Reserved.
          </p>

          <p className="text-gray-600 mt-3 md:mt-0">
            Designed By Yuusuf
          </p>
        </div>
      </footer>
    </>
  );
}

export default Foter