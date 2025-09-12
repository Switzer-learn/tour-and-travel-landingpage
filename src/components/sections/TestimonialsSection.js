'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    origin: 'Australia',
    rating: 5,
    quote: 'Our Bali adventure exceeded all expectations! The guide was knowledgeable, the accommodations were luxury, and every detail was perfectly planned. We\'ll definitely book again!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    origin: 'Singapore',
    rating: 5,
    quote: 'Exceptional service from start to finish. The Mount Batur sunrise trek was breathtaking, and our driver was professional and friendly. Highly recommend this tour company!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    origin: 'Spain',
    rating: 5,
    quote: 'The Ubud cultural tour was amazing! We learned so much about Balinese traditions, and the rice terraces were stunning. Perfect for first-time visitors to Bali.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'David Thompson',
    origin: 'United Kingdom',
    rating: 5,
    quote: 'Outstanding experience! The Nusa Penida island tour was incredible. Crystal clear waters, stunning cliffs, and professional service throughout. Worth every penny!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Lisa Park',
    origin: 'South Korea',
    rating: 5,
    quote: 'Fantastic tour company! They handled everything perfectly - from airport pickup to hotel drop-off. The Tanah Lot sunset was magical. Thank you for an unforgettable trip!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'James Wilson',
    origin: 'Canada',
    rating: 5,
    quote: 'Professional, reliable, and incredibly knowledgeable guides. The photography spots they showed us were incredible. This is definitely the best tour company in Bali!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  }
];

export default function TestimonialsSection() {
  return (
    <section 
      className="py-16 md:py-20 bg-white relative w-full overflow-hidden"
      style={{
        backgroundImage: 'url(/images/testimonial_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from travelers who have experienced the magic of Bali with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {testimonial.origin}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Tour Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
