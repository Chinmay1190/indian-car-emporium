
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cars } from '@/data/cars';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { BadgeIndianRupee, ChevronLeft, GaugeCircle, BarChart4, Clock, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const car = cars.find(car => car.id === Number(id));
  
  if (!car) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
          <p className="mb-8 text-muted-foreground">The car you're looking for doesn't exist in our collection.</p>
          <Button asChild>
            <Link to="/catalog">Return to Catalog</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const discountedPrice = car.discount ? car.price * (1 - car.discount / 100) : car.price;
  
  const handleAddToCart = () => {
    addItem({
      id: car.id,
      name: car.name,
      price: discountedPrice,
      image: car.image
    });
  };
  
  const handleBuyNow = () => {
    addItem({
      id: car.id,
      name: car.name,
      price: discountedPrice,
      image: car.image
    });
    navigate('/cart');
  };
  
  // Find similar cars (same category, different ID)
  const similarCars = cars
    .filter(c => c.category === car.category && c.id !== car.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Back Button */}
      <div className="bg-background pt-8 pb-0">
        <div className="container">
          <Button 
            variant="ghost" 
            className="flex items-center space-x-2 mb-4"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </Button>
        </div>
      </div>

      {/* Car Details */}
      <section className="py-8 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Car Image */}
            <div className="relative">
              <div className="bg-white dark:bg-luxury-black rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-auto object-cover aspect-video" 
                />
              </div>
              
              {car.featured && (
                <div className="absolute top-4 left-4 bg-luxury-red dark:bg-gold text-white dark:text-black px-4 py-2 rounded-md font-semibold">
                  Featured
                </div>
              )}
              
              {car.new && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
                  New Arrival
                </div>
              )}
              
              {car.discount && (
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
                  {car.discount}% OFF
                </div>
              )}
            </div>
            
            {/* Car Info */}
            <div>
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {car.brand} · {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
              </div>
              <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
              
              <div className="flex items-center mb-6">
                <BadgeIndianRupee size={24} className="text-luxury-red dark:text-gold mr-2" />
                <span className="text-3xl font-bold">
                  {formatPrice(discountedPrice)}
                </span>
                
                {car.discount && (
                  <span className="ml-3 text-xl text-muted-foreground line-through">
                    {formatPrice(car.price)}
                  </span>
                )}
              </div>
              
              <div className="mb-8">
                <p className="text-lg mb-6">{car.description}</p>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <GaugeCircle className="text-luxury-red dark:text-gold" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Engine</div>
                      <div className="font-medium">{car.specs.engine}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <BarChart4 className="text-luxury-red dark:text-gold" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Power</div>
                      <div className="font-medium">{car.specs.power}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <Sparkles className="text-luxury-red dark:text-gold" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Top Speed</div>
                      <div className="font-medium">{car.specs.topSpeed}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="text-luxury-red dark:text-gold" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Acceleration</div>
                      <div className="font-medium">{car.specs.acceleration}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="w-full sm:w-1/2 btn-luxury" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button size="lg" className="w-full sm:w-1/2 btn-gold" onClick={handleBuyNow}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Cars */}
      {similarCars.length > 0 && (
        <section className="py-12 bg-secondary">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Similar Cars</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarCars.map(similarCar => (
                <Link 
                  to={`/car/${similarCar.id}`}
                  key={similarCar.id}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={similarCar.image} 
                      alt={similarCar.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-luxury-red dark:group-hover:text-gold transition-colors">
                      {similarCar.name}
                    </h3>
                    
                    <div className="flex items-center">
                      <BadgeIndianRupee size={18} className="text-luxury-red dark:text-gold" />
                      <span className="font-bold ml-1">
                        {formatPrice(similarCar.price)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default CarDetail;
