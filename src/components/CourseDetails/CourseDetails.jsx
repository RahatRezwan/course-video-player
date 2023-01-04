import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const CourseDetails = () => {
   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-slate-400">
         <h1>Welcome to course page</h1>
         <Outlet />
         <Sidebar />
      </div>
   );
};

export default CourseDetails;
