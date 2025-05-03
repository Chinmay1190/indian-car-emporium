
import React from 'react';
import CarCard from './CarCard';
import { cars } from '@/data/cars';

interface CarGridProps {
  filter?: {
    category?: string;
    brand?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
  };
  featured?: boolean;
  limit?: number;
}

const CarGrid: React.FC<CarGridProps> = ({ filter = {}, featured = false, limit }) => {
  let filteredCars = [...cars];
  
  // Apply filters
  if (filter.category && filter.category !== 'all') {
    filteredCars = filteredCars.filter(car => car.category === filter.category);
  }
  
  if (filter.brand) {
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase() === filter.brand.toLowerCase()
    );
  }
  
  if (filter.search) {
    const searchLower = filter.search.toLowerCase();
    filteredCars = filteredCars.filter(car => 
      car.name.toLowerCase().includes(searchLower) || 
      car.brand.toLowerCase().includes(searchLower) ||
      car.category.toLowerCase().includes(searchLower)
    );
  }
  
  if (filter.minPrice !== undefined) {
    filteredCars = filteredCars.filter(car => car.price >= filter.minPrice!);
  }
  
  if (filter.maxPrice !== undefined) {
    filteredCars = filteredCars.filter(car => car.price <= filter.maxPrice!);
  }
  
  // Filter for featured cars if needed
  if (featured) {
    filteredCars = filteredCars.filter(car => car.featured);
  }
  
  // Apply limit if provided
  if (limit) {
    filteredCars = filteredCars.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCars.map(car => (
        <CarCard 
          key={car.id}
          id={car.id}
          name={car.name}
          price={car.price}
          image={car.image}
          brand={car.brand}
          category={car.category}
          featured={car.featured}
          new={car.new}
          discount={car.discount}
        />
      ))}
      
      {filteredCars.length === 0 && (
        <div className="col-span-full py-12 text-center">
          <h3 className="text-lg font-medium">No cars found matching your criteria</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

export default CarGrid;
