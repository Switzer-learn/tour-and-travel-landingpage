'use client';

import { motion } from 'framer-motion';
import { Shield, Car, Calendar } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Guides',
    description: 'Professional local guides with deep knowledge of Bali\'s culture, history, and hidden gems.'
  },
  {
    icon: Car,
    title: 'Comfortable Travel',
    description: 'Air-conditioned vehicles and carefully selected accommodations for your comfort.'
  },
  {
    icon: Calendar,
    title: 'Hassle-Free Booking',
    description: 'Easy online booking with flexible scheduling and 24/7 customer support.'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to making your Bali experience exceptional through personalized service and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300">
                    <IconComponent 
                      size={40} 
                      className="text-blue-600"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
