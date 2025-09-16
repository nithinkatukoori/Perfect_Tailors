import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white pt-24 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif text-stone-800 mb-4 leading-tight">
              Perfect Ladies Tailor
            </h1>
            <p className="text-xl lg:text-2xl text-stone-600 mb-6 font-light">
              By Master K. Srinivas – 25+ Years of Expertise in Indian Ladies Tailoring
            </p>
            <p className="text-lg text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the art of traditional Indian craftsmanship with contemporary elegance. 
              Each garment is meticulously tailored to perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-amber-700 text-white px-8 py-3 rounded-sm font-medium hover:bg-amber-800 transition-colors duration-200"
              >
                View Our Services
              </Link>
              <Link
                to="/contact"
                className="border border-stone-300 text-stone-700 px-8 py-3 rounded-sm font-medium hover:bg-stone-50 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-serif text-stone-800 mb-2">25+ Years Experience</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Master craftsman with decades of expertise in Indian ladies tailoring
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Star className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-serif text-stone-800 mb-2">Premium Quality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Meticulous attention to detail ensuring perfect fit and finish
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-serif text-stone-800 mb-2">Trusted by Many</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Countless satisfied customers across Hyderabad trust our expertise
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Clock className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-serif text-stone-800 mb-2">Timely Delivery</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Committed to delivering your garments on time, every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Preview */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From traditional blouses to contemporary ethnic wear, we craft each piece with passion and precision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Designer Blouses',
              'Salwar Suits',
              'Lehengas',
              'Party Dresses',
              'Custom Ethnic Wear'
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 text-center rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-700 rounded-sm"></div>
                </div>
                <h3 className="font-medium text-stone-800 mb-2">{service}</h3>
                <p className="text-stone-600 text-sm">Expertly crafted with traditional techniques</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium transition-colors duration-200"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">
            Ready to Experience Perfect Tailoring?
          </h2>
          <p className="text-amber-100 text-lg mb-8 leading-relaxed">
            Visit us at Chikkadpally, Hyderabad, or get in touch to discuss your tailoring needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-700 px-8 py-3 rounded-sm font-medium hover:bg-amber-50 transition-colors duration-200"
            >
              Visit Our Store
            </Link>
            <a
              href="https://wa.me/919876543210"
              className="border border-amber-500 text-white px-8 py-3 rounded-sm font-medium hover:bg-amber-600 transition-colors duration-200"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;