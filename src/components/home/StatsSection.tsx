import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Students',
    value: '5,000+',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Programs',
    value: '25+',
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Faculty',
    value: '200+',
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Awards',
    value: '50+',
    icon: <Award className="w-8 h-8" />,
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Miaoge College by the Numbers
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Our commitment to excellence in business education is reflected in our growth and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-800 rounded-lg p-6 text-center hover:bg-primary-700 transition-colors"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary-300 mb-2">{stat.value}</p>
              </motion.div>
              <p className="text-lg">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;