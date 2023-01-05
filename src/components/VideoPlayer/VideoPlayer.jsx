import React, { useContext, useEffect, useRef } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import VideoWrapper from "../shared/VideoWrapper/VideoWrapper";

const VideoPlayer = () => {
   const { setIsPlaying, setVideoLength, setTotalWatchTime, setCurrentTime } =
      useContext(VideoDataContext);

   const videoRef = useRef(null);

   useEffect(() => {
      const updateCurrentTime = () => {
         setCurrentTime(videoRef.current.currentTime);
      };
      const interval = setInterval(updateCurrentTime, 1000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="w-full bg-gray-500 rounded-md overflow-hidden relative">
         {/* Wrapper */}
         <VideoWrapper videoRef={videoRef} />

         {/* video player */}
         <video
            ref={videoRef}
            className="w-full"
            src="https://media.istockphoto.com/id/1249558755/video/corcovado-national-park-costa-rica.mp4?s=mp4-640x640-is&k=20&c=SeqFrvNEiF0K4DSsKEFPeYDP6cOYLJzYtvFuBvALLBU="
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
