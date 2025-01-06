import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("Email: ", email);
    // console.log("Password: ", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-emerald-600 outline-none bg-transparent rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-emerald-600 outline-none bg-transparent rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-white border-none bg-emerald-600 outline-none rounded-full py-3 px-28 text-xl placeholder:text-white mt-5 active:scale-90">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;