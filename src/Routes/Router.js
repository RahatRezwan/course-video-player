import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <CourseDetails />,
   },
]);
