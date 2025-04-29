import { Avatar } from '@mui/material'

// import React from 'react'

type HOD = {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  gender: string
}

function DepartmentCard({deptName, deptCode, deptHead, img}: {deptName: string, deptCode: string,img: string, deptHead: HOD }) {
   
    return (
        <div className='w-[300px] h-[400px] p-3 flex flex-col rounded-lg bg-white gap-2 border border-blue-300 shadow hover:scale-[102%]'>
            {/* Image container */}
          <div className='w-full h-[40%]  rounded-lg shadow'>
            <img src={img} className='w-full h-full rounded-lg'/>
          </div>
          {/* Second container */}
          <div className="w-full h-[60%] flex flex-col gap-2">
            <p className="bg-green-100 text-green-600 rounded-2xl py-1 px-2 text-center w-fit font-semibold text-sm shadow">{deptCode}</p>
            <p className="text-lg font-[900] text-wrap text-gray-700">{deptName}</p>
            {/* contains the image of the teache allong with the name of the teacher */}
            <div className="flex gap-2 mt-1 items-center">
                <Avatar/>
                <p className="font-light text-sm font-sans text-gray-700">Head of Department: <span className="font-semibold text-base">{`${deptHead.gender === "female" ? "Mrs." : "Mr."}${deptHead.firstName} ${deptHead.lastName}` }</span></p>
            </div>
                <div className="flex justify-around mt-5 w-full">
                <button className="bg-white rounded-3xl border border-blue-300 font-bold text-blue-400  hover:bg-blue-300 hover:text-white w-full py-2">View</button>
                </div>
    
          </div>
        </div>
      )
}

export default DepartmentCard
