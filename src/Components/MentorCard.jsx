import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaUserFriends, FaPlayCircle, FaSuitcase } from 'react-icons/fa';

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
    >
      <div className="relative h-32 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Profile Picture */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img 
            src={mentor.photo} 
            alt={mentor.name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="p-6 pt-14 flex flex-col flex-grow text-center">
        <Link to={`/mentors/${mentor.slug}`}>
          <h3 className="text-xl font-bold text-dark-text group-hover:text-primary transition-colors">
            {mentor.name}
          </h3>
        </Link>
        <p className="text-primary font-medium mt-1">{mentor.position} at {mentor.company}</p>
        
        <div className="flex items-center justify-center gap-1 my-3">
          <span className="text-yellow-400 font-bold">{mentor.rating}</span>
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(mentor.rating) ? '' : 'text-gray-300'} />
            ))}
          </div>
          <span className="text-gray-400 text-xs ml-1">({mentor.reviews.toLocaleString()})</span>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {mentor.biography}
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-6 border-y border-gray-100 py-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-dark-text font-bold">
              <FaUserFriends className="text-primary" /> {mentor.students.toLocaleString()}
            </div>
            <span className="text-xs">Students</span>
          </div>
          <div className="flex flex-col items-center border-l border-gray-100 pl-6">
            <div className="flex items-center gap-1 text-dark-text font-bold">
              <FaSuitcase className="text-secondary" /> {mentor.experience} Yrs
            </div>
            <span className="text-xs">Experience</span>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <button 
            onClick={() => navigate(`/mentors/${mentor.slug}`)}
            className="w-full py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-md hover:opacity-90 transition-opacity"
          >
            View Profile
          </button>
          <a 
            href={mentor.introVideo}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 bg-gray-50 text-dark-text border border-gray-200 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <FaPlayCircle className="text-primary" /> Watch Intro Video
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MentorCard;
