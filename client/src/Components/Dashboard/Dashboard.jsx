// import React from 'react';
// import Hoddashboard from '../../Pages/Hoddashboard'
// import Staffdashboard from '../../Pages/Staffdashboard'



// const Dashboard = ({role}) => {
    
//     return (
//         <div>
//             {/* {role === 'hod' ? <Hoddashboard/>:  <Staffdashboard/>} */}
//             {role === "hod" ? <Hoddashboard /> : role === "staff" ? <Staffdashboard /> : <div>Unauthorized Role</div>}
            
           
//         </div>
//     );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import Hoddashboard from '../../Pages/Hoddashboard';
import Staffdashboard from '../../Pages/Staffdashboard';

const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Fetch the role from localStorage
    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      setRole(userRole);
    } else {
      // Redirect to login if no role is found
      window.location.href = '/login';
    }
  }, []);

  if (!role) {
    return <div>Loading...</div>; // Show a loading message while role is being determined
  }

  return (
    <div>
      {role === 'hod' && <Hoddashboard />}
      {role === 'staff' && <Staffdashboard />}
      {!['hod', 'staff'].includes(role) && <div>Unauthorized Role</div>}
    </div>
  );
};

export default Dashboard;
