import React, { useContext } from "react";
import { VideoDataContext } from "../../Contexts/VideoDataProvider/VideoDataProvider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoDetails = () => {
   const { currentVideo } = useContext(VideoDataContext);

   const { video_url, title, description } = currentVideo;

   return (
      /* here I get the selected video data and pass the url to the video player as props */
      <div>
         <VideoPlayer url={video_url} />
         <h1 className="text-3xl font-bold my-4">{title}</h1>
         <p className="text-md">{description}</p>
      </div>
   );
};

export default VideoDetails;
