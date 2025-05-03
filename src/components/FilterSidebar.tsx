
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { categories, brands } from '@/data/cars';
import { formatPrice } from '@/utils/format';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  maxPrice
}) => {
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.value} className="flex items-center">
              <input
                type="radio"
                id={`category-${category.value}`}
                name="category"
                className="mr-2 h-4 w-4 accent-luxury-red dark:accent-gold"
                checked={selectedCategory === category.value}
                onChange={() => setSelectedCategory(category.value)}
              />
              <label htmlFor={`category-${category.value}`} className="cursor-pointer">
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Brand</h3>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="w-full p-2 border border-input rounded-md bg-background"
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand.value} value={brand.value}>
              {brand.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, maxPrice]}
          max={maxPrice}
          step={1000000}
          value={[priceRange[0], priceRange[1]]}
          onValueChange={handlePriceChange}
          className="mt-6"
        />
        <div className="flex justify-between mt-4 text-sm">
          <span>₹{formatPrice(priceRange[0])}</span>
          <span>₹{formatPrice(priceRange[1])}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
