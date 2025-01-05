import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [category, setCategory] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({taskTitle, category, taskDate, taskDescription, active:false, newTask: true, completed: false, failed: false})
    console.log(newTask);

    // From here I will continue ✅
    // const data = JSON.parse(localStorage.getItem('employees'));
    
    // data.forEach((elem)=>{
    //   if(assignTo == elem.firstName){
    //     elem.tasks.push(newTask);
    //     console.log(elem)
    //   }
    // })

    // setTaskTitle('');
    // setCategory('');
    // setTaskDate('');
    // setAssignTo('');
    // setTaskDescription('');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full bg-[#1C1C1C] p-6 md:p-10 mt-10 rounded-lg items-center justify-between"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h3 className="text-white mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="date"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white mb-2">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="text"
              placeholder="Enter employee name"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="text"
              placeholder="Design, Development, etc..."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-white mb-2">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="bg-transparent border-2 w-full h-40 md:h-96 p-2 rounded-md outline-none"
            name=""
            id=""
            style={{ resize: "none" }}
          ></textarea>
        </div>

        {/* Button */}
        <div className="w-full mt-6">
          <button className="bg-emerald-600 w-full md:w-auto px-10 py-4 font-semibold rounded-full text-xl">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
