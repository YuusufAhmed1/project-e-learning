import  { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaUserFriends, FaClock, FaGlobe, FaCertificate, FaPlayCircle, FaCheck, FaFolder, FaTasks, FaTrophy } from 'react-icons/fa';
import { courses } from '../data/courses';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Reducer";
import CourseCard from '../Components/CourseCard';

const CourseDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  
  const course = courses.find(c => c.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-dark-text mb-4">Course Not Found</h2>
        <Link to="/courses" className="text-primary hover:underline">Back to Courses</Link>
      </div>
    );
  }

  const relatedCourses = courses.filter(c => c.category === course.category && c.id !== course.id).slice(0, 3);

  return (
    <div className="bg-light-gray min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-dark-text text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-bold">{course.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">{course.level}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-3xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-8">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-bold">{course.rating}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(course.rating) ? '' : 'text-gray-600'} />
                    ))}
                  </div>
                  <span className="ml-1">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserFriends />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="font-semibold">Created by <span className="text-primary">{course.instructor.name}</span></p>
                </div>
              </div>
            </div>
            
            {/* Mobile Purchase Card Placeholder (Visible only on mobile/tablet) */}
            <div className="lg:hidden bg-white rounded-2xl p-6 text-dark-text shadow-xl">
               <div className="text-3xl font-bold mb-4 text-dark-text">
                  ${course.discountPrice || course.price}
                  {course.discountPrice && <span className="text-lg text-gray-400 line-through ml-2 font-normal">${course.price}</span>}
                </div>
                <button 
                onClick={() => dispatch(addToCart(course))}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all mb-4"
                >
                  Add to Cart
                </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {/* What you'll learn */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-text mb-6">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Build complete real-world applications',
                  'Master best practices and modern syntax',
                  'Gain a deep understanding of core concepts',
                  'Deploy your applications to production',
                  'Build a portfolio to show to employers',
                  'Learn problem-solving skills like a senior developer'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-text mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>No prior knowledge required - we'll start from scratch</li>
                <li>A Mac or PC with an internet connection</li>
                <li>A willingness to learn and build awesome projects</li>
              </ul>
            </div>

            {/* Instructor */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-text mb-6">About the Instructor</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{course.instructor.name}</h3>
                  <p className="text-gray-500 font-medium mb-4">{course.instructor.bio}</p>
                  <p className="text-gray-600 leading-relaxed">
                    I'm a passionate educator and software engineer with over a decade of industry experience. 
                    My mission is to help people learn the skills they need to change their lives and build successful careers in tech. 
                    I've taught hundreds of thousands of students globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-dark-text mb-6">Students also bought</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCourses.slice(0, 2).map(c => (
                    <CourseCard key={c.id} course={c} />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sticky Purchase Card (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 sticky top-32 overflow-hidden -mt-40 z-10">
              <div className="relative h-56">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <FaPlayCircle className="text-white text-6xl shadow-lg rounded-full" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-3xl font-bold mb-6 text-dark-text flex items-end gap-3">
                  ${course.discountPrice || course.price}
                  {course.discountPrice && <span className="text-lg text-gray-400 line-through font-normal">${course.price}</span>}
                </div>
                
                <button 
                  onClick={() => addToCart(course)}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all mb-4"
                >
                  Add to Cart
                </button>
                <button className="w-full py-4 bg-white text-dark-text border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors mb-8">
                  Buy Now
                </button>

                <h4 className="font-bold text-dark-text mb-4">This course includes:</h4>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li className="flex items-center gap-3"><FaPlayCircle className="text-gray-400" /> {course.duration} on-demand video</li>
                  <li className="flex items-center gap-3"><FaFolder className="text-gray-400" /> 12 downloadable resources</li>
                  <li className="flex items-center gap-3"><FaTasks className="text-gray-400" /> {course.lessons} coding exercises/lessons</li>
                  <li className="flex items-center gap-3"><FaGlobe className="text-gray-400" /> Full lifetime access</li>
                  {course.certificate && <li className="flex items-center gap-3"><FaTrophy className="text-gray-400" /> Certificate of completion</li>}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
