import React from 'react';
import Hoddashboard from '../../Pages/Hoddashboard'
import Staffdashboard from '../../Pages/Staffdashboard'



const Dashboard = ({role}) => {
    
    return (
        <div>
            {/* {role === 'hod' ? <Hoddashboard/>:  <Staffdashboard/>} */}
            {role === "hod" ? <Hoddashboard /> : role === "staff" ? <Staffdashboard /> : <div>Unauthorized Role</div>}
            
           
        </div>
    );
};

export default Dashboard;
