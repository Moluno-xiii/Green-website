// import { useState } from 'react';
// import songsData from '.';

// const Nicki = () => {
//   const [currentSong, setCurrentSong] = useState(0)


//   return (
//     <div>
//       {songsData.map((song) => (
//         <div key={song.id} dangerouslySetInnerHTML={{__html: song.embed}}>
//           {/* {song.embed} */}
//         </div>
//         )      )}
//     </div>
    
//   );
// }

// export default Nicki

import  { useState, useEffect } from "react";
import songsData from ".";

const Nicki = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change to the next song
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songsData.length);
    }, 1 * 60 *60 * 1000); // Interval of 2 minutes

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {songsData.slice(currentSongIndex, currentSongIndex + 1).map((song) => (
        <div key={song.id} dangerouslySetInnerHTML={{ __html: song.embed }} />
      ))}
    </div>
  );
};

export default Nicki;





// Doesn't keep progress, resets to 7 seconds

// import { useState, useEffect } from "react";
// import songsData from ".";

// const Nicki = () => {
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [songs, setSongs] = useState(songsData);
//   const [countdown, setCountdown] = useState(.1 * 60); // Initial countdown set to .2 minutes

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Update the countdown every second
//       setCountdown((prevCountdown) => Math.max(prevCountdown - 1, 0));

//       // Check if the countdown reached 0 and change to the next song
//       if (countdown === 0) {
//         setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
//         // Reset the countdown when the song changes
//         setCountdown(.2 * 60);
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [countdown, songs]);

//   const formatTime = (seconds : number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   return (
//     <div className="">
//       <div>
//         {songs.slice(currentSongIndex, currentSongIndex + 1).map((song) => (
//           <div
//             key={song.id}
//             dangerouslySetInnerHTML={{ __html: song.embed }}
//             className=""
//           />
//         ))}
//       </div>
//       <p>Next song in: {formatTime(countdown)}</p>
//     </div>
//   );
// };

// export default Nicki;

// import { useState, useEffect } from "react";
// import songsData from "."; // Update the path

// const time: number = 0.2 * 60;

// const Nicki = () => {
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [songs, setSongs] = useState(songsData);
//   const [countdown, setCountdown] = useState(time); // Initial countdown set to 0.2 minutes

//   useEffect(() => {
//     const storedCurrentSongIndex = localStorage.getItem("currentSongIndex");
//     const storedCountdown = localStorage.getItem("countdown");

//     if (storedCurrentSongIndex !== null && storedCountdown !== null) {
//       setCurrentSongIndex(parseInt(storedCurrentSongIndex, 10));
//       setCountdown(parseInt(storedCountdown, 10));
//     }
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Check if the countdown reached 0 and change to the next song
//       if (countdown <= 1) {
//         setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
//         // Reset the countdown when the song changes
//         setCountdown(time);
//       } else {
//         // Update the countdown every second
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [countdown, songs]);

//   // Save state to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("currentSongIndex", currentSongIndex.toString());
//     localStorage.setItem("countdown", countdown.toString());
//   }, [currentSongIndex, countdown]);

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   return (
//     <div>
//       <div>
//         {songs.slice(currentSongIndex, currentSongIndex + 1).map((song) => (
//           <div key={song.id} dangerouslySetInnerHTML={{ __html: song.embed }} />
//         ))}
//       </div>
//       <p>Next song in: {formatTime(countdown)}</p>
//     </div>
//   );
// };

// export default Nicki;


// create a function to change the song link to a different song url in a specific time interval and also, set the interval to countdown





