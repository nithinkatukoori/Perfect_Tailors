import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl font-serif text-stone-800 font-medium">
              Perfect Ladies Tailor
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-amber-700 border-b-2 border-amber-700'
                    : 'text-stone-600 hover:text-stone-800'
                } pb-1`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-stone-200">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center space-x-1 text-sm text-amber-700 hover:text-amber-800 transition-colors"
              >
                <Phone size={16} />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center space-x-1 text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-amber-700 bg-amber-50'
                      : 'text-stone-600 hover:text-stone-800 hover:bg-stone-50'
                  } rounded-md`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-stone-200 mt-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;