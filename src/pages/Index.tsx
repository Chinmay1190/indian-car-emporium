
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedCars from '@/components/FeaturedCars';
import BrandShowcase from '@/components/BrandShowcase';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCars />
      
      {/* Luxury Experience Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Unparalleled Luxury</h2>
              <p className="mb-6 text-lg">
                At Indian Car Emporium, we provide an exclusive automotive experience for discerning clients. 
                Each vehicle in our collection represents the pinnacle of engineering excellence and luxury.
              </p>
              <p className="mb-8">
                From personalized consultations to bespoke customization options, we ensure that your 
                journey with us is as remarkable as the automobile you acquire.
              </p>
              <Button asChild size="lg" className="btn-gold">
                <Link to="/about">
                  Discover Our Services
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1000" 
                alt="Luxury Car Interior" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-luxury-red dark:bg-gold p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm">Exclusive Models</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BrandShowcase />
      <Testimonials />
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-luxury-red to-red-800 dark:from-gold dark:to-gold-dark text-white dark:text-black">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our exclusive collection of luxury and sports cars and find your perfect match.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 dark:border-black dark:text-black dark:hover:bg-black/10">
            <Link to="/catalog">
              Explore Collection
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
