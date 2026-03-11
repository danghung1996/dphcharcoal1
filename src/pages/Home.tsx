import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Factory, Truck, ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

import WorldMap from '../components/WorldMap';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <div className="overflow-hidden bg-paper-white">
      {/* Parallax Hero Section */}
      {/* Premium Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Background */}
  <motion.div 
    style={{ y: y1 }}
    className="absolute inset-0 z-0"
  >
    <img
      src="/images/hero.jpg"
      alt="Laos Premium Charcoal"
      className="w-full h-full object-cover scale-110"
    />

    {/* dark overlay */}
    <div className="absolute inset-0 bg-black/60"></div>
  </motion.div>

  {/* Content */}
  <div className="container mx-auto px-6 relative z-10 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <span className="text-industrial-orange uppercase tracking-[0.5em] text-xs font-bold">
        Premium Charcoal Exporter
      </span>

      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] mt-6 uppercase">
        PURE
        <br />
        <span className="text-industrial-orange">CHARCOAL</span>
      </h1>

      <p className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl mx-auto">
        High-density White Charcoal & Binchotan produced in Laos and exported worldwide for premium restaurants and BBQ markets.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">

        <Link
          to="/products"
          className="bg-industrial-orange text-white font-bold py-5 px-12 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
        >
          View Products
        </Link>

        <Link
          to="/contact"
          className="border border-white text-white py-5 px-12 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
        >
          Contact Supplier
        </Link>

      </div>

    </motion.div>

  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
    <div className="w-[1px] h-16 bg-white/40"></div>
  </div>

</section>

      {/* Animated Stats Section */}
      <section className="py-24 bg-soft-gray border-y border-black/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { label: 'Monthly Production', value: 200, suffix: '+ Tons', sub: 'Industrial scale capacity' },
              { label: 'Monthly Export', value: 8, suffix: ' Containers', sub: 'Global logistics reach' },
              { label: 'Export Markets', value: 15, suffix: '+ Regions', sub: 'Japan, Korea, EU, Middle East' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-4"
              >
                <p className="text-industrial-orange uppercase tracking-[0.2em] text-xs font-black">{stat.label}</p>
                <h3 className="text-6xl md:text-7xl font-black text-ink tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Company Intro */}
      <section className="py-40 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative group">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 overflow-hidden"
              >
                <img 
                  src="https://picsum.photos/seed/charcoal-process/800/1000?grayscale" 
                  alt="Quality Charcoal" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-industrial-orange/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-industrial-orange/20 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-industrial-orange/20 -z-10"></div>
            </div>
            <div className="lg:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">The Gold Standard</span>
                <h2 className="text-5xl md:text-7xl font-black text-ink leading-[0.9] tracking-tighter uppercase mb-8">
                  ENGINEERED BY <br />
                  <span className="text-industrial-orange">NATURE & FIRE</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-light mb-10">
                  ĐHP Charcoal represents the pinnacle of Vietnamese charcoal manufacturing. Our Binchotan and White Charcoal are produced using ancient kiln techniques refined for modern industrial standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange">
                      <Shield size={28} />
                    </div>
                    <h4 className="text-ink font-bold uppercase tracking-widest text-sm">Certified Quality</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Rigorous laboratory testing for carbon content and burn efficiency.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange">
                      <Globe size={28} />
                    </div>
                    <h4 className="text-ink font-bold uppercase tracking-widest text-sm">Global Compliance</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Meeting strict import standards for Japan, Korea, and the EU.</p>
                  </div>
                </div>
                <Link to="/about" className="inline-flex items-center text-industrial-orange font-bold uppercase tracking-[0.2em] text-sm hover:text-ink transition-colors group">
                  Our Manufacturing Legacy <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-40 bg-soft-gray relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-3xl">
              <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Elite Selection</span>
              <h2 className="text-5xl md:text-8xl font-black text-ink tracking-tighter uppercase leading-[0.85]">
                PREMIUM <br />
                <span className="text-industrial-orange">PRODUCTS</span>
              </h2>
            </div>
            <Link to="/products" className="text-gray-400 hover:text-industrial-orange uppercase tracking-[0.2em] text-sm font-black transition-colors border-b border-black/10 pb-2">
              View Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'White Charcoal', desc: 'The ultimate smokeless fuel for high-end culinary use.', path: '/products/white-charcoal', img: 'white-elite' },
              { name: 'Binchotan', desc: 'Authentic high-carbon charcoal with superior heat.', path: '/products/binchotan-charcoal', img: 'binchotan-elite' },
              { name: 'BBQ Charcoal', desc: 'Consistent, reliable heat for professional kitchens.', path: '/products/bbq-charcoal', img: 'bbq-elite' },
            ].map((prod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-paper-white border border-black/5 overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${prod.img}/800/1000?grayscale`} 
                    alt={prod.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper-white via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black text-ink uppercase tracking-tighter mb-4">{prod.name}</h3>
                  <p className="text-gray-600 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{prod.desc}</p>
                  <Link to={prod.path} className="inline-flex items-center text-industrial-orange font-bold uppercase tracking-widest text-xs">
                    View Specifications <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Export Map Section */}
      {/* (Removed duplicate section) */}

      {/* Factory Preview */}
      <section className="py-40 bg-soft-gray">
        <div className="container mx-auto px-6">
          <div className="bg-paper-white border border-black/5 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-16 md:p-24 space-y-10">
              <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Behind the Scenes</span>
              <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase leading-[0.9]">
                CRAFTED IN <br />
                <span className="text-industrial-orange">TRADITION</span>
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Our factory operates with a commitment to quality that starts at the kiln. Witness the process of carbonization that transforms raw hardwood into premium fuel.
              </p>
              <Link to="/factory" className="bg-industrial-orange text-white font-bold py-5 px-12 uppercase tracking-widest text-sm hover:bg-ink transition-all inline-flex items-center">
                Visit Our Factory <PlayCircle size={18} className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://picsum.photos/seed/factory-preview/1000/1000?grayscale" 
                alt="Factory" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-industrial-orange relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-[0.85] mb-6">
                PARTNER WITH <br />
                THE BEST.
              </h2>
              <p className="text-black/70 text-xl font-bold uppercase tracking-widest">
                200 Tons Monthly Capacity. 8 Containers Exported Monthly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-black text-white font-bold py-6 px-16 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all shadow-2xl">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
