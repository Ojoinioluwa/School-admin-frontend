// import React from 'react'

import AnnoucementCard from "./AnnoucementCard"
import AnnoucementDetails from "./AnnoucementDetails"

function Annoucement() {
  return (
    <div className="w-full h-fit p-4 bg-white rounded-lg shadow flex gap-2">
        <div className="w-[65%] h-[100vh] scroll-smooth overflow-y-scroll flex flex-col gap-2 scrollbar-hide ">

            <AnnoucementCard/>
            <AnnoucementCard/>
            <AnnoucementCard/>
            <AnnoucementCard/>
            <AnnoucementCard/>
            <AnnoucementCard/>
        </div>
        <div className="w-[35%] ">
            <AnnoucementDetails/>
        </div>
    </div>
  )
}

export default Annoucement
