import { Avatar, Box,  Button,  Typography } from "@mui/material";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

interface Teacher {
  id: number,
  name: string,
  email: string,
  department: string,
  status: string,
  hireDate: string,

}

function ListTeachers() {

  const teachers: Teacher[] = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", department: "Mathematics", status: "Active", hireDate: "2020-08-15" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", department: "Science", status: "Active", hireDate: "2018-03-12" },
    { id: 3, name: "Michael Brown", email: "michaelbrown@example.com", department: "English", status: "Inactive", hireDate: "2019-06-20" },
    { id: 4, name: "Emily Davis", email: "emilydavis@example.com", department: "History", status: "Active", hireDate: "2021-02-17" },
    { id: 5, name: "David Wilson", email: "davidwilson@example.com", department: "Computer Science", status: "Active", hireDate: "2020-10-09" },
    { id: 6, name: "Sarah Johnson", email: "sarahjohnson@example.com", department: "Chemistry", status: "Inactive", hireDate: "2017-11-05" },
    { id: 7, name: "James Miller", email: "jamesmiller@example.com", department: "Mathematics", status: "Active", hireDate: "2016-04-21" },
    { id: 8, name: "Sophia Taylor", email: "sophiataylor@example.com", department: "Physics", status: "Active", hireDate: "2018-09-15" },
    { id: 9, name: "Benjamin Harris", email: "benjaminharris@example.com", department: "Literature", status: "Inactive", hireDate: "2021-01-22" },
    { id: 10, name: "Mia Martinez", email: "miamartinez@example.com", department: "Art", status: "Active", hireDate: "2019-12-13" },
    { id: 11, name: "Ethan Clark", email: "ethanclark@example.com", department: "Music", status: "Active", hireDate: "2020-03-04" },
    { id: 12, name: "Isabella Lewis", email: "isabellalewis@example.com", department: "Mathematics", status: "Active", hireDate: "2021-07-19" },
    { id: 13, name: "Charlotte Walker", email: "charlottewalker@example.com", department: "Science", status: "Inactive", hireDate: "2018-11-30" },
    { id: 14, name: "Daniel Hall", email: "danielhall@example.com", department: "Technology", status: "Active", hireDate: "2022-05-10" },
    { id: 15, name: "Amelia Allen", email: "ameliaallen@example.com", department: "Engineering", status: "Active", hireDate: "2017-08-14" },
    { id: 16, name: "Henry Young", email: "henryyoung@example.com", department: "Geography", status: "Inactive", hireDate: "2019-02-01" },
    { id: 17, name: "Ella King", email: "ellaking@example.com", department: "History", status: "Active", hireDate: "2020-09-18" },
    { id: 18, name: "Jack Scott", email: "jackscott@example.com", department: "Philosophy", status: "Active", hireDate: "2021-04-25" },
    { id: 19, name: "Oliver Robinson", email: "oliverrobinson@example.com", department: "Mathematics", status: "Active", hireDate: "2022-01-13" },
    { id: 20, name: "Lucas Thompson", email: "lucasthompson@example.com", department: "Literature", status: "Inactive", hireDate: "2018-07-23" },
    { id: 21, name: "Chloe Garcia", email: "chloegarcia@example.com", department: "Language Arts", status: "Active", hireDate: "2021-05-29" },
    { id: 22, name: "William White", email: "williamwhite@example.com", department: "Economics", status: "Active", hireDate: "2019-04-17" },
    { id: 23, name: "Grace Moore", email: "gracemoore@example.com", department: "Social Studies", status: "Active", hireDate: "2020-11-02" },
    { id: 24, name: "Zoe Lee", email: "zoelee@example.com", department: "Physical Education", status: "Inactive", hireDate: "2021-08-19" },
    { id: 25, name: "Logan Adams", email: "loganadams@example.com", department: "Biology", status: "Active", hireDate: "2019-03-09" }
  ];
  const [info, setInfo] = useState(0)
  const [details, setDetail] = useState(teachers[0]);
  const handleDetails = (id: number) => {
   
    setInfo(id);
    const selected = teachers.find((teacher) => teacher.id === id);
    if (selected) {
      setDetail(selected);
    }
  };



  
  
  return (
    <Box className="w-[100%] h-[100%] mx-3 my-2 p-2">
      {/* Header with title and actions */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">All Teachers List</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
            <Button startIcon={<CiFilter />} variant="outlined">Filter</Button>
            <Button className="pl-3 hover:scale-x-105 hover:scale-y-105"size="small" variant="contained" sx={{bgcolor: "#172554", color: "#fff"}}>Add Student</Button>
        </Box>
      </Box>

      <ul className="w-full">
        {/* Table Headers */}
        <li className="flex  px-2 py-3    font-bold bg-gray-200 text-sm border border-gray-200 ">
          <div className="w-[5%] text-left">Profile</div>
          <div className="w-[20%] text-left pl-4">Name</div>
          <div className="w-[25%] text-left pl-4">Email</div>
          <div className="w-[5%] text-left">Gender</div>
          <div className="w-[10%] text-left pl-4">department</div>
          <div className="w-[10%] text-left pl-4">ID</div>
        </li>

        {/* Student Rows */}
        {teachers.map((teacher, index) => 
          <li
            key={teacher.id}
            onClick={() => handleDetails(teacher.id)}
            className={`flex  border border-gray-200 px-2 py-3 text-sm cursor-pointer hover:bg-blue-950 hover:text-white ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="w-[5%]">
            <Avatar sx={{ width: 24, height: 24, mr: 2 }} />
            </div>
            <div className="w-[20%] text-left pl-4">{teacher.name}</div>
            <div className="w-[25%] text-left pl-4">{teacher.email}</div>
            <div className="w-[5%] text-left ">{teacher.gender}</div>
            <div className="w-[10%] text-left pl-4">{teacher.department}</div>
            <div className="w-[10%] text-left pl-4">{teacher.id}</div>
          </li>
        )}
      </ul>
    </Box>
  );
}

export default ListTeachers;
