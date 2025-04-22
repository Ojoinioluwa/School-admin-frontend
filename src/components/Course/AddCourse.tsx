// import React from 'react'

import { TextField } from "@mui/material"

function AddCourse() {
  return (

        <div className="flex flex-col bg-white rounded-lg shadow w-full p-4 h-fit">
            <h3>Course Details</h3>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                <TextField variant="outlined" placeholder="Enter Course Name"  fullWidth/>
                <TextField variant="outlined" placeholder="Enter Course Code" fullWidth/>
                </div>
                <div className="flex  gap-2 w-full">

                    <select className="border border-gray-300 w-1/2 py-4 rounded-md">
                        <option value="">Select Department</option>
                        <option value="">Computer Science</option>
                        <option value="">English</option>
                        <option value="">Mathematics</option>
                        <option value="">Futher Mathematics</option>
                        <option value="">Computer Science</option>
                    </select>
                    
                    <select className="border border-gray-300 w-1/2 py-4 rounded-md">
                        <option value="">Credit Unit</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        
                    </select>
                </div>
                <div className="flex gap-2 w-full">
                    <select className="border border-gray-300 w-1/2 py-4 rounded-md">
                            <option value="">Teacher</option>
                            <option value="">Mr johnson</option>
                            <option value="">Mrs. Ojo</option>
                            <option value="">Mr. Ayooluwa</option>

                    </select>
                    <select className="border border-gray-300 w-1/2 py-4 rounded-md">
                            <option value="">Grade</option>
                            <option value="">100</option>
                            <option value="">200</option>
                            <option value="">300</option>
                            <option value="">400</option>
                            <option value="">500</option>
                            

                    </select>
                    
                    
                </div>
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

                    <textarea placeholder="About Course" className="border border-gray-300 rounded-md p-2" rows={4}/>
                    <div className="w-full flex justify-end">
                        <button className="py-5 px-4 bg-blue-950 w-1/2 text-white font-bold rounded-lg hover:bg-gray-100 hover:text-blue-950 shadow">Create course</button>
                    </div>
              
            </div>
        </div>
      

  )
}

export default AddCourse
