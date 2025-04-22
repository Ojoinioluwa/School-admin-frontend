// import React from 'react'
import interactionPlugin from "@fullcalendar/interaction"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from "react"
import { Modal } from "@mui/material";
import AddSchoolEvent from "./AddSchoolEvent";
import ListEvents from "./ListEvents";


function SchoolCalender() {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  const isAdmin = false
  const handleDateClick = (arg:{dateStr:string}) => {
    setOpen(true);
    setDate(arg.dateStr)
  }
  const handleClose = ()=> {
    setOpen(false)
  }
  console.log(date);
  
  return (
    <div className="w-full h-fit flex gap-3 p-4"> 

    <div className="h-[100vh] w-[65%]">

      <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
      height="100%"
      />
      <Modal
          open={open && isAdmin}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-[30%] max-h-[95vh] bg-white rounded-lg shadow-2xl 
                 overflow-y-scroll scrollbar-hide">
           <AddSchoolEvent/>
          </div>


        </Modal>
    </div>
          <div className="w-[35%] h-[100vh] bg-white rounded-lg overflow-scroll scrollbar-hide">
            <ListEvents/>
          </div>
    </div>
    )
    
}

export default SchoolCalender
