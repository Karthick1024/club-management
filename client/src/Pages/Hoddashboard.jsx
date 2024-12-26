import React from 'react';
import NewRegistraion from '../Components/home/NewRegistration'
import StaffManagement from '../components/StaffManagement/Staffmanagement';

const HODDashboard = () => {
    return (
        <div>
            <h1 className='text-center'>HOD Dashboard</h1>
            
            <StaffManagement />
            <NewRegistraion/>
        </div>
    );
};

export default HODDashboard;
