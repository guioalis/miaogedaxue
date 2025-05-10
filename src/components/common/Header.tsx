import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'About', path: '/about' },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo & College Name */}
          <Link to="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
                Miaoge
              </span>
              <span className={`hidden md:inline-block ml-2 text-sm ${isScrolled ? 'text-neutral-700' : 'text-white opacity-90'}`}>
                Business Education Leadership and Entrepreneurship College
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`text-lg font-medium relative hover:text-secondary-300 transition-colors ${
                      isScrolled ? 'text-primary-900' : 'text-white'
                    } ${location.pathname === link.path ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary-300' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`rounded-full p-2 hover:bg-neutral-100 transition-colors ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
              <Search size={20} />
            </button>
            <Link 
              to="/admissions/apply"
              className="bg-secondary-300 hover:bg-secondary-400 text-primary-900 font-medium py-2 px-4 rounded-md transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? 
              <X size={24} className={isScrolled ? 'text-primary-900' : 'text-white'} /> : 
              <Menu size={24} className={isScrolled ? 'text-primary-900' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white shadow-lg"
        >
          <nav className="px-4 py-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`block text-lg font-medium py-2 ${
                      location.pathname === link.path 
                        ? 'text-secondary-300' 
                        : 'text-primary-900 hover:text-secondary-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-neutral-200">
                <Link 
                  to="/admissions/apply"
                  className="block w-full bg-secondary-300 hover:bg-secondary-400 text-primary-900 font-medium py-3 px-4 rounded-md text-center transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;