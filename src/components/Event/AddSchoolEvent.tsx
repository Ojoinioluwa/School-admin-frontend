import { Button, TextField, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { AddSchoolEventsAPI } from '../../Service/Admin/adminService'
import {useFormik} from "formik"
import * as Yup from "yup"
import Loading from '../State/Loading'
// import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
  eventTitle: Yup.string().required("Event title is required to create event"),
  eventDesc: Yup.string().required("Event Desc is required to create event"),
})


function AddSchoolEvent({date}: {date: string}) {
  // const navigate = useNavigate()
  const {mutateAsync, isError, isSuccess, data, error} = useMutation({
    mutationKey: ["Add-School-Calender"],
    mutationFn: AddSchoolEventsAPI,
  })
  const formik = useFormik({
    initialValues: {
      eventTitle: "",
      eventDesc: "",
      date: date
    },
    validationSchema,
    onSubmit: (values)=> {
      mutateAsync(values).then((data)=> {
        // navigate("/")
        console.log(data)
      }).catch(err=> console.log(err))

    }
  })

 
  return (
    <form className='flex flex-col gap-4 w-full h-fit p-5' onSubmit={formik.handleSubmit}>
      {isSuccess && <p className='bg-green-200 p-4 rounded-lg text-base font-bold'>✅{data.message}</p>}
      {isError && <p className='bg-red-300 p-4 font-bold'>❌👎{error.response.data.message}</p>}
      
        <Typography variant='h5'>School Calender</Typography>
        <TextField placeholder='Title' variant='outlined' fullWidth id='eventTitle' 
        {...formik.getFieldProps("eventTitle")}/>
        <textarea placeholder='Event Description' rows={4} className='w-full border border-gray-300 p-2' id='eventDesc' {...formik.getFieldProps("eventDesc")}/>
        <Button variant='contained' type='submit'>Add to Calender</Button>
    </form>
  )
}

export default AddSchoolEvent
