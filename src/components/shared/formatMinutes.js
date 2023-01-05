export const formatMinutes = (seconds) => {
   const minutes = Math.floor(seconds / 60);
   const formattedSeconds = `0${Math.floor(seconds % 60)}`.slice(-2);
   return `${minutes}:${formattedSeconds}`;
};
