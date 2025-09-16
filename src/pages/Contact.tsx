import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Visit us at our shop in Chikkadpally, Hyderabad, or reach out to discuss 
              your tailoring needs. We're here to help create the perfect garment for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif text-stone-800 mb-8">
                Visit Our Shop
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Address</h3>
                    <p className="text-stone-600">
                      Perfect Ladies Tailor<br />
                      shree balaji arch lane <br />
                      Chikkadpally<br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Phone</h3>
                    <a href="tel:+91 9441012091" className="text-stone-600 hover:text-amber-700 transition-colors">
                      +91 9441012091
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919441012091" className="text-stone-600 hover:text-emerald-600 transition-colors">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Shop Hours</h3>
                    <div className="text-stone-600">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: 11:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919441012091"
                  className="flex items-center justify-center space-x-2 bg-amber-700 text-white px-6 py-3 rounded-sm font-medium hover:bg-amber-800 transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919441012091"
                  className="flex items-center justify-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-sm font-medium hover:bg-emerald-700 transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif text-stone-800 mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="blouses">Designer Blouses</option>
                    <option value="salwar-suits">Salwar Suits</option>
                    <option value="lehengas">Lehengas</option>
                    <option value="dresses">Party Dresses</option>
                    <option value="custom">Custom Ethnic Wear</option>
                    <option value="alterations">Alterations & Repairs</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-y"
                    placeholder="Tell us about your requirements, preferred fabrics, occasion, or any specific details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white px-6 py-3 rounded-sm font-medium hover:bg-amber-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    {/* Map Section */}
<section className="py-16 bg-stone-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-serif text-stone-800 mb-4">
        Find Us on the Map
      </h2>
      <p className="text-stone-600">
        Located in the heart of Chikkadpally, easily accessible by public transport
      </p>
    </div>

    {/* Google Maps Embed */}
    <div className="relative w-full h-96 rounded-sm overflow-hidden">
      <iframe
        title="Perfect Ladies Tailor Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.193916766509!2d78.49575039999999!3d17.4024791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c050af5dd1%3A0x2e9c58538b7dc649!2sVaradha%20Mess!5e0!3m2!1sen!2sin!4v1758057019467!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to complete a garment?",
                answer: "Typically, blouses take 3-5 days, salwar suits take 5-7 days, and lehengas take 7-10 days. During wedding season, please allow extra time."
              },
              {
                question: "Do you provide fabric or should I bring my own?",
                answer: "We work with both options. You can bring your own fabric, or we can help you select from our collection of premium fabrics."
              },
              {
                question: "What are your charges for different services?",
                answer: "Pricing varies based on the garment type, complexity, and fabric. Please visit our shop or call us for detailed pricing information."
              },
              {
                question: "Do you offer home delivery?",
                answer: "Yes, we provide home delivery within Hyderabad for completed orders. Delivery charges may apply based on location."
              },
              {
                question: "Can you alter ready-made garments?",
                answer: "Absolutely! We offer professional alteration services for ready-made garments to ensure the perfect fit."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-stone-200 rounded-sm p-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;