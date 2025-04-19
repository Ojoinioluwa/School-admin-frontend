import { Avatar, Box } from "@mui/material";

interface Teacher {
    id: number,
    name: string,
    email: string,
    department: string,
    status: string,
    hireDate: string,
  
  }

function TeachersInfo({detail}:{ detail: Teacher}) {

 console.log(detail)
  return (
    <div className="w-[100%] bg-gray-100 h-[100vh] shadow-lg py-2 px-4 ">
      <h5 className="text-2xl text-blue-950 font-[500]">Personal Information</h5>
      {/* avatar and the name of the student */}
    <Box className="flex flex-col  items-center p-6">
      <Avatar sx={{width: "100px", height: "100px"}} src="https://avatar.iran.liara.run/public/77"/>
      <h5 className="pt-2 text-xl text-blue-950 font-semibold">{detail.name}</h5>
    </Box>
    {/* basic student infiormation */}
      <div>
        <h4 className="text-blue-950 text-xl font-[700]">Basic Details</h4>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> Class: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-sm font-light">{detail.department}</p>
          </div>
        </div>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> Email: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-xs font-light text-wrap">{detail.email}</p>
          </div>
        </div>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> StudentId: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-xs font-light text-wrap">{detail.id}</p>
          </div>
        </div>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> Age: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-xs font-light text-wrap">{detail.status}</p>
          </div>
        </div>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> Email: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-xs font-light text-wrap">{detail.email}</p>
          </div>
        </div>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> Address: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-xs font-light text-wrap">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        {/* individyal info */}
        <div className="flex flex-row justify-between py-1">
          {/* the name of the info to be displayed */}
          <div className="w-1/2">
            <p className="font-light text-base text-gray-400"> Hobbies: </p>
          </div>
          {/* the info to be displayed */}
          <div className="w-1/2">
            <p className="text-xs font-light text-wrap">Lorem ipsum dolor sit.</p>
          </div>
        </div>

      </div>
      {/* About the student */}
      
    </div>
  )
}

export default TeachersInfo
