import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaUserFriends, FaClock, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(course));
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full">
            {course.category}
          </span>
        </div>
        {course.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <button 
             onClick={() => navigate(`/CourseDetails/${course.slug}`)}
             className="bg-white text-dark-text font-semibold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-primary hover:text-white"
           >
             View Details
           </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <img 
            src={course.instructor.avatar} 
            alt={course.instructor.name} 
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-gray-500">{course.instructor.name}</span>
        </div>

        <Link to={`/product/${course.slug}`}>
          <h3 className="font-bold text-lg text-dark-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <span className="text-yellow-400 font-bold">{course.rating}</span>
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(course.rating) ? '' : 'text-gray-300'} />
            ))}
          </div>
          <span className="text-gray-400 text-xs ml-1">({course.reviews.toLocaleString()})</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-1">
            <FaUserFriends />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock />
            <span>{course.duration}</span>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">
            {course.level}
          </div>
        </div>

        {/* Footer (Price & Add to Cart) */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-dark-text">${course.discountPrice || course.price}</span>
            {course.discountPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">${course.price}</span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
