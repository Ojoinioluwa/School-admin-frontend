import { Avatar, Box, FormControl,  Icon,  InputLabel,  MenuItem,  Select,  Stack, Typography } from "@mui/material";
import { PiStudentFill } from "react-icons/pi";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { RiParentLine } from "react-icons/ri";
// import { LiaWalletSolid } from "react-icons/lia";
import DashboardCharts from "./DashboardCharts";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", pt: 0, mt: 0, py: 0, pl: "12px" }}>
      {/* dashboard header and search space */}
      <Box sx={{bgcolor: "#f6f6f6", height: "70px", mb:2, mr: 1, px: 2, display: "flex", alignItems: "center", borderRadius: "15px", flex: 1, py: 2, }}>
        <Typography variant="h6" sx={{fontSize: "24px", color: "#172554", fontWeight: "700"}}>Dashboard</Typography>
          {/* the search input filed */}
        <div style={{backgroundColor: "#fff", flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px", borderRadius: "15px", marginLeft: "10px" }}>
          <Icon>
          <IoIosSearch style={{color: "#172554", fontSize: "24px"}} />
          </Icon>
          <input style={{width: "100%", height: "100%", border: "none", outline: "none"}} type="search" placeholder="Search" />
        </div>

        {/* the user info section and also the notifications */}
        <Box sx={{display: "flex", flexDirection: "row", ml: 3}}>

          <Avatar sx={{ color: "#172554", mr: 2, bgcolor: "transparent" }}>
          <IoIosNotifications />
          </Avatar>
          <Avatar sx={{ bgcolor: "#172554", mr: 2 }}>
                <PiStudentFill />
          </Avatar>
          <Box >
            <Typography variant="body1" sx={{color: "#172554", fontWeight: "700"}}>Ojo Inioluwa</Typography>
            <Typography variant="body2" sx={{color: "#ddd"}}>Admin</Typography>
          </Box>
        </Box>
      </Box>
      {/* list of the students, teachers, parents and thier number */}
      <Stack
        width="90%"
        direction="row"
        spacing={2} 
        sx={{  pb: "10px", }}
      >
          <div            
           className="flex flex-row bg-gray-50 shadow-lg justify-center items-center p-3 rounded-md mr-3"
          >
            <Avatar sx={{ bgcolor: "#172554", mr: 1 }}>
              <PiStudentFill />
            </Avatar>
            <div
            className="flex flex-col items-center">
              <Typography
                variant="body2"
                component="p"
                sx={{ color: "gray", fontSize: "10px", textAlign: "center" }}
              >
                students
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "black", fontSize: "20px" }}
              >
                10000
              </Typography>
            </div>
          </div>
          <div            
           className="flex flex-row bg-gray-50 shadow-lg justify-center items-center p-3 rounded-md mr-3"
          >
            <Avatar sx={{ bgcolor: "#172554", mr: 1 }}>
              <PiStudentFill />
            </Avatar>
            <div
            className="flex flex-col items-center">
              <Typography
                variant="body2"
                component="p"
                sx={{ color: "gray", fontSize: "10px", textAlign: "center" }}
              >
                students
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "black", fontSize: "20px" }}
              >
                10000
              </Typography>
            </div>
          </div>

      </Stack>
      {/* the main full dashbpard section */}
      <Box sx={{display: "flex", flexDirection: "row", gap: 2}}>
        {/* the main dashboad center section */}
        <Stack spacing={2} sx={{width: "65%"}}>
          {/* dashboard charts section */}
          <Box sx={{width: "100%", height: "300px", py:"10px",  borderRadius: "20px", bgcolor: "#f6f6f6"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", px: 2}}>
              <Typography variant="h5" sx={{fontWeight: "700"}}>Attendnace</Typography>
              <FormControl sx={{minWidth: 70, pb: "20px"}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          <DashboardCharts/>
          </Box>
        </Stack>
        {/* the side information for the dashboard */}
        <Stack
          sx={{bgcolor: "#f6f6f6", width: "30%", height: "65vh" }}
        ></Stack>
      </Box>
     
    </Box>
  );
}
