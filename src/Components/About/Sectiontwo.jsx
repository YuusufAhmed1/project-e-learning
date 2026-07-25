function Sectiontwo() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 bg-teal-100 ">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* YouTube Video */}
          <div className="relative">
         <iframe
  className="w-full h-[500px] rounded-2xl"
  src="https://www.youtube.com/embed/rokmLmpiG9k"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-2xl shadow-xl px-8 py-5 w-4/5 text-center">
              <h3 className="text-2xl font-semibold">
                Making Career Impact Together
              </h3>
              <p className="text-gray-500 mt-2">
                Founder,of Maskax Academy
              </p>
            </div>
          </div>

         <div>
            <h2 className="text-4xl font-bold leading-tight mb-10">
              A Journey of Achievement <br />
              and Digital Growth
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-300 rounded-xl p-8">
                <h3 className="text-4xl font-bold">60+</h3>
                <p>Graduate</p>
              </div>

              <div className="bg-yellow-300 rounded-xl p-8">
                <h3 className="text-4xl font-bold">120+</h3>
                <p>Active User</p>
              </div>

              <div className="bg-blue-400 rounded-xl p-8">
                <h3 className="text-4xl font-bold">90%</h3>
                <p>Course Complete Rate</p>
              </div>

              <div className="bg-pink-100 rounded-xl p-8">
                <h3 className="text-4xl font-bold">100+</h3>
                <p>Job Placement</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Sectiontwo;