
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600"
            alt="Luxury Car Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Indian Car Emporium - Setting the standard in luxury automobile retail.</p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-lg">
                Founded in 2010, Indian Car Emporium began with a simple vision: to provide discerning 
                automotive enthusiasts with access to the world's most prestigious vehicles, delivered 
                with unparalleled service.
              </p>
              <p className="mb-4">
                What started as a boutique dealership in Mumbai has expanded into India's premier 
                luxury automobile retailer, with presence in Delhi, Bangalore, and Chennai.
              </p>
              <p className="mb-4">
                Our founder, Raj Mehta, a passionate car collector himself, created Indian Car Emporium 
                to bridge the gap between global automotive excellence and the Indian luxury market.
              </p>
              <p>
                Today, we maintain exclusive partnerships with the world's most prestigious automotive 
                brands, providing our clients with access to limited editions and bespoke customization 
                options not available elsewhere.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000"
                alt="Luxury Car"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg">
              At Indian Car Emporium, we're guided by a set of core principles that define everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-luxury-red dark:bg-gold text-white dark:text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>
                We represent only the finest automobiles and provide service that exceeds expectations. 
                From our showroom environment to our after-sales support, excellence is our standard.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-luxury-red dark:bg-gold text-white dark:text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p>
                Transparency and honesty are the foundation of our client relationships. We provide 
                accurate information, fair pricing, and deliver on every promise we make.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-luxury-red dark:bg-gold text-white dark:text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Passion</h3>
              <p>
                Our team consists of automotive enthusiasts who share a genuine passion for exceptional 
                cars. This enthusiasm drives our commitment to finding the perfect vehicle for each client.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Raj Mehta"
                className="w-40 h-40 object-cover rounded-full border-4 border-luxury-red dark:border-gold mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Raj Mehta</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Priya Sharma"
                className="w-40 h-40 object-cover rounded-full border-4 border-luxury-red dark:border-gold mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Priya Sharma</h3>
              <p className="text-muted-foreground">Chief Operations Officer</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/62.jpg"
                alt="Vikram Singh"
                className="w-40 h-40 object-cover rounded-full border-4 border-luxury-red dark:border-gold mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Vikram Singh</h3>
              <p className="text-muted-foreground">Sales Director</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/66.jpg"
                alt="Anjali Patel"
                className="w-40 h-40 object-cover rounded-full border-4 border-luxury-red dark:border-gold mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Anjali Patel</h3>
              <p className="text-muted-foreground">Customer Experience Head</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-luxury-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our showroom to discover our collection of the world's finest automobiles and experience
            our unparalleled service firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-gold">
              <Link to="/catalog">
                Browse Collection
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
