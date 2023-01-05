import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Course = () => {
   return (
      <div className="flex flex-col lg:flex-row gap-10 bg-slate-400 max-w-[1300px] w-[90%] mx-auto">
         <div className="w-full lg:w-[70%]">
            video section
            <Outlet />
         </div>
         <div className="w-full lg:w-[30%]">
            <Sidebar />
         </div>
      </div>
   );
};

export default Course;
