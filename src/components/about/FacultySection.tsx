import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { facultyData } from '../../data/facultyData';

const FacultySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Our Distinguished Faculty
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our faculty comprises industry experts and academics who are leaders in their fields, 
            committed to providing exceptional education and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-1">
                  {faculty.name}
                </h3>
                <p className="text-secondary-300 font-medium mb-3">
                  {faculty.position}
                </p>
                <p className="text-neutral-600 mb-4 text-sm">
                  {faculty.specialization}
                </p>
                
                <div className="flex space-x-3">
                  <a 
                    href={faculty.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-200 rounded-full hover:bg-primary-900 hover:text-white transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href={`mailto:${faculty.email}`}
                    className="p-2 bg-neutral-200 rounded-full hover:bg-primary-900 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/faculty" 
            className="inline-block bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            View All Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;