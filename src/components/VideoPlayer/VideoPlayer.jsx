import React, { useRef, useState } from "react";
import VideoWrapper from "../shared/VideoWrapper/VideoWrapper";

const VideoPlayer = () => {
   const videoRef = useRef(null);
   return (
      <div className="w-full bg-gray-500 rounded-md overflow-hidden relative">
         {/* Wrapper */}
         <VideoWrapper />

         {/* video player */}
         <video
            ref={videoRef}
            className="w-full"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
         />
      </div>
   );
};

export default VideoPlayer;
