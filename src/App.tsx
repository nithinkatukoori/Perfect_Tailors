import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-stone-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Perfect Ladies Tailor</h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Master K. Srinivas brings over 25 years of expertise in traditional 
                  Indian ladies tailoring, creating garments that celebrate elegance and craftsmanship.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="text-stone-300 hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="/about" className="text-stone-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-stone-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-stone-300">
                  <p>Chikkadpally, Hyderabad</p>
                  <p>+91 9441012091</p>
                  <p>Mon-Sat: 10 AM - 8 PM</p>
                  <p>Sunday: 11 AM - 4 PM</p>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm text-stone-400">
              <p>&copy; 2025 Perfect Ladies Tailor. All rights reserved. | Crafted with care by Master K. Srinivas</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;