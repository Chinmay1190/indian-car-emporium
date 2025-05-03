
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { BadgeIndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { formatPrice } from '@/utils/format';

interface CarCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  featured?: boolean;
  new?: boolean;
  discount?: number;
}

const CarCard: React.FC<CarCardProps> = ({ 
  id, name, price, image, brand, category, featured, new: isNew, discount 
}) => {
  const { addItem } = useCart();
  
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price: discountedPrice,
      image
    });
  };

  return (
    <Card className="luxury-card group">
      {featured && <span className="card-badge bg-luxury-red dark:bg-gold dark:text-black">Featured</span>}
      {isNew && <span className="card-badge bg-blue-600 text-white">New</span>}
      {discount && (
        <span className="card-badge bg-green-600 text-white">
          {discount}% OFF
        </span>
      )}
      
      <Link to={`/car/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="text-xs font-medium text-muted-foreground mb-1">
          {brand} · {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
        <Link to={`/car/${id}`}>
          <h3 className="font-bold text-lg mb-2 group-hover:text-luxury-red dark:group-hover:text-gold transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="price-tag flex items-center space-x-2">
          <BadgeIndianRupee size={18} className="text-luxury-red dark:text-gold" />
          <span className="font-bold text-lg">
            {formatPrice(discountedPrice)}
          </span>
          
          {discount && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(price)}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          className="w-full btn-luxury"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
