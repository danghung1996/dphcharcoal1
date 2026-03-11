import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'white',
      name: 'White Charcoal',
      title: 'Premium White Charcoal (Ogatan)',
      desc: 'High-density charcoal produced through a specialized cooling process. Known for its white surface and extremely long burn time.',
      img: 'white-char-1',
      path: '/products/white-charcoal'
    },
    {
      id: 'binchotan',
      name: 'Binchotan Charcoal',
      title: 'Authentic Binchotan',
      desc: 'The highest grade of charcoal in the world. Produces far-infrared heat, perfect for high-end BBQ and water purification.',
      img: 'binchotan-1',
      path: '/products/binchotan-charcoal'
    },
    {
      id: 'bbq',
      name: 'BBQ Charcoal',
      title: 'Restaurant Grade BBQ Charcoal',
      desc: 'Versatile and reliable charcoal for professional kitchens. Consistent heat output and minimal smoke.',
      img: 'bbq-1',
      path: '/products/bbq-charcoal'
    }
  ];

  return (
    <div className="pt-32 bg-paper-white">
      <section className="bg-soft-gray py-20 border-b border-black/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-industrial-orange font-bold uppercase tracking-widest text-sm mb-4 block">Product Catalog</span>
            <h1 className="text-5xl md:text-7xl font-bold text-ink tracking-tighter uppercase">Our Products</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
              >
                <div className="lg:w-1/2 group overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${product.img}/800/600?grayscale`} 
                    alt={product.name} 
                    className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:w-1/2 space-y-8">
                  <span className="text-industrial-orange font-bold uppercase tracking-widest text-sm">{product.name}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight uppercase">{product.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{product.desc}</p>
                  <div className="pt-6">
                    <Link to={product.path} className="bg-industrial-orange text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-ink transition-all inline-flex items-center group">
                      Technical Specs <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-32 bg-soft-gray">
        <div className="container mx-auto px-6">
          <div className="bg-paper-white p-12 md:p-20 border border-black/5 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tighter mb-6 uppercase">Quality Standards</h2>
                <p className="text-gray-600 mb-8">
                  All our products undergo rigorous testing to ensure they meet international standards for export. 
                  We provide SGS or Intertek certificates upon request.
                </p>
                <ul className="space-y-4">
                  {['Fixed Carbon > 85%', 'Moisture < 5%', 'Ash Content < 3%', 'Smokeless & Odorless'].map((spec, i) => (
                    <li key={i} className="flex items-center text-ink font-medium">
                      <div className="w-2 h-2 bg-industrial-orange mr-4"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-black/5 flex items-center justify-center p-8 text-center">
                  <span className="text-industrial-orange font-bold text-xs uppercase tracking-widest">JIS Standard</span>
                </div>
                <div className="aspect-square bg-black/5 flex items-center justify-center p-8 text-center">
                  <span className="text-industrial-orange font-bold text-xs uppercase tracking-widest">KS Standard</span>
                </div>
                <div className="aspect-square bg-black/5 flex items-center justify-center p-8 text-center">
                  <span className="text-industrial-orange font-bold text-xs uppercase tracking-widest">EU REACH</span>
                </div>
                <div className="aspect-square bg-black/5 flex items-center justify-center p-8 text-center">
                  <span className="text-industrial-orange font-bold text-xs uppercase tracking-widest">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
