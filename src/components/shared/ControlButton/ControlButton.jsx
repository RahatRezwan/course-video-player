import React from "react";

const ControlButton = ({ children, handleFunction }) => {
   return (
      <button onClick={handleFunction} className="volume w-[20px] h-[20px]">
         {children}
      </button>
   );
};

export default ControlButton;
