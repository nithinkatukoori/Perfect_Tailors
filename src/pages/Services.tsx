import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Designer Blouses',
      description: 'Elegant blouses with intricate designs, perfect cuts, and contemporary styling',
      features: ['Custom fitting', 'Multiple sleeve styles', 'Traditional & modern designs', 'Premium fabrics'],
      image: 'https://www.ishopstori.com/cdn/shop/files/DakshaBlouse-Green.png?v=1733943481'
    },
    {
      title: 'Salwar Suits',
      description: 'Complete salwar kameez sets tailored to perfection with attention to comfort and style',
      features: ['Punjabi suits', 'Anarkali styles', 'Straight cut suits', 'Palazzo sets'],
      image: 'https://gunjfashion.com/cdn/shop/files/teal-net-sequins-embroidered-slit-pant-style-salwar-suit-for-women_2.jpg?v=1712319753'
    },
    {
      title: 'Lehengas',
      description: 'Stunning lehengas for weddings and special occasions with exquisite detailing',
      features: ['Wedding lehengas', 'Party wear', 'Traditional patterns', 'Custom embellishments'],
      image: 'https://mehakboutique.com/cdn/shop/files/wedding-lehenga-choli-1005g2_cddc9944-eca0-4911-87f3-b2612ad3057f_1024x1024@2x.jpg?v=1731066751'
    },
    {
      title: 'Party Dresses',
      description: 'Contemporary dresses with Indian aesthetics for modern celebrations',
      features: ['Indo-western fusion', 'Cocktail dresses', 'Evening wear', 'Festive collections'],
      image: 'https://arisenstore.com/cdn/shop/products/il_fullxfull.2201666465_rgm0.jpg?v=1657703645'
    },
    {
      title: 'Custom Ethnic Wear',
      description: 'Bespoke Indian garments designed according to your unique requirements',
      features: ['Traditional saree blouses', 'Gharara sets', 'Sharara suits', 'Festival wear'],
      image: 'https://cdn.shopify.com/s/files/1/0610/8948/0876/files/The-Mihrumah-Lehenga.jpg'
    },
    {
      title: 'Alterations & Repairs',
      description: 'Professional alterations and repairs to give your garments a perfect fit',
      features: ['Size adjustments', 'Style modifications', 'Fabric repairs', 'Hemming services'],
      image: 'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Discover our comprehensive range of Indian ladies tailoring services, 
              each crafted with 25+ years of expertise and passion for perfection
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="bg-stone-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300w-full h-64 sm:h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif text-stone-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-stone-600">
                          <Check className="w-4 h-4 text-amber-700 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">
              Our Tailoring Process
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From consultation to final fitting, we ensure every step meets our high standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Discuss your vision, requirements, and fabric preferences'
              },
              {
                step: '02',
                title: 'Measurements',
                description: 'Precise measurements taken for perfect fitting'
              },
              {
                step: '03',
                title: 'Crafting',
                description: 'Expert tailoring with attention to every detail'
              },
              {
                step: '04',
                title: 'Final Fitting',
                description: 'Final adjustments and quality check before delivery'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-full text-xl font-serif mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-serif text-stone-800 mb-2">{process.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-4">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-stone-600 mb-8">
            Contact us today to discuss your tailoring needs and experience the difference of expert craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919441012091"
              className="bg-amber-700 text-white px-8 py-3 rounded-sm font-medium hover:bg-amber-800 transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              className="border border-stone-300 text-stone-700 px-8 py-3 rounded-sm font-medium hover:bg-stone-50 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;