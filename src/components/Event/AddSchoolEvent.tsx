import { Button, TextField, Typography } from '@mui/material'
// import React from 'react'

function AddSchoolEvent() {
  return (
    <div className='flex flex-col gap-4 w-full h-fit p-5'>
        <Typography variant='h5'>School Calender</Typography>
        <TextField placeholder='Title' variant='outlined' fullWidth/>
        <textarea placeholder='Event Description' rows={4} className='w-full border border-gray-300 p-2'/>
        <Button variant='contained'>Add to Calender</Button>
    </div>
  )
}

export default AddSchoolEvent
