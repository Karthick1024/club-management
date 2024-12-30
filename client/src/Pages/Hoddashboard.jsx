import React, { useState,useEffect } from "react";
import "../Pages/css/Hoddashboard.css";
import { FaPlus } from "react-icons/fa";
import StaffManagement from "../components/StaffManagement/StaffManagement";
import NewRegistration from "../Components/home/NewRegistration";

const HODDashboard = () => {
  const [showStaffManagement, setShowStaffManagement] = useState(false);
  const [showStudentRegistration, setShowStudentRegistration] = useState(false);

 

  const handleTabClick = (tabName) => {
    // Logic to close other tabs when one is opened
    if (tabName === "staffManagement") {
      if (showStaffManagement) {
        setShowStaffManagement(false);
      } else {
        setShowStaffManagement(true);
        setShowStudentRegistration(false); // Ensure only one tab is open
      }
    } else if (tabName === "studentRegistration") {
      if (showStudentRegistration) {
        setShowStudentRegistration(false);
      } else {
        setShowStudentRegistration(true);
        setShowStaffManagement(false); // Ensure only one tab is open
      }
    }
  };

  return (
    <div className="hod-dashboard-container mt-5 d-flex">
      {/* Sidebar Menu */}
      <div className="hod-menu w-25">
        <h3 className="text-center mt-5">HOD Dashboard</h3>
        <div className="mt-5">
          <div className="btn-group-vertical w-100" role="group">
            {/* Manage Staff Button */}
            <button
              type="button"
              className="btn btn-success mb-4"
              onClick={() => handleTabClick("staffManagement")}
            >
              Manage Staff <span className="add-icon"><FaPlus /></span>
            </button>

            {/* Student Register Button */}
            <button
              type="button"
              className="btn btn-danger mb-4"
              onClick={() => handleTabClick("studentRegistration")}
            >
              Student Register <span className="add-icon"><FaPlus /></span>
            </button>

            {/* Test Button */}
            <button type="button" className="btn btn-primary mb-4">
              Test <span className="add-icon"><FaPlus /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="hod-content w-75">
        {showStaffManagement && (
          <StaffManagement setShowStaffManagement={setShowStaffManagement} />
        )}
        {showStudentRegistration && (
          <NewRegistration setShowStudentRegistration={setShowStudentRegistration} />
        )}
      </div>
    </div>
  );
};

export default HODDashboard;
