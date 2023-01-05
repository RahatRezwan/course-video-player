import React, { useContext, useRef, useState } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import VideoWrapper from "../shared/VideoWrapper/VideoWrapper";

const VideoPlayer = () => {
   const {
      isPlaying,
      setIsPlaying,
      videoLength,
      setVideoLength,
      totalWatchTime,
      setTotalWatchTime,
      currentTime,
      setCurrentTime,
   } = useContext(VideoDataContext);

   const videoRef = useRef(null);
   return (
      <div className="w-full bg-gray-500 rounded-md overflow-hidden relative">
         {/* Wrapper */}
         <VideoWrapper videoRef={videoRef} />

         {/* video player */}
         <video
            ref={videoRef}
            className="w-full"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onDurationChange={() => setVideoLength(videoRef.current.duration)}
            onTimeUpdate={() => setTotalWatchTime(videoRef.current.currentTime)}
            onSeeked={() => setCurrentTime(videoRef.current.currentTime)}
         />
      </div>
   );
};

export default VideoPlayer;
