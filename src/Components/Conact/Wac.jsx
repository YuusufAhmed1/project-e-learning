import { FaFacebookF, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Wac() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>


            <form className="space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500"
              />


              <input
                type="text"
                placeholder="Your Phone"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500"
              />


              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>


              <button
                type="submit"
                className="bg-[#062B22] text-white px-8 py-4 rounded-full hover:bg-green-600 duration-300"
              >
                Send Message
              </button>


            </form>

          </div>





          {/* Contact Information */}
          <div className="bg-[#062B22] text-white rounded-3xl p-10">


            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>



            <div className="space-y-7">


              <div className="flex items-center gap-5">

                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <p>
                    +252 619371500
                  </p>

                </div>

              </div>




              <div className="flex items-center gap-5">

                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="font-bold">
                    Email
                  </h3>

                  <p>
                    yuuzufcadde@gmail.com
                  </p>

                </div>

              </div>





              <div className="flex items-center gap-5">

                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                  <FaLocationDot />
                </div>

                <div>

                  <h3 className="font-bold">
                    Location
                  </h3>

                  <p>
                    Mogadishu, Somalia
                  </p>

                </div>

              </div>


            </div>




            <div className="flex gap-5 mt-10">


              <a
                href="https://www.facebook.com/profile.php?id=61592181006653"
                target="_blank"
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl hover:bg-blue-600 hover:text-white duration-300"
              >
                <FaFacebookF />
              </a>



              <a
                href="https://www.tiktok.com/@yuusof21"
                target="_blank"
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl hover:bg-black hover:text-white duration-300"
              >
                <FaTiktok />
              </a>




              <a
                href="https://wa.me/252619371500?text=Asc%20waxaan%20ka%20helay%20website-kaaga"
                target="_blank"
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl hover:bg-green-500 hover:text-white duration-300"
              >
                <FaWhatsapp />
              </a>


            </div>


          </div>


        </div>





        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg">

          <iframe
            title="Mogadishu Map"
            src="https://maps.google.com/maps?q=Mogadishu%20Somalia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
          ></iframe>

        </div>


      </div>


    </section>
  );
}


export default Wac;