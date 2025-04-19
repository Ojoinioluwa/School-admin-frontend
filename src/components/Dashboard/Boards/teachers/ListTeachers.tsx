import { Avatar, Box,  IconButton, Typography } from "@mui/material";
import { CiFilter } from "react-icons/ci";

interface Teacher {
    id: number,
    name: string,
    email: string,
    department: string,
    status: string,
    hireDate: string,
  
  }

function ListTeachers({
  teachers,
  // info,
  setInfo,
  // detail,
   setDetail
}: {
  teachers: Teacher[],
  info: number,
  setInfo: React.Dispatch<React.SetStateAction<number>>,
  detail: Teacher, setDetail: React.Dispatch<React.SetStateAction<Teacher>>

}) {
  const handleDetails = (id: number) => {
    setInfo(id);
    const selected = teachers.find((teacher) => teacher.id === id);
    if (selected) {
      setDetail(selected);
    }
  };
  
  
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {/* Header with title and actions */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">Students</Typography>

        <Box sx={{ display: "flex", gap: 1 }}>

            <IconButton>
            <CiFilter />
            </IconButton>

        </Box>
      </Box>

      <ul className="w-full">
        {/* Table Headers */}
        <li className="flex justify-around p-2.5 font-bold bg-gray-200 text-sm">
          <p className="basis-2/6 text-left">Name</p>
          <p className="basis-1/6 text-left">ID</p>
        </li>

        {/* Student Rows */}
        {teachers.map((teacher, index) => (
          <li
            key={teacher.id}
            onClick={() => handleDetails(teacher.id)}
            className={`flex items-center justify-around px-2 py-3 text-sm cursor-pointer hover:bg-blue-950 hover:text-white ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <Avatar sx={{ width: 24, height: 24, mr: 2 }} />
            <p className="basis-2/6 text-left">{teacher.name}</p>
            <p className="basis-1/6 text-left">{teacher.id}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ListTeachers;
