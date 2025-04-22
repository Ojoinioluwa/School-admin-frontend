// import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"

function StudentResult() {
    interface Result {
        courseCode: string;
        courseTitle: string;
        creditUnit: number;
        score: number;
        grade: string;
        gradePoint: number;
        remark: string;
      }
      
      const studentResults: Result[] = [
        {
          courseCode: "CSC401",
          courseTitle: "Database Systems",
          creditUnit: 3,
          score: 82,
          grade: "A",
          gradePoint: 5.0,
          remark: "Excellent",
        },
        {
          courseCode: "CSC402",
          courseTitle: "Operating Systems",
          creditUnit: 3,
          score: 74,
          grade: "B",
          gradePoint: 4.0,
          remark: "Very Good",
        },
        {
          courseCode: "CSC403",
          courseTitle: "Computer Networks",
          creditUnit: 2,
          score: 65,
          grade: "C",
          gradePoint: 3.0,
          remark: "Good",
        },
        {
          courseCode: "CSC404",
          courseTitle: "Artificial Intelligence",
          creditUnit: 3,
          score: 59,
          grade: "D",
          gradePoint: 2.0,
          remark: "Fair",
        },
        {
          courseCode: "CSC405",
          courseTitle: "Web Application Development",
          creditUnit: 2,
          score: 48,
          grade: "E",
          gradePoint: 1.0,
          remark: "Pass",
        },
        {
          courseCode: "CSC406",
          courseTitle: "Software Engineering",
          creditUnit: 2,
          score: 30,
          grade: "F",
          gradePoint: 0.0,
          remark: "Fail",
        }
      ];
      


  return (
    <div className="mx-5 px-3 py-2 min-h-[100vh]">
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

export default StudentResult


