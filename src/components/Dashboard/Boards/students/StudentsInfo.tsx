import { Avatar, Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { PieCharts, StudentsChart } from "./StudentsChart";

interface Student {
  id: string;
  name: string;
  class: string;
  age: number;
  gender: string;
  email: string;
}

function StudentsInfo() {
  const {id} = useParams()

  const students: Student[] = [
    { id: "S001", name: "John Doe", class: "Grade 10", age: 15, gender: "Male", email: "john.doe@example.com" },
    { id: "S002", name: "Jane Smith", class: "Grade 11", age: 16, gender: "Female", email: "jane.smith@example.com" },
    { id: "S003", name: "Michael Brown", class: "Grade 9", age: 14, gender: "Male", email: "michael.brown@example.com" },
    { id: "S004", name: "Emily Johnson", class: "Grade 12", age: 17, gender: "Female", email: "emily.johnson@example.com" },
    { id: "S005", name: "Chris Lee", class: "Grade 10", age: 15, gender: "Male", email: "chris.lee@example.com" },
    { id: "S006", name: "Olivia Davis", class: "Grade 11", age: 16, gender: "Female", email: "olivia.davis@example.com" },
    { id: "S007", name: "Daniel Wilson", class: "Grade 9", age: 14, gender: "Male", email: "daniel.wilson@example.com" },
    { id: "S008", name: "Sophia Miller", class: "Grade 12", age: 17, gender: "Female", email: "sophia.miller@example.com" },
    { id: "S009", name: "Ethan Moore", class: "Grade 10", age: 15, gender: "Male", email: "ethan.moore@example.com" },
    { id: "S010", name: "Ava Taylor", class: "Grade 11", age: 16, gender: "Female", email: "ava.taylor@example.com" },
    { id: "S011", name: "Liam Anderson", class: "Grade 9", age: 14, gender: "Male", email: "liam.anderson@example.com" },
    { id: "S012", name: "Isabella Thomas", class: "Grade 12", age: 17, gender: "Female", email: "isabella.thomas@example.com" },
    { id: "S013", name: "Noah Jackson", class: "Grade 10", age: 15, gender: "Male", email: "noah.jackson@example.com" },
    { id: "S014", name: "Mia White", class: "Grade 11", age: 16, gender: "Female", email: "mia.white@example.com" },
    { id: "S015", name: "Lucas Harris", class: "Grade 9", age: 14, gender: "Male", email: "lucas.harris@example.com" },
    { id: "S016", name: "Amelia Martin", class: "Grade 12", age: 17, gender: "Female", email: "amelia.martin@example.com" },
    { id: "S017", name: "James Thompson", class: "Grade 10", age: 15, gender: "Male", email: "james.thompson@example.com" },
    { id: "S018", name: "Charlotte Garcia", class: "Grade 11", age: 16, gender: "Female", email: "charlotte.garcia@example.com" },
    { id: "S019", name: "Benjamin Martinez", class: "Grade 9", age: 14, gender: "Male", email: "benjamin.martinez@example.com" },
    { id: "S020", name: "Harper Robinson", class: "Grade 12", age: 17, gender: "Female", email: "harper.robinson@example.com" }
  ];
  const index = students.findIndex((student)=> student.id === id);
  const detail = students[index]

 console.log(detail)
  return (
    <div className="w-[100%] h-[100vh] mx-1 my-1 px-2 flex">
      {/* the main section */}
      <div className="w-[75%] h-[100vh] bg-white p-2 flex flex-wrap justify-center gap-[2%] ">
        {/* the information section */}
       <div className="bg-gray-50 shadow  h-[50%] w-[60%] p-1.5 flex">
        <div className='w-[35%] h-[100%] border-r border-gray-400 flex items-center pt-4 flex-col'>
          <Avatar variant="circular" sx={{width: "70px", height: "70px"}} className="mb-3"/>
          <Typography variant="h6" sx={{fontSize: "18px", color: "#172554", fontWeight: "bold"}}>{detail.name}</Typography>
          <Typography variant="body2" sx={{fontSize: "10px", color: "gray", fontWeight: "light"}}>{detail.email}</Typography>
        </div>
        {/* second info section*/}
        <div className="w-[75%] h-[100%] flex items-center pt-4 flex-col px-2">
          {/* the first row of the info for the student */}
          <div className="w-full mb-2 h-[20%] flex gap-10 justify-between">
            {/* date of birth */}
            <div className="border-b h-full flex flex-col w-[50%] ">
              <Typography variant="body1">Date of Birth</Typography>
              <p className="font-extralight">26/03/25</p>
            </div>

            {/* the gender section */}
            <div className="border-b h-full flex flex-col w-[50%] ">
              <Typography variant="body1">Gender</Typography>
              <p className="font-extralight">Male</p>
            </div>
          </div>
          {/* the second row of the info for the student */}
          <div className="w-full mb-2 h-[20%] flex gap-10 justify-between">
            {/* Guidiance Name */}
            <div className="border-b h-full flex flex-col w-[50%] ">
              <Typography variant="body1">Guidiance Name</Typography>
              <p className="font-extralight">Engr Ojo</p>
            </div>

            {/* Guidiance Number */}
            <div className="border-b h-full flex flex-col w-[50%] ">
              <Typography variant="body1">Guidiance No.</Typography>
              <p className="font-extralight">08068918513</p>
            </div>
          </div>
          {/* the address section of the info */}
          <div className="border-b h-[20%] flex flex-col w-[100%] ">
              <Typography variant="body1">Address</Typography>
              <p className="font-extralight text-sm">Bawa road, Clement Famuagun avenue, Ilokun</p>
            </div>
        </div>
       </div>

        {/* the attendance grapch for the student */}
        <div className="bg-gray-50 shadow  h-[50%] w-[35%] ">
          <StudentsChart/>
       </div>

        {/* result section */}
        <div className="bg-gray-50 shadow  h-[50%] w-[60%] ">
          {/* the header and filter section of the result */}
          <div className="flex justify-between px-4 py-2">

            <Typography variant="h6">Results</Typography>
            <FormControl sx={{width: "80px"}} size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
          </div>
       </div>

        {/* grades  graph */}
        <div className="bg-gray-50 shadow  h-[50%] w-[35%] ">
          <PieCharts/>
       </div>

      </div>

      {/* the side information */}
      <div className="w-[25%] h-[100vh] p-2 flex flex-col items-center">
        {/* upload documents section */}
        <div className="bg-gray-50 h-[250px] w-[100%] shadow p-3 scroll-auto">
          <h2>Files/documents</h2>
          

          <Button variant="outlined">+ Add Document</Button>
        </div>
      </div>
    </div>
  )
}

export default StudentsInfo
