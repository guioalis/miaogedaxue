import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { NewsItem } from '../../types/news';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/news/${news.id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-primary-900 text-white px-3 py-1 text-sm">
            {news.category}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            <span>{news.category}</span>
          </div>
        </div>
        
        <Link to={`/news/${news.id}`} className="block">
          <h3 className="text-xl font-serif font-bold text-primary-900 mb-3 hover:text-secondary-300 transition-colors">
            {news.title}
          </h3>
        </Link>
        
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        
        <Link 
          to={`/news/${news.id}`} 
          className="inline-block text-primary-700 font-medium hover:text-secondary-300 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  );
};

export default NewsCard;