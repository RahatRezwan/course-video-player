import React, { useContext, useEffect } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoDetails = () => {
   const {
      currentVideo,
      totalWatchTime,
      totalPlayPauseClicks,
      playPauseHistory,
      complete,
      setTotalWatchTime,
      setTotalPlayPauseClicks,
      setPlayPauseHistory,
      setComplete,
   } = useContext(VideoDataContext);

   const { id, video_url, title, description } = currentVideo;

   useEffect(() => {
      // Create an object with the relevant data
      const data = {
         totalWatchTime,
         totalPlayPauseClicks,
         playPauseHistory,
         complete,
      };

      // Save the object to local storage using the video ID as the key
      if (id) {
         localStorage.setItem(`videoData-${id}`, JSON.stringify(data));
      }
   }, [id, totalWatchTime, totalPlayPauseClicks, playPauseHistory, complete]);
   return (
      <div>
         <VideoPlayer url={video_url} />
      </div>
   );
};

export default VideoDetails;
