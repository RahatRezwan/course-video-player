import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import { getStoredData } from "../../dataStore/dataStore";
import DataCard from "../shared/DataCard/DataCard";
import { formatMinutes } from "../shared/formatMinutes";

const Sidebar = () => {
   const {
      setCurrentTime,
      setCurrentVideo,
      setTotalWatchTime,
      setTotalPlayPauseClicks,
      setPlayPauseHistory,
      setComplete,
      complete,
      totalWatchTime,
      totalPlayPauseClicks,
      playPauseHistory,
   } = useContext(VideoDataContext);
   const [videoData, setVideoData] = useState([]);
   useEffect(() => {
      axios.get("/coursedata.json").then((res) => setVideoData(res.data));
   }, []);

   const handleSetCurrentVideo = (data, id) => {
      const storedData = getStoredData();
      const currentVideoData = storedData[id];
      if (currentVideoData && currentVideoData.id === id) {
         setCurrentTime(currentVideoData.totalWatchTime);
         setTotalWatchTime(currentVideoData.totalWatchTime);
         setTotalPlayPauseClicks(currentVideoData.totalPlayPauseClicks);
         setPlayPauseHistory(currentVideoData.playPauseHistory);
         setComplete(currentVideoData.complete);
      } else {
         setCurrentTime(0);
         setTotalWatchTime(0);
         setTotalPlayPauseClicks(0);
         setPlayPauseHistory([]);
         setComplete(false);
      }
      setCurrentVideo(data);
   };

   return (
      <div>
         <h2 className="text-xl">Videos</h2>
         <div className="flex flex-col gap-3">
            {videoData.map((data) => (
               <div
                  key={data.id}
                  onClick={() => handleSetCurrentVideo(data, data.id)}
                  className="flex justify-between items-center border border-gray-400 rounded-md cursor-pointer"
               >
                  <div className="flex gap-3 items-center">
                     <img src={data.thumbnail} alt="" className="h-[60px] w-[100px]" />
                     <h3 className="text-xl">{data.title}</h3>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-4">
            <h1 className="text-lg font-bold my-3">Video Data:</h1>
            <div className="flex justify-start items-center gap-1">
               <DataCard name="Watch Time" value={formatMinutes(totalWatchTime)} />
               <DataCard name="Play/Pause Count" value={totalPlayPauseClicks} />
               <DataCard name="Watch Complete" value={`${complete}`} />
            </div>
            <h1 className="text-lg font-bold my-3">Play/Pause History:</h1>
            <ul className="grid grid-cols-2 gap-1">
               {playPauseHistory.map((entry, index) => (
                  <DataCard
                     key={index}
                     name={`Count: ${entry.count}`}
                     value={formatMinutes(entry.time)}
                  />
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
