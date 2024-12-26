import {React,useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'aos/dist/aos.css';

import AOS from 'aos';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/navbar/Navbar'



const App = () => {

    

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: false,    // Allow animations to happen multiple times
        });

        const interval = setInterval(() => {
            setAnimationKey(prevKey => prevKey + 1); // Increment key every 10 seconds
        }, 10000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

  
    
    const userRole = "hod";
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard role={userRole} />} />
                
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
