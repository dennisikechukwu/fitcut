'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Coach', href: '/coach' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClose = () => setOpen(false);

  return (
    <section className='flex justify-center'>
    <nav className="fixed mt-7   items-center top-0 z-50">
      <div className='py-3 px-9 rounded-r-3xl rounded-l-3xl shadow-md bg-transparent backdrop-blur-md'>
        <div className='flex gap-7'>
          <Link href="/">
            <h1 className="text-2xl text-[white] font-extrabold tracking-widest font-sans cursor-pointer">
              FITCUT
            </h1>
          </Link>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={25} className='text-[white]  font-extrabold' /> : <Menu size={25} className='text-[white]' />}
          </button>
        </div>

        {open && (
          <div className="mt-3 mx-auto transition-all">
            <ul className="space-y-3">
              {navItems.map(({ label, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    onClick={handleNavClose}
                    className="flex justify-between items-center text-[white] font-semibold "
                  >
                    {label}
                    <ArrowUpRight size={16} className="text-[white] " />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
    </section>
  );
};

export default Nav;
