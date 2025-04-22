// import React from 'react'
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function ListEvents() {
  return (
    <div className='flex flex-col p-4 gap-3 h-full'>
        <h4 className='py-3 text-2xl font-medium'>Upcoming Events</h4>
        <Accordion sx={{ bgcolor: "#ddd", borderRadius: "8px", '&:hover': { bgcolor: "#ccc" } }}    >
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <div>
                <p className='text-sm font-light'>📅 2025-12-24</p>
            <Typography component="span">Accordion 1</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{bgcolor: "#ddd"}}>
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <div>
                <p className='text-sm font-light'>📅 2025-12-24</p>
            <Typography component="span">Accordion 1</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
    
    </div>
  )
}

export default ListEvents
