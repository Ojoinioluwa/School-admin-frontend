import {  Box, Button,  Stack, Typography } from "@mui/material";
import { IoLogoPlaystation } from "react-icons/io";
// import { GoSidebarCollapse } from "react-icons/go";
import { MdOutlineDashboard, MdEvent, MdMoney } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold, PiChatsCircle } from "react-icons/pi";
import { useState } from "react";
import {useNavigate} from "react-router-dom"



function Sidebar() {
  const navigate = useNavigate()
  const [focused, setFocused] = useState("dashboard")
    const handleChange = (value: string) => {
        setFocused(value);
        navigate(`/admin/${value}`);
      };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: "10px",
        backgroundColor: "white",
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
              onClick={() => handleChange("teacher")}
              startIcon={<FaChalkboardTeacher />}
              size="small"
              fullWidth
              variant={focused === "teacher" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "teacher" ? "#e0e0e0" : "transparent",
                color: focused === "teacher" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Teacher
            </Button>
            {/* students */}
            <Button
              onClick={() => handleChange("students")}
              startIcon={<PiStudentBold />}
              size="small"
              fullWidth
              variant={focused === "students" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "students" ? "#e0e0e0" : "transparent",
                color: focused === "students" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Students
            </Button>
            {/* events */}
            <Button
              onClick={() => handleChange("events")}
              startIcon={<MdEvent />}
              size="small"
              fullWidth
              variant={focused === "events" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "events" ? "#e0e0e0" : "transparent",
                color: focused === "events" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Events
            </Button>
            {/* finance */}
            <Button
              onClick={() => handleChange("annoucements")}
              startIcon={<MdMoney />}
              size="small"
              fullWidth
              variant={focused === "annoucements" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "annoucements" ? "#e0e0e0" : "transparent",
                color: focused === "annoucements" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Annoucements
            </Button>
            <Button
              onClick={() => handleChange("department")}
              startIcon={<MdMoney />}
              size="small"
              fullWidth
              variant={focused === "department" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "department" ? "#e0e0e0" : "transparent",
                color: focused === "department" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Department
            </Button>
            <Button
              onClick={() => handleChange("courses")}
              startIcon={<PiChatsCircle />}
              size="small"
              fullWidth
              variant={focused === "courses" ? "contained" : "text"}
              sx={{
                justifyContent: "flex-start",
                backgroundColor: focused === "courses" ? "#e0e0e0" : "transparent",
                color: focused === "courses" ? "black" : "gray",
                textTransform: "none",
              }}
            >
              Courses
            </Button>
          </Stack>
        </Box>
      
    </Box>
  );
}

export default Sidebar;
