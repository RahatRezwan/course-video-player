import React, { useContext, useEffect, useRef } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import { addToLocalStorage } from "../../dataStore/dataStore";
import VideoWrapper from "../shared/VideoWrapper/VideoWrapper";

const VideoPlayer = () => {
   const {
      setIsPlaying,
      setVideoLength,
      setTotalWatchTime,
      setCurrentTime,
      currentTime,
      videoLength,
      setComplete,
      muted,
      currentVideo,
      totalWatchTime,
      totalPlayPauseClicks,
      playPauseHistory,
      complete,
   } = useContext(VideoDataContext);
   const { id, video_url, thumbnail } = currentVideo;

   const videoRef = useRef(null);

   /* Update current time on each second */
   useEffect(() => {
      const updateCurrentTime = () => {
         setCurrentTime(videoRef.current.currentTime);
      };
      const interval = setInterval(updateCurrentTime, 1000);
      return () => clearInterval(interval);
   }, [setCurrentTime]);

   /* set video watch is complete if watch upto 80% */
   useEffect(() => {
      if (currentTime >= videoLength * 0.8) {
         setComplete(true);
      }
   }, [currentTime, videoLength, setComplete]);

   useEffect(() => {
      // Create an object with the relevant data
      const data = {
         id,
         totalWatchTime,
         totalPlayPauseClicks,
         playPauseHistory,
         complete,
      };

      // Save the object to local storage using the video ID as the key
      if (id) {
         addToLocalStorage(id, data);
      }
   }, [id, totalWatchTime, totalPlayPauseClicks, playPauseHistory, complete]);

   return (
      <div className="w-full bg-gray-500 rounded-md overflow-hidden relative">
         {/* Wrapper */}
         <VideoWrapper videoRef={videoRef} />

         {/* video player */}
         <video
            ref={videoRef}
            muted={muted}
            className="w-full"
            src={video_url}
            onLoadedMetadata={() => (videoRef.current.currentTime = totalWatchTime)}
            poster={thumbnail}
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
