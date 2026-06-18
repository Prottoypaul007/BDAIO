import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// 1. IMPORT YOUR LOGO HERE
import bdaioLogo from '../image/logo.jpg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-green-400" : "text-white hover:text-green-300";

  return (
    <>
      {/* Top Utility Banner */}
      <div className="bg-[#0a1b42] text-gray-300 text-xs py-2 hidden md:block border-b border-[#1a3675]">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              info@bdaio.org
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +880 1234 567890
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#0f2862] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* 2. UPDATED LOGO SECTION */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={bdaioLogo} 
                alt="BDAIO Logo" 
                className="w-12 h-12 object-contain" // object-contain ensures your logo doesn't stretch
              />
              <div>
                <h1 className="text-2xl font-extrabold tracking-wide leading-none">BDAIO</h1>
                <p className="text-[10px] uppercase tracking-widest text-green-400">Bangladesh AI Olympiad</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
              <Link to="/syllabus" className={isActive('/syllabus')}>Syllabus & Info</Link>
              <Link to="/committee" className={isActive('/committee')}>Committee</Link>
              <Link to="/blog" className={isActive('/blog')}>News</Link>
              <Link to="/learning-path" className="bg-green-500 text-[#0f2862] px-4 py-2 rounded-md hover:bg-green-400 transition-colors shadow-md">AI Learning Path</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0a1b42] px-4 pt-2 pb-6 space-y-3 shadow-inner">
            <Link to="/" className="block text-white">Home</Link>
            <Link to="/learning-path" className="block text-green-400 font-bold">AI Learning Path</Link>
            <Link to="/blog" className="block text-white">News</Link>
          </div>
        )}
      </nav>
    </>
  );
}