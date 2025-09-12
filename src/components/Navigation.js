'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Tours', href: '#tours' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            
          >
            <Image
              src="/images/logo_only.png"
              alt="Bali Tours Logo"
              width={50}
              height={80}
              className="object-contain ms-7"
            />
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-800' : 'text-white'
              }`}>
                Bali Explorer <span className="text-amber-400">Tours</span>
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Discover Bali's Magic
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center md:gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:scale-105 transform ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Info - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-2">
              <a 
                href="tel:+62361234567"
                className={`flex items-center space-x-2 transition-colors duration-300 hover:scale-105 transform ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-orange-300'
                }`}
              >
                <Phone size={16} />
                <span className="text-sm font-medium mx-5">+62 361 234 567</span>
              </a>
            </div>

            {/* Book Now Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:block btn btn-accent"
            >
              Book Now
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-orange-300'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300 rounded-md mx-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 px-4">
                <div className="flex items-center space-x-2 mb-3 text-gray-700">
                  <Phone size={16} className="text-blue-600" />
                  <a href="tel:+62361234567" className="font-medium">+62 361 234 567</a>
                </div>
                <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
