import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const authData = useContext(AuthContext)

  return (
    <div id="tasklist" className="bg-[#1C1C1C] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2  flex justify-between rounded py-5 px-3">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>

      <div>
      {authData.employees.map((elem, id)=>{
        return <div key={id} className="border-2 border-emerald-600 mb-2  flex justify-between rounded py-5 px-3">
        <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
        <h3 className="w-1/5 text-lg font-medium text-blue-400">{elem.taskCounts.newTask}</h3>
        <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskCounts.active}</h5>
        <h5 className="w-1/5 text-lg font-medium text-green-400">{elem.taskCounts.completed}</h5>
        <h5 className="w-1/5 text-lg font-medium text-red-400">{elem.taskCounts.failed}</h5>
      </div>
      })}  
      </div>  
    </div>
  );
};

export default AllTask;
