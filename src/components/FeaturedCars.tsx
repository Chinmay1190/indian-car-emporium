
import { Link } from 'react-router-dom';
import CarGrid from './CarGrid';
import { Button } from '@/components/ui/button';

const FeaturedCars = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Featured Models</h2>
            <p className="text-muted-foreground mt-2">Our selection of premium vehicles</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/catalog">View All Cars</Link>
          </Button>
        </div>
        
        <CarGrid featured={true} limit={8} />
      </div>
    </section>
  );
};

export default FeaturedCars;
