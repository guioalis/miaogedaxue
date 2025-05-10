import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Chen',
    role: 'MBA Graduate, 2024',
    quote: 'My experience at Miaoge College has been transformative. The faculty\'s industry experience and mentorship programs provided me with the skills and confidence to launch my own business right after graduation.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Leadership Program, 2023',
    quote: 'The leadership program at Miaoge is unlike any other. The hands-on approach to problem-solving and the focus on ethical leadership has completely changed how I approach challenges in my career.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Entrepreneurship Certificate, 2024',
    quote: 'Miaoge College provided me with the perfect blend of theoretical knowledge and practical skills. The entrepreneurship incubator program and networking opportunities were instrumental in helping me secure funding for my startup.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Student Testimonials
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from our students about their experiences at Miaoge College
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-10 text-secondary-300">
              <Quote size={48} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 mb-6 md:mb-0 md:mr-8">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover rounded-full border-4 border-secondary-300"
                />
              </div>

              <div className="flex-1">
                <motion.blockquote
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-neutral-700 italic mb-6"
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>
                
                <div>
                  <p className="text-xl font-serif font-bold text-primary-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-neutral-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-neutral-200 hover:bg-secondary-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-neutral-200 hover:bg-secondary-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;