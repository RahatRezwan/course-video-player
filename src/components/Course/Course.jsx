import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import VideoDetails from "../VideoDetails/VideoDetails";

const Course = () => {
   return (
      <div className="flex flex-col lg:flex-row gap-10 max-w-[1300px] w-[90%] mx-auto mt-10">
         <div className="w-full lg:w-[70%]">
            <VideoDetails />
         </div>
         <div className="w-full lg:w-[30%]">
            <Sidebar />
         </div>
      </div>
   );
};

export default Course;
