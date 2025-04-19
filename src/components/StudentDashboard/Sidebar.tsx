import {  Box, Button,  Stack, Typography } from "@mui/material";
import { IoLogoPlaystation } from "react-icons/io";
// import { GoSidebarCollapse } from "react-icons/go";
import { MdOutlineDashboard, MdEvent, MdMoney } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import {  PiChatsCircle } from "react-icons/pi";
import { useState } from "react";
import {useNavigate} from "react-router-dom"



function Sidebar() {
  const navigate = useNavigate()
  const [focused, setFocused] = useState("dashboard")
    const handleChange = (value: string) => {
        setFocused(value);
        navigate(`/student/${value}`);

      };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: "10px",
        backgroundColor: "#f6f6f6",
        height: "100vh",
        pb: "15px",
        // overflow: "hidden"
      }}
    >
        {/* the top side */}
      <Box
        sx={{
          borderBottom: "1px #6d6d6d solid",
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* header section with the logo and the name of the school shoul go here  */}
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <IoLogoPlaystation
            style={{ fontSize: "28px", color: "#172554", marginRight: "10px" }}
          />
          <Typography variant="h6" component="h1" sx={{ color: "#172554" }}>
            Sequence
          </Typography>
        </Box>
        {/* <IconButton
          aria-label="collapse"
          sx={{ backgroundColor: "white" }}
          size="medium"
        >
          <GoSidebarCollapse fontSize="large" />
        </IconButton> */}
        
      </Box>
      {/* the actiopns section such as the dashboard, tachers, students, events */}
        <Box sx={{flexGrow: 1}}>
          <Stack spacing={2} mt={2}>
            {/* dashboard button */}
            <Button
              onClick={() => handleChange("dashboard")}
              startIcon={<MdOutlineDashboard />}
              size="small"
              fullWidth
              variant={focused === "dashboard" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "dashboard" ? "#e0e0e0" : "transparent",
                color: focused === "dashboard" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Dashboard
            </Button>
            {/* Teacher */}
            <Button
              onClick={() => handleChange("course")}
              startIcon={<FaChalkboardTeacher />}
              size="small"
              fullWidth
              variant={focused === "course" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "course" ? "#e0e0e0" : "transparent",
                color: focused === "course" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Courses
            </Button>
            {/* calender */}
            <Button
              onClick={() => handleChange("calender")}
              startIcon={<MdEvent />}
              size="small"
              fullWidth
              variant={focused === "calender" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "calender" ? "#e0e0e0" : "transparent",
                color: focused === "calender" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Calender
            </Button>
            {/* assignments */}
            <Button
              onClick={() => handleChange("assignments")}
              startIcon={<MdEvent />}
              size="small"
              fullWidth
              variant={focused === "assignments" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "assignments" ? "#e0e0e0" : "transparent",
                color: focused === "assignments" ? "black" : "gray",
                textTransform: "none",
              }}
            >
                Assignments
            </Button>
            {/* profile */}
            <Button
              onClick={() => handleChange("profile")}
              startIcon={<MdMoney />}
              size="small"
              fullWidth
              variant={focused === "profile" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "profile" ? "#e0e0e0" : "transparent",
                color: focused === "profile" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Profile
            </Button>
            <Button
              onClick={() => handleChange("results")}
              startIcon={<PiChatsCircle />}
              size="small"
              fullWidth
              variant={focused === "results" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "results" ? "#e0e0e0" : "transparent",
                color: focused === "results" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Results
            </Button>
          </Stack>
        </Box>
      
    </Box>
  );
}

export default Sidebar;
