
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent! We'll get back to you shortly.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const locations = [
    {
      city: "New Delhi",
      address: "5 Luxury Lane, South Extension Part II, New Delhi 110049",
      phone: "+91 98765 43210",
      email: "delhi@indiancaremporium.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM"
    },
    {
      city: "Mumbai",
      address: "28 Marine Drive, Nariman Point, Mumbai 400021",
      phone: "+91 98765 43211",
      email: "mumbai@indiancaremporium.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM"
    },
    {
      city: "Bangalore",
      address: "420 Brigade Road, Ashok Nagar, Bengaluru 560025",
      phone: "+91 98765 43212",
      email: "bangalore@indiancaremporium.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              We're here to assist you with any questions or inquiries about our luxury vehicles.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject (Optional)</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-luxury min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
              
              <div className="space-y-8">
                {locations.map((location, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{location.city} Showroom</h3>
                    
                    <ul className="space-y-4">
                      <li className="flex">
                        <MapPin className="text-luxury-red dark:text-gold mr-3 shrink-0" />
                        <span>{location.address}</span>
                      </li>
                      <li className="flex">
                        <Phone className="text-luxury-red dark:text-gold mr-3 shrink-0" />
                        <span>{location.phone}</span>
                      </li>
                      <li className="flex">
                        <Mail className="text-luxury-red dark:text-gold mr-3 shrink-0" />
                        <span>{location.email}</span>
                      </li>
                      <li className="flex">
                        <Clock className="text-luxury-red dark:text-gold mr-3 shrink-0" />
                        <span>{location.hours}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
          <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">What financing options do you offer?</h3>
              <p className="text-muted-foreground">
                We provide flexible financing solutions including in-house financing, bank loans,
                and leasing options tailored to your specific requirements.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Do you accept trade-ins?</h3>
              <p className="text-muted-foreground">
                Yes, we accept trade-ins of luxury and sports cars. Our team will provide a fair
                market valuation of your current vehicle.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">What after-sales services do you provide?</h3>
              <p className="text-muted-foreground">
                Our after-sales services include maintenance, repairs, warranty support, and
                concierge services for all vehicles purchased from Indian Car Emporium.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Can I custom order a vehicle?</h3>
              <p className="text-muted-foreground">
                Absolutely. We specialize in bespoke vehicle orders and can work with you to
                spec your dream car exactly to your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
