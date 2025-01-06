import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="tasklist" className="bg-[#1C1C1C] p-5 rounded mt-5">
      {/* Header Row */}
      <div className="hidden sm:grid sm:grid-cols-5 gap-2 bg-red-400 rounded py-5 px-3">
        <h2 className="text-lg font-medium text-center">Employee Name</h2>
        <h3 className="text-lg font-medium text-center">New Task</h3>
        <h5 className="text-lg font-medium text-center">Active Task</h5>
        <h5 className="text-lg font-medium text-center">Completed</h5>
        <h5 className="text-lg font-medium text-center">Failed</h5>
      </div>

      {/* User Data Rows */}
      <div>
        {userData.map((elem, id) => (
          <div
            key={id}
            className="border-2 border-emerald-600 mb-2 mt-2 p-3 rounded bg-[#2C2C2C]"
          >
            {/* Mobile View */}
            <div className="sm:hidden space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Employee Name:</span>
                <span>{elem.firstName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">New Task:</span>
                <span className="text-blue-400">{elem.taskCounts.newTask}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Active Task:</span>
                <span className="text-yellow-400">{elem.taskCounts.active}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Completed:</span>
                <span className="text-green-400">{elem.taskCounts.completed}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Failed:</span>
                <span className="text-red-400">{elem.taskCounts.failed}</span>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:grid sm:grid-cols-5 sm:gap-2">
              <h2 className="text-lg font-medium text-center">{elem.firstName}</h2>
              <h3 className="text-lg font-medium text-center text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium text-center text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium text-center text-green-400">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium text-center text-red-400">
                {elem.taskCounts.failed}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
