import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { newsData } from '../../data/newsData';

const NewsHighlights: React.FC = () => {
  // Get the most recent 3 news items
  const recentNews = newsData.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-2">
              Latest News
            </h2>
            <p className="text-lg text-neutral-600">
              Stay updated with the latest events and announcements from our college
            </p>
          </div>
          <Button to="/news" variant="outline" className="mt-4 md:mt-0">
            View All News
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to={`/news/${news.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary-900 text-white px-3 py-1 text-sm">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-500 text-sm mb-2">{news.date}</p>
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2 hover:text-secondary-300 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-neutral-600 line-clamp-3">{news.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;