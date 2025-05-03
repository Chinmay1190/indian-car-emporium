
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const brands = [
  { name: "Ferrari", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ferrari-Logo.svg/100px-Ferrari-Logo.svg.png" },
  { name: "Lamborghini", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/100px-Lamborghini_Logo.svg.png" },
  { name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Porsche_logo.svg/100px-Porsche_logo.svg.png" },
  { name: "Bugatti", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bugatti_logo.svg/100px-Bugatti_logo.svg.png" },
  { name: "Aston Martin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aston_Martin_Logo.svg/100px-Aston_Martin_Logo.svg.png" },
  { name: "Rolls-Royce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Rolls-Royce_Motor_Cars_logo.svg/100px-Rolls-Royce_Motor_Cars_logo.svg.png" },
  { name: "Bentley", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bentley_logo_2.svg/100px-Bentley_logo_2.svg.png" },
  { name: "McLaren", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/McLaren_logo.svg/100px-McLaren_logo.svg.png" },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-secondary dark:bg-luxury-gray">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Prestigious Brands</h2>
          <p className="text-muted-foreground mt-2">We represent the most prestigious automotive brands in the world</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {brands.map((brand) => (
            <Link
              to={`/catalog?brand=${brand.name.toLowerCase()}`}
              key={brand.name}
              className="flex flex-col items-center justify-center bg-white dark:bg-black/30 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="mt-2 text-xs font-medium">{brand.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/catalog">View All Cars</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
