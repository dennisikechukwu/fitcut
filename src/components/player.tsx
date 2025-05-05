'use client';
import { useRef } from 'react';


const VideoPlayer = () => {
  const videoRef = useRef(null);

  

  return (
    <div className="flex flex-col items-center space-y-2.5 p-2.5 ">
      <video
        ref={videoRef}
        src="/video/objective.mp4"
        className="w-full max-w-6xl h-[65vh] md:h-[95vh]  rounded-lg  shadow-lg object-cover"
        controls
      />

      
      
    </div>
  );
};

export default VideoPlayer;
