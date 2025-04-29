import {  Icon  } from "@mui/material";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
// import { LiaWalletSolid } from "react-icons/lia";
import DashboardCharts from "./DashboardCharts";
// import { IoIosNotifications, IoIosSearch } from "react-icons/io";
// import { PieCharts } from "./students/StudentsChart";
// import { IconType } from "react-icons/lib";
import { useQuery } from "@tanstack/react-query";
import { getBasicInfo } from "../../../Service/Admin/adminService";
import ChartComponent from "./students/GenderChart";
import Loading from "../../State/Loading";
// make use of the component and ensure to put it in another folder



export default function Dashboard() {
  const StatCard = ({ icon, value, title, bg }: { icon: React.ReactNode, value: number, title: string, bg: string }) => (
    <div className={`w-[150px] h-[100px] px-3 rounded-lg ${bg}`}>
      {icon}
      <p className="font-semibold text-xl">{value}</p>
      <p className="font-light text-lg">{title}</p>
    </div>
  );

  const {data, isError, error, isLoading} = useQuery({
    queryKey: ["BasicInfo"],
    queryFn: getBasicInfo
  })

  
  if(isLoading){
    return  <Loading/>
  }
  return (
    <div className="w-full h-[100%] flex flex-col gap-4 bg-gray-100">
      {/* the top and main div contain almost all infomation */}
      <div className="w-full h-fit flex">
        {/* first div section */}
        <div className="w-[70%] h-[100%] flex flex-col gap-3 ">
          {/* the cards to display the info about the school suchas the number of students, teacher and staff */}
          <div className="w-full h-fit flex justify-start gap-3 bg-pu">
          
            <StatCard icon={<PiStudentFill className="size-10"/>} value={data.numOfStudents} title={"Student"} bg="bg-amber-200"/>
            <StatCard icon={<FaChalkboardTeacher className="size-10"/>} value={data.numOfTeachers} title={"Teachers"} bg="bg-purple-200"/>
            <StatCard icon={<PiStudentFill className="size-10"/>} value={data.numOfStudents} title={"Student"} bg="bg-amber-200"/>
            <StatCard icon={<FaChalkboardTeacher className="size-10"/>} value={data.numOfTeachers} title={"Teachers"} bg="bg-purple-200"/>
          </div>

          {/* the visualization for he ratio of male students to the female students and the attandenace  bar graph */}
          <div className="w-full h-[400px] flex gap-2">
            {/* the pie charts section */}
              <div className="w-[40%] h-full bg-white rounded-lg ml-3 p-4">
                  <ChartComponent genderData={data.studentData}/>
              </div>
            {/* the attendance section */}
            <div className="w-[70%] h-full bg-white rounded-lg ml-3 p-4">
              {/* the title and the filters */}
              <div className="w-full flex justify-between">
                <h5 className="text-2xl font-light">Attendance</h5>
                <div className="w-2/3 flex justify-end gap-2">
                  <select className="bg-gray-50 rounded-lg p-2 outline-0">
                    <option value="">Weekly</option>
                    <option value="">monthly</option>
                  </select>
                  <select className="bg-gray-50 rounded-lg p-2 outline-0">
                    <option value="">Grade 1</option>
                    <option value="">Grade 2</option>
                    <option value="">Grade 3</option>
                    <option value="">Grade 4</option>
                    <option value="">Grade 5</option>
                  </select>
                  
                </div>

              </div>
            <DashboardCharts/>
            </div>
          </div>

          {/* graph for the income section of the school and the info about the special recruit student and the competions the school participate in */}
          <div className="w-full h-[300px] flex gap-3">
            <div className="bg-white h-[100%] w-[70%] rounded-lg ml-3 ">

            </div>
            <div className="w-[30%] h-[100%] flex flex-col gap-2 items-center justify-around">
            {/* individual cards */}
              <div className="h-[130px] bg-white w-[100%] rounded-lg p-4">
                <Icon sx={{color: "#fee685"}}>
                  <RiParentLine/>
                </Icon>
                <p className="font-bold text-lg">24,680</p>
                <p className="text-sm font-extralight">Olymics Students</p>
              </div>
              <div className="h-[130px] bg-white w-[100%] rounded lg p-4">
                <Icon sx={{color: "#bedbff"}}>
                  <RiParentLine/>
                </Icon>
                <p className="font-bold text-lg">24,680</p>
                <p className="text-sm font-extralight">Olymics Students</p>
              </div>
            </div>
          </div>
        </div>
        {/* side div section */}
        <div className="w-[30%]  mx-3 p-2  gap-2 =">
          {/* the agenda or the calener */}
          <div className="h-1/2 w-full rounded-lg bg-white mb-4">

          </div>
          {/* messages form tewachers to the admin */}
          <div className="h-1/2 w-full rounded-lg bg-white">

          </div>
        </div>
      </div>
      {/* the bottom div for student activity and the notice boards as well as recent activities */}
      <div className="w-full h-[400px] flex gap-3">
        {/* the studeint activity */}
        <div className="bg-white rounded-lg h-full w-[25%]">

        </div>
        {/* the school notice boar4d for the admin */}
        <div className="bg-white rounded-lg w-[50%] h-full">

        </div>
        {/* recent acticities of the school */}
        <div className="bg-white rounded-lg h-full w-[25%]">

        </div>
      </div>
    </div>
  );
}
