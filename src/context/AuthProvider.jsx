import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
// import { getLocalStorage } from "../utils/localStorage";

// Created a Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // created a useState for passing the value through useContext
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    setLocalStorage();
    const {employees} = getLocalStorage();
    setUserData(employees) 
  },[])

  return (
    <div>
      {/* Wrap the children component inside the Provider */}
      {/* After that pass a value */}
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
