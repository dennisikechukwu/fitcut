import React from 'react'
import Nav from '@/components/Nav'
import Image from 'next/image'
import { Heart, Target, Droplet } from 'lucide-react';

const coach = () => {
  return (
    <section>
      <Nav/>
      <div className="relative h-[60vh]  m-1.5 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/abouta.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 rounded-xl bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 ">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Training Master</h1>
        <p className="text-md md:text-lg max-w-xl text-gray-400">
        Our elite coache bring years of experience, cutting-edge science, and 
        proven strategies together, and achieve lasting success.
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center  px-2 py-12   mt-6 bg-white'>
      <div className='p-2.5 rounded-lg space-y-3.5 shadow'>
        <Image
        src="/issac.jpg"
        alt='issac'
        width={500}
        height={200}
        className='h-[80vh] max-sm:h-[65vh] object-cover rounded-sm'
        />
        <h2 className='text-xl font-sans font-bold'>Isaac Chukwumeze</h2>
        <ul className="space-y-1 text-sm text-gray-700">
          <li className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-gray-600" /> Supportive
          </li>
           <li className="flex items-center gap-2">
         <Target className="w-4 h-4 text-gray-600" /> Result-Driven
      </li>
       <li className="flex items-center gap-2">
    <Droplet className="w-4 h-4 text-gray-600" /> Motivating
  </li>
</ul>
  <p>Isaac is a  soccer player and a certified fitness <br/>coach. He offers classes focused on stress and fat reduction.</p>
        </div>

    </div>
    <div className='mt-6 bg-green-400 lg:py-10 py-5 lg:px-9 px-3 flex justify-between max-md:flex-col max-md:justify-center items-center'>
      <div className='space-y-3'>
          <h1 className='lg:text-5xl text-3xl'>Ready to Dive In?</h1>
          <p className='font-md'>Kickstart your experience with intelligent support.</p>
      </div>
      <button className=' px-5 py-3 bg-black/55  border-black border-2 hover:bg-green-400 text-white rounded-full text-lg font-medium transition'>CONTACT ME</button>
    </div>
      </section>
  )
}

export default coach