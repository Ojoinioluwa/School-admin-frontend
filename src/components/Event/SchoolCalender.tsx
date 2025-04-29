// import React from 'react'
import interactionPlugin from "@fullcalendar/interaction"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from "react"
import { Modal } from "@mui/material";
// import AddEvent from "./AddEvent";
import ListEvents from "./ListEvents";
import { useQuery } from '@tanstack/react-query';
import { GetSchoolCalenderAPI } from '../../Service/Admin/adminService';
import AddSchoolEvent from "./AddSchoolEvent";



function Events() {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  const handleDateClick = (arg:{dateStr:string}) => {
    setOpen(true);
    setDate(arg.dateStr)
  }
  const handleClose = ()=> {
    setOpen(false)
  }

  const {data: listEvents, isLoading} = useQuery({
    queryKey: ["ListSchoolCalender"],
    queryFn: GetSchoolCalenderAPI
})
let events;
if(listEvents){
   events = listEvents.events.map((event: {eventTitle: string, date: string, eventDesc: string})=> ({
   title: event.eventTitle,
   date: event.date,
  //  desc: event.eventDesc
  }))
}
  
  
  return (
    <div className="w-[100%] h-fit flex gap-4">

      <div className="h-[100vh] w-[65%]">

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        height="100%"
        events={events}
        eventDidMount={(info) => {
          // Set the native title attribute for tooltip
          info.el.setAttribute('title', info.event.title);
        }}
      />

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-[30%] max-h-[95vh] bg-white rounded-lg shadow-2xl 
                  overflow-y-scroll scrollbar-hide">
            <AddSchoolEvent date={date}/>
            </div>
          </Modal>
      </div>
          <div className="w-[35%] h-[100vh] bg-white rounded-lg overflow-scroll scrollbar-hide">
            <ListEvents data={listEvents} isLoading={isLoading}/>
          </div>
    </div>
    )
    
}

export default Events
