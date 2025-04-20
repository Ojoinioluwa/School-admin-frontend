// import React from 'react'
import interactionPlugin from "@fullcalendar/interaction"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


function AdminEvents() {
  const handleDateClick = (arg:any) => {
    alert(arg.dateStr)
  }
  
  return (
    <div className="h-[50px] w-[300px]">

      <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
      />
    </div>
    )
}

export default AdminEvents
