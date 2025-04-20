// import React from 'react'

import { Avatar } from "@mui/material"

// const InfoCard = ()=> ()

function StudentDashboard() {

  return (
    <div className="w-full flex-1 flex flex-col h-full bg-gray-100 p-3 gap-3">
      {/* the top div that contains the main info */}
      <div className="w-full flex gap-2 h-fit">
        {/* the main section that contaons most of the information */}
        <div className="flex gap-2 w-[70%] h-fit flex-col">
          {/* the topmost section that contains the info cards and the information of the student */}
          <div className="flex gap-2 w-full h-[150px]">
            {/* the main about cards  */}
            <div className="flex bg-blue-100 rounded-lg  w-[60%] h-full  p-3 gap-2">
              <Avatar sx={{width: "120px", height: "120px"}}/>
              <div>
                <h5 className="text-xl font-semibold">Welcome, Ojo Inioluwa</h5>
                <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis, cumque sapiente illo aliquam hic optio.</p>
                <div className="flex gap-3 py-4">
                  <div>
                    <p className="text-xs font-[400] mb-2">Grade 12</p>
                    <p className="text-xs font-[400] mb-2">ojoinioluwa05@gmail,com</p>
                  </div>
                  <div>
                    <p className="text-xs font-[400] mb-2">March, 26 2005</p>
                    <p className="text-xs font-[400] mb-2">+2349019802305</p>
                  </div>
                </div>
              </div>
            </div>
            {/* the small cards that contains some info */}
            <div className="flex flex-wrap h-full gap-1.5 w-full">
              <div className="w-[47%]  rounded-lg bg-white h-1/2"></div>
              <div className="w-[47%]  rounded-lg bg-white h-1/2"></div>
              <div className="w-[47%]  rounded-lg bg-white h-1/2"></div>
              <div className="w-[47%]  rounded-lg bg-white h-1/2"></div>
              
            </div>
          </div>

          {/* div for the section below the main info */}
          <div className="w-full flex h-[100vh] gap-2 mt-2">
            {/* the div for the performanc3 and the recent activity */}
            <div className=" flex flex-col gap-3 w-[35%] h-full">
              <div className="w-full h-[30%] rounded-lg bg-white"></div>
              <div className="h-[70%] w-full bg-white rounded-lg"></div>
            </div>

            <div className="w-[65%] flex flex-col gap-2 h-full">
              <div className="bg-white h-1/2 rounded-lg"></div>
              <div className="bg-white h-1/2 rounded-lg"></div>
            </div>

          </div>
        </div>
        {/* the side div thjat cinatins claender aloing with the agenda for the week or semester */}
        <div className="w-[30%] flex flex-col gap-2 h-full">
          <div className="h-[65%] bg-white rounded-lg"></div>
          <div className="h-[35%] bg-white rounded-lg"></div>
        </div>
      </div>
      {/* the div that gives the list of assignments */}
      <div className="bg-white w-full h-[80vh] rounded-lg"></div>
    
    </div>
  )
}

export default StudentDashboard
