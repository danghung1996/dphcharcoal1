import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Search, Zap, Flame, Shield } from 'lucide-react';

const Resources = () => {
  const articles = [
    {
      id: 1,
      title: 'The Science of Charcoal Production: From Kiln to Kitchen',
      category: 'Production',
      desc: 'Understanding the carbonization process and how temperature control affects the final quality of white charcoal.',
      img: 'resource-1',
      date: 'March 10, 2026'
    },
    {
      id: 2,
      title: 'How to Choose High Quality White Charcoal for Your Restaurant',
      category: 'Buying Guide',
      desc: 'Key indicators of premium charcoal: density, metallic sound, and ash content. A guide for professional chefs.',
      img: 'resource-2',
      date: 'March 05, 2026'
    },
    {
      id: 3,
      title: 'Binchotan vs. Regular Charcoal: What is the Difference?',
      category: 'Comparison',
      desc: 'Exploring the unique properties of Binchotan, including far-infrared heat and its impact on flavor profile.',
      img: 'resource-3',
      date: 'February 28, 2026'
    },
    {
      id: 4,
      title: 'The Ultimate BBQ Charcoal Guide for Restaurant Chains',
      category: 'Industry',
      desc: 'Optimizing fuel costs while maintaining consistent heat output for high-volume grilling operations.',
      img: 'resource-4',
      date: 'February 20, 2026'
    }
  ];

  return (
    <div className="pt-32 bg-paper-white min-h-screen">
      {/* Header */}
      <section className="bg-soft-gray py-24 border-b border-black/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Knowledge Base</span>
            <h1 className="text-5xl md:text-8xl font-black text-ink mb-8 tracking-tighter uppercase leading-[0.9]">
              INDUSTRY <br />
              <span className="text-industrial-orange">RESOURCES</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              Expert insights into charcoal production, quality standards, and global export trends. 
              Helping you make informed decisions for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {articles.map((article, idx) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden bg-soft-gray mb-8 relative">
                  <img 
                    src={`https://picsum.photos/seed/${article.img}/1200/800?grayscale`} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-industrial-orange text-white text-[10px] font-black uppercase tracking-widest px-4 py-2">
                    {article.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">{article.date}</span>
                  <h2 className="text-3xl font-black text-ink uppercase tracking-tighter group-hover:text-industrial-orange transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {article.desc}
                  </p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-industrial-orange font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                      Read Article <ChevronRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource Banner */}
      <section className="py-32 bg-soft-gray relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-paper-white p-12 md:p-24 border border-black/5 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tighter uppercase leading-tight">
                  FREE GUIDE: <br />
                  <span className="text-industrial-orange">EXPORT STANDARDS 2026</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Download our comprehensive guide on international charcoal export regulations, 
                  packaging requirements for Japan and Korea, and shipping documentation.
                </p>
                <button className="bg-industrial-orange text-white font-bold py-5 px-12 uppercase tracking-widest text-sm hover:bg-ink transition-all inline-flex items-center">
                  Download Guide <BookOpen size={18} className="ml-2" />
                </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                {[
                  { icon: <Zap size={24} />, title: 'JIS Standards' },
                  { icon: <Flame size={24} />, title: 'Heat Efficiency' },
                  { icon: <Shield size={24} />, title: 'Safety MSDS' },
                  { icon: <Search size={24} />, title: 'Quality Audit' },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-black/5 border border-black/5 flex flex-col items-center text-center space-y-4">
                    <div className="text-industrial-orange">{item.icon}</div>
                    <span className="text-ink font-bold uppercase tracking-widest text-[10px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tighter uppercase mb-8">STAY UPDATED</h2>
          <p className="text-gray-600 mb-12">Subscribe to our newsletter for the latest market insights and production updates from Vietnam.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-grow bg-soft-gray border border-black/10 p-5 text-ink outline-none focus:border-industrial-orange transition-colors"
            />
            <button className="bg-industrial-orange text-white font-bold py-5 px-12 uppercase tracking-widest text-sm hover:bg-ink transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Resources;
