import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Target, BookOpen, Users } from 'lucide-react';
import FacultySection from '../components/about/FacultySection';
import UniversityStats from '../components/about/UniversityStats';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="diagonalHatch" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="white" strokeWidth="3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            >
              About Miaoge College
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-neutral-200 mb-8"
            >
              Miaoge Business Education Leadership and Entrepreneurship College is committed 
              to developing the next generation of business leaders through innovative education, 
              practical experience, and ethical leadership training.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Our Mission & Values
              </h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center">
                      <Medal size={24} className="text-primary-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                      Excellence
                    </h3>
                    <p className="text-neutral-600">
                      We strive for excellence in everything we do, from our academic programs 
                      to our community engagement initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center">
                      <Target size={24} className="text-primary-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                      Innovation
                    </h3>
                    <p className="text-neutral-600">
                      We foster an environment that encourages creative thinking and innovative 
                      approaches to solving business challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center">
                      <BookOpen size={24} className="text-primary-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                      Integrity
                    </h3>
                    <p className="text-neutral-600">
                      We are committed to the highest standards of ethics and integrity in all 
                      our academic and business practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-primary-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                      Community
                    </h3>
                    <p className="text-neutral-600">
                      We value diversity and inclusion, and are dedicated to creating a supportive 
                      community that respects and celebrates differences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-primary-900 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Miaoge College Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                Our History
              </h2>
              <p className="text-lg text-neutral-600">
                Founded with a vision to transform business education
              </p>
            </div>
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="text-2xl font-serif font-bold text-secondary-300">2005</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                    Foundation
                  </h3>
                  <p className="text-neutral-600">
                    Miaoge College was established by a group of visionary business leaders and academics 
                    with the goal of creating a new model for business education that combines theoretical 
                    knowledge with practical skills.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="text-2xl font-serif font-bold text-secondary-300">2010</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                    Expansion
                  </h3>
                  <p className="text-neutral-600">
                    The college expanded its programs to include specialized tracks in entrepreneurship, 
                    leadership development, and global business, attracting students from around the world.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="text-2xl font-serif font-bold text-secondary-300">2015</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                    Innovation Hub
                  </h3>
                  <p className="text-neutral-600">
                    Launched the Miaoge Innovation Hub, a center dedicated to fostering entrepreneurship 
                    and providing resources for students to develop and launch their business ideas.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="text-2xl font-serif font-bold text-secondary-300">2020</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                    Global Recognition
                  </h3>
                  <p className="text-neutral-600">
                    Miaoge College gained international recognition for its innovative approach to 
                    business education, forming partnerships with leading institutions around the world.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="text-2xl font-serif font-bold text-secondary-300">Today</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                    Leading the Future
                  </h3>
                  <p className="text-neutral-600">
                    Today, Miaoge College continues to lead the way in business education, with a 
                    focus on preparing students for the challenges and opportunities of the digital age.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* University Stats Section */}
      <UniversityStats />

      {/* Faculty Section */}
      <FacultySection />

      {/* Campus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Our Campus
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our state-of-the-art campus provides an inspiring environment for learning, 
              collaboration, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Miaoge College Campus" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                  Main Academic Building
                </h3>
                <p className="text-neutral-600">
                  Home to our classrooms, faculty offices, and collaborative spaces.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Miaoge College Library" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                  Business Research Library
                </h3>
                <p className="text-neutral-600">
                  A modern facility with extensive resources for research and study.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Miaoge College Innovation Hub" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                  Innovation Center
                </h3>
                <p className="text-neutral-600">
                  A hub for entrepreneurship, featuring labs, incubator spaces, and meeting rooms.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button to="/campus" variant="outline">
              Take a Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              College Leadership
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Dr. Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-1">
                  Dr. Michael Chen
                </h3>
                <p className="text-secondary-300 font-medium mb-3">
                  President
                </p>
                <p className="text-neutral-600 text-sm">
                  With over 25 years of experience in business education and leadership, 
                  Dr. Chen has led Miaoge College since 2015.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-1">
                  Dr. Sarah Johnson
                </h3>
                <p className="text-secondary-300 font-medium mb-3">
                  Provost & Academic Dean
                </p>
                <p className="text-neutral-600 text-sm">
                  Dr. Johnson oversees all academic programs and faculty, ensuring 
                  educational excellence and innovation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Dr. Robert Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-1">
                  Dr. Robert Williams
                </h3>
                <p className="text-secondary-300 font-medium mb-3">
                  Dean of Innovation & Entrepreneurship
                </p>
                <p className="text-neutral-600 text-sm">
                  Dr. Williams leads our entrepreneurship programs and oversees 
                  the Miaoge Innovation Hub.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button to="/leadership" variant="outline">
              View Full Leadership Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;