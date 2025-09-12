'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Clock,
  Globe
} from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Tours & Packages', href: '#tours' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'FAQ', href: '#faq' }
];

const popularTours = [
  { name: 'Ubud Cultural Tour', href: '#ubud' },
  { name: 'Mount Batur Sunrise', href: '#batur' },
  { name: 'Nusa Penida Island', href: '#nusapenida' },
  { name: 'Tanah Lot Temple', href: '#tanahlot' },
  { name: 'Water Sports Package', href: '#watersports' },
  { name: 'Full Day Combination', href: '#combination' }
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">
              Bali Tours & Travel
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover Bali's magic with our expertly crafted tours. We're your trusted partner 
              for unforgettable experiences in the Island of the Gods.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                <span className="text-gray-300">+62 361 234 567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                <span className="text-gray-300">info@balitours.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 mt-1" />
                <span className="text-gray-300">
                  Jl. Raya Ubud No. 123<br />
                  Ubud, Bali 80571, Indonesia
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Tours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              {popularTours.map((tour) => (
                <li key={tour.name}>
                  <a
                    href={tour.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    {tour.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-orange-400" />
                <div className="text-gray-300">
                  <div>Mon - Sun: 6:00 AM - 10:00 PM</div>
                  <div className="text-sm text-gray-400">GMT+8 (Bali Time)</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-orange-400" />
                <span className="text-gray-300">24/7 Emergency Support</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Bali Tours & Travel. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Sitemap
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
