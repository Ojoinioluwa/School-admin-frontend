import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"

function StudentCourse() {
  return (
    <div className="mx-5 px-3 py-2">
        <div className="flex justify-between items-center ">
            <h4 className="text-2xl font-bold text-blue-950 p-6">Students Result</h4>
            <Stack spacing={3} direction={"row"}>

            <FormControl className="w-[100px]" >
                <InputLabel >Year</InputLabel>
                <Select>
                    <MenuItem>Pending</MenuItem>
                    <MenuItem>Submitted</MenuItem>
                    <MenuItem>due</MenuItem>
                </Select>
            </FormControl>
            <FormControl className="w-[120px]" >
                <InputLabel >Semester</InputLabel>
                <Select>
                    <MenuItem>First</MenuItem>
                    <MenuItem>Second</MenuItem>
                    <MenuItem>Third</MenuItem>
                </Select>
            </FormControl>
            </Stack>
        </div>

        {/* listing the assignments */}
        <ul className="w-[100%] p-2">
            <li className="flex bg-blue-700 text-gray-200 font-bold w-full p-3">
                <div className="w-[12%] text-left">Course Code</div>
                <div className="w-[25%] text-left ">Course Title</div>
                <div className="w-[10%] text-left">creditUnit</div>
                <div className="w-[10%] text-left">score</div>
                <div className="w-[10%] text-left">grade</div>
                <div className="w-[10%] text-left">gradePoint</div>
                <div className="w-[10%] text-left ">remark</div>

            </li>
            {studentResults.map((result: Result, index: number)=> (
                <li key={index} className={`flex p-3 hover:bg-gray-300 font-light hover:text-blue-950 w-full ${
                    index % 2 === 0 ? "bg-blue-100" : "bg-stone-100"
                  }`}>
                    <div className="w-[12%] text-left">{result.courseCode}</div>
                    <div className="w-[25%] text-left">{result.courseTitle}</div>
                    <div className="w-[10%] text-left">{result.creditUnit}</div>
                    <div className="w-[10%] text-left">{result.score}</div>
                    <div className="w-[10%] text-left">{result.grade}</div>
                    <div className="w-[10%] text-left">{result.gradePoint}</div>
                    <div className="w-[10%] text-left">{result.remark}</div>
                    
                </li>
            ))
        }
        </ul>
      
    </div>
  )
}

export default StudentCourse
