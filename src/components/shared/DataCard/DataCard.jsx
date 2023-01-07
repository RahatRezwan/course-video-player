import React from "react";

const DataCard = ({ name, value }) => {
   return (
      <div className="flex flex-col justify-center items-center rounded-md shadow-md border p-2">
         <p className="text-md font-bold">{name}</p>
         <p className="font-semibold">{value}</p>
      </div>
   );
};

export default DataCard;
