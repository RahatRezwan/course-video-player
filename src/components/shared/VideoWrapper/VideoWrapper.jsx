import React from "react";
import { BiFullscreen } from "react-icons/bi";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { HiVolumeUp } from "react-icons/hi";
import { MdPictureInPictureAlt } from "react-icons/md";
import ControlButton from "../ControlButton/ControlButton";

const iconClass = "w-full h-full text-white hover:text-blue-500";

const VideoWrapper = () => {
   return (
      <div className="wrapper p-3 absolute left-0 right-0 bottom-0 z-10 before:w-full before:content-none before:bottom-0 before:z-[-1] before:absolute before:bg-black before:h-100%]">
         <div className="video-timeline">
            <div className="progress-area">
               <div className="progress-bar">
                  <input type="range" className="w-full" />
               </div>
            </div>
         </div>
         <ul className="video-controls flex items-center justify-between w-full">
            <li className="options-left w-[25%] flex items-center justify-start gap-2">
               <ControlButton>
                  <HiVolumeUp className={iconClass} />
               </ControlButton>
               <input type="range" className="w-[30%]" />
               <div className="video-timer">
                  <p className="text-white">00:00/00:00</p>
               </div>
            </li>
            <li className="options-center w-[50%] flex justify-center">
               <div className="flex items-center gap-2">
                  <ControlButton>
                     <FaBackward className={iconClass} />
                  </ControlButton>
                  <ControlButton>
                     <FaPlay className={iconClass} />
                  </ControlButton>
                  <ControlButton>
                     <FaPause className={iconClass} />
                  </ControlButton>
                  <ControlButton>
                     <FaForward className={iconClass} />
                  </ControlButton>
               </div>
            </li>
            <li className="options-right w-[25%] flex justify-end gap-2">
               <ControlButton>
                  <MdPictureInPictureAlt className={iconClass} />
               </ControlButton>
               <ControlButton>
                  <BiFullscreen className={iconClass} />
               </ControlButton>
            </li>
         </ul>
      </div>
   );
};

export default VideoWrapper;
