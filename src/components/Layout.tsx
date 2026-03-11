import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe, ChevronRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Factory', path: '/factory' },
    { name: 'Export', path: '/export' },
    { name: 'Supplier', path: '/charcoal-manufacturer' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-paper-white/80 backdrop-blur-2xl py-4 border-b border-black/5 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative w-12 h-12 bg-industrial-orange rounded-none flex items-center justify-center font-black text-black text-2xl transition-transform duration-500 group-hover:rotate-90">
            Đ
            <div className="absolute inset-0 border border-black/10 -m-1 group-hover:m-0 transition-all"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-ink leading-none">ĐHP <span className="text-industrial-orange">CHARCOAL</span></span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400 mt-1">Industrial Excellence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-colors group py-2 ${location.pathname === link.path ? 'text-industrial-orange' : 'text-gray-600 hover:text-ink'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-industrial-orange transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          
          <Link to="/contact" className="bg-ink text-white font-black py-3 px-8 text-[10px] uppercase tracking-[0.2em] hover:bg-industrial-orange transition-colors">
            Inquiry
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-soft-gray border-t border-black/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest text-charcoal hover:text-industrial-orange"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-soft-gray pt-20 pb-10 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-industrial-orange rounded-sm flex items-center justify-center font-bold text-black">Đ</div>
              <span className="text-xl font-bold tracking-tighter text-ink">ĐHP CHARCOAL</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leading manufacturer and exporter of premium White Charcoal and Binchotan. 
              Committed to sustainable production and international quality standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-industrial-orange hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-industrial-orange hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-industrial-orange hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-ink font-bold uppercase tracking-widest mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-industrial-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-industrial-orange transition-colors">Our Products</Link></li>
              <li><Link to="/factory" className="hover:text-industrial-orange transition-colors">Production Facility</Link></li>
              <li><Link to="/export" className="hover:text-industrial-orange transition-colors">Export Services</Link></li>
              <li><Link to="/resources" className="hover:text-industrial-orange transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-industrial-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-bold uppercase tracking-widest mb-8 text-sm">Products</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/products/white-charcoal" className="hover:text-industrial-orange transition-colors">White Charcoal</Link></li>
              <li><Link to="/products/binchotan-charcoal" className="hover:text-industrial-orange transition-colors">Binchotan Charcoal</Link></li>
              <li><Link to="/products/bbq-charcoal" className="hover:text-industrial-orange transition-colors">BBQ Charcoal</Link></li>
              <li><Link to="/white-charcoal-supplier" className="hover:text-industrial-orange transition-colors">Wholesale Supply</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-bold uppercase tracking-widest mb-8 text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-industrial-orange mt-1 shrink-0" />
                <span>+84 (0) 123 456 789</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-industrial-orange mt-1 shrink-0" />
                <span>info@dhpcharcoal.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe size={16} className="text-industrial-orange mt-1 shrink-0" />
                <span>Vietnam Production Base</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © 2026 ĐHP CHARCOAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-xs text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
