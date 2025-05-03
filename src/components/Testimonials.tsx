
const testimonials = [
  {
    id: 1,
    name: "Rajiv Sharma",
    position: "CEO, Tech Innovators",
    testimonial: "Indian Car Emporium delivered an exceptional experience when purchasing my Lamborghini Huracán. Their attention to detail and customer service is unmatched in the luxury car market.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Fashion Designer",
    testimonial: "The team went above and beyond to help me find my dream car. The Ferrari F8 Tributo was delivered in immaculate condition, and the entire process was seamless and professional.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Vikram Singh",
    position: "Investment Banker",
    testimonial: "As a collector of rare automobiles, I've dealt with many luxury dealerships. Indian Car Emporium stands out for their knowledge, expertise, and ability to source even the rarest models.",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Client Testimonials</h2>
          <p className="text-muted-foreground mt-2">What our distinguished clients say about us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-secondary dark:bg-black/20 p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-luxury-red dark:border-gold"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <p className="italic">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
