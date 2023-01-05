import React, { useContext } from "react";
import { BiFullscreen } from "react-icons/bi";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { HiVolumeUp } from "react-icons/hi";
import { MdPictureInPictureAlt } from "react-icons/md";
import { VideoDataContext } from "../../../Contexts/VideoDataProvider/VideoDataProvider";
import ControlButton from "../ControlButton/ControlButton";
import { formatMinutes } from "../formatMinutes";

const iconClass = "w-full h-full text-white hover:text-blue-500";

const VideoWrapper = ({ videoRef }) => {
   const {
      videoLength,
      setTotalPlayPauseClicks,
      totalPlayPauseClicks,
      setPlayPauseHistory,
      playPauseHistory,
      currentTime,
      setCurrentTime,
      setIsPlaying,
      isPlaying,
   } = useContext(VideoDataContext);

   const handlePlayPause = () => {
      // Increment the total play/pause clicks counter
      setTotalPlayPauseClicks(totalPlayPauseClicks + 1);

      // Add the current time to the play/pause history
      setPlayPauseHistory([
         ...playPauseHistory,
         {
            count: totalPlayPauseClicks + 1,
            time: currentTime,
         },
      ]);

      // Toggle play/pause on the video
      if (videoRef.current.paused) {
         setIsPlaying(!isPlaying);
         videoRef.current.play();
      } else {
         setIsPlaying(!isPlaying);
         videoRef.current.pause();
      }
   };

   const handleTimelineChange = (event) => {
      setCurrentTime(event.target.value);
      videoRef.current.currentTime = event.target.value;
   };

   const handleBackward = () => {
      const updatedTime = currentTime - 5;
      videoRef.current.currentTime = updatedTime;
   };
   const handleForward = () => {
      const updatedTime = currentTime + 5;
      videoRef.current.currentTime = updatedTime;
   };

   return (
      <div className="wrapper p-3 absolute left-0 right-0 bottom-0 z-10 before:w-full before:content-none before:bottom-0 before:z-[-1] before:absolute before:bg-black before:h-100%]">
         <div className="video-timeline">
            <div className="progress-area">
               <div className="progress-bar">
                  <input
                     type="range"
                     min={0}
                     max={videoLength}
                     value={currentTime}
                     step="any"
                     onChange={handleTimelineChange}
                     className="w-full"
                  />
               </div>
            </div>
         </div>
         <ul className="video-controls flex items-center justify-between w-full">
            <li className="options-left w-[25%] flex items-center justify-start gap-2">
               <ControlButton handleFunction={handlePlayPause}>
                  <HiVolumeUp className={iconClass} />
               </ControlButton>
               <input type="range" className="w-[30%]" />
               <div className="video-timer">
                  <p className="text-white">
                     {formatMinutes(currentTime)}/{formatMinutes(videoLength)}
                  </p>
               </div>
            </li>
            <li className="options-center w-[50%] flex justify-center">
               <div className="flex items-center gap-4">
                  <ControlButton handleFunction={handleBackward}>
                     <FaBackward className={iconClass} />
                  </ControlButton>
                  <ControlButton handleFunction={handlePlayPause}>
                     {isPlaying ? (
                        <FaPause className={iconClass} />
                     ) : (
                        <FaPlay className={iconClass} />
                     )}
                  </ControlButton>
                  <ControlButton handleFunction={handleForward}>
                     <FaForward className={iconClass} />
                  </ControlButton>
               </div>
            </li>
            <li className="options-right w-[25%] flex justify-end gap-2">
               <ControlButton handleFunction={handlePlayPause}>
                  <MdPictureInPictureAlt className={iconClass} />
               </ControlButton>
               <ControlButton handleFunction={handlePlayPause}>
                  <BiFullscreen className={iconClass} />
               </ControlButton>
            </li>
         </ul>
      </div>
   );
};

export default VideoWrapper;
