import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import CourseCard from "../Components/CourseCard";
import { courses } from "../data/courses";
import { categories } from "../data/categories";

const Courses = ({ header, footer }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Filter Logic
  useEffect(() => {
    let result = courses;

    // Search Filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(lowerSearch) ||
          c.instructor.name.toLowerCase().includes(lowerSearch) ||
          c.category.toLowerCase().includes(lowerSearch),
      );
    }

    // Category Filter
    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    // Level Filter
    if (selectedLevel !== "All") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // Language Filter
    if (selectedLanguage !== "All") {
      result = result.filter((c) => c.language === selectedLanguage);
    }

    // Price Filter
    if (selectedPrice !== "All") {
      if (selectedPrice === "Free")
        result = result.filter((c) => c.price === 0);
      else if (selectedPrice === "Under $50")
        result = result.filter((c) => (c.discountPrice || c.price) < 50);
      else if (selectedPrice === "$50-$100")
        result = result.filter((c) => {
          const p = c.discountPrice || c.price;
          return p >= 50 && p <= 100;
        });
      else if (selectedPrice === "Above $100")
        result = result.filter((c) => (c.discountPrice || c.price) > 100);
    }

    // Sorting Logic
    if (sortOrder === "popular") {
      result = [...result].sort((a, b) => b.students - a.students);
    } else if (sortOrder === "highest-rated") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "lowest-price") {
      result = [...result].sort(
        (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price),
      );
    } else if (sortOrder === "highest-price") {
      result = [...result].sort(
        (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price),
      );
    } else if (sortOrder === "a-z") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    // "newest" we just leave as default order (assuming data is sorted by newest)

    setFilteredCourses(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [
    searchTerm,
    selectedCategory,
    selectedLevel,
    selectedPrice,
    selectedLanguage,
    sortOrder,
  ]);

  // Pagination Logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse,
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div>
      {header}
      <div className="bg-light-gray min-h-screen py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <div>
              <h1 className="text-3xl font-bold text-dark-text">
                Explore Courses
              </h1>
              <p className="text-gray-500 mt-1">
                Find the perfect course to enhance your skills
              </p>
            </div>
            <div className="w-full md:w-96 relative">
              <input
                type="text"
                placeholder="Search courses, instructors, categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <button
              className="lg:hidden flex items-center justify-center gap-2 bg-white py-3 rounded-xl shadow-sm border border-gray-100 font-medium text-dark-text"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter /> Filters
            </button>

            <div
              className={`lg:w-1/4 ${isFilterOpen ? "block" : "hidden lg:block"}`}
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <div className="flex justify-between items-center mb-6 lg:hidden">
                  <h2 className="text-xl font-bold text-dark-text">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <FaTimes className="text-gray-500" size={20} />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-dark-text mb-3">Category</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {["All", ...categories.map((c) => c.name)].map(
                      (cat, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="category"
                            className="form-radio text-primary focus:ring-primary"
                            checked={selectedCategory === cat}
                            onChange={() => setSelectedCategory(cat)}
                          />
                          <span
                            className={`text-sm ${selectedCategory === cat ? "text-primary font-medium" : "text-gray-600"}`}
                          >
                            {cat}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-dark-text mb-3">Level</h3>
                  <div className="space-y-2">
                    {["All", "Beginner", "Intermediate", "Advanced"].map(
                      (lvl, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="level"
                            className="form-radio text-primary focus:ring-primary"
                            checked={selectedLevel === lvl}
                            onChange={() => setSelectedLevel(lvl)}
                          />
                          <span
                            className={`text-sm ${selectedLevel === lvl ? "text-primary font-medium" : "text-gray-600"}`}
                          >
                            {lvl}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-dark-text mb-3">Price</h3>
                  <div className="space-y-2">
                    {["All", "Free", "Under $50", "$50-$100", "Above $100"].map(
                      (price, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="price"
                            className="form-radio text-primary focus:ring-primary"
                            checked={selectedPrice === price}
                            onChange={() => setSelectedPrice(price)}
                          />
                          <span
                            className={`text-sm ${selectedPrice === price ? "text-primary font-medium" : "text-gray-600"}`}
                          >
                            {price}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-dark-text mb-3">Language</h3>
                  <div className="space-y-2">
                    {["All", "English", "Arabic", "Somali"].map((lang, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="language"
                          className="form-radio text-primary focus:ring-primary"
                          checked={selectedLanguage === lang}
                          onChange={() => setSelectedLanguage(lang)}
                        />
                        <span
                          className={`text-sm ${selectedLanguage === lang ? "text-primary font-medium" : "text-gray-600"}`}
                        >
                          {lang}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedLevel("All");
                    setSelectedPrice("All");
                    setSelectedLanguage("All");
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500 font-medium">
                  Showing{" "}
                  <span className="text-dark-text">
                    {filteredCourses.length > 0 ? indexOfFirstCourse + 1 : 0}-
                    {Math.min(indexOfLastCourse, filteredCourses.length)}
                  </span>{" "}
                  of{" "}
                  <span className="text-gray-400">
                    {filteredCourses.length}
                  </span>{" "}
                  results
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 text-sm hidden sm:block">
                    Sort by:
                  </span>
                  <select
                    className="bg-gray-50 border border-gray-200 text-dark-text text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="popular">Popularity</option>
                    <option value="highest-rated">Highest Rated</option>
                    <option value="lowest-price">Lowest Price</option>
                    <option value="highest-price">Highest Price</option>
                    <option value="a-z">A-Z</option>
                  </select>
                </div>
              </div>

              {currentCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-2xl shadow-sm text-center border border-gray-100">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-dark-text mb-2">
                    No courses found
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    We couldn't find any courses matching your current filters.
                    Try adjusting your search criteria or clearing filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setSelectedLevel("All");
                      setSelectedPrice("All");
                      setSelectedLanguage("All");
                    }}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

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
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white border border-gray-200 text-dark-text hover:bg-gray-50"
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

export default Courses;
