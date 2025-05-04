import React from 'react'
import Nav from '@/components/Nav'

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
      </section>
  )
}

export default coach