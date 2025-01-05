import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages/css/Hoddashboard.css";
import { FaPlus, FaSearch } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import StaffManagement from "../components/StaffManagement/StaffManagement";
import NewRegistration from "../Components/home/NewRegistration";

const HODDashboard = () => {
  const [showStaffManagement, setShowStaffManagement] = useState(false);
  const [showStudentRegistration, setShowStudentRegistration] = useState(false);
  const url = "http://localhost:5100/api/v1/auth";
  
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
  

 


  const handleLogout = async () => {
    try {
      
      await axios.get(`${url}/logout`, {}, {
        withCredentials: true, 
       
      });

     
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
      
      
      
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to log out. Please try again.");
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
            <button type="button" onClick={handleLogout} className="btn btn-primary mb-4">
              Logout <span className="add-icon"><TbLogout2 /></span>
            </button>
          </div>
        </div>
      </div>

      <div className="hod-content w-75">
        

        {showStaffManagement && <StaffManagement setShowStaffManagement={setShowStaffManagement} />}
        {showStudentRegistration && (
          <NewRegistration setShowStudentRegistration={setShowStudentRegistration} />
        )}
      </div>
    </div>
  );
};

export default HODDashboard;
