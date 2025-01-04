import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  // Received the data through AuthContext
  const authData = useContext(AuthContext)
  console.log(authData);

  // Handle login based on role
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser('employee');
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {/* If the user data is not stored in Local Storage then it will render directly the login form otherwise it render the screen */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {/* If the user data is equal to admin then it render AdminDashboard otherwise it render EmployeeDashboard */}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
