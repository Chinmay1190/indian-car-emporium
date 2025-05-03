
import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import CarGrid from '@/components/CarGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { cars } from '@/data/cars';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || '';
  const initialSearch = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [showFilters, setShowFilters] = useState(false);
  
  // Find the maximum price in the car data
  const maxPrice = useMemo(() => 
    Math.max(...cars.map(car => car.price)), []);
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  
  // Update URL when filters change
  const updateSearchParams = (category: string, brand: string, search: string) => {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (brand) params.append('brand', brand);
    if (search) params.append('search', search);
    setSearchParams(params);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateSearchParams(category, selectedBrand, searchQuery);
  };
  
  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    updateSearchParams(selectedCategory, brand, searchQuery);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams(selectedCategory, selectedBrand, searchQuery);
  };
  
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('');
    setSearchQuery('');
    setPriceRange([0, maxPrice]);
    setSearchParams({});
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-luxury-red dark:bg-gold py-16">
        <div className="container text-center text-white dark:text-black">
          <h1 className="text-4xl font-bold mb-4">Our Car Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse our extensive catalog of luxury and performance cars
          </p>
        </div>
      </div>
      
      {/* Catalog Section */}
      <section className="py-12 bg-background">
        <div className="container">
          {/* Search bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="search"
                  placeholder="Search cars..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter size={18} />
              </Button>
            </form>
          </div>
          
          {/* Applied filters */}
          {(selectedCategory !== 'all' || selectedBrand || searchQuery || priceRange[0] > 0 || priceRange[1] < maxPrice) && (
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-muted-foreground py-1">Active filters:</span>
              
              {selectedCategory !== 'all' && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => handleCategoryChange('all')}
                >
                  Category: {selectedCategory} <X size={14} className="ml-1" />
                </Button>
              )}
              
              {selectedBrand && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => handleBrandChange('')}
                >
                  Brand: {selectedBrand} <X size={14} className="ml-1" />
                </Button>
              )}
              
              {searchQuery && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => {
                    setSearchQuery('');
                    updateSearchParams(selectedCategory, selectedBrand, '');
                  }}
                >
                  Search: {searchQuery} <X size={14} className="ml-1" />
                </Button>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-muted-foreground"
                onClick={clearFilters}
              >
                Clear all
              </Button>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar - visible on desktop and conditionally on mobile */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <FilterSidebar 
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                selectedBrand={selectedBrand}
                setSelectedBrand={handleBrandChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                maxPrice={maxPrice}
              />
            </div>
            
            {/* Car Grid */}
            <div className="flex-1">
              <CarGrid 
                filter={{
                  category: selectedCategory === 'all' ? undefined : selectedCategory,
                  brand: selectedBrand,
                  search: searchQuery,
                  minPrice: priceRange[0],
                  maxPrice: priceRange[1]
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
