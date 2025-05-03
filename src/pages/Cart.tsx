
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { BadgeIndianRupee, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/utils/format';

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  
  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="py-16 container">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <ShoppingCart size={64} className="text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any cars to your cart yet.
            </p>
            <Button asChild>
              <Link to="/catalog">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 container">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left">Car</th>
                    <th className="px-6 py-4 text-center">Quantity</th>
                    <th className="px-6 py-4 text-right">Price</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {state.items.map((item) => (
                    <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-12 object-cover rounded-md mr-4" 
                          />
                          <Link to={`/car/${item.id}`} className="hover:text-luxury-red dark:hover:text-gold transition-colors">
                            {item.name}
                          </Link>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end">
                          <BadgeIndianRupee size={18} className="text-luxury-red dark:text-gold" />
                          <span className="font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-100/20"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex justify-between">
              <Button variant="outline" onClick={() => navigate(-1)}>
                Continue Shopping
              </Button>
              <Button variant="destructive" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <div className="flex items-center">
                    <BadgeIndianRupee size={16} className="text-luxury-red dark:text-gold mr-1" />
                    <span>{formatPrice(state.totalPrice)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <div className="flex items-center">
                    <BadgeIndianRupee size={16} className="text-luxury-red dark:text-gold mr-1" />
                    <span>{formatPrice(state.totalPrice * 0.18)}</span>
                  </div>
                </div>
                
                <div className="border-t border-border my-4 pt-4 flex justify-between font-semibold">
                  <span>Total</span>
                  <div className="flex items-center">
                    <BadgeIndianRupee size={18} className="text-luxury-red dark:text-gold mr-1" />
                    <span className="text-lg">{formatPrice(state.totalPrice * 1.18)}</span>
                  </div>
                </div>
              </div>
              
              <Button asChild className="w-full btn-luxury">
                <Link to="/checkout">
                  Proceed to Checkout <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
