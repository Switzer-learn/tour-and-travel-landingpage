'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/tanah_lot.png')`,
            backgroundColor: '#0066CC' // Fallback color
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Discover Bali&apos;s Magic, One Journey at a Time
        </motion.h1>
        
        <div className="flex justify-center mb-8">
            <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-2xl mx-auto opacity-90 text-center text-lg md:text-xl text-gray-100"
        >
          Tailored tours to Bali&apos;s most iconic destinations with experienced guides, 
          comfortable transport, and unforgettable memories.
        </motion.p>
        </div>
        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA Button */}
          <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white font-bold py-4 px-8 rounded-lg text-base uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg min-w-[200px]">
            Book Your Tour
          </button>
          
          {/* Secondary CTA Button */}
          <button className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-base uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]">
            View Packages
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
