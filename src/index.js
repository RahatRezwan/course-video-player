import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import VideoDataProvider from "./Contexts/VideoDataProvider/VideoDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <VideoDataProvider>
         <App />
      </VideoDataProvider>
   </React.StrictMode>,
);

reportWebVitals();
