import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className={`font-black text-2xl tracking-tighter ${scrolled ? 'text-primary-800' : 'text-white drop-shadow-md'}`}>
              (주)가치스폰서
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  text-sm font-bold transition-colors duration-200
                  ${scrolled 
                    ? (isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600') 
                    : (isActive ? 'text-white border-b-2 border-white' : 'text-white/90 hover:text-white')}
                `}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg transform hover:-translate-y-0.5
                ${scrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-white text-primary-800 hover:bg-gray-100'}
              `}
            >
              무료 상담
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                block px-3 py-3 rounded-md text-base font-bold
                ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;