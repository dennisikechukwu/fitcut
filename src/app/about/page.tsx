import React from 'react'
import Nav from '@/components/Nav'


const page = () => {
  return (
    <section>
      <Nav/>
      <div className="relative h-[60vh]  m-1.5 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/about.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 rounded-xl bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 ">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Fitness, Reinvented</h1>
        <p className="text-md md:text-lg max-w-xl text-gray-400">
          We believe fitness should be personal, data-driven, and backed by the best experts,
          helping you unlock your full potential.
        </p>
      </div>
    </div>
    <div>About</div>
    </section>
  )
}

export default page