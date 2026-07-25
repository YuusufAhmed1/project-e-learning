import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import MentorCard from '../Components/MentorCard';
import  {mentors}  from '../data/mentors';

const expertises = [
  'All', 'Frontend', 'Backend', 'Full Stack', 'React', 'Python', 
  'Machine Learning', 'Artificial Intelligence', 'Data Science', 
  'UI/UX', 'DevOps', 'Cyber Security', 'Cloud Computing', 'Marketing', 'Business'
];

const Mentors = ({ header, footer }) => {
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const mentorsPerPage = 8;

  useEffect(() => {
    let result = mentors;

    // Search Filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(m => 
        m.name.toLowerCase().includes(lowerSearch) || 
        m.company.toLowerCase().includes(lowerSearch) ||
        m.specialization.toLowerCase().includes(lowerSearch) ||
        m.skills.some(skill => skill.toLowerCase().includes(lowerSearch))
      );
    }

    // Expertise Filter
    if (selectedExpertise !== 'All') {
      result = result.filter(m => 
        m.specialization === selectedExpertise || 
        m.skills.includes(selectedExpertise)
      );
    }

    // Experience Filter
    if (selectedExperience !== 'All') {
      if (selectedExperience === '1-5 Years') result = result.filter(m => m.experience >= 1 && m.experience <= 5);
      else if (selectedExperience === '6-10 Years') result = result.filter(m => m.experience >= 6 && m.experience <= 10);
      else if (selectedExperience === '10+ Years') result = result.filter(m => m.experience > 10);
    }

    // Rating Filter
    if (selectedRating !== 'All') {
      if (selectedRating === '4.5 & up') result = result.filter(m => m.rating >= 4.5);
      else if (selectedRating === '4.8 & up') result = result.filter(m => m.rating >= 4.8);
      else if (selectedRating === '5.0') result = result.filter(m => m.rating === 5.0);
    }

    setFilteredMentors(result);
    setCurrentPage(1);
  }, [searchTerm, selectedExpertise, selectedExperience, selectedRating]);

  // Pagination Logic
  const indexOfLastMentor = currentPage * mentorsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  const currentMentors = filteredMentors.slice(indexOfFirstMentor, indexOfLastMentor);
  const totalPages = Math.ceil(filteredMentors.length / mentorsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {header}
    <div className="bg-light-gray min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header & Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-dark-text">Our Mentors</h1>
            <p className="text-gray-500 mt-1">Learn from industry experts from top companies.</p>
          </div>
          <div className="w-full md:w-96 relative">
            <input 
              type="text" 
              placeholder="Search mentors, skills, companies..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center gap-2 bg-white py-3 rounded-xl shadow-sm border border-gray-100 font-medium text-dark-text"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaFilter /> Filters
          </button>

          {/* Filter Sidebar */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-xl font-bold text-dark-text">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><FaTimes className="text-gray-500" size={20}/></button>
              </div>

              {/* Expertise Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-dark-text mb-3">Expertise</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {expertises.map((exp, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="expertise" 
                        className="form-radio text-primary focus:ring-primary"
                        checked={selectedExpertise === exp}
                        onChange={() => setSelectedExpertise(exp)}
                      />
                      <span className={`text-sm ${selectedExpertise === exp ? 'text-primary font-medium' : 'text-gray-600'}`}>
                        {exp}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-dark-text mb-3">Experience</h3>
                <div className="space-y-2">
                  {['All', '1-5 Years', '6-10 Years', '10+ Years'].map((exp, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="experience" 
                        className="form-radio text-primary focus:ring-primary"
                        checked={selectedExperience === exp}
                        onChange={() => setSelectedExperience(exp)}
                      />
                      <span className={`text-sm ${selectedExperience === exp ? 'text-primary font-medium' : 'text-gray-600'}`}>
                        {exp}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-dark-text mb-3">Rating</h3>
                <div className="space-y-2">
                  {['All', '4.5 & up', '4.8 & up', '5.0'].map((rating, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="rating" 
                        className="form-radio text-primary focus:ring-primary"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                      />
                      <span className={`text-sm ${selectedRating === rating ? 'text-primary font-medium' : 'text-gray-600'}`}>
                        {rating}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                className="w-full py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedExpertise('All');
                  setSelectedExperience('All');
                  setSelectedRating('All');
                }}
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Mentors Grid Area */}
          <div className="lg:w-3/4">
            
            <div className="mb-6">
              <p className="text-gray-500 font-medium">
                Showing <span className="text-dark-text">{filteredMentors.length > 0 ? indexOfFirstMentor + 1 : 0}-{Math.min(indexOfLastMentor, filteredMentors.length)}</span> of <span className="text-dark-text">{filteredMentors.length}</span> mentors
              </p>
            </div>

            {/* Grid */}
            {currentMentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentMentors.map(mentor => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl shadow-sm text-center border border-gray-100">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-dark-text mb-2">No mentors found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any mentors matching your current filters. Try adjusting your search criteria.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedExpertise('All');
                    setSelectedExperience('All');
                    setSelectedRating('All');
                  }}
                  className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-dark-text"
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === i + 1 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-white border border-gray-200 text-dark-text hover:bg-gray-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-dark-text"
                >
                  Next
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
    {footer}
    </div>
  );
};

export default Mentors;
