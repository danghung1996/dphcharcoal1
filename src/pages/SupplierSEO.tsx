import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Globe, Award } from 'lucide-react';

interface SupplierSEOProps {
  type: 'white-supplier' | 'binchotan-supplier' | 'manufacturer' | 'bbq-supplier';
}

const SupplierSEO: React.FC<SupplierSEOProps> = ({ type }) => {
  const seoData = {
    'white-supplier': {
      title: 'White Charcoal Supplier & Exporter from Vietnam',
      heading: 'Leading White Charcoal Supplier for Global Markets',
      desc: 'ĐHP Charcoal is your reliable partner for high-quality white charcoal (ogatan) supply. We specialize in manufacturing and exporting premium white charcoal to Japan, Korea, and the Middle East.',
      advantages: [
        'Direct manufacturer pricing',
        'Consistent high-density quality',
        'Smokeless and long-burning performance',
        'Customized packaging for wholesale'
      ],
      keywords: 'white charcoal supplier, white charcoal exporter, vietnam white charcoal, ogatan supplier'
    },
    'binchotan-supplier': {
      title: 'Binchotan Charcoal Supplier - Premium Quality Exporter',
      heading: 'Authentic Binchotan Charcoal Supplier for BBQ Restaurants',
      desc: 'As a specialized Binchotan charcoal supplier, we provide the highest grade of white charcoal to premium restaurants and distributors worldwide. Our Binchotan is crafted using traditional kiln methods.',
      advantages: [
        'Superior far-infrared heat output',
        'Extremely long burning time (up to 8 hours)',
        'Metallic sound and high carbon content',
        'Trusted by top Yakitori chefs in Japan'
      ],
      keywords: 'binchotan supplier, binchotan exporter, premium charcoal supplier, binchotan wholesaler'
    },
    'manufacturer': {
      title: 'Charcoal Manufacturer in Vietnam - ĐHP Charcoal',
      heading: 'Professional Charcoal Manufacturer with 200 Tons Monthly Capacity',
      desc: 'ĐHP Charcoal is a leading charcoal manufacturer in Vietnam, operating over 50 kilns to produce high-grade white charcoal and binchotan. We control the entire production process from wood selection to export.',
      advantages: [
        'Large scale production capacity',
        'Strict quality control at every step',
        'Sustainable wood sourcing',
        'Experienced production masters'
      ],
      keywords: 'charcoal manufacturer, charcoal factory vietnam, charcoal production, bulk charcoal supplier'
    },
    'bbq-supplier': {
      title: 'BBQ Charcoal Supplier - Wholesale Restaurant Grade',
      heading: 'Reliable BBQ Charcoal Supplier for Distributors & Restaurants',
      desc: 'We are a leading BBQ charcoal supplier providing consistent, high-heat fuel for professional kitchens. Our charcoal is optimized for restaurant use with minimal smoke and easy ignition.',
      advantages: [
        'Steady heat for consistent cooking',
        'Minimal sparking and smoke',
        'Cost-effective wholesale pricing',
        'Reliable monthly supply chain'
      ],
      keywords: 'bbq charcoal supplier, restaurant charcoal supplier, wholesale bbq charcoal, charcoal distributor'
    }
  };

  const data = seoData[type];

  return (
    <div className="pt-32 bg-paper-white">
      {/* SEO Header */}
      <section className="bg-soft-gray py-20 border-b border-black/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-industrial-orange font-bold uppercase tracking-widest text-sm mb-4 block">Wholesale & Export</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-8 tracking-tighter uppercase leading-tight">{data.heading}</h1>
            <p className="text-gray-600 text-xl leading-relaxed">{data.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-ink uppercase tracking-tight">Why Choose ĐHP Charcoal as Your Supplier?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Choosing the right supplier is critical for your business continuity. At ĐHP Charcoal, we understand the 
                  demands of the international market. Our production capacity of 200 tons per month ensures that we can 
                  meet the needs of even the largest distributors.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {data.advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <CheckCircle className="text-industrial-orange shrink-0" size={24} />
                      <span className="text-gray-800 font-medium">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-ink uppercase tracking-tight">Export Markets & Logistics</h2>
                <p className="text-gray-600 leading-relaxed">
                  We have extensive experience exporting to Japan, Korea, Europe, and the Middle East. Our logistics team 
                  handles all aspects of the export process, providing you with a hassle-free sourcing experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Japan', 'Korea', 'Germany', 'UAE', 'Saudi Arabia', 'France'].map((market) => (
                    <span key={market} className="px-4 py-2 bg-soft-gray border border-black/10 text-xs font-bold uppercase tracking-widest text-gray-500">
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-soft-gray border border-black/5 space-y-6">
                <h3 className="text-2xl font-bold text-ink uppercase tracking-widest">Request Wholesale Pricing</h3>
                <p className="text-gray-600 text-sm">
                  We offer competitive FOB and CIF pricing for container-load orders. Contact our export department 
                  today to receive our latest price list and technical specifications.
                </p>
                <Link to="/contact" className="bg-industrial-orange text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-ink transition-all inline-flex items-center group">
                  Contact Export Team <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-soft-gray p-8 border border-black/5">
                <h4 className="text-ink font-bold uppercase tracking-widest text-sm mb-6">Our Capabilities</h4>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="text-industrial-orange" size={24} />
                    <span className="text-gray-700 text-sm font-bold uppercase">SGS Certified Quality</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="text-industrial-orange" size={24} />
                    <span className="text-gray-700 text-sm font-bold uppercase">Global Shipping Network</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="text-industrial-orange" size={24} />
                    <span className="text-gray-700 text-sm font-bold uppercase">200 Tons Monthly Output</span>
                  </div>
                </div>
              </div>

              <div className="bg-industrial-orange/5 p-8 border border-industrial-orange/20">
                <h4 className="text-industrial-orange font-bold uppercase tracking-widest text-sm mb-4">SEO Keywords</h4>
                <p className="text-gray-500 text-xs italic leading-relaxed">
                  {data.keywords}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplierSEO;
