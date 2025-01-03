import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages/css/Hoddashboard.css";
import { FaPlus, FaSearch } from "react-icons/fa";
import StaffManagement from "../components/StaffManagement/StaffManagement";
import NewRegistration from "../Components/home/NewRegistration";

const HODDashboard = () => {
  const [showStaffManagement, setShowStaffManagement] = useState(false);
  const [showStudentRegistration, setShowStudentRegistration] = useState(false);
  
  // State for search criteria and value
  const [selectedCategory, setSelectedCategory] = useState("studentName");  // Default category
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    if (tabName === "staffManagement") {
      setShowStaffManagement(!showStaffManagement);
      setShowStudentRegistration(false);
    } else if (tabName === "studentRegistration") {
      setShowStudentRegistration(!showStudentRegistration);
      setShowStaffManagement(false);
    }
  };

  // Handle search input changes
  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle search submit
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchValue) return;

    try {
      // Send selected category and value to the backend
      const response = await axios.get("http://localhost:5100/api/v1/students/filter", {
        params: {
          [selectedCategory]: searchValue, // Use dynamic query param
        },
      });
      const results = response.data.students || [];
      setSearchResults(results);

      // Navigate to the SearchResultsPage
      navigate("/search-results", { state: { searchResults: results } });
    } catch (err) {
      console.error("Error searching students:", err.message);
      setSearchResults([]);
    }
  };

  return (
    <div className="hod-dashboard-container mt-5 d-flex">
      <div className="hod-menu w-25">
        <h3 className="text-center mt-5">HOD Dashboard</h3>
        <div className="mt-5">
          <div className="btn-group-vertical w-100" role="group">
            <button
              type="button"
              className="btn btn-danger mb-4"
              onClick={() => handleTabClick("studentRegistration")}
            >
              Student Register <span className="add-icon"><FaPlus /></span>
            </button>
            <button
              type="button"
              className="btn btn-success mb-4"
              onClick={() => handleTabClick("staffManagement")}
            >
              Add New Staff <span className="add-icon"><FaPlus /></span>
            </button>
            <button type="button" className="btn btn-primary mb-4">
              Test <span className="add-icon"><FaPlus /></span>
            </button>
          </div>
        </div>
      </div>

      <div className="hod-content w-75">
        <div className="search-bar mb-4">
          <form onSubmit={handleSearch} className="d-flex">
            <select
              className="form-control me-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="studentName">Name</option>
              <option value="registerNumber">Register Number</option>
              <option value="department">Department</option>
              <option value="bloodGroup">Blood Group</option>
              <option value="club">Club</option>
            </select>
            <input
              type="text"
              className="form-control me-2"
              placeholder={`Search by ${selectedCategory}`}
              value={searchValue}
              onChange={handleSearchValueChange}
            />
            <button type="submit" className="btn btn-primary">
              <FaSearch />
            </button>
          </form>
        </div>

        {searchResults.length > 0 ? (
          <div className="search-results mt-3">
            <h5>Search Results:</h5>
            <ul className="list-group">
              {searchResults.map((student) => (
                <li key={student._id} className="list-group-item">
                  {student.studentName} - {student.registerNumber}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        {showStaffManagement && <StaffManagement setShowStaffManagement={setShowStaffManagement} />}
        {showStudentRegistration && (
          <NewRegistration setShowStudentRegistration={setShowStudentRegistration} />
        )}
      </div>
    </div>
  );
};

export default HODDashboard;
