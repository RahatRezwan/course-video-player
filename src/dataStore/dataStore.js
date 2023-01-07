const getStoredData = () => {
   let storedData = {};
   const storedDataObj = localStorage.getItem("videoData");
   if (storedDataObj) {
      storedData = JSON.parse(storedDataObj);
   }

   return storedData;
};

const addToLocalStorage = (id, data) => {
   let storedVideoData = getStoredData();
   /* get previous data */
   const savedData = storedVideoData[id];
   if (savedData && savedData.id === id) {
      const newData = {
         id: savedData.id,
         totalWatchTime: data.totalWatchTime,
         totalPlayPauseClicks: data.totalPlayPauseClicks,
         playPauseHistory: data.playPauseHistory,
         complete: data.complete,
      };
      storedVideoData[id] = newData;
   } else {
      storedVideoData[id] = data;
   }

   localStorage.setItem("videoData", JSON.stringify(storedVideoData));
};

export { getStoredData, addToLocalStorage };
