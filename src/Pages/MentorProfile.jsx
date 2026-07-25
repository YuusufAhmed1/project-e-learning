import  { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaUserFriends, FaSuitcase, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaYoutube, FaTwitter, FaPlayCircle } from 'react-icons/fa';
import { mentors } from '../data/mentors';
import { courses } from '../data/courses';
import CourseCard from '../Components/CourseCard';

const MentorProfile = () => {
  const { slug } = useParams();
  const mentor = mentors.find(m => m.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!mentor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-dark-text mb-4">Mentor Not Found</h2>
        <Link to="/mentors" className="text-primary hover:underline">Back to Mentors</Link>
      </div>
    );
  }

  const mentorCourses = courses.filter(c => mentor.courseIds.includes(c.id));

  return (
    <div className="bg-light-gray min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="bg-white pb-12 mb-12 shadow-sm border-b border-gray-100">
        <div className="h-64 md:h-80 w-full relative">
          <img 
            src={mentor.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-end -mt-20 md:-mt-24 mb-8">
            <img 
              src={mentor.photo} 
              alt={mentor.name} 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
            />
            
            <div className="flex-grow text-center md:text-left pt-4 md:pt-0 pb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-dark-text">{mentor.name}</h1>
              <p className="text-xl text-primary font-medium mt-1">{mentor.position} at {mentor.company}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <FaSuitcase className="text-gray-400" />
                  <span>{mentor.experience} Years Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-bold text-dark-text">{mentor.rating}</span>
                  <span>({mentor.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserFriends className="text-gray-400" />
                  <span>{mentor.students.toLocaleString()} Students</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Follow
              </button>
              <a 
                href={mentor.introVideo}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-dark-text border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <FaPlayCircle className="text-primary text-xl" /> Intro Video
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (Left Col) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Biography */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-text mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {mentor.biography}
              </p>
            </div>

            {/* Courses */}
            {mentorCourses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-dark-text mb-6">My Courses ({mentor.courses})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mentorCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )}

            {/* Video */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-text mb-6">Introduction</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                {/* For demonstration, an iframe. Using a placeholder YouTube embed */}
                <iframe 
                  src={mentor.introVideo} 
                  title={`${mentor.name} Intro Video`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-[400px]"
                ></iframe>
              </div>
            </div>

            {/* Reviews Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold text-dark-text mb-6">Student Reviews</h2>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                  <div className="flex items-center gap-1 mb-2 text-yellow-400">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                  </div>
                  <p className="text-gray-600 italic">"Amazing mentor! The courses are well structured and very informative. I learned a lot."</p>
                  <p className="text-sm font-bold text-dark-text mt-4">- Alex P.</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-1 mb-2 text-yellow-400">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/>
                  </div>
                  <p className="text-gray-600 italic">"Great teaching style, very responsive to questions. Highly recommend."</p>
                  <p className="text-sm font-bold text-dark-text mt-4">- Samantha J.</p>
               </div>
            </div>

          </div>

          {/* Sidebar (Right Col) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-text mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-text mb-4">Achievements</h3>
              <ul className="space-y-4">
                {mentor.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></div>
                    <span className="text-gray-600">{ach}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-dark-text mt-8 mb-4">Certifications</h3>
              <ul className="space-y-4">
                {mentor.certificates.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-gray-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-text mb-6">Connect</h3>
              <div className="flex gap-4">
                {mentor.socialLinks.linkedin && (
                  <a href={mentor.socialLinks.linkedin} className="w-12 h-12 bg-[#0077b5] text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-md">
                    <FaLinkedin />
                  </a>
                )}
                {mentor.socialLinks.github && (
                  <a href={mentor.socialLinks.github} className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-md">
                    <FaGithub />
                  </a>
                )}
                {mentor.socialLinks.twitter && (
                  <a href={mentor.socialLinks.twitter} className="w-12 h-12 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-md">
                    <FaTwitter />
                  </a>
                )}
                {mentor.socialLinks.website && (
                  <a href={mentor.socialLinks.website} className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-md">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
