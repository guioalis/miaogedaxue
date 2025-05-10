import React from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase, Lightbulb, GraduationCap } from 'lucide-react';

const targetProfiles = [
  {
    id: 1,
    title: 'Recent Graduates',
    description: 'Recent graduates with strong academic records seeking to enhance their business knowledge and leadership skills before entering the workforce.',
    icon: <GraduationCap size={40} className="text-secondary-300" />,
  },
  {
    id: 2,
    title: 'Early Career Professionals',
    description: 'Professionals with 2-5 years of work experience looking to accelerate their career growth and develop advanced management capabilities.',
    icon: <Briefcase size={40} className="text-secondary-300" />,
  },
  {
    id: 3,
    title: 'Aspiring Entrepreneurs',
    description: 'Individuals with innovative ideas and entrepreneurial drive seeking the knowledge and support to launch successful ventures.',
    icon: <Lightbulb size={40} className="text-secondary-300" />,
  },
  {
    id: 4,
    title: 'Career Changers',
    description: 'Professionals from non-business backgrounds looking to pivot their careers and develop core business competencies.',
    icon: <Target size={40} className="text-secondary-300" />,
  },
];

const TargetStudentsSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Who Should Apply
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our programs are designed for diverse individuals united by their drive for excellence and 
            passion for business leadership and entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {targetProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {profile.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-900 mb-3">
                {profile.title}
              </h3>
              <p className="text-neutral-600">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">
            Not Sure If You're a Good Fit?
          </h3>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            We encourage candidates from diverse backgrounds and experiences to apply. 
            Our admissions team is available to discuss your specific situation and help 
            determine if our programs align with your career goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/admissions/schedule-consultation" 
              className="inline-block bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/admissions/faq" 
              className="inline-block border border-primary-900 text-primary-900 hover:bg-primary-50 font-medium py-2 px-6 rounded-md transition-colors"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetStudentsSection;