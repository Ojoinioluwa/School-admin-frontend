// import React from 'react'

import ListStudents from "../Dashboard/Boards/Students"

function ViewCourse() {
  return (
    <div className="flex gap-3 h-fit">
      {/* first side div */}
      <div className="flex flex-col gap-3 h-full w-[30%]">
        {/* image and department name */}
        <div className="flex flex-col bg-white h-[200px] w-full rounded-lg p-3">
          <div className="w-full h-4/5 bg-blue-600 rounded-lg"></div>
          <h5 className="text-center font-semibold text-xl">Computer Science</h5>
        </div>
        <div className="w-full bg-white h-fit rounded-lg flex flex-col gap-2">
          <h6 className="border-b border-gray-300 p-4 text-xl font-medium">About Course</h6>
          <p className="font-light p-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sapiente quasi eaque hic autem. Quia quibusdam eaque exercitationem laboriosam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas reiciendis tenetur quasi rem voluptatibus quaerat!</p>
          <div className="flex justify-between border-t border-gray-300 p-2">
            <h4 className="font-medium text-lg">Duration</h4>
            <h4 className="font-light text-base">1 Year</h4>
          </div>
          <div className="flex justify-between border-t border-gray-300 p-2">
            <h4 className="font-medium text-lg">Duration</h4>
            <h4 className="font-light text-base">1 Year</h4>
          </div>
          <div className="flex justify-between border-t border-gray-300 p-2">
            <h4 className="font-medium text-lg">Duration</h4>
            <h4 className="font-light text-base">1 Year</h4>
          </div>
        </div>
      </div>
      {/* second side dov */}
      <div className="overflow-scroll scrollbar-hide bg-white w-[70%]">
        <div className=""></div>
        <ListStudents/>
      </div>
      
    </div>
  )
}

export default ViewCourse
