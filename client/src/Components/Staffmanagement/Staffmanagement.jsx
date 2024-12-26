import React, { useState } from 'react';
import './StaffManagement.css'
// import axios from 'axios';

const StaffManagement = () => {

    return (
        <div className="container py-5">
            <div className="card shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-body">
                    <h2 className="text-center mb-4">Manage Staff</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Staffname</label>
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
                        <div className="form-group">
                            <label htmlFor="doj" className="from-label">Joined Year</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Add Staff</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StaffManagement;
