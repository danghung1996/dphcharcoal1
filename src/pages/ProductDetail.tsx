import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Info, Package, Truck, Clock, Flame, Droplets, Trash2, ChevronRight, Maximize2, X, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductDetailProps {
  type: 'white' | 'binchotan' | 'bbq';
}

const ProductDetail: React.FC<ProductDetailProps> = ({ type }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productData = {
    white: {
      name: 'White Charcoal',
      title: 'Premium Vietnamese White Charcoal (Ogatan)',
      desc: 'Our White Charcoal is produced using traditional methods where the charcoal is removed from the kiln at peak temperature and quickly cooled with a mixture of sand, earth, and ash. This process gives it a distinctive white surface and makes it extremely hard and long-burning.',
      specs: {
        fixedCarbon: '> 85%',
        moisture: '< 4%',
        ashContent: '< 2.5%',
        burningTime: '4 - 6 hours',
        heatLevel: 'High (7500 - 8000 kcal/kg)',
        packing: '10kg / 15kg / 20kg PP or Carton Box',
        moq: '1 x 40ft Container (Approx. 24-26 Tons)'
      },
      img: 'white-elite-detail'
    },
    binchotan: {
      name: 'Binchotan Charcoal',
      title: 'Authentic Binchotan (White Charcoal)',
      desc: 'Binchotan is the highest grade of charcoal, known for its metallic sound when struck and its ability to produce far-infrared heat. It is smokeless, odorless, and provides a consistent high temperature that is essential for high-end Japanese BBQ (Yakitori) and Korean BBQ.',
      specs: {
        fixedCarbon: '> 90%',
        moisture: '< 3%',
        ashContent: '< 2%',
        burningTime: '5 - 8 hours',
        heatLevel: 'Extreme (8000 - 8500 kcal/kg)',
        packing: '10kg / 15kg Carton Box with inner plastic',
        moq: '1 x 20ft Container (Approx. 12-14 Tons)'
      },
      img: 'binchotan-elite-detail'
    },
    bbq: {
      name: 'BBQ Charcoal',
      title: 'Professional Grade BBQ Charcoal',
      desc: 'Our BBQ charcoal is designed for professional use in restaurants and for home grilling. It ignites easily, provides steady heat, and has minimal sparking. It is a cost-effective solution for high-volume grilling without compromising on quality.',
      specs: {
        fixedCarbon: '> 75%',
        moisture: '< 6%',
        ashContent: '< 4%',
        burningTime: '3 - 4 hours',
        heatLevel: 'Stable (7000 - 7500 kcal/kg)',
        packing: '5kg / 10kg / 20kg Kraft Paper or PP Bag',
        moq: '1 x 40ft Container (Approx. 20-22 Tons)'
      },
      img: 'bbq-elite-detail'
    }
  };

  const data = productData[type];
  const galleryImages = [
    `https://picsum.photos/seed/${data.img}-1/800/800?grayscale`,
    `https://picsum.photos/seed/${data.img}-2/800/800?grayscale`,
    `https://picsum.photos/seed/${data.img}-3/800/800?grayscale`,
    `https://picsum.photos/seed/${data.img}-4/800/800?grayscale`,
  ];

  return (
    <div className="pt-32 bg-paper-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-soft-gray py-6 border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black">
            <Link to="/" className="hover:text-industrial-orange transition-colors">Home</Link>
            <span className="text-black/10">/</span>
            <Link to="/products" className="hover:text-industrial-orange transition-colors">Products</Link>
            <span className="text-black/10">/</span>
            <span className="text-ink">{data.name}</span>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Image Gallery */}
            <div className="lg:w-1/2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square bg-soft-gray border border-black/5 overflow-hidden group cursor-zoom-in"
                onClick={() => setSelectedImage(galleryImages[0])}
              >
                <img 
                  src={galleryImages[0]} 
                  alt={data.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/50 backdrop-blur-md flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={20} />
                </div>
              </motion.div>
              <div className="grid grid-cols-4 gap-6">
                {galleryImages.map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-soft-gray border border-black/5 overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${data.name} ${i}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-industrial-orange font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Premium Export Grade</span>
                <h1 className="text-5xl md:text-7xl font-black text-ink tracking-tighter uppercase leading-[0.9] mb-8">{data.title}</h1>
                <p className="text-gray-600 text-xl font-light leading-relaxed">{data.desc}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-12 border-y border-black/5">
                {[
                  { icon: <Flame size={24} />, label: 'Heat Level', value: data.specs.heatLevel },
                  { icon: <Clock size={24} />, label: 'Burning Time', value: data.specs.burningTime },
                  { icon: <Droplets size={24} />, label: 'Moisture', value: data.specs.moisture },
                  { icon: <Trash2 size={24} />, label: 'Ash Content', value: data.specs.ashContent },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">{item.label}</p>
                      <p className="text-ink font-black text-lg tracking-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-black text-ink uppercase tracking-tighter">Technical Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(data.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-4 border-b border-black/5">
                      <span className="text-gray-400 uppercase tracking-widest font-black text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-ink font-black text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="bg-industrial-orange text-white font-bold py-6 px-12 uppercase tracking-widest text-sm hover:bg-ink transition-all flex-grow text-center">
                  Request Quote & TDS
                </Link>
                <Link to="/export" className="border border-black/20 text-ink font-bold py-6 px-12 uppercase tracking-widest text-sm hover:bg-black/5 transition-all flex-grow text-center">
                  Export Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-ink hover:text-industrial-orange transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Comparison Section */}
      <section className="py-40 bg-paper-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Industrial Benchmarking</span>
            <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase">WHY CHOOSE <span className="text-industrial-orange">ĐHP</span>?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: 'High Density', 
                desc: 'Our charcoal is compressed under natural kiln pressure for 15 days, resulting in a density that is 30% higher than standard BBQ charcoal.',
                icon: <Maximize2 size={32} />
              },
              { 
                title: 'Low Ash', 
                desc: 'With an ash content below 2.5%, our charcoal leaves minimal residue, keeping your grills cleaner and heat more consistent.',
                icon: <Trash2 size={32} />
              },
              { 
                title: 'Long Burn', 
                desc: 'A single load of ĐHP Binchotan can last up to 8 hours, reducing the need for frequent refueling in busy restaurant environments.',
                icon: <Clock size={32} />
              },
            ].map((item, i) => (
              <div key={i} className="p-12 bg-soft-gray border border-black/5 hover:border-industrial-orange/30 transition-colors group">
                <div className="text-industrial-orange mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-black text-ink uppercase tracking-tighter mb-6">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-32 bg-soft-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-industrial-orange">
                <Shield size={24} />
                <h4 className="font-black uppercase tracking-widest text-sm">SGS Certified</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Every shipment is accompanied by a third-party laboratory analysis report ensuring compliance with your specific standards.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-industrial-orange">
                <Package size={24} />
                <h4 className="font-black uppercase tracking-widest text-sm">Custom OEM</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-light">We provide private label packaging solutions for distributors, including custom carton design and multi-language printing.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-industrial-orange">
                <Truck size={24} />
                <h4 className="font-black uppercase tracking-widest text-sm">Direct Export</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Direct container loading at our factory ensures minimal handling and maximum protection for the charcoal's structure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
