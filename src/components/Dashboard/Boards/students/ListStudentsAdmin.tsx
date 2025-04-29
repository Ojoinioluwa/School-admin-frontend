// import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { ListAllDepartmentsAPI, ListStudentsAPI } from "../../../../Service/Admin/adminService"
import { useState } from "react"
import Loading from "../../../State/Loading"




function ListTeachers() {

  const [filters, setFilters] = useState({
    gender: "",
    department: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLElement>)=> {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  const {data: studentResponse, isLoading, isError, error} = useQuery({
    queryKey: ["ListTeachers", filters],
    queryFn: ()=> ListStudentsAPI(filters),
  })
  const {data: allDepartments, isLoading: deptLoading, isError: deptError} = useQuery({
    queryKey: ["ListDepartments"],
    queryFn: ListAllDepartmentsAPI
  })

  if (isLoading || deptLoading){
   return <Loading/>
  }
  console.log(error)
  
  return (
    // overal div
    <div className="h-[100vh] bg-white m-3 rounded-lg flex flex-col p-3 gap-4">
      {/* div for the actions section */}
      <div className="w-full h-[10vh] bg-stone-50 rounded-lg flex justify-between p-3 items-center">
        <h4 className="text-2xl font-bold text-gray-800">All Students List</h4>
        <div className="flex gap-3">
          <input type="search" className="outline-0 border rounded-2xl border-gray-300 text-sm w-[20vw] px-2" placeholder="Search by name, subject or Id"/>
          <select value={filters.gender} onChange={handleChange} name="gender" className="px-2 py-2 border rounded-full">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select value={filters.department} onChange={handleChange} name="department">
            <option value="">Select department</option>
            {allDepartments.depts.map((dept: any)=> <option value={dept._id}>{dept.name}</option>)}
          </select>
          
        </div>
      </div>

      {/* div for the listing of teachers */}
      <div className="scroll w-full h-[85vh] rounded-lg overflow-y-scroll overflow-x-scroll scroll-smooth">

        <ul className="w-full h-full">
          <li className="bg-blue-100 w-full p-4 flex justify-around items-center">
            <input type="checkbox" />
            <div className="w-[20%]">Full Name</div>
            <div className="w-[22%]">Email</div>
            <div className="w-[5%] ">Gender</div>
            <div className="w-[10%]">Phone</div>
            <div className="w-[15%]">Address</div>
            <div className="w-[10%]">Subject</div>
            <div className="w-[10%]">Actions</div>
          </li>
          {studentResponse.students.map((student)=> (
            <li key={student._id} className="border-t border-gray-500 flex justify-around items-center p-4 hover:bg-purple-200 cursor-pointer">
              <input type="checkbox" />
            <div className="w-[20%]">{`${student.gender === "Male" ? "Mr." : "Mrs."} ${student.firstName} ${student.lastName}`}</div>
            <div className="w-[22%]">{student.email}</div>
            <div className="w-[5%]">{student.gender}</div>
            <div className="w-[10%] ">{student.studentId}</div>
            <div className="w-[15%]  text-wrap">{student.address}</div>
            {/* <div className="w-[10%]  text-wrap">{student.subjectsAssigned[0] || "Nil"}</div> */}
            <div className="w-[10%] ">Actions</div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default ListTeachers
