import React from 'react'


const Hero = () => {
  return (
    <div className="relative m-1.5 overflow-hidden rounded-xl shadow-lg   h-screen">
      {/* Background Video */}
      <video
        className="absolute left-0 w-full h-full object-cover "
        src="/video/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex lg:mt-32 mt-20 flex-col items-center justify-center h-full text-white text-center ">
        <h1 className="text-4xl font-bold">Get Fit. Pay Less. Stay Strong.</h1>
        <p className="mt-4 max-w-xl text-md md:text-lg">
          Personalized training and nutrition support at unbeatable prices. Your fitness journey starts here!
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-medium transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero