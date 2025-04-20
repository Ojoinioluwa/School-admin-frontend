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
    <div className="bg-white">
      {/* the header and the actions such as the search and filter fucntions and also add teachers*/}

      {/* the list of the teachers and the actions that can be performed */}

    </div>
  );
}

export default ListTeachers;
