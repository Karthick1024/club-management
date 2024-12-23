import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container-fluid mt-5 student-form">
            <h1 className="text-center text-primary animate__animated animate__fadeInDown">
                Students Club Registration
            </h1>
            <div className="register card shadow-lg p-4 animate__animated animate__zoomIn">
                <form method="post">
                    <div className="mb-3">
                        <label htmlFor="studentname" className="form-label">
                            Student Name:
                        </label>
                        <input
                            type="text"
                            id="studentname"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="registernumber" className="form-label">
                            Register Number:
                        </label>
                        <input
                            type="text"
                            id="registernumber"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">
                            DOB:
                        </label>
                        <input type="date" id="dob" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="blood-group" className="form-label">
                            Blood Group:
                        </label>
                        <input type="text" id="blood-group" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department-select" className="form-label">
                            Select a Department:
                        </label>
                        <select
                            id="department-select"
                            name="department"
                            className="form-select"
                            required
                        >
                            <option value="none" disabled selected>
                                Choose a department
                            </option>
                            <option value="tamil">Department of Tamil</option>
                            <option value="english">Department of English</option>
                            <option value="mathematics">Department of Mathematics</option>
                            <option value="computer-science">
                                Department of Computer Science
                            </option>
                            <option value="physics">Department of Physics</option>
                            <option value="electronics">Department of Electronics</option>
                            <option value="chemistry">Department of Chemistry</option>
                            <option value="zoology">Department of Zoology</option>
                            <option value="botany">Department of Botany</option>
                            <option value="economics">Department of Economics</option>
                            <option value="history">Department of History</option>
                            <option value="commerce">Department of Commerce</option>
                            <option value="corporate-secretaryship">
                                Department of Corporate Secretaryship
                            </option>
                            <option value="business-management">
                                Department of Business Management
                            </option>
                            <option value="physical-education">
                                Department of Physical Education
                            </option>
                            <option value="library-information-science">
                                Department of Library and Information Science
                            </option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address:
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            className="form-control"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="club-name" className="form-label">
                            Club Name:
                        </label>
                        <select
                            name="club-name"
                            id="club-name"
                            className="form-select"
                        >    <option value="none" disabled selected>Choose club</option>
                            <option value="ncc">NCC</option>
                            <option value="nss">NSS</option>
                            <option value="">PT</option>
                            <option value="">YRC</option>
                            <option value="">GENERAL CLUB</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
