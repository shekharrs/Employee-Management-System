import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";


const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Received the data through AuthContext
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  // Handle login based on role
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    } else if (userData) {
      const employee = userData.find((e)=>email == e.email && e.password == password);
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}));
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {/* If the user data is not stored in Local Storage then it will render directly the login form otherwise it render the screen */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {/* If the user data is equal to admin then it render AdminDashboard otherwise it render EmployeeDashboard */}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  );
};

export default App;
