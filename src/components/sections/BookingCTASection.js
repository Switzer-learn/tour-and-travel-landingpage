'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, Mail } from 'lucide-react';

export default function BookingCTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Bali Adventure?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Book today and let us handle the rest. From the moment you arrive until your departure, 
            we&apos;ll ensure every detail is perfect for your unforgettable Bali experience.
          </p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100 border-none font-bold py-5 px-10 rounded-lg text-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Book Your Tour Now
          </motion.button>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {/* Online Booking */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Online Booking</h3>
            <p className="text-white/80 text-sm mb-4">Book instantly with our easy online system</p>
            <button className="btn btn-sm bg-white text-blue-600 hover:bg-gray-100 border-none font-semibold py-2 px-6 rounded-lg text-sm transition-all duration-300">
              Book Online
            </button>
          </div>

          {/* Phone Booking */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-white/80 text-sm mb-4">Speak with our travel experts</p>
            <a 
              href="tel:+62361234567" 
              className="btn btn-sm bg-white text-blue-600 hover:bg-gray-100 border-none font-semibold py-2 px-6 rounded-lg text-sm transition-all duration-300 inline-block"
            >
              +62 361 234 567
            </a>
          </div>

          {/* Email Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-white/80 text-sm mb-4">Get a custom quote for your group</p>
            <a 
              href="mailto:info@balitours.com" 
              className="btn btn-sm bg-white text-blue-600 hover:bg-gray-100 border-none font-semibold py-2 px-6 rounded-lg text-sm transition-all duration-300 inline-block"
            >
              Send Email
            </a>
          </div>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">Limited Time Offer</h3>
          <p className="text-white/90 mb-4">
            Book any tour package this month and get <span className="font-bold text-yellow-300">15% OFF</span> 
            your next booking plus a complimentary traditional Balinese welcome ceremony!
          </p>
          <p className="text-sm text-white/70">
            *Valid for bookings made before the end of this month. Cannot be combined with other offers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
