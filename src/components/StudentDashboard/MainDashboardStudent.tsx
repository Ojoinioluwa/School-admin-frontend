// MainDashboard.tsx
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainDashboardStudent() {
  return (
    <Stack direction={"row"}>
      <Box sx={{ width: "20%", position: "fixed", top: 0, left: 0, zIndex: 10 }}>
        <Sidebar />
      </Box>
      <div className="w-[100%] ml-[20%] bg-gray-100">
        <Outlet />
      </div>
      
    </Stack>
  );
}

export default MainDashboardStudent;
