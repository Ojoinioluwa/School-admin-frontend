import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

interface Assignment {
    assignmentId: string,
    courseCode: string,
    courseTitle: string,
    title: string,
    description: string,
    dueDate: string,
    status: string,
    submitted: boolean,
    grade: string | null,
    uploadLink: string
}


function Assignments() {

  const assignments: Assignment[] =  [
        {
          "assignmentId": "A101",
          "courseCode": "CSC401",
          "courseTitle": "Database Systems",
          "title": "Normalization and ER Diagrams",
          "description": "Design an ER diagram and normalize a sample dataset up to 3NF.",
          "dueDate": "2025-04-30",
          "status": "Pending",
          "submitted": false,
          "grade": null,
          "uploadLink": "/submit/csc401/normalization"
        },
        {
          "assignmentId": "A102",
          "courseCode": "CSC402",
          "courseTitle": "Operating Systems",
          "title": "Process Scheduling Algorithms",
          "description": "Compare FCFS, SJF, and Round Robin scheduling with Gantt charts.",
          "dueDate": "2025-04-25",
          "status": "Submitted",
          "submitted": true,
          "grade": "B+",
          "uploadLink": null
        },
        {
          "assignmentId": "A103",
          "courseCode": "CSC403",
          "courseTitle": "Computer Networks",
          "title": "OSI vs TCP/IP Model",
          "description": "Write a 3-page report explaining the differences between OSI and TCP/IP models with diagrams.",
          "dueDate": "2025-04-20",
          "status": "Overdue",
          "submitted": false,
          "grade": null,
          "uploadLink": "/submit/csc403/osi-vs-tcpip"
        },
        {
          "assignmentId": "A104",
          "courseCode": "CSC404",
          "courseTitle": "Artificial Intelligence",
          "title": "Search Algorithms",
          "description": "Implement DFS and BFS in Python. Submit your code and a brief explanation.",
          "dueDate": "2025-05-01",
          "status": "Pending",
          "submitted": false,
          "grade": null,
          "uploadLink": "/submit/csc404/search-algorithms"
        },
        {
          "assignmentId": "A105",
          "courseCode": "CSC405",
          "courseTitle": "Web Application Development",
          "title": "React Login Page",
          "description": "Create a responsive login page using React and Tailwind CSS.",
          "dueDate": "2025-04-27",
          "status": "Submitted",
          "submitted": true,
          "grade": "A",
          "uploadLink": null
        }
      ]
      
  return (
    <div className="mx-5 px-3 py-2">
        <h4 className="text-2xl font-bold text-blue-950 p-6">All Assignments</h4>
        <FormControl className="w-[100px]" >
            <InputLabel >Status</InputLabel>
            <Select>
                <MenuItem>Pending</MenuItem>
                <MenuItem>Submitted</MenuItem>
                <MenuItem>due</MenuItem>
            </Select>
        </FormControl>

        {/* listing the assignments */}
        <ul className="w-[100%] p-2 -">
            <li className="flex bg-blue-700 text-gray-200 font-bold w-full p-3 gap-2">
                <div className="w-[10%] text-sm text-left ">Course Code</div>
                <div className="w-[20%] text-left text-sm ">Course Title</div>
                <div className="w-[10%] text-left text-sm ">DueDate</div>
                <div className="w-[30%] text-left text-sm ">title</div>
                <div className="w-[10%] text-left text-sm ">Action</div>
                <div className="w-[10%] text-left text-sm ">Status</div>
                <div className="w-[10%] text-left text-sm  ">View</div>

            </li>
            {assignments.map((assignment: Assignment, index: number)=> (
                <li key={index} className={`flex p-3 hover:bg-gray-300 font-light  hover:text-blue-950 w-full ${
                    index % 2 === 0 ? "bg-blue-100" : "bg-stone-100"
                  }`}>
                    <div className="w-[10%] text-left text-sm">{assignment.courseCode}</div>
                    <div className="w-[20%] text-left text-sm">{assignment.courseTitle}</div>
                    <div className="w-[10%] text-left text-sm">{assignment.dueDate}</div>
                    <div className="w-[30%] text-left text-sm">{assignment.title}</div>
                    <Button size="small" variant="outlined" className="w-[10%]  text-left text-sm" aria-label="submit">Submit</Button>
                    <div className={`w-[10%] font-light text-left text-sm ml-2 ${assignment.status === "submitted" ? "text-green-600" : "text-red-600"}`}>{assignment.status}</div>
                    <Button size="small" variant="contained" className="w-[10%] text-left text-sm" aria-label="view">View</Button>
                </li>
            ))
        }
        </ul>
      
    </div>
  )
}

export default Assignments
