// import React from 'react'

import { TextField } from "@mui/material"

function AddDepartment() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow w-full p-4 h-fit">
        <h3>Departement Details</h3>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <TextField variant="outlined" placeholder="Enter department Name"  fullWidth/>
          <TextField variant="outlined" placeholder="Enter Name of Department Head" fullWidth/>
        </div>
        <div className="flex  gap-2 w-full">

          <select className="border border-gray-300 w-full py-4 rounded-md">
              <option value="">Select Falculty</option>
              <option value=""> Science</option>
              <option value="">Education</option>
              <option value="">Social Science</option>
          </select>
          </div>
          {/* image upload */}
           <div className="flex flex-col items-center justify-center w-full h-[100px]">
              <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  // onChange={handleImageChange}
              />
              <label
                  htmlFor="imageUpload"
                  className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition duration-300"
              >
                  <span className="text-gray-400 text-sm">Upload Image</span>
                  <svg
                  className="w-8 h-8 text-gray-400 mt-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4-4-4m16 8l-4-4 4-4M12 20V4" />
                  </svg>
              </label>
           </div>
          <textarea placeholder="About Department" className="border border-gray-300 rounded-md p-2" rows={4}/>
          <div className="w-full flex justify-end">
              <button className=" bg-blue-950 w-2/3 py-3 text-white font-bold rounded-lg hover:bg-gray-100 hover:text-blue-950 shadow">Create Department</button>
          </div>
        
      </div>
    </div>
   )
}

export default AddDepartment
