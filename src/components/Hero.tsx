
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1637781127773-5ace5a525301?q=80&w=1600"
          alt="Luxury Cars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in">
            <span className="text-luxury-red dark:text-gold">Luxury</span> & Performance
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Experience the finest collection of luxury and sports cars in India.
          </p>
          <div className="space-x-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="btn-luxury">
              <Link to="/catalog">
                Browse Collection
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
