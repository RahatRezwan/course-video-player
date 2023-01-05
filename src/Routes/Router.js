import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Course />,
      children: [
         {
            path: "/course/:id",
            element: <VideoPlayer />,
         },
      ],
   },
]);
