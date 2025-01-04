import React, { createContext, useState, useEffect } from "react";
// import { getLocalStorage } from "../utils/localStorage";

// Created a Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // created a useState for passing the value through useContext
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const { employees, admin } = getLocalStorage();
  //   setUserData({ employees, admin });
  // }, []);

  return (
    <div>
      {/* Wrap the children component inside the Provider */}
      {/* After that pass a value */}
      <AuthContext.Provider value={"Solving the functionality of local storage now lets meet tomorrow for this buddy!"}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
