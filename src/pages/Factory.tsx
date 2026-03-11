import React from 'react';
import { motion } from 'motion/react';
import { Thermometer, Zap, ShieldCheck, Settings, Layers, Flame, Droplets, Trash2, Box, Truck } from 'lucide-react';

const Factory = () => {
  return (
    <div className="pt-32 bg-paper-white min-h-screen">
      {/* Hero */}
      <section className="bg-soft-gray py-24 border-b border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Settings size={600} className="absolute -top-20 -right-20 animate-[spin_100s_linear_infinite]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Production Excellence</span>
            <h1 className="text-5xl md:text-8xl font-black text-ink mb-8 tracking-tighter uppercase leading-[0.9]">
              THE <br />
              <span className="text-industrial-orange">FACTORY</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              Located in the heart of Vietnam's hardwood region, our production facility combines traditional 
              charcoal-making wisdom with modern industrial management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Production Process Timeline */}
      <section className="py-40 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-industrial-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Step by Step</span>
            <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase">PRODUCTION PROCESS</h2>
          </div>

          <div className="space-y-24">
            {[
              { 
                step: '01', 
                title: 'Wood Selection', 
                desc: 'We only use sustainably sourced hardwood like Lychee, Longan, or Coffee wood. The wood is selected for its high density and moisture content, which are critical for the final carbon structure.',
                img: 'factory-wood'
              },
              { 
                step: '02', 
                title: 'Kiln Carbonization', 
                desc: 'Wood is carbonized in traditional brick kilns at 400-600°C for 10-15 days. This slow process ensures complete carbonization without compromising the wood structure.',
                img: 'factory-kiln'
              },
              { 
                step: '03', 
                title: 'Refining (White Charcoal)', 
                desc: 'For White Charcoal, the temperature is raised to 1000°C+ at the end of the process. This "refining" stage burns off impurities and creates the characteristic metallic sound.',
                img: 'factory-refine'
              },
              { 
                step: '04', 
                title: 'Cooling & Quality Check', 
                desc: 'Charcoal is cooled using a specialized sand and ash mixture. Every piece is then inspected for size, density, and surface quality before moving to the packing line.',
                img: 'factory-qc'
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${item.img}/1000/600?grayscale`} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-industrial-orange flex items-center justify-center text-white font-black text-3xl">
                    {item.step}
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-black text-ink uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-gray-600 text-lg font-light leading-relaxed">{item.desc}</p>
                  <div className="flex items-center space-x-4 text-industrial-orange font-bold uppercase tracking-widest text-xs">
                    <Layers size={16} />
                    <span>Industrial Standard Process</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiln Infrastructure */}
      <section className="py-40 bg-soft-gray relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter uppercase leading-[0.9]">
                50+ TRADITIONAL <br />
                <span className="text-industrial-orange">BRICK KILNS</span>
              </h2>
              <p className="text-gray-600 text-xl font-light leading-relaxed">
                Our factory houses over 50 specialized kilns. Each kiln is monitored by experienced masters who 
                can tell the progress of carbonization by the color and smell of the smoke. This human touch 
                is what makes ĐHP Charcoal superior to mass-produced industrial alternatives.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="text-industrial-orange"><Thermometer size={32} /></div>
                  <h4 className="text-ink font-bold uppercase tracking-widest text-xs">Precision Heat</h4>
                  <p className="text-gray-500 text-xs">Controlled temperature curves for consistent density.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-industrial-orange"><ShieldCheck size={32} /></div>
                  <h4 className="text-ink font-bold uppercase tracking-widest text-xs">Master Oversight</h4>
                  <p className="text-gray-500 text-xs">Human expertise guiding every carbonization cycle.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/kiln-infra-1/400/600?grayscale" alt="Kiln 1" className="w-full h-auto grayscale rounded-sm" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/kiln-infra-2/400/400?grayscale" alt="Kiln 2" className="w-full h-auto grayscale rounded-sm" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/kiln-infra-3/400/400?grayscale" alt="Kiln 3" className="w-full h-auto grayscale rounded-sm" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/kiln-infra-4/400/600?grayscale" alt="Kiln 4" className="w-full h-auto grayscale rounded-sm" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Inspection Lab */}
      <section className="py-40 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="bg-industrial-orange p-16 md:p-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 skew-x-[-15deg] translate-x-1/4"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                  QUALITY <br />
                  INSPECTION
                </h2>
                <p className="text-white/90 text-xl font-bold leading-relaxed mb-10">
                  Every batch of charcoal is tested in our on-site lab for moisture content, ash percentage, and calorific value. 
                  We ensure that only the best pieces are packed for export.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: <Flame size={20} />, label: 'Calorific Value' },
                    { icon: <Droplets size={20} />, label: 'Moisture Test' },
                    { icon: <Trash2 size={20} />, label: 'Ash Analysis' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/10">
                      {item.icon}
                      <span className="text-white font-black uppercase tracking-widest text-[10px]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-10 border border-white/10 flex flex-col items-center text-center space-y-4">
                  <Box size={32} className="text-white" />
                  <span className="text-white font-black uppercase tracking-widest text-xs">SGS Ready</span>
                </div>
                <div className="bg-white/5 p-10 border border-white/10 flex flex-col items-center text-center space-y-4">
                  <Truck size={32} className="text-white" />
                  <span className="text-white font-black uppercase tracking-widest text-xs">Direct Load</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Factory;
