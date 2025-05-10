import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';
import { newsData } from '../data/newsData';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find(item => item.id.toString() === id);

  if (!news) {
    return (
      <div className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Article Not Found</h1>
          <p className="text-lg text-neutral-600 mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/news" 
            className="inline-flex items-center bg-primary-900 hover:bg-primary-800 text-white px-4 py-2 rounded-md transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (exclude current article)
  const relatedNews = newsData
    .filter(item => item.category === news.category && item.id !== news.id)
    .slice(0, 3);

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-neutral-500">
              <Link to="/" className="hover:text-primary-900 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/news" className="hover:text-primary-900 transition-colors">News</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-900">{news.title}</span>
            </div>
          </div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-6">
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-neutral-500 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <Calendar size={16} className="mr-1" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Tag size={16} className="mr-1" />
                <span>{news.category}</span>
              </div>
              <div className="flex items-center mb-2">
                <Share2 size={16} className="mr-1" />
                <span>Share</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl font-medium text-neutral-700 mb-6">
              {news.excerpt}
            </p>
            
            <p className="mb-6">
              {news.content || `Miaoge College is proud to announce ${news.title}. This exciting development represents our ongoing commitment to excellence in business education and leadership development.`}
            </p>
            
            <p className="mb-6">
              Our faculty and staff have worked diligently to ensure this initiative aligns with our mission to provide students with cutting-edge knowledge and practical skills that prepare them for success in the global business environment.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary-900 my-6">Key Highlights</h2>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Enhanced learning opportunities for students across all programs</li>
              <li className="mb-2">Collaboration with industry partners to provide real-world experience</li>
              <li className="mb-2">Integration of innovative teaching methodologies</li>
              <li className="mb-2">Focus on developing critical thinking and problem-solving skills</li>
            </ul>
            
            <p className="mb-6">
              "This is an exciting time for Miaoge College," said Dr. Mei Zhang, Dean of Academic Affairs. "We are constantly looking for ways to enhance our educational offerings and provide our students with the best possible preparation for their future careers."
            </p>
            
            <p>
              For more information about this news and other updates from Miaoge College, please visit our website or contact the Office of Communications at communications@miaoge.edu.
            </p>
          </motion.div>

          {/* Back Button */}
          <div className="mt-10">
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary-900 hover:text-secondary-300 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to News
            </Link>
          </div>

          {/* Related Articles */}
          {relatedNews.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                  >
                    <Link to={`/news/${item.id}`} className="block">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-serif font-bold text-primary-900 mb-2 hover:text-secondary-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-500">{item.date}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;