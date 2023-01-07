import React from "react";

const DataCard = ({ name, value }) => {
   return (
      <div className="flex flex-col justify-center items-center rounded-md shadow-md border p-1">
         <p className="text-md font-bold text-center">{name}</p>
         <p className="font-semibold text-center">{value}</p>
      </div>
   );
};

export default DataCard;
