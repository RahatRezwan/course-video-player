import React, { createContext, useState } from "react";

export const VideoDataContext = createContext();

const VideoDataProvider = ({ children }) => {
   const [currentVideo, setCurrentVideo] = useState({});
   const [videoLength, setVideoLength] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [totalWatchTime, setTotalWatchTime] = useState(0);
   const [totalPlayPauseClicks, setTotalPlayPauseClicks] = useState(0);
   const [playPauseHistory, setPlayPauseHistory] = useState([]);
   const [isPlaying, setIsPlaying] = useState(false);
   const [muted, setMuted] = useState(false);
   const [complete, setComplete] = useState(false);

   const data = {
      currentVideo,
      setCurrentVideo,
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
      muted,
      setMuted,
      complete,
      setComplete,
   };

   return <VideoDataContext.Provider value={data}>{children}</VideoDataContext.Provider>;
};

export default VideoDataProvider;
