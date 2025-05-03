
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const CheckoutSuccess = () => {
  // Generate a random order ID
  const orderId = React.useMemo(() => {
    return 'ICE' + Math.floor(100000 + Math.random() * 900000);
  }, []);

  const orderDate = React.useMemo(() => {
    return new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, []);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-background py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 size={80} className="text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
            <p className="text-xl mb-8">
              Thank you for your purchase. Your order has been confirmed.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="text-sm text-muted-foreground">Order Number</h3>
                  <p className="font-medium">{orderId}</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">Date</h3>
                  <p className="font-medium">{orderDate}</p>
                </div>
              </div>
            </div>
            
            <p className="mb-8">
              We will contact you shortly to confirm your order details and arrange delivery of your new vehicle.
              A confirmation email has been sent to your registered email address.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/">
                  Return to Home
                </Link>
              </Button>
              <Button asChild className="btn-luxury">
                <Link to="/catalog">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-luxury-red dark:bg-gold text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Order Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Our team will verify your order details and contact you within 24 hours.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-luxury-red dark:bg-gold text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  We'll process the paperwork and finalize financing options if applicable.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-luxury-red dark:bg-gold text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Your new vehicle will be prepared and delivered to your specified location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
