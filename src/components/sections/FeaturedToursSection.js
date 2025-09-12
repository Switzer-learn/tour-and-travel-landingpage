'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';

const tours = [
  {
    id: 1,
    name: 'Ubud Cultural Experience',
    image: '/images/tegallalang.png',
    description: 'Discover Ubud\'s rice terraces, monkey forest, and traditional art villages in this full-day cultural immersion.',
    price: '$85',
    duration: '8 hours',
    groupSize: '2-8 people',
    highlights: ['Tegallalang Rice Terraces', 'Sacred Monkey Forest', 'Traditional Art Villages']
  },
  {
    id: 2,
    name: 'Mount Batur Sunrise Trek',
    image: '/images/mtbatur.png',
    description: 'Early morning trek to catch the spectacular sunrise from Mount Batur\'s summit with breakfast cooked by volcanic steam.',
    price: '$95',
    duration: '10 hours',
    groupSize: '2-12 people',
    highlights: ['Sunrise from Summit', 'Volcanic Breakfast', 'Hot Springs Visit']
  },
  {
    id: 3,
    name: 'Tanah Lot Temple Tour',
    image: '/images/tanah_lot.png',
    description: 'Visit the iconic sea temple of Tanah Lot during golden hour, one of Bali\'s most photographed landmarks.',
    price: '$65',
    duration: '6 hours',
    groupSize: '2-10 people',
    highlights: ['Tanah Lot Temple', 'Golden Hour Photography', 'Traditional Dinner']
  },
  {
    id: 4,
    name: 'Nusa Penida Island Adventure',
    image: '/images/nusa_penida.png',
    description: 'Full-day trip to Nusa Penida featuring stunning cliffs, pristine beaches, and crystal-clear waters.',
    price: '$120',
    duration: '12 hours',
    groupSize: '2-8 people',
    highlights: ['Kelingking Beach', 'Angel\'s Billabong', 'Crystal Bay Snorkeling']
  }
];

export default function FeaturedToursSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Tours
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Bali&apos;s most stunning destinations with our carefully crafted tour packages designed for unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 badge badge-warning bg-orange-500 border-none text-white px-3 py-1 font-bold text-sm">
                  {tour.price}
                </div>
              </div>

              {/* Content */}
              <div className="card-body p-6">
                <h3 className="card-title text-xl font-semibold text-gray-900 mb-3">
                  {tour.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tour.description}
                </p>

                {/* Tour Details */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-900 mb-2">Highlights:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <MapPin size={12} className="text-blue-600 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Button */}
                <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 border-none text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Tours Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn btn-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-base uppercase tracking-wide transition-all duration-300">
            View All Tours
          </button>
        </motion.div>
      </div>
    </section>
  );
}
