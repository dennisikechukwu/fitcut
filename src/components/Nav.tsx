'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed mt-7 lg:left-[45%] md:left-[40%] sm:left-[35%] left-[23%] top-0 z-50  ">
        <div className='py-3.5 px-8 rounded-r-3xl rounded-l-3xl shadow-md  bg-transparent backdrop-blur-md'>
          <div className='flex gap-5'>
          <h1 className="text-2xl text-gray-300 font-semibold tracking-widest font-sans">FITCUT</h1>
            <button onClick={() => setOpen(!open)}>
           {open ? <X size={25} className='text-gray-300' /> : <Menu size={25} className='text-gray-300' />}
        </button>
          </div>

          {open && (
        <div className="mt-3  mx-auto transition-all">
          <ul className="space-y-3">
            {['About', 'Coach', 'Contact'].map((item, i) => (
              <li key={i} className="flex justify-between items-center text-gray-300 font-medium">
                {item}
                <ArrowUpRight size={16} className="text-gray-300" />
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
    
    </nav>
  );
};

export default Nav;
