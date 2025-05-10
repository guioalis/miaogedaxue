import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
            >
              Miaoge Business Education Leadership and Entrepreneurship College
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-100 mb-8 leading-relaxed"
            >
              Empowering future leaders through excellence in business education, 
              leadership development, and entrepreneurial innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button to="/admissions" variant="secondary" size="lg">
                Apply Now
              </Button>
              <Button to="/programs" variant="outline" size="lg">
                Explore Programs
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
      >
        <p className="text-sm mb-2">Scroll to discover more</p>
        <motion.div 
          animate={{ 
            y: [0, 10, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1"
        >
          <motion.div 
            animate={{ 
              y: [0, 15, 0], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5 
            }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;