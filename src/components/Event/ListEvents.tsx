// import React from 'react'
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Loading from '../State/Loading';


function ListEvents({data, isLoading}: {data: any, isLoading: boolean}) {
   
    console.log(data)
    if(isLoading){
        return <Loading/>
    }
  return (
    <div className='flex flex-col p-4 gap-3 h-full'>
        <h4 className='py-3 text-2xl font-medium'>Upcoming Events</h4>
        <input type='search' className='border border-gray-300 px-2 py-3 rounded-lg outline-0' placeholder='Search event by title' />
        {data.events.map((event)=> (
            <Accordion sx={{ bgcolor: "#ddd", borderRadius: "8px", '&:hover': { bgcolor: "#ccc" } }}   key={event._id} >
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div>
                    <p className='text-sm font-light'>📅 {event.date}</p>
                <Typography component="span">{event.eventTitle}</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {event.eventDesc}
                </Typography>
                </AccordionDetails>
            </Accordion>
        ))}

    
    </div>
  )
}

export default ListEvents
