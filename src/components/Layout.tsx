
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, ShoppingCart, BadgeIndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { state } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <BadgeIndianRupee size={28} className="text-luxury-red dark:text-gold" />
            <span className="text-lg md:text-xl font-semibold">Indian Car Emporium</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-luxury-red dark:hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/catalog" className="hover:text-luxury-red dark:hover:text-gold transition-colors">
              Catalog
            </Link>
            <Link to="/about" className="hover:text-luxury-red dark:hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-luxury-red dark:hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Shopping cart">
                <ShoppingCart size={20} />
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-red dark:bg-gold text-white dark:text-black w-5 h-5 rounded-full flex items-center justify-center text-xs">
                    {state.totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary dark:bg-luxury-black py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Indian Car Emporium</h3>
              <p className="text-muted-foreground">Luxury and sports cars for the discerning automobile enthusiast.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Catalog</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Luxury Lane</p>
                <p>New Delhi, India 110001</p>
                <p className="mt-2">Email: info@indiancaremporium.com</p>
                <p>Phone: +91 98765 43210</p>
              </address>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Indian Car Emporium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
