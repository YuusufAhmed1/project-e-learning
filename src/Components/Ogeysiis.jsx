import { useRef } from "react";

function Ogeysiis() {
  const dialogRef = useRef();

  return (
    <>
      <button
        onClick={() => dialogRef.current.showModal()}
        className="cursor-pointer pl-[20%]  text-4xl font-bold text-center"
      >
  Welcome to Our E-Learning Notices
  <span>›</span>
</button>
     

      <dialog
        ref={dialogRef}
        className="w-[100%] rounded-2xl p-5 mt-70 "
      >
        <h2 className="text-2xl text-red-500 font-bold text-center">
       Notices
        </h2>

        <hr className="w-25 h-1 bg-black border-0  ml-136 corsor pointner" />

        <p className="pt-4">
        Welcome to Our E-Learning Notices

Dear Students and Visitors,

We are delighted to welcome you to our E-Learning Platform. Thank you for choosing us as part of your educational journey. Our mission is to provide high-quality learning experiences, practical knowledge, and valuable skills that help learners achieve their academic and professional goals.

We sincerely appreciate your trust and commitment to learning. Every course on this platform is designed to support your growth, encourage creativity, and build confidence in your abilities. Whether you are a beginner or an advanced learner, we are committed to providing resources that will help you succeed.



Best Regards,
The E-Learning Team
        </p>

        <button
          onClick={() => dialogRef.current.close()}
          className="w-30 h-10 bg-red-500 text-white text-xl font-bold rounded-2xl ml-20 mt-10 hover:bg-blue-500 cursor-pointer ml-130"
        >
          Close
        </button>
      </dialog>
    </>
  );
}

export default Ogeysiis;