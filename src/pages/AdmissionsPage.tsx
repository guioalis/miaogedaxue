import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock } from 'lucide-react';
import RequirementsSection from '../components/admissions/RequirementsSection';
import TargetStudentsSection from '../components/admissions/TargetStudentsSection';
import Button from '../components/common/Button';

const AdmissionsPage: React.FC = () => {
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
              Admissions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-neutral-200 mb-8"
            >
              Join a community of future business leaders and entrepreneurs. 
              Our admissions process is designed to identify candidates with strong academic 
              potential, leadership qualities, and a passion for innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button to="/admissions/apply" variant="secondary" size="lg">
                Apply Now
              </Button>
              <Button to="/admissions/faq" variant="outline" size="lg">
                View FAQs
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                Key Admissions Dates
              </h2>
              <p className="text-lg text-neutral-600">
                Mark your calendar with these important deadlines for the upcoming academic year
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-50 rounded-lg p-6 shadow-md border-t-4 border-secondary-300"
              >
                <div className="flex items-center mb-4">
                  <Calendar size={24} className="text-secondary-300 mr-3" />
                  <h3 className="text-xl font-serif font-bold text-primary-900">
                    Application Deadlines
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Early Decision</span>
                    <span className="font-medium">November 15, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Regular Decision</span>
                    <span className="font-medium">January 15, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Late Applications</span>
                    <span className="font-medium">March 30, 2026</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-50 rounded-lg p-6 shadow-md border-t-4 border-primary-900"
              >
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-primary-900 mr-3" />
                  <h3 className="text-xl font-serif font-bold text-primary-900">
                    Decision Notifications
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Early Decision</span>
                    <span className="font-medium">December 15, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Regular Decision</span>
                    <span className="font-medium">February 28, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Late Applications</span>
                    <span className="font-medium">April 15, 2026</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-neutral-50 rounded-lg p-6 shadow-md border-t-4 border-accent-800"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle size={24} className="text-accent-800 mr-3" />
                  <h3 className="text-xl font-serif font-bold text-primary-900">
                    Enrollment
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Deposit Deadline</span>
                    <span className="font-medium">May 1, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Orientation</span>
                    <span className="font-medium">August 25, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-700">Classes Begin</span>
                    <span className="font-medium">September 1, 2026</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <RequirementsSection />

      {/* Target Students Section */}
      <TargetStudentsSection />

      {/* Financial Aid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                Financial Aid & Scholarships
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We are committed to making a Miaoge College education accessible through various 
                financial aid options and merit-based scholarships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="bg-primary-900 text-white py-4 px-6">
                  <h3 className="text-xl font-serif font-bold">Merit Scholarships</h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">
                    Merit-based scholarships are awarded to students with exceptional academic 
                    records, leadership experience, and demonstrated potential.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Presidential Scholarship (full tuition)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Dean's Scholarship (50% tuition)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Academic Excellence Award (25% tuition)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Leadership Scholarship (varies)</span>
                    </li>
                  </ul>
                  <Button to="/admissions/scholarships" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="bg-accent-800 text-white py-4 px-6">
                  <h3 className="text-xl font-serif font-bold">Financial Aid</h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">
                    We offer various types of financial aid to help make your education more affordable, 
                    including loans, grants, and work-study opportunities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Need-based grants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Federal and private student loans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Work-study programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>Payment plans</span>
                    </li>
                  </ul>
                  <Button to="/admissions/financial-aid" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-primary-900 text-white">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Have Questions?
                </h2>
                <p className="text-neutral-200 mb-6">
                  Our admissions team is here to help you navigate the application process and 
                  answer any questions you may have.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-neutral-200">admissions@miaoge.edu</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-neutral-200">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-neutral-200">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                  Contact Admissions
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-neutral-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-neutral-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-neutral-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                    ></textarea>
                  </div>
                  <Button variant="primary">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;