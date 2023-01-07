import React, { useContext } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
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
      muted,
      setMuted,
      currentVideo,
      count,
      setCount,
   } = useContext(VideoDataContext);

   const { watermark } = currentVideo;

   const handlePlayPause = () => {
      // Increment the total play/pause clicks counter
      setTotalPlayPauseClicks(totalPlayPauseClicks + 1);

      // Add the current time to the play/pause history
      if (
         !playPauseHistory.find(
            (history) => formatMinutes(history.time) === formatMinutes(currentTime),
         )
      ) {
         setPlayPauseHistory([
            ...playPauseHistory,
            {
               count: count,
               time: currentTime,
            },
         ]);
         setCount(count + 1);
      }

      // Toggle play/pause on the video
      if (videoRef.current.paused) {
         setIsPlaying(!isPlaying);
         videoRef.current.play();
      } else {
         setIsPlaying(!isPlaying);
         videoRef.current.pause();
      }
   };

   const handleVolumeChange = (event) => {
      videoRef.current.volume = event.target.value;
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
         <div className="watermark flex justify-end">
            <img src={watermark} alt="" className="w-[80px]" />
         </div>
         <div>
            {/* this is div is for video progress bar */}
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

            {/* inside ul i created controls of the video */}
            <ul className="video-controls flex items-center justify-between w-full">
               <li className="options-left w-[25%] flex items-center justify-start gap-2">
                  {/* This is for volume up and down */}
                  <ControlButton handleFunction={() => setMuted(!muted)}>
                     {muted ? (
                        <HiVolumeOff className={iconClass} />
                     ) : (
                        <HiVolumeUp className={iconClass} />
                     )}
                  </ControlButton>
                  <input
                     type="range"
                     min={0.0}
                     max={1}
                     defaultValue={0.4}
                     step="any"
                     onChange={handleVolumeChange}
                     className="w-[40%] hidden md:block"
                  />
                  {/* this if for display the timer of the video */}
                  <div className="video-timer">
                     <p className="text-white">
                        {formatMinutes(currentTime)}/{formatMinutes(videoLength)}
                     </p>
                  </div>
               </li>
               <li className="options-center w-[50%] flex justify-center">
                  <div className="flex items-center gap-4">
                     {/* this is for backward button */}
                     <ControlButton handleFunction={handleBackward}>
                        <FaBackward className={iconClass} />
                     </ControlButton>
                     {/* play/pause button */}
                     <ControlButton handleFunction={handlePlayPause}>
                        {isPlaying ? (
                           <FaPause className={iconClass} />
                        ) : (
                           <FaPlay className={iconClass} />
                        )}
                     </ControlButton>
                     {/* forward button */}
                     <ControlButton handleFunction={handleForward}>
                        <FaForward className={iconClass} />
                     </ControlButton>
                  </div>
               </li>
               <li className="options-right w-[25%] flex justify-end gap-2">
                  {/* picture in picture mode */}
                  <ControlButton handleFunction={() => videoRef.current.requestPictureInPicture()}>
                     <MdPictureInPictureAlt className={iconClass} />
                  </ControlButton>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default VideoWrapper;
