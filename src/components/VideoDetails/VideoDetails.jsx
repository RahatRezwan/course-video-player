import React, { useContext } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoDetails = () => {
   const { currentVideo } = useContext(VideoDataContext);
   const { video_url, watermark, thumbnail, title, description } = currentVideo;
   return (
      <div>
         <VideoPlayer url={video_url} />
      </div>
   );
};

export default VideoDetails;
