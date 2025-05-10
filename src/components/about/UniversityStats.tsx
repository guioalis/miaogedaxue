import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Users, BookOpen, Globe, Award, Building, GraduationCap } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Students',
    value: 5000,
    prefix: '',
    suffix: '+',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-primary-900',
  },
  {
    id: 2,
    label: 'Faculty Members',
    value: 200,
    prefix: '',
    suffix: '+',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-secondary-300',
  },
  {
    id: 3,
    label: 'Programs Offered',
    value: 25,
    prefix: '',
    suffix: '+',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-accent-800',
  },
  {
    id: 4,
    label: 'International Partners',
    value: 50,
    prefix: '',
    suffix: '+',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-primary-900',
  },
  {
    id: 5,
    label: 'Research Centers',
    value: 12,
    prefix: '',
    suffix: '',
    icon: <Building className="w-6 h-6" />,
    color: 'bg-secondary-300',
  },
  {
    id: 6,
    label: 'Recognition & Awards',
    value: 75,
    prefix: '',
    suffix: '+',
    icon: <Award className="w-6 h-6" />,
    color: 'bg-accent-800',
  },
];

const CountUp = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const nodeRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const value = Math.floor(progress * end);
      if (nodeRef.current) {
        nodeRef.current.textContent = `${prefix}${value}${suffix}`;
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    if (isInView) {
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration, prefix, suffix]);
  
  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
};

const UniversityStats: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Miaoge College at a Glance
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Key statistics that showcase our commitment to excellence in business education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className={`${stat.color} h-2`}></div>
              <div className="p-6 flex items-start">
                <div className={`${stat.color} text-white p-3 rounded-full mr-4`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-900 mb-1">
                    <CountUp 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                    />
                  </div>
                  <p className="text-neutral-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityStats;