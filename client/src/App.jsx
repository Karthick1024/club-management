import {React,useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'aos/dist/aos.css';

import AOS from 'aos';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/navbar/Navbar'
import SearchResult from './Pages/SearchResult'
import PrivateRoute from './Components/Private/PrivateRoute';



const App = () => {

    

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,   
        });

       
    }, []);

  
    
    const userRole = "hod";
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                {/* <Route path="dashboard" element={<Dashboard role={userRole} />} /> */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard role={userRole}/>
                        </PrivateRoute>
                    }
                />
                <Route path='/search-results' element={<SearchResult/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
