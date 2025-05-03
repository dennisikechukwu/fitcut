import { ArrowRight } from 'lucide-react';


export default function Footer() {
    return (
      <footer className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Newsletter */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Stay Fit, Focused, and Ahead with FITCUT
            </h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter and stay in the loop.
            </p>
            <form className="flex items-center border-b pb-2 border-gray-700 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white placeholder-gray-500 py-2 px-2 w-full outline-none"
              />
              <button
                type="submit"
                className="ml-2 bg-gray-800 hover:bg-gray-700 transition text-white p-2 rounded-full"
              >
                <ArrowRight/>
              </button>
            </form>
          </div>
  
          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-gray-400 font-semibold mb-2">LEARN</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-400 font-semibold mb-2">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Coaches</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-400 font-semibold mb-2">CONNECT</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">X</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-6  text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <p>© 2025 ALL RIGHTS RESERVED</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">PRIVACY POLICY</a>
            <a href="#" className="hover:underline">DISCLAIMER</a>
            <a href="#" className="hover:underline">TERMS OF USE</a>
          </div>
        </div>
      </footer>
    );
  }
  