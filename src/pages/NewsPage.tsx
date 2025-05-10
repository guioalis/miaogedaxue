import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Tag } from 'lucide-react';
import NewsCard from '../components/news/NewsCard';
import { newsData } from '../data/newsData';

const categories = ['All', 'Academic', 'Research', 'Events', 'Community', 'Alumni'];

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            University News
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from Miaoge College
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-700"
                />
                <Search className="absolute left-3 top-3.5 text-neutral-400" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-primary-900 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  } transition-colors`}
                >
                  {category === 'All' ? null : <Tag size={14} className="mr-1.5" />}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <NewsCard key={news.id} news={news} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">No Results Found</h3>
            <p className="text-neutral-600">
              No news articles match your current search criteria. Please try different keywords or categories.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredNews.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-md bg-primary-900 text-white">1</button>
              <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                3
              </button>
              <span className="px-4 py-2">...</span>
              <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                10
              </button>
              <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;