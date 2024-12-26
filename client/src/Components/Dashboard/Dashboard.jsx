import React from 'react';
import Hoddashboard from '../../Pages/Hoddashboard'
import Staffdashboard from '../../Pages/Staffdashboard'



const Dashboard = ({role}) => {
    
    return (
        <div>
            {role === 'hod' ? <Hoddashboard/>:  <Staffdashboard/>}
            
           
        </div>
    );
};

export default Dashboard;
