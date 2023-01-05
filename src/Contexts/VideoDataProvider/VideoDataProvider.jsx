import React, { createContext, useState } from "react";

const VideoDataContext = createContext();

const VideoDataProvider = ({ children }) => {
   const [videoLength, setVideoLength] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [totalWatchTime, setTotalWatchTime] = useState(0);
   const [totalPlayPauseClicks, setTotalPlayPauseClicks] = useState(0);
   const [playPauseHistory, setPlayPauseHistory] = useState([]);
   const [isPlaying, setIsPlaying] = useState(false);

   const data = {
      videoLength,
      setVideoLength,
      currentTime,
      setCurrentTime,
      totalWatchTime,
      setTotalWatchTime,
      totalPlayPauseClicks,
      setPlayPauseHistory,
      setTotalPlayPauseClicks,
      playPauseHistory,
      isPlaying,
      setIsPlaying,
   };

   return <VideoDataContext.Provider value={data}></VideoDataContext.Provider>;
};

export default VideoDataProvider;
