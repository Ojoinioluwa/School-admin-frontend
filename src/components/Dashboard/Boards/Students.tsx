import { Avatar, Box,  Button,  TextField, Typography, Modal } from "@mui/material";
// import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import AddStudents from "./students/AddStudents";
import { useState } from "react";





interface Student {
  id: string;
  name: string;
  class: string;
  age: number;
  gender: string;
  email: string;
}

function ListStudents() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleState = () => setOpen(!open);

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

  const handleDetails = (id: string) => {
      navigate(`/admin/student/${id}`);
  };

  
  return (
    <Box className="w-[100%] h-[100%] mx-3 my-2 px-4">
      {/* Header with title and actions */}
      <Box  className="flex justify-between items-center mb-2">
        <Typography variant="h5">All students List</Typography>
        <div className="flex justify-between w-1/2">
        <TextField className="w-1/2" placeholder="Search Student by name"/>
        <Box sx={{ display: "flex", gap: 1 }}>
            <Button startIcon={<CiFilter />} variant="outlined">Filter</Button>
            <Button className="pl-3 hover:scale-x-105 hover:scale-y-105"size="small" variant="contained" sx={{bgcolor: "#172554", color: "#fff"}} onClick={handleState}>Add Student</Button>
            
          <Modal
            open={open}
            onClose={handleState}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: "75%", height: "90%" }}>
              <AddStudents/>
            </Box>
          </Modal>
        </Box>
        </div>
      </Box>


      <div className="h-[90vh] overflow-y-scroll">
        <ul className="w-full">
          {/* Table Headers */}
          <li className="flex  px-2 py-3    font-bold bg-gray-200 text-sm border border-gray-200 ">
            <div className="w-[5%] text-left">Profile</div>
            <div className="w-[20%] text-left pl-4">Name</div>
            <div className="w-[25%] text-left pl-4">Email</div>
            <div className="w-[5%] text-left">Gender</div>
            <div className="w-[10%] text-left pl-4">Class</div>
            <div className="w-[10%] text-left pl-4">ID</div>
            <div className="text-left pl-4">Actions</div>
          </li>

          {/* Student Rows */}
          {students.map((student, index) => 
            <li
              key={student.id}
              onClick={() => handleDetails(student.id)}
              className={`flex  border border-gray-200 px-2 py-3 text-sm cursor-pointer hover:bg-blue-950 hover:text-white ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="w-[5%]">
              <Avatar sx={{ width: 24, height: 24, mr: 2 }} />
              </div>
              <div className="w-[20%] text-left pl-4">{student.name}</div>
              <div className="w-[25%] text-left pl-4">{student.email}</div>
              <div className="w-[5%] text-left ">{student.gender}</div>
              <div className="w-[10%] text-left pl-4">{student.class}</div>
              <div className="w-[10%] text-left pl-4">{student.id}</div>
              <Button variant="contained" size="small" onClick={() => handleDetails(student.id)}>Details</Button>
            </li>
          )}
        </ul>
      </div>
    </Box>
  );
}

export default ListStudents;
