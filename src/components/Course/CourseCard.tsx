// import React from 'react'

import { Avatar} from "@mui/material"
import { useNavigate } from 'react-router-dom'

function CourseCard() {
  const navigate = useNavigate()
  return (
    <div className='w-[300px] h-[400px] p-3 flex flex-col rounded-lg bg-white gap-2 border border-blue-300 shadow hover:scale-[102%]'>
        {/* Image container */}
      <div className='w-full h-[40%] bg-blue-100 rounded-lg shadow'></div>
      {/* Second container */}
      <div className="w-full h-[60%] flex flex-col gap-2">
        <p className="bg-green-100 text-green-600 rounded-2xl py-1 px-2 text-center w-fit font-semibold text-sm shadow">Computer Science</p>
        <p className="text-2xl font-[400] text-wrap text-gray-700">Operation Research</p>
        {/* contains the image of the teache allong with the name of the teacher */}
        <div className="flex gap-2 mt-3 items-center">
            <Avatar/>
            <p className="font-light text-sm font-sans text-gray-700">Taught by: <span className="font-semibold text-base"> Ojo Inioluwa</span></p>
        </div>
            <div className="flex justify-around mt-5 w-full">
            <button onClick={()=> navigate("/admin/courses/view")}  className="bg-white rounded-3xl border border-blue-300 font-bold text-blue-400  hover:bg-blue-300 hover:text-white w-full py-2">View</button>
            </div>

      </div>
    </div>
  )
}

export default CourseCard
