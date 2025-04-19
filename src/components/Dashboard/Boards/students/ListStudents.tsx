import { Avatar, Box,  IconButton, Typography } from "@mui/material";
import { CiFilter } from "react-icons/ci";

interface Student {
  id: string;
  name: string;
  class: string;
  age: number;
  gender: string;
  email: string;
}

function ListStudents({
  students,
  // info,
  setInfo,
  // detail,
   setDetail
}: {
  students: Student[],
  info: string,
  setInfo: React.Dispatch<React.SetStateAction<string>>,
  detail: Student, setDetail: React.Dispatch<React.SetStateAction<Student>>

}) {
  const handleDetails = (id: string) => {
    setInfo(id);
    const selected = students.find((student) => student.id === id);
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
        {students.map((student, index) => (
          <li
            key={student.id}
            onClick={() => handleDetails(student.id)}
            className={`flex items-center justify-around px-2 py-3 text-sm cursor-pointer hover:bg-blue-950 hover:text-white ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <Avatar sx={{ width: 24, height: 24, mr: 2 }} />
            <p className="basis-2/6 text-left">{student.name}</p>
            <p className="basis-1/6 text-left">{student.id}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ListStudents;
