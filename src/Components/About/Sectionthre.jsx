function Sectionthre() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-[#F3EEFF] rounded-[30px] p-10 flex flex-col md:flex-row items-center justify-between">

          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-slate-900">
              Become an Instructor?
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Become an Instructor: Join us to share your expertise.
            </p>

            <button className="mt-8 inline-flex items-center rounded-full bg-[#062B22] text-white pl-7 pr-2 py-2">
              Join with Us
              <span className="ml-5 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>

          <img
            src="https://i.pinimg.com/736x/8e/fa/79/8efa79eb19771ab1bf365e85c4df850b.jpg"
            alt="Instructor"
            className="w-56 mt-8 md:mt-0"
          />
        </div>

      </div>
    </section>
    
  );
  
}

export default Sectionthre;