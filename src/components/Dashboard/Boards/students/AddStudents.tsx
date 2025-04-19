// import React from 'react'

import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"

function AddStudents() {
    const [gender, setGender] = useState("")
    console.log(gender);

     return (
    <div className="bg-white h-[100%] w-[100%] flex">
        <div className="w-[40%] h-[100%] bg-gray-100">

        </div>

      <div className="p-4 w-[60%] flex gap-3 flex-col">
        {/* first row  */}
        <div className="w-[100%] flex gap-x-2">
            {/* first Name section */}
            <div className="w-[50%]">
                <TextField label="First Name" variant="outlined" fullWidth/>
            </div>
            {/* Last Name section */}
            <div className="w-[50%]">
                <TextField label="Last Name" variant="outlined" fullWidth/>
            </div>
        </div>
        {/* second row */}
        <div className="w-[100%] flex gap-x-2">
            {/* Gender Sectoin section */}
            <div className="w-[50%]">
                <FormControl fullWidth>
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        value={gender}
                        label="Gender"
                        onChange={(e)=> setGender(e.target.value)}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {/* Last Name section */}
            <div className="w-[50%]">
                <TextField type="date" variant="outlined"  fullWidth/>
            </div>
        </div>
        {/* Third row */}
        <div className="w-[100%] flex gap-x-2">
            {/* first Name section */}
            <div className="w-[50%]">
                <TextField type="tel" fullWidth label="Phone Number"/>
            </div>
            {/* Last Name section */}
            <div className="w-[50%]">
                <TextField type="email" variant="outlined" label="Enter Email"  fullWidth/>
            </div>
        </div>

        {/* Fourth row */}
        <div className="w-[100%] flex gap-x-2">
            {/* Gender Sectoin section */}
            <div className="w-[50%]">
                <FormControl fullWidth>
                    <InputLabel id="gender-select-label">Class Level</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        value={gender}
                        label="Gender"
                        onChange={(e)=> setGender(e.target.value)}
                    >
                        <MenuItem value="Grade 1">Grade 1</MenuItem>
                        <MenuItem value="Grade 2">Grade 2</MenuItem>
                        <MenuItem value="Grade 3">Grade 3</MenuItem>
                        <MenuItem value="Grade 4">Grade 4</MenuItem>
                        <MenuItem value="Grade 5">Grade 5</MenuItem>
                        <MenuItem value="Grade 6">Grade 6</MenuItem>
                        <MenuItem value="Grade 7">Grade 7</MenuItem>
                        <MenuItem value="Grade 8">Grade 8</MenuItem>
                        <MenuItem value="Grade 9">Grade 9</MenuItem>
                        <MenuItem value="Grade 10">Grade 10</MenuItem>
                        <MenuItem value="Grade 11">Grade 11</MenuItem>
                        <MenuItem value="Grade 12">Grade 12</MenuItem>
                        
                    </Select>
                </FormControl>
            
            </div>
            {/* Last Name section */}
            <div className="w-[50%]">
                <TextField type="file" variant="outlined"  fullWidth />
            </div>
        </div>
        {/* fifth row */}
        <div className="w-[100%] flex gap-x-2">
            {/* Guidnace  Name section */}
            <div className="w-[50%]">
                <TextField type="text" variant="outlined" placeholder="Guidance Full Name"  fullWidth />
            </div>
            {/* Gender Sectoin section */}
            <div className="w-[50%]">
                <FormControl fullWidth>
                    <InputLabel id="gender-select-label">Guidance Relationship</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        value={gender}
                        label="Gender"
                        onChange={(e)=> setGender(e.target.value)}
                    >
                        <MenuItem value="parent">Parent</MenuItem>
                        <MenuItem value="relative">Relative</MenuItem>
                        <MenuItem value="sponsor">Sponsor</MenuItem>
                    </Select>
                </FormControl>
            
            </div>
        </div>
        {/* fifth row */}
        <div className="w-[100%] flex gap-x-2">
            {/* Guidnace  Name section */}
            <div className="w-[50%]">
                <TextField type="number" variant="outlined" placeholder="Guidance Contact"  fullWidth />
            </div>
            {/* Department Section section */}
            <div className="w-[50%]">
                <FormControl fullWidth>
                    <InputLabel id="gender-select-label">Department</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="department-select"
                        value={gender}
                        label="Gender"
                        onChange={(e)=> setGender(e.target.value)}
                    >
                        <MenuItem value="math">Mathematics</MenuItem>
                        <MenuItem value="Computer Science"></MenuItem>
                        <MenuItem value="English">English</MenuItem>
                    </Select>
                </FormControl>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudents
