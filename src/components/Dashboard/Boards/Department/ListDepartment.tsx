import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import AddDepartment from "./AddDepartment";
import DepartmentCard from "./DepartmentCard";
import { ListAllDepartmentsAPI } from "../../../../Service/Admin/adminService";
import Loading from "../../../State/Loading";

function ListDepartment() {
  const { data, isLoading } = useQuery({
    queryKey: ["GetAllDept"],
    queryFn: ListAllDepartmentsAPI,
  });

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen((prev) => !prev);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-fit px-4 py-6 flex flex-col gap-6">
      {/* Header Section */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <input
          className="w-full sm:w-[50%] max-w-md p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Search Departments"
          type="search"
        />
        <Button onClick={toggleModal} variant="contained">
          + Add Department
        </Button>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="add-department-modal"
        aria-describedby="form-to-add-department"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-h-[95vh] bg-white rounded-xl shadow-2xl 
          overflow-y-auto scrollbar-hide p-4">
          <AddDepartment />
        </div>
      </Modal>

      {/* Department Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6">
        {data?.depts?.map((dept) => (
          <DepartmentCard
            key={dept.code}
            deptCode={dept.code}
            deptName={dept.name}
            deptHead={dept.headOfDepartment}
            img={dept.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ListDepartment;
