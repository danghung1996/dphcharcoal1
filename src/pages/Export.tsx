import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Package, Truck, FileText, CheckSquare, Shield, Globe, ArrowRight, Layers, Box, Archive, Settings } from 'lucide-react';

const Export = () => {
  return (
    <div className="pt-32 bg-paper-white min-h-screen">
      {/* Hero */}
      <section className="bg-soft-gray py-24 border-b border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Truck size={600} className="absolute -top-20 -right-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Global Supply Chain</span>
            <h1 className="text-5xl md:text-8xl font-black text-ink mb-8 tracking-tighter uppercase leading-[0.9]">
              EXPORT <br />
              <span className="text-industrial-orange">EXCELLENCE</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              ĐHP Charcoal is a professional exporter with a deep understanding of international shipping 
              requirements and documentation. We ensure your order arrives safely and on time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packaging Infographic */}
      <section className="py-40 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase leading-[0.9]">
                  PACKAGING <br />
                  <span className="text-industrial-orange">SOLUTIONS</span>
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  We offer a variety of packaging solutions to meet the needs of different markets. 
                  Whether you are a wholesaler or a retail brand, we can provide the right solution.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { icon: <Box size={24} />, title: '10kg / 15kg Carton', desc: 'Premium 5-layer carton with inner plastic lining.' },
                  { icon: <Archive size={24} />, title: '20kg PP Bag', desc: 'Durable woven bags for bulk restaurant supply.' },
                  { icon: <Layers size={24} />, title: 'OEM Private Label', desc: 'Custom branding and design for your retail identity.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-6 p-8 bg-soft-gray border border-black/5 hover:border-industrial-orange transition-colors group"
                  >
                    <div className="w-14 h-14 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange group-hover:bg-industrial-orange group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-ink font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/export-packaging/800/1000?grayscale" 
                  alt="Packaging" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-industrial-orange p-12 hidden md:block">
                <span className="text-white font-black text-5xl tracking-tighter uppercase">26 TONS</span>
                <p className="text-white font-bold uppercase tracking-widest text-xs mt-2">Max 40ft Load</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Workflow Infographic */}
      <section className="py-40 bg-soft-gray relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">The Journey</span>
            <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase">EXPORT WORKFLOW</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 hidden lg:block -translate-y-1/2"></div>
            
            {[
              { icon: <FileText size={28} />, title: 'Inquiry', desc: 'Detailed specs & volume request.' },
              { icon: <CheckSquare size={28} />, title: 'Quotation', desc: 'FOB/CIF pricing & contract.' },
              { icon: <Settings size={28} />, title: 'Production', desc: 'Kiln carbonization & QC.' },
              { icon: <Package size={28} />, title: 'Loading', desc: 'Professional container stuffing.' },
              { icon: <Truck size={28} />, title: 'Shipping', desc: 'Global delivery & docs.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-6 group"
              >
                <div className="w-24 h-24 bg-paper-white border-2 border-black/5 flex items-center justify-center text-ink group-hover:border-industrial-orange group-hover:text-industrial-orange transition-all rounded-full">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-ink uppercase tracking-widest">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[150px] mx-auto">{item.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="lg:hidden w-[1px] h-10 bg-black/5 mx-auto"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Documents */}
      <section className="py-40 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase leading-[0.9]">
                SHIPPING <br />
                <span className="text-industrial-orange">DOCUMENTS</span>
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                We provide a full set of export documents to ensure smooth customs clearance in your country. Our team handles all regulatory compliance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Bill of Lading (B/L)',
                  'Commercial Invoice',
                  'Packing List',
                  'Certificate of Origin',
                  'Fumigation Cert',
                  'Phytosanitary Cert',
                  'Self-Heating Test',
                  'MSDS Report'
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 bg-soft-gray border border-black/5">
                    <Shield size={16} className="text-industrial-orange shrink-0" />
                    <span className="text-gray-700 text-xs font-bold uppercase tracking-widest">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-soft-gray p-16 border border-black/5 relative z-10">
                <div className="flex items-center space-x-6 mb-10">
                  <Globe className="text-industrial-orange" size={40} />
                  <h3 className="text-3xl font-black text-ink uppercase tracking-tighter">Global Logistics</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-10">
                  We work with major shipping lines like Maersk, CMA CGM, MSC, and ONE to provide competitive 
                  freight rates and reliable transit times to ports in Japan, Korea, Europe, and the Middle East.
                </p>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-black/5 pb-4">
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-black">Port of Loading</span>
                    <span className="text-ink font-bold text-sm">Haiphong / Ho Chi Minh</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/5 pb-4">
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-black">Incoterms</span>
                    <span className="text-ink font-bold text-sm">FOB, CIF, CNF, DDU</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-black">Transit Time</span>
                    <span className="text-ink font-bold text-sm">7 - 35 Days</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-industrial-orange/10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-industrial-orange">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              READY TO <br />SHIP?
            </h2>
            <Link to="/contact" className="bg-white text-ink font-bold py-6 px-16 uppercase tracking-widest text-sm hover:bg-ink hover:text-white transition-all inline-flex items-center group">
              Get Shipping Quote <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;
