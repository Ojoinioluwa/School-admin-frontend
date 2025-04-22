// import React from 'react'

import { Avatar } from "@mui/material"
import { CiSearch } from "react-icons/ci"

function AnnoucementCard() {
  return (
    // main container
    <div className="w-full h-[150px] p-3 bg-gray-50 border-gray-400 rounded-lg border hover:bg-purple-50 ">
    {/* div for the heading */}
    <div className="w-full flex justify-between">
        {/* right hand side */}
      <div className="flex gap-3 py-1 items-center">
        <Avatar/>
        <div className="w-full">
            <h5 className="text-2xl font-bold ">Welcome Back to School</h5>
            <p className="text-base font-light text-gray-400">By Principal Ojo Inioluwa</p>
        </div>
      </div>
      {/* left hand side */}
      <div className="flex gap-2 items-center">
        <time className="bg-white p-2 rounded-full text-gray-500 text-xs">March 26, 2005</time>
        <div className="flex gap-2 items-center">
            <CiSearch/>
            <p className="text-sm text-gray-400">23,000</p>
        </div>
      </div>
    </div>
    <div className="text-xs pt-2 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus totam numquam nulla beatae cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, sequi.</div>
    </div>
  )
}

export default AnnoucementCard
