// import React from 'react'

import { Button, Modal } from "@mui/material";
import { useState } from "react";
import AddDepartment from "./AddDepartment";
import DepartmentCard from "./DepartmentCard";

function ListDepartment() {

  const [open, setOpen] = useState(false);
  const handleAdd = ()=> {
    setOpen(!open);
  }
    
  return (
    <div className="h-fit w-full p-4 flex flex-col gap-3">
      <div className="w-full h-[50px] flex justify-between">
        <input className="w-[40vw] rounded-2xl outline-0 p-3 border border-gray-500" placeholder="Search Courses" type="search" />
        <Button onClick={handleAdd} variant="contained">+ Add Department</Button>
        <Modal
          open={open}
          onClose={handleAdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-[30%] max-h-[95vh] bg-white rounded-lg shadow-2xl 
                  overflow-y-scroll scrollbar-hide">
            <AddDepartment/>
          </div>



        </Modal>
      </div>
        <div className="w-full h-full flex gap-3 flex-wrap">
            <DepartmentCard/> 
            <DepartmentCard/> 
            <DepartmentCard/> 
            <DepartmentCard/> 
            <DepartmentCard/> 
        </div>
    </div>
  )
}

export default ListDepartment
