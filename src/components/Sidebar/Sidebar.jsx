import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";

const Sidebar = () => {
   const { setCurrentVideo } = useContext(VideoDataContext);
   const [videoData, setVideoData] = useState([]);
   useEffect(() => {
      axios.get("/coursedata.json").then((res) => setVideoData(res.data));
   }, []);

   return (
      <div>
         <h2 className="text-xl">Videos</h2>
         <div className="flex flex-col gap-3">
            {videoData.map((data) => (
               <div
                  key={data.id}
                  onClick={() => setCurrentVideo(data)}
                  className="flex gap-3 items-center border border-gray-400 rounded-md cursor-pointer"
               >
                  <img src={data.thumbnail} alt="" className="h-[60px] w-[100px]" />
                  <h3 className="text-xl">{data.title}</h3>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
