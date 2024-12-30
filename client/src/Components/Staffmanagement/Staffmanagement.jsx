import React from "react";
import "./StaffManagement.css";
import cross_icon from "../../assets/images/cross_icon.png";

const StaffManagement = ({ setShowStaffManagement }) => {
  return (
    <div className="staff-management-container ">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-4">Manage Staff</h2>
            <img
              src={cross_icon}
              alt="Close"
              style={{ cursor: "pointer", width: "24px" }}
              onClick={() => setShowStaffManagement(false)}
            />
          </div>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">Staff Name</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="doj" className="form-label">Joined Year</label>
              <input
                type="number"
                id="doj"
                className="form-control"
                min="1950"
                max="2100"
                placeholder="YYYY"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Staff
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
