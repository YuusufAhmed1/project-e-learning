import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function Quetions() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Can I Track My Assignments and Grades?",
      answer:
        "Yes, students can easily track assignments, grades, and academic progress through their personal dashboard."
    },
    {
      question: "Does the LMS Support Video Lessons and Live Classes?",
      answer:
        "Yes, the platform supports recorded video lessons, live classes, and interactive virtual sessions."
    },
    {
      question: "How Can I Communicate With My Instructor?",
      answer:
        "Students can communicate with instructors through messaging, discussion forums, and live chat features."
    },
    {
      question: "What Support Is Available for Students and Instructors?",
      answer:
        "We provide technical support, learning resources, and customer service assistance whenever needed."
    },
    {
      question: "Are There Interactive Features for Students?",
      answer:
        "Yes, students can participate in quizzes, discussions, assignments, and collaborative activities."
    },
    {
      question: "Can I Access Courses on Mobile Devices?",
      answer:
        "Absolutely. The platform is fully responsive and works smoothly on smartphones, tablets, and desktops."
    },
    {
      question: "Will I Receive a Certificate After Completion?",
      answer:
        "Yes, certificates can be awarded after successfully completing course requirements and assessments."
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-r from-cyan-50 via-white to-pink-50 mt-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-5">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Find answers to the most common questions about our learning
            platform, courses, and student support services.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-3xl px-8 py-7 transition-all duration-300 ${
                open === index
                  ? "bg-white border border-green-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                  : "bg-white border border-gray-100 hover:shadow-md"
              }`}
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h2
                  className={`text-[22px] font-semibold transition-all duration-300 ${
                    open === index
                      ? "text-emerald-500"
                      : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </h2>

                {open === index ? (
                  <FiMinus
                    size={30}
                    className="text-emerald-500 flex-shrink-0"
                  />
                ) : (
                  <FiPlus
                    size={30}
                    className="text-slate-900 flex-shrink-0"
                  />
                )}
              </button>

              {open === index && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-[18px] leading-9 text-gray-600 max-w-4xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Quetions;