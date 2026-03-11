import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 bg-paper-white">
      {/* Hero */}
      <section className="bg-soft-gray py-20 border-b border-black/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-industrial-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold text-ink mb-8 tracking-tighter">TRADITION MEETS <br />INDUSTRY</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              ĐHP Charcoal was founded with a vision to bring Vietnam's finest charcoal products to the global market. 
              With years of experience in traditional kiln production and a deep understanding of international export standards, 
              we have grown into a trusted partner for importers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-industrial-orange/5 flex items-center justify-center rounded-sm">
                <Target className="text-industrial-orange" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-ink uppercase tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide the highest quality charcoal products that enhance the culinary experiences of people globally, 
                while maintaining sustainable production practices that respect our environment and local communities.
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 bg-industrial-orange/5 flex items-center justify-center rounded-sm">
                <Award className="text-industrial-orange" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-ink uppercase tracking-tight">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to consistency. Every shipment of ĐHP Charcoal is guaranteed to meet the specific 
                technical requirements of our clients, from burn time to ash content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section className="py-32 bg-soft-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/capacity/800/600?grayscale" 
                alt="Production Capacity" 
                className="w-full h-auto grayscale rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl font-bold text-ink tracking-tighter">PRODUCTION CAPACITY</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-industrial-orange pl-6">
                  <h4 className="text-2xl font-bold text-ink mb-2">200 Tons / Month</h4>
                  <p className="text-gray-500 text-sm">Our facility operates year-round with a stable output of high-grade white charcoal and binchotan.</p>
                </div>
                <div className="border-l-4 border-industrial-orange pl-6">
                  <h4 className="text-2xl font-bold text-ink mb-2">7-8 Containers Monthly</h4>
                  <p className="text-gray-500 text-sm">Efficient logistics and container loading processes ensure timely delivery for large-scale orders.</p>
                </div>
                <div className="border-l-4 border-industrial-orange pl-6">
                  <h4 className="text-2xl font-bold text-ink mb-2">Modern Kilns</h4>
                  <p className="text-gray-500 text-sm">Over 50 traditional kilns optimized with modern temperature control systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values */}
      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-ink tracking-tighter uppercase">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Users size={32} />, title: 'Integrity', desc: 'Transparent business practices and honest communication with all partners.' },
              { icon: <TrendingUp size={32} />, title: 'Innovation', desc: 'Continuously improving our production methods for better quality and efficiency.' },
              { icon: <Shield size={32} />, title: 'Quality', desc: 'A relentless focus on maintaining the highest standards in every piece of charcoal.' },
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-6 p-10 bg-soft-gray border border-black/5 hover:border-industrial-orange transition-colors">
                <div className="mx-auto w-16 h-16 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-ink uppercase tracking-widest">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
