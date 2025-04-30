import { Button, TextField } from "@mui/material"
import { useState } from "react";


function CreateAssignments() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  return (
    <div className=" flex justify-center items-center">

        <form className="flex flex-col w-[300px] p-5 h-fit  bg-white gap-2 rounded-lg">
            <h1 className="text-center text-2xl font-bold text-blue-700">Create Assignment </h1>
            <div>
            <label className="text-xs font-light">Enter Assignment Title</label>
            <TextField variant="outlined" fullWidth placeholder="Enter Assignment Title"/>
            </div>
           
            <label className="block w-full border-2 border-dashed border-gray-300 p-6 text-center rounded-lg cursor-pointer hover:border-blue-400 transition duration-200">
            <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={handleFileChange} />
            {selectedFile ? (
                <span className="text-gray-700">Document Uploaded</span>
            ) : (
                <span className="text-gray-500">Upload Document for Assignment</span>
            )}
            </label>
            <div>
                <label className="text-xs font-light">Select Deadline</label>
                <TextField type="date" fullWidth placeholder="Select deadline"/>
            </div>
            <textarea className="border border-gray-300 outline-0 mb-2 hover:border-blue-400 focus:border-blue-600 focus:border-2" rows={4} placeholder="Description should go here"/>
            <Button variant="contained" fullWidth size="large">Create Assignment</Button>
        
        </form>
    </div>
  )
}

export default CreateAssignments



