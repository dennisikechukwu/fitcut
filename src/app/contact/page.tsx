'use client';

import React from 'react'
import Nav from '@/components/Nav'

import { Mail, Phone, Instagram } from 'lucide-react';

const coach = () => {
  return (
    <section>
      <Nav/>
      <div className="relative h-[60vh]  m-1.5 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/aboutb.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 rounded-xl bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 ">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact us</h1>
        <p className="text-md md:text-lg max-w-xl text-gray-400">
        Our elite coach has a passion for ensuring people live a better and more effective life through fitness.</p>
      </div>
    </div>

    <div className="px-4 py-12 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Questions?</h2>
          <p className="text-gray-600 mb-6">
            We know starting something new can raise questions. That is why we have answered the important ones for you right here so if you have any questions you can contact us here.
          </p>

          <div className="space-y-4">
          <a href="mailto:isaacchukwumeze10@gmail.com" className="block ">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-md">
                <Mail className="h-5 w-5 text-gray-800" />
              </div>
              <span className="text-gray-800">isaacchukwumeze10@gmail.com</span>
            </div>
            </a>

            <a href="tel:+2348102993145" className="block">
           <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-gray-100 p-2 rounded-md">
           <Phone className="h-5 w-5 text-gray-800" />
            </div>
            <span className="text-gray-800">+234 8102993145</span>
        </div>
            </a>
            
            <a href="https://www.instagram.com/isaacchukwumeze10?utm_source=qr&igsh=OXNhaGIzcm1rM252" className="block">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-md">
                <Instagram className="h-5 w-5 text-gray-800" />
              </div>
              <span className="text-gray-800">@isaacchukwumeze10</span>
            </div>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9730627087"
              className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Say Something</label>
            <textarea
              placeholder="Hello...."
              className="w-full border-b border-black outline-none py-1 resize-none placeholder:text-gray-400"
             
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full text-sm font-medium"
          >
            Submit
          </button>
        </form>
        
      </div>
      </div>
      <div className='mt-6 bg-green-400 lg:py-10 py-5 lg:px-9 px-3 flex justify-between max-md:flex-col max-md:justify-center items-center'>
      <div className='space-y-3'>
          <h1 className='lg:text-5xl text-3xl'>Ready to Dive In?</h1>
          <p className='font-md'>Kickstart your experience with intelligent support.</p>
      </div>
      <a href="mailto:isaacchukwumeze10@gmail.com" className="block ">
      <button className=' px-5 py-3 bg-black/55  border-black border-2 hover:bg-green-400 text-white rounded-full text-lg font-medium transition'>CONTACT ME</button>
      </a>
    </div>
      
      </section>
  )
}

export default coach