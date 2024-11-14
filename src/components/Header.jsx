import React, { useState } from 'react';
import logo from '../assets/imgs/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#email', text: 'Newsletter' },
    { href: '#info', text: 'About' },
    { href: '#contributors', text: 'Contributors' },
    { href: '#faqs', text: 'FAQs' }
  ];

  return (
    <header className="bg-white h-[8rem] sticky top-0 z-50 shadow-md p-[0.75em]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo and site name */}
          <div className="flex items-center gap-4">
            <a href="#" className="block">
              <span className="sr-only">Home</span>
              <img src={logo} alt="Logo" className="h-24" />
            </a>
            <span className="text-3xl font-semibold text-primary font-roboto">परेवा</span>
          </div>

          {/* Hamburger Menu Button (Visible on small screens) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col items-center justify-center space-y-[6px] focus:outline-none z-50"
            >
              <div
                className={`w-full h-[2px] bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px] w-[70%]' : 'rotate-0 w-full'}`}
              />
              <div
                className={`w-full h-[2px] bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <div
                className={`w-full h-[2px] bg-gray-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px] w-[70%]' : 'rotate-0 w-full'}`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            <nav aria-label="Global" className="block">
              <ul className="flex items-center gap-8">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    <a className="text-gray-900 text-base font-medium relative group hover:text-blue-500 transition-all duration-300 ease-in-out" href={item.href}>
                      {item.text}
                      <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Submit Notice Button */}
            <a
              href="#"
              className="bg-blue-500 text-white rounded-md border-2 border-transparent px-5 py-2.5 text-sm font-medium shadow-lg hover:bg-transparent hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Submit Notice
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (Visible when menu is open) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white bg-opacity-90 flex flex-col items-center justify-center space-y-6 p-4">
          <nav aria-label="Mobile Navigation" className="w-full text-center">
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <a className="text-gray-900 text-base font-medium relative group hover:text-blue-500 transition-all duration-300 ease-in-out" href={item.href}>
                    {item.text}
                    <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Submit Notice Button in Mobile View */}
          <a
            href="#"
            className="bg-blue-500 text-white rounded-md border-2 border-transparent px-5 py-2.5 text-sm font-medium shadow-lg hover:bg-transparent hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Submit Notice
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
