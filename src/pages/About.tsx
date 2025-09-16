import React from 'react';
import { Award, Heart, Users, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-amber-700" />,
      title: 'Excellence',
      description: 'Every stitch reflects our commitment to uncompromising quality and perfection'
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-700" />,
      title: 'Passion',
      description: 'Our love for traditional Indian craftsmanship drives everything we create'
    },
    {
      icon: <Users className="w-8 h-8 text-amber-700" />,
      title: 'Customer First',
      description: 'Your satisfaction and comfort are at the heart of our service philosophy'
    },
    {
      icon: <Star className="w-8 h-8 text-amber-700" />,
      title: 'Innovation',
      description: 'Blending timeless techniques with contemporary design sensibilities'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Blouse Designs' },
    { number: '100%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-6">
                Meet Master K. Srinivas
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                With over 25 years of dedicated experience in Indian ladies tailoring, 
                Master K. Srinivas has become synonymous with excellence, precision, and artistry 
                in the heart of Chikkadpally, Hyderabad.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                His journey began with a passion for traditional Indian garments and an unwavering 
                commitment to quality. Today, Perfect Ladies Tailor stands as a testament to his 
                expertise, serving customers who value craftsmanship, attention to detail, and 
                the perfect fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+91 9441012091"
                  className="bg-amber-700 text-white px-6 py-3 rounded-sm font-medium hover:bg-amber-800 transition-colors duration-200 text-center"
                >
                  Schedule Consultation
                </a>
                <a
                  href="https://wa.me/919441012091"
                  className="border border-stone-300 text-stone-700 px-6 py-3 rounded-sm font-medium hover:bg-stone-50 transition-colors duration-200 text-center"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden">
                <img
                  src="/assets/srinivaskatukoori.jpg"
                  alt="Master K. Srinivas at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-sm">
                <div className="text-3xl font-serif font-bold">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="text-3xl lg:text-4xl font-serif text-amber-700 font-bold mb-2 group-hover:scale-110 transition-transform duration-200">
                  {achievement.number}
                </div>
                <div className="text-stone-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The principles that guide our craft and define our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6 group-hover:shadow-md transition-shadow duration-200">
                  {value.icon}
                </div>
                <h3 className="text-lg font-serif text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-6">
              Our Story
            </h2>
          </div>
          <div className="space-y-8 text-stone-600 leading-relaxed">
            <p className="text-lg">
              Perfect Ladies Tailor was born from a simple yet profound belief: every woman deserves 
              garments that not only fit perfectly but also celebrate her individuality and the rich 
              tradition of Indian craftsmanship.
            </p>
            <p>
              Master K. Srinivas began his journey as a young apprentice, learning the intricate art 
              of tailoring from skilled craftsmen in Hyderabad. His dedication to understanding the 
              nuances of fit, fabric, and traditional Indian silhouettes set him apart from the very beginning.
            </p>
            <p>
              Over the years, he has mastered the art of creating stunning blouses that complement 
              sarees perfectly, elegant salwar suits that blend comfort with style, and lehengas that 
              make every occasion memorable. His expertise extends beyond mere stitching – he understands 
              the cultural significance of each garment and ensures that tradition meets contemporary elegance.
            </p>
            <p>
              Today, located in the bustling area of Chikkadpally, Perfect Ladies Tailor continues to 
              serve customers who appreciate quality, craftsmanship, and the personal touch that only 
              comes from years of experience and genuine passion for the craft.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-stone-600">
              The trust and satisfaction of our customers inspire us every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                text: "Master Srinivas has been tailoring my blouses for over 5 years. The fit is always perfect, and the attention to detail is remarkable."
              },
              {
                name: "Lakshmi Reddy", 
                text: "I had my wedding lehenga made here, and it was absolutely stunning. The craftsmanship exceeded all my expectations."
              },
              {
                name: "Meera Patel",
                text: "Professional service, timely delivery, and beautiful work. I wouldn't trust my special occasion outfits with anyone else."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-stone-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;