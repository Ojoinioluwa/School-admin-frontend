// MainDashboard.tsx
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainDashboard() {
  return (
    <Stack direction={"row"}>
      <Box sx={{ width: "150px", position: "fixed", top: 0, left: 0, zIndex: 10 }}>
        <Sidebar />
      </Box>
      <div className="w-[100%] ml-[140px]">
        <Outlet />
      </div>
      
    </Stack>
  );
}

export default MainDashboard;
