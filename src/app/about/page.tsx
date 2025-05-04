import React from 'react'
import Nav from '@/components/Nav'
import VideoPlayer from '@/components/player'


const page = () => {
  return (
    <section>
      <Nav/>
      <div className="relative h-[60vh]  m-1.5 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/about.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 rounded-xl bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 ">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Fitness, Reinvented</h1>
        <p className="text-md md:text-lg max-w-xl text-gray-400">
        A fitness and nutrition program designed to help overweight and obese individuals lose
        weight through effective gym, indoor, and outdoor workouts, with tailored meal plans for
        both vegetarians and non-vegetarians.
        </p>
      </div>
    </div>
    <div className='py-10  mt-6 bg-[#cad8d8]'>
    <div className='space-y-2 mb-12'>
            <h1 className='text-center text-[30px] md:text-4xl font-semibold text-white'>Innovation That  <br className='hidden md:block'/> Transforms Journey. </h1>
            <p className='text-center text-gray-400 '>Blending expertise with technology, our platform tailors workouts   <br className='hidden md:block'/>to your needs, ensuring smarter, faster, and sustainable results.</p>
            <VideoPlayer/>
        </div>
        

  
    </div>
    
    </section>
  )
}

export default page