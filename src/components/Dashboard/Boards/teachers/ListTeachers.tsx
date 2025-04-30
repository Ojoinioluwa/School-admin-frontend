import { useQuery } from "@tanstack/react-query";
import { ListAllDepartmentsAPI, ListTeachersAPI } from "../../../../Service/Admin/adminService";
import { useState } from "react";
import Loading from "../../../State/Loading";

function ListTeachers() {
  const [filters, setFilters] = useState({
    gender: "",
    department: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const { data: teachersResponse, isLoading, isError } = useQuery({
    queryKey: ["ListTeachers", filters],
    queryFn: () => ListTeachersAPI(filters),
  });

  const { data: allDepartments, isLoading: deptLoading, isError: deptError } = useQuery({
    queryKey: ["ListDepartments"],
    queryFn: ListAllDepartmentsAPI
  });

  if (isLoading || deptLoading) return <Loading />;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="h-[100vh] bg-white m-3 rounded-lg flex flex-col p-4 gap-4">
      {/* Actions Section */}
      <div className="w-full h-[10vh] bg-stone-50 rounded-lg flex justify-between p-3 items-center">
        <h4 className="text-2xl font-bold text-gray-800">All Teachers List</h4>
        <div className="flex gap-3 flex-wrap">
          <input
            type="search"
            className="outline-0 border rounded-2xl border-gray-300 text-sm w-full sm:w-[20vw] px-2 py-2"
            placeholder="Search by name, subject or Id"
          />
          <select
            value={filters.gender}
            onChange={handleChange}
            name="gender"
            className="px-2 py-2 border rounded-full text-sm"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            value={filters.department}
            onChange={handleChange}
            name="department"
            className="px-2 py-2 border rounded-full text-sm"
          >
            <option value="">Select Department</option>
            {allDepartments.depts.map((dept: any) => (
              <option key={dept._id} value={dept._id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Teachers List */}
      <div className="w-full h-[85vh] rounded-lg overflow-x-auto scroll-smooth">
        <ul className="w-full">
          <li className="bg-blue-100 w-full p-4 flex justify-start items-center">
            <input type="checkbox" />
            <div className="w-[20%] text-sm font-medium">Full Name</div>
            <div className="w-[22%] text-sm font-medium">Email</div>
            <div className="w-[5%] text-sm font-medium">Gender</div>
            <div className="w-[10%] text-sm font-medium">Phone</div>
            <div className="w-[10%] text-sm font-medium">Subject</div>
            <div className="w-[10%] text-sm font-medium">Actions</div>
          </li>

          {teachersResponse.teachers.map((teacher) => (
            <li
              key={teacher._id}
              className="border-t border-gray-500 flex justify-start items-center p-4 hover:bg-purple-200 cursor-pointer"
            >
              <input type="checkbox" />
              <div className="w-[20%] text-sm">{`${teacher.gender === "Male" ? "Mr." : "Mrs."} ${teacher.firstName} ${teacher.lastName}`}</div>
              <div className="w-[22%] text-sm">{teacher.email}</div>
              <div className="w-[5%] text-sm">{teacher.gender}</div>
              <div className="w-[10%] text-sm">{teacher.phone}</div>
              <div className="w-[10%] text-sm">{teacher.subjectsAssigned[0] || "Nil"}</div>
              <div className="w-[10%] text-sm">Actions</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListTeachers;
