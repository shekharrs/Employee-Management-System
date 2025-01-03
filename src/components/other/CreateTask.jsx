import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form className="flex flex-wrap w-full bg-[#1C1C1C] p-6 md:p-10 mt-10 rounded-lg items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h3 className="text-white mb-2">Task Title</h3>
            <input
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white mb-2">Date</h3>
            <input
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="date"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white mb-2">Assign to</h3>
            <input
              className="bg-transparent border-2 w-full md:w-96 p-2 rounded-md outline-none"
              type="text"
              placeholder="Enter employee name"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white mb-2">Category</h3>
            <input
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
