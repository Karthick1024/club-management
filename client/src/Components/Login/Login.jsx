import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [role, setRole] = useState('hod'); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Role: ${role}, Username: ${username}, Password: ${password}`);
        navigate('/dashboard');
    };

    return (
        <>
        <div className="row">

        
            <div className="col-sm-6 appear-left ms-5 p-5 mt-5 " data-aos="flip-right">
                <p>STUDENTS</p>
                <p>CLUB</p>
                <p>REGISTRATION</p>
            </div>
            <div className="col-sm-6  appear-right container  d-flex justify-content-center mt-5">
                <div className="card shadow-lg p-4" >
                    <p className="text-center mb-4">Login</p>
                    
                    <div className="btn-group w-100 mb-3" role="group">
                        <button
                            type="button"
                            className={`btn ${role === 'hod' ? 'btn-primary' : 'btn-danger'}`}
                            onClick={() => setRole('hod')}
                            
                        >
                            HOD
                        </button>
                        <button
                            type="button"
                            className={`btn ${role === 'staff' ? 'btn-primary' : 'btn-danger'}`}
                            onClick={() => setRole('staff')}
                        >
                            Staff
                        </button>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">
                                {role === 'hod' ? 'HOD' : 'Staff'} Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder={`Enter ${role === 'hod' ? 'HOD' : 'Staff'} username`}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-100">
                            Login as {role === 'hod' ? 'HOD' : 'Staff'}
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;
