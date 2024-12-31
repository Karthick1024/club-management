import { React, useState } from 'react';
import './css/Staffdashboard.css'
import { FaPlus } from "react-icons/fa";


import NewRegistration from '../Components/home/NewRegistration';


const StaffDashboard = () => {

    const [showStudentRegistration, setShowStudentRegistration] = useState(false);

    return (
        <>
            <div className="staff-dashboard-container mt-5 d-flex">
                <div className="staff-menu w-25">
                    <h3 className="text-center mt-5" >
                        Staff Dashboard
                    </h3>
                    <div className="mt-5">
                        <div className="btn-group-vertical w-100" role="group">
                            {/* Manage Staff Button */}
                            <button
                                type="button"
                                className="btn btn-success mb-4"
                                onClick={() => setShowStudentRegistration(true)}
                            >
                              Student Register<span className="add-icon"><FaPlus /></span>
                            </button>

                            {/* Student Register Button */}
                            <button
                                type="button"
                                className="btn btn-danger mb-4"

                            >
                                Test <span className="add-icon"><FaPlus /></span>
                            </button>

                            {/* Test Button */}
                            <button type="button" className="btn btn-primary mb-4">
                                Test <span className="add-icon"><FaPlus /></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right-side w-75">
                    {showStudentRegistration && (
                        <NewRegistration setShowStudentRegistration={setShowStudentRegistration} />
                    )}

                </div>
            </div>




        </>
    );
};

export default StaffDashboard;
