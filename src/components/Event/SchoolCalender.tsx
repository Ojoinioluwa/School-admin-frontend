import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import { Modal } from "@mui/material";
import ListEvents from "./ListEvents";
import { useQuery } from "@tanstack/react-query";
import { GetSchoolCalenderAPI } from "../../Service/Admin/adminService";
import AddSchoolEvent from "./AddSchoolEvent";



function Events() {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const handleDateClick = (arg: { dateStr: string }) => {
    setOpen(true);
    setDate(arg.dateStr);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data: listEvents, isLoading } = useQuery({
    queryKey: ["ListSchoolCalender"],
    queryFn: GetSchoolCalenderAPI,
  });

  const events =
    listEvents?.events?.map((event: { eventTitle: string; date: string }) => ({
      title: event.eventTitle,
      date: event.date,
    })) || [];

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-4 p-4 bg-gray-100 min-h-screen">
      {/* Calendar Section */}
      <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        height="auto"
        events={events}
        eventDidMount={(info) => {
          info.el.setAttribute("title", info.event.title);
        }}
        dayHeaderClassNames={() => ['bg-blue-600', 'text-white', 'py-2', 'text-sm']}
        dayCellClassNames={() => ['border', 'hover:bg-blue-50', 'transition-all']}
        eventClassNames={() => ['bg-blue-500', 'text-white', 'rounded-md', 'px-1', 'py-0.5', 'text-sm', 'hover:bg-blue-600', 'transition-all']}
      />


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[90%] md:w-[500px] max-h-[90vh] bg-white rounded-xl shadow-2xl 
            overflow-y-auto p-4 scrollbar-hide">
            <AddSchoolEvent date={date} />
          </div>
        </Modal>
      </div>

      {/* Event List Sidebar */}
      <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-xl p-4 max-h-[100vh] overflow-y-auto scrollbar-hide">
        <h2 className="text-lg md:text-xl font-semibold text-blue-950 mb-4">Upcoming Events</h2>
        <ListEvents data={listEvents} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Events;
