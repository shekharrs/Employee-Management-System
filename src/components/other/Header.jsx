import React from "react";

const Header = (props) => {

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser',''); // In the localStorage the loggedInUser will remove
    props.changeUser(''); // Here it render the Login Form without reloading the page
    // window.location.reload()
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br /> <span className="text-3xl font-semibold">UserName👋🏻</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-white text-lg px-5 py-2 font-medium rounded-sm">Log Out</button>
    </div>
  );
}

export default Header;