'use client';

import { motion } from 'framer-motion';
import { Car, Home, Wifi, Coffee, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Premium Transport',
    items: ['Air-conditioned vehicles', 'Professional drivers', 'GPS tracking', 'Flexible pickup times']
  },
  {
    icon: Home,
    title: 'Luxury Accommodations',
    items: ['Handpicked hotels & villas', '4-5 star properties', 'Prime locations', 'Special group rates']
  }
];

const amenities = [
  { icon: Wifi, text: 'Free WiFi' },
  { icon: Coffee, text: 'Refreshments' },
  { icon: Shield, text: 'Full Insurance' },
  { icon: Star, text: '24/7 Support' }
];

export default function AccommodationTransportSection() {
  return (
    <section className="py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Travel in Comfort
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From luxury villas to reliable transport, we make your Bali journey seamless with premium accommodations and comfortable travel options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Transport Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/toyota car with driver.png"
                alt="Premium transport - Toyota car with professional driver"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Premium Transport</h3>
                <p className="text-sm opacity-90">Professional drivers & modern vehicles</p>
              </div>
            </div>
          </motion.div>

          {/* Transport Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Car size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Premium Transport</h3>
                <p className="text-gray-600">Comfortable & reliable vehicles</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {features[0].items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Accommodation Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Home size={32} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Luxury Accommodations</h3>
                <p className="text-gray-600">Handpicked hotels & villas</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {features[1].items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Accommodation Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/villa_accomodation.png"
                alt="Luxury villa accommodation with pool"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Luxury Villas</h3>
                <p className="text-sm opacity-90">Premium accommodations with stunning views</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Included Amenities
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{amenity.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
