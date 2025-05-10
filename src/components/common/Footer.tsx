import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-secondary-300 pb-2 inline-block">
              Miaoge College
            </h3>
            <p className="text-neutral-200 leading-relaxed">
              Excellence in business education, leadership development, and entrepreneurial innovation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-secondary-300 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-secondary-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-secondary-300 transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-secondary-300 transition-colors">Academic Programs</Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-secondary-300 transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-secondary-300 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-secondary-300 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-secondary-300" />
                <span>123 University Avenue, Business District, BZ 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary-300" />
                <span>+1 (408) 662-7746</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary-300" />
                <span>admissions@miaoge.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-secondary-300 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-neutral-200">
              Subscribe to our newsletter to receive updates on news and events.
            </p>
            <form className="mt-3">
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-md bg-primary-800 border border-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary-300"
                />
                <button 
                  type="submit" 
                  className="bg-secondary-300 hover:bg-secondary-400 text-primary-900 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-300 text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Miaoge Business Education Leadership and Entrepreneurship College. All rights reserved.
          </div>
          <div className="flex space-x-4 text-neutral-300 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;