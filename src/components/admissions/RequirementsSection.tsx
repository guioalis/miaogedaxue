import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Calendar, FileText } from 'lucide-react';

const requirements = [
  {
    id: 1,
    title: 'Academic Requirements',
    items: [
      'Bachelor\'s degree from an accredited institution',
      'Minimum GPA of 3.0 on a 4.0 scale',
      'Relevant coursework in business or related fields',
      'Official transcripts from all institutions attended'
    ],
    icon: <FileText size={24} className="text-secondary-300" />
  },
  {
    id: 2,
    title: 'Application Materials',
    items: [
      'Completed online application form',
      'Statement of purpose (500-750 words)',
      'Resume or CV highlighting relevant experience',
      'Two letters of recommendation',
      'Application fee of $75'
    ],
    icon: <CheckCircle size={24} className="text-secondary-300" />
  },
  {
    id: 3,
    title: 'Important Dates',
    items: [
      'Early Decision: November 15',
      'Regular Decision: January 15',
      'Final Decision: March 30',
      'Enrollment Confirmation: May 1'
    ],
    icon: <Calendar size={24} className="text-secondary-300" />
  },
  {
    id: 4,
    title: 'Selection Process',
    items: [
      'Application review by admissions committee',
      'Interview for selected candidates',
      'Final selection based on academic merit, leadership potential, and fit',
      'Decision notifications sent by email'
    ],
    icon: <Clock size={24} className="text-secondary-300" />
  }
];

const RequirementsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Admissions Requirements
            </h2>
            <p className="text-lg text-neutral-600">
              We seek motivated individuals with strong academic backgrounds and leadership potential.
              The following outlines our admissions requirements and process.
            </p>
          </div>

          <div className="space-y-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {req.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-900">
                    {req.title}
                  </h3>
                </div>
                
                <ul className="space-y-2 pl-4">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary-900 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4">Ready to Apply?</h3>
            <p className="mb-6">
              Start your application today and take the first step toward becoming part of our 
              dynamic learning community.
            </p>
            <a 
              href="/admissions/apply" 
              className="inline-block bg-secondary-300 hover:bg-secondary-400 text-primary-900 font-medium py-2 px-6 rounded-md transition-colors"
            >
              Start Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;