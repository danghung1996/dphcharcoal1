import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Factory from './pages/Factory';
import Export from './pages/Export';
import SupplierSEO from './pages/SupplierSEO';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            
            {/* Product Detail Routes */}
            <Route path="/products/white-charcoal" element={<ProductDetail type="white" />} />
            <Route path="/products/binchotan-charcoal" element={<ProductDetail type="binchotan" />} />
            <Route path="/products/bbq-charcoal" element={<ProductDetail type="bbq" />} />
            
            <Route path="/factory" element={<Factory />} />
            <Route path="/export" element={<Export />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* SEO Supplier Routes */}
            <Route path="/white-charcoal-supplier" element={<SupplierSEO type="white-supplier" />} />
            <Route path="/binchotan-charcoal-supplier" element={<SupplierSEO type="binchotan-supplier" />} />
            <Route path="/charcoal-manufacturer" element={<SupplierSEO type="manufacturer" />} />
            <Route path="/bbq-charcoal-supplier" element={<SupplierSEO type="bbq-supplier" />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
