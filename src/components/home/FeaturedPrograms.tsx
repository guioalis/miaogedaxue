import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { BookOpen, TrendingUp, Users, Globe } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Business Administration',
    description: 'Develop core business competencies with a focus on strategic management and organizational leadership.',
    icon: <BookOpen className="w-8 h-8 text-secondary-300" />,
    link: '/programs/business-administration'
  },
  {
    id: 2,
    title: 'Entrepreneurship',
    description: 'Learn to identify opportunities, develop business models, and build successful ventures from the ground up.',
    icon: <TrendingUp className="w-8 h-8 text-secondary-300" />,
    link: '/programs/entrepreneurship'
  },
  {
    id: 3,
    title: 'Leadership Development',
    description: 'Enhance your leadership capabilities through experiential learning and mentorship from industry leaders.',
    icon: <Users className="w-8 h-8 text-secondary-300" />,
    link: '/programs/leadership'
  },
  {
    id: 4,
    title: 'Global Business',
    description: 'Prepare for the challenges of international business with a focus on cross-cultural management and global strategy.',
    icon: <Globe className="w-8 h-8 text-secondary-300" />,
    link: '/programs/global-business'
  }
];

const FeaturedPrograms: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Featured Programs
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our diverse range of programs designed to prepare you for leadership 
            roles in today's dynamic business environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">{program.title}</h3>
                <p className="text-neutral-600 mb-4">{program.description}</p>
                <Button to={program.link} variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/programs" variant="secondary">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;