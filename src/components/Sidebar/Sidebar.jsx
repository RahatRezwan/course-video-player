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
      videoLength,
      totalWatchTime,
      totalPlayPauseClicks,
      playPauseHistory,
   } = useContext(VideoDataContext);
   const [videoData, setVideoData] = useState([]);
   useEffect(() => {
      axios.get("/coursedata.json").then((res) => setVideoData(res.data));
   }, []);

   const handleSetCurrentVideo = (data, id) => {
      /* when a video is clicked then, I get the stored data and updated state for that particular video */
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
      /* set current video to display in video player */
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

         {/* now display all video data at the sidebar */}

         <div className="mt-4">
            <h1 className="text-lg font-bold my-3">Video Data:</h1>
            <div className="grid grid-cols-2 items-center gap-1">
               <DataCard name="Watch Time" value={formatMinutes(totalWatchTime)} />
               {/* I don't store the video length in the storage but I just show it after a video is loaded */}
               <DataCard name="Video Length" value={formatMinutes(videoLength)} />
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
