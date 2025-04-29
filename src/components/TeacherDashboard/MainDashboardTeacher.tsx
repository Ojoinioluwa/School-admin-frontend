// MainDashboardTeacher.tsx
import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
import NavBar from "./NavBar"

function MainDashboardTeacher() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <div className="w-[100%] h-full min-h-[100vh] bg-blue-100 p-4">
        <Outlet />
      </div>
      
    </div>
  );
}

export default MainDashboardTeacher;
