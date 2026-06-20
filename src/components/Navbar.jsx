import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// IMPORT YOUR LOGO HERE (Updated to .jpg based on your folder structure)
import bdaioLogo from '../image/logo.jpg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to highlight the active link
  const isActive = (path) => location.pathname === path ? "text-green-400" : "text-white hover:text-green-300 transition-colors";

  return (
    <>
      {/* 1. Top Utility Banner */}
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
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/bdaio.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className="bg-[#0f2862] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={bdaioLogo} 
                alt="BDAIO Logo" 
                className="w-12 h-12 object-contain" 
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
              
              {/* Dropdown for Info (Syllabus & Rules) */}
              <div className="relative group cursor-pointer py-2">
                <span className={`flex items-center gap-1 ${location.pathname === '/syllabus' || location.pathname === '/rules' ? 'text-green-400' : 'text-white hover:text-green-300 transition-colors'}`}>
                  Info 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
                {/* Dropdown Menu Container */}
                <div className="absolute top-full left-0 mt-0 w-52 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible translate-y-2 group-hover:translate-y-0">
                  <Link to="/syllabus" className="block px-4 py-3 hover:bg-gray-100 hover:text-[#0f2862] border-b border-gray-100 transition-colors">Syllabus & Info</Link>
                  <Link to="/rules" className="block px-4 py-3 hover:bg-gray-100 hover:text-[#0f2862] transition-colors">Rules & Regulations</Link>
                </div>
              </div>

              <Link to="/committee" className={isActive('/committee')}>Committee</Link>
              <Link to="/blog" className={isActive('/blog')}>News</Link>
              <Link to="/faq" className={isActive('/faq')}>FAQ</Link>
              
              {/* Special Highlighted Button */}
              <Link to="/learning-path" className="bg-green-500 text-[#0f2862] px-4 py-2 rounded-md hover:bg-green-400 transition-colors shadow-md ml-2">
                AI Learning Path
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* 3. Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[#0a1b42] px-4 pt-2 pb-6 space-y-2 shadow-inner border-t border-[#1a3675]">
            <Link to="/" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/syllabus" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>Syllabus & Info</Link>
            <Link to="/rules" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>Rules & Regulations</Link>
            <Link to="/committee" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>Committee</Link>
            <Link to="/blog" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>News</Link>
            <Link to="/faq" className="block text-white py-2 border-b border-[#1a3675]" onClick={() => setIsOpen(false)}>FAQ</Link>
            
            <div className="pt-4">
              <Link to="/learning-path" className="inline-block bg-green-500 text-[#0f2862] font-bold px-4 py-2 rounded-md shadow-md" onClick={() => setIsOpen(false)}>
                AI Learning Path
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}