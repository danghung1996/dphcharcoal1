import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our export team will contact you shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="pt-32 bg-paper-white">
      <section className="bg-soft-gray py-20 border-b border-black/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-industrial-orange font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-bold text-ink mb-8 tracking-tighter uppercase">Contact Us</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions about our products or export capabilities? Our team is ready to assist you 
              with technical data, pricing, and logistics planning.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-paper-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-soft-gray p-10 md:p-16 border border-black/5">
                <h2 className="text-3xl font-bold text-ink uppercase tracking-tight mb-10">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-paper-white border border-black/10 p-4 text-ink focus:border-industrial-orange outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-paper-white border border-black/10 p-4 text-ink focus:border-industrial-orange outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-paper-white border border-black/10 p-4 text-ink focus:border-industrial-orange outline-none transition-colors"
                      placeholder="Global Distributors Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Message</label>
                    <textarea 
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-paper-white border border-black/10 p-4 text-ink focus:border-industrial-orange outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements (volume, destination, etc.)"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-industrial-orange text-white font-bold py-5 px-12 uppercase tracking-widest text-sm hover:bg-ink transition-all flex items-center justify-center group w-full md:w-auto">
                    Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5 space-y-10">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-ink uppercase tracking-tight">Company Info</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-ink font-bold uppercase tracking-widest text-xs mb-2">Production Base</h4>
                      <p className="text-gray-500 text-sm">Vietnam Charcoal Production Zone, Haiphong / Ho Chi Minh City</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-ink font-bold uppercase tracking-widest text-xs mb-2">Email Address</h4>
                      <p className="text-gray-500 text-sm">info@dhpcharcoal.com</p>
                      <p className="text-gray-500 text-sm">sales@dhpcharcoal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-industrial-orange/5 flex items-center justify-center text-industrial-orange shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-ink font-bold uppercase tracking-widest text-xs mb-2">Phone / WhatsApp</h4>
                      <p className="text-gray-500 text-sm">+84 (0) 123 456 789</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-soft-gray p-10 border border-black/5 space-y-6">
                <h3 className="text-xl font-bold text-ink uppercase tracking-widest">Production Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Monthly Capacity</span>
                    <span className="text-industrial-orange font-bold">200 Tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Export Volume</span>
                    <span className="text-industrial-orange font-bold">7-8 Containers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Response Time</span>
                    <span className="text-industrial-orange font-bold">&lt; 24 Hours</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <a href="https://wa.me/84123456789" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold py-4 px-8 uppercase tracking-widest text-xs flex items-center justify-center hover:opacity-90 transition-opacity">
                  <MessageCircle size={18} className="mr-3" /> Chat on WhatsApp
                </a>
                <a href="#" className="bg-black/5 text-ink font-bold py-4 px-8 uppercase tracking-widest text-xs flex items-center justify-center hover:bg-black/10 transition-colors border border-black/10">
                  <Globe size={18} className="mr-3" /> Global Sales Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
