
interface Car {
  id: number;
  name: string;
  brand: string;
  category: 'luxury' | 'sports' | 'super' | 'hypercar' | 'classic';
  price: number; // price in INR
  description: string;
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
    acceleration: string;
  };
  image: string;
  featured?: boolean;
  new?: boolean;
  discount?: number;
}

// Car data with 50+ cars
export const cars: Car[] = [
  // Luxury Cars
  {
    id: 1,
    name: "Rolls-Royce Phantom",
    brand: "Rolls-Royce",
    category: "luxury",
    price: 95000000, // 9.5 crore INR
    description: "The epitome of luxury and sophistication, the Phantom delivers an unparalleled driving experience.",
    specs: {
      engine: "6.75L V12",
      power: "563 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.3 sec"
    },
    image: "https://images.unsplash.com/photo-1631295387006-b9b151c473aa?q=80&w=1000",
    featured: true
  },
  {
    id: 2,
    name: "Bentley Continental GT",
    brand: "Bentley",
    category: "luxury",
    price: 35000000, // 3.5 crore INR
    description: "Combines luxurious comfort with performance, embodying British craftsmanship at its finest.",
    specs: {
      engine: "6.0L W12",
      power: "626 hp",
      topSpeed: "333 km/h",
      acceleration: "0-100 km/h in 3.7 sec"
    },
    image: "https://images.unsplash.com/photo-1616789916437-bbf724d10dae?q=80&w=1000",
    featured: true
  },
  {
    id: 3,
    name: "Mercedes-Maybach S-Class",
    brand: "Mercedes-Benz",
    category: "luxury",
    price: 24900000, // 2.49 crore INR
    description: "Unrivaled luxury and comfort with cutting-edge technology and spacious interior.",
    specs: {
      engine: "4.0L V8",
      power: "496 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 4.8 sec"
    },
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000",
  },
  {
    id: 4,
    name: "Lexus LS",
    brand: "Lexus",
    category: "luxury",
    price: 18200000, // 1.82 crore INR
    description: "Japanese luxury with remarkable attention to detail and exceptional comfort.",
    specs: {
      engine: "3.5L V6 Hybrid",
      power: "416 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.4 sec"
    },
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000",
  },
  {
    id: 5,
    name: "BMW 7 Series",
    brand: "BMW",
    category: "luxury",
    price: 16800000, // 1.68 crore INR
    description: "Blend of luxury, technology, and dynamic driving characteristics.",
    specs: {
      engine: "3.0L inline-6",
      power: "335 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.9 sec"
    },
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000",
    new: true
  },
  {
    id: 6,
    name: "Audi A8",
    brand: "Audi",
    category: "luxury",
    price: 15800000, // 1.58 crore INR
    description: "Luxury sedan with advanced technology and refined driving dynamics.",
    specs: {
      engine: "3.0L V6",
      power: "340 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.6 sec"
    },
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000",
  },
  {
    id: 7,
    name: "Maserati Quattroporte",
    brand: "Maserati",
    category: "luxury",
    price: 17500000, // 1.75 crore INR
    description: "Italian luxury with a sporty character and distinctive engine note.",
    specs: {
      engine: "3.0L V6",
      power: "424 hp",
      topSpeed: "288 km/h",
      acceleration: "0-100 km/h in 4.8 sec"
    },
    image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1000",
  },
  {
    id: 8,
    name: "Porsche Panamera",
    brand: "Porsche",
    category: "luxury",
    price: 16000000, // 1.6 crore INR
    description: "A sports car and luxury sedan in one with iconic Porsche design.",
    specs: {
      engine: "2.9L V6",
      power: "440 hp",
      topSpeed: "289 km/h",
      acceleration: "0-100 km/h in 4.1 sec"
    },
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
  },
  {
    id: 9,
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    category: "luxury",
    price: 25000000, // 2.5 crore INR
    description: "Unmatched luxury SUV with all-terrain capability and regal comfort.",
    specs: {
      engine: "5.0L V8",
      power: "518 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.1 sec"
    },
    image: "https://images.unsplash.com/photo-1539522264456-55241155f96a?q=80&w=1000",
  },
  {
    id: 10,
    name: "Jaguar XJ",
    brand: "Jaguar",
    category: "luxury",
    price: 12500000, // 1.25 crore INR
    description: "British luxury with athletic performance and elegant styling.",
    specs: {
      engine: "3.0L V6",
      power: "340 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.7 sec"
    },
    image: "https://images.unsplash.com/photo-1654655036436-e2ef9eeb18dd?q=80&w=1000",
  },
  
  // Sports Cars
  {
    id: 11,
    name: "Porsche 911",
    brand: "Porsche",
    category: "sports",
    price: 18000000, // 1.8 crore INR
    description: "The iconic sports car that has defined performance for generations.",
    specs: {
      engine: "3.0L Flat-6",
      power: "450 hp",
      topSpeed: "308 km/h",
      acceleration: "0-100 km/h in 3.4 sec"
    },
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    featured: true
  },
  {
    id: 12,
    name: "Chevrolet Corvette C8",
    brand: "Chevrolet",
    category: "sports",
    price: 15000000, // 1.5 crore INR
    description: "American sports car with mid-engine design and extraordinary performance.",
    specs: {
      engine: "6.2L V8",
      power: "495 hp",
      topSpeed: "312 km/h",
      acceleration: "0-100 km/h in 2.9 sec"
    },
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000",
    new: true,
    discount: 5
  },
  {
    id: 13,
    name: "Jaguar F-Type",
    brand: "Jaguar",
    category: "sports",
    price: 12000000, // 1.2 crore INR
    description: "Stunning British sports car with thrilling performance and distinctive exhaust note.",
    specs: {
      engine: "5.0L V8",
      power: "575 hp",
      topSpeed: "300 km/h",
      acceleration: "0-100 km/h in 3.5 sec"
    },
    image: "https://images.unsplash.com/photo-1645852704846-6fb3ccdc0f8c?q=80&w=1000",
  },
  {
    id: 14,
    name: "Toyota GR Supra",
    brand: "Toyota",
    category: "sports",
    price: 9000000, // 90 lakh INR
    description: "Revived legend with BMW engineering and Toyota's sports car heritage.",
    specs: {
      engine: "3.0L inline-6",
      power: "382 hp",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 3.9 sec"
    },
    image: "https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=1000",
  },
  {
    id: 15,
    name: "BMW M4",
    brand: "BMW",
    category: "sports",
    price: 14500000, // 1.45 crore INR
    description: "Performance coupe with track-ready capabilities and everyday usability.",
    specs: {
      engine: "3.0L inline-6",
      power: "503 hp",
      topSpeed: "290 km/h",
      acceleration: "0-100 km/h in 3.4 sec"
    },
    image: "https://images.unsplash.com/photo-1617814065893-00757125efab?q=80&w=1000",
  },
  {
    id: 16,
    name: "Audi RS 7",
    brand: "Audi",
    category: "sports",
    price: 17900000, // 1.79 crore INR
    description: "Four-door coupe with supercar performance and practical utility.",
    specs: {
      engine: "4.0L V8",
      power: "591 hp",
      topSpeed: "305 km/h",
      acceleration: "0-100 km/h in 3.6 sec"
    },
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000",
    discount: 10
  },
  {
    id: 17,
    name: "Lexus LC 500",
    brand: "Lexus",
    category: "sports",
    price: 19800000, // 1.98 crore INR
    description: "Grand touring sports car with stunning design and refined character.",
    specs: {
      engine: "5.0L V8",
      power: "471 hp",
      topSpeed: "270 km/h",
      acceleration: "0-100 km/h in 4.4 sec"
    },
    image: "https://images.unsplash.com/photo-1619553353875-c8f8895c1df4?q=80&w=1000",
  },
  {
    id: 18,
    name: "Mercedes-AMG GT",
    brand: "Mercedes-Benz",
    category: "sports",
    price: 25000000, // 2.5 crore INR
    description: "Handcrafted performance with distinctive styling and impressive handling.",
    specs: {
      engine: "4.0L V8",
      power: "523 hp",
      topSpeed: "318 km/h",
      acceleration: "0-100 km/h in 3.7 sec"
    },
    image: "https://images.unsplash.com/photo-1617196701537-7329482cc9fe?q=80&w=1000",
  },
  {
    id: 19,
    name: "Nissan GT-R",
    brand: "Nissan",
    category: "sports",
    price: 21200000, // 2.12 crore INR
    description: "Japanese high-tech performance icon with phenomenal acceleration.",
    specs: {
      engine: "3.8L V6 Twin-Turbo",
      power: "565 hp",
      topSpeed: "315 km/h",
      acceleration: "0-100 km/h in 2.7 sec"
    },
    image: "https://images.unsplash.com/photo-1626220162798-5b9a49882b9e?q=80&w=1000",
    new: true
  },
  {
    id: 20,
    name: "Aston Martin Vantage",
    brand: "Aston Martin",
    category: "sports",
    price: 29800000, // 2.98 crore INR
    description: "British sports car with elegant styling and exhilarating performance.",
    specs: {
      engine: "4.0L V8",
      power: "503 hp",
      topSpeed: "314 km/h",
      acceleration: "0-100 km/h in 3.6 sec"
    },
    image: "https://images.unsplash.com/photo-1656468014942-f08398318d78?q=80&w=1000",
  },
  
  // Supercars
  {
    id: 21,
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    category: "super",
    price: 44900000, // 4.49 crore INR
    description: "Italian supercar with bold styling and screaming naturally-aspirated V10.",
    specs: {
      engine: "5.2L V10",
      power: "631 hp",
      topSpeed: "325 km/h",
      acceleration: "0-100 km/h in 2.9 sec"
    },
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000",
    featured: true
  },
  {
    id: 22,
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    category: "super",
    price: 42000000, // 4.2 crore INR
    description: "Ferocious mid-engine supercar from Maranello with heritage V8 power.",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "710 hp",
      topSpeed: "340 km/h",
      acceleration: "0-100 km/h in 2.9 sec"
    },
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
    featured: true,
    discount: 5
  },
  {
    id: 23,
    name: "McLaren 720S",
    brand: "McLaren",
    category: "super",
    price: 45000000, // 4.5 crore INR
    description: "Sophisticated British engineering with otherworldly performance and unique design.",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 hp",
      topSpeed: "341 km/h",
      acceleration: "0-100 km/h in 2.8 sec"
    },
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000",
  },
  {
    id: 24,
    name: "Audi R8",
    brand: "Audi",
    category: "super",
    price: 24800000, // 2.48 crore INR
    description: "Everyday supercar with Audi reliability and exotic performance.",
    specs: {
      engine: "5.2L V10",
      power: "602 hp",
      topSpeed: "330 km/h",
      acceleration: "0-100 km/h in 3.1 sec"
    },
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000",
    new: true
  },
  {
    id: 25,
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    category: "super",
    price: 34900000, // 3.49 crore INR
    description: "The ultimate everyday supercar with unmatched versatility and performance.",
    specs: {
      engine: "3.8L Flat-6 Twin-Turbo",
      power: "640 hp",
      topSpeed: "330 km/h",
      acceleration: "0-100 km/h in 2.6 sec"
    },
    image: "https://images.unsplash.com/photo-1584060622420-0673aad46076?q=80&w=1000",
  },
  {
    id: 26,
    name: "Maserati MC20",
    brand: "Maserati",
    category: "super",
    price: 37900000, // 3.79 crore INR
    description: "Maserati's return to supercar excellence with Italian flair and F1 tech.",
    specs: {
      engine: "3.0L V6 Twin-Turbo",
      power: "621 hp",
      topSpeed: "325 km/h",
      acceleration: "0-100 km/h in 2.9 sec"
    },
    image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1000",
  },
  {
    id: 27,
    name: "Ferrari Roma",
    brand: "Ferrari",
    category: "super",
    price: 38500000, // 3.85 crore INR
    description: "Elegant Grand Touring Ferrari with ferocious performance.",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "612 hp",
      topSpeed: "320 km/h",
      acceleration: "0-100 km/h in 3.4 sec"
    },
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000",
    discount: 8
  },
  {
    id: 28,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    category: "super",
    price: 62000000, // 6.2 crore INR
    description: "The ultimate Lamborghini expression with scissor doors and a screaming V12.",
    specs: {
      engine: "6.5L V12",
      power: "769 hp",
      topSpeed: "350 km/h",
      acceleration: "0-100 km/h in 2.8 sec"
    },
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000",
  },
  {
    id: 29,
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    category: "super",
    price: 38000000, // 3.8 crore INR
    description: "Quintessentially British grand tourer with supercar performance.",
    specs: {
      engine: "5.2L V12 Twin-Turbo",
      power: "630 hp",
      topSpeed: "335 km/h",
      acceleration: "0-100 km/h in 3.6 sec"
    },
    image: "https://images.unsplash.com/photo-1654655036436-e2ef9eeb18dd?q=80&w=1000",
  },
  {
    id: 30,
    name: "Ferrari 812 Superfast",
    brand: "Ferrari",
    category: "super",
    price: 58000000, // 5.8 crore INR
    description: "Front-engine V12 Ferrari with breathtaking performance and handling.",
    specs: {
      engine: "6.5L V12",
      power: "789 hp",
      topSpeed: "340 km/h",
      acceleration: "0-100 km/h in 2.9 sec"
    },
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
    new: true
  },
  
  // Hypercars
  {
    id: 31,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    category: "hypercar",
    price: 250000000, // 25 crore INR
    description: "Engineering masterpiece with unmatched power and exclusivity.",
    specs: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1479 hp",
      topSpeed: "420 km/h",
      acceleration: "0-100 km/h in 2.4 sec"
    },
    image: "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000",
    featured: true
  },
  {
    id: 32,
    name: "McLaren P1",
    brand: "McLaren",
    category: "hypercar",
    price: 145000000, // 14.5 crore INR
    description: "McLaren's hybrid hypercar with Formula 1 technology for the road.",
    specs: {
      engine: "3.8L V8 Hybrid",
      power: "903 hp",
      topSpeed: "350 km/h",
      acceleration: "0-100 km/h in 2.8 sec"
    },
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000",
    featured: true
  },
  {
    id: 33,
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    category: "hypercar",
    price: 200000000, // 20 crore INR
    description: "Ferrari's hybrid flagship representing the pinnacle of Maranello engineering.",
    specs: {
      engine: "6.3L V12 Hybrid",
      power: "950 hp",
      topSpeed: "350 km/h",
      acceleration: "0-100 km/h in 2.4 sec"
    },
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
  },
  {
    id: 34,
    name: "Koenigsegg Jesko",
    brand: "Koenigsegg",
    category: "hypercar",
    price: 265000000, // 26.5 crore INR
    description: "Swedish engineering marvel with revolutionary transmission tech and extreme power.",
    specs: {
      engine: "5.0L V8 Twin-Turbo",
      power: "1600 hp",
      topSpeed: "483 km/h",
      acceleration: "0-100 km/h in 2.5 sec"
    },
    image: "https://images.unsplash.com/photo-1588627541420-fce3f661b779?q=80&w=1000",
    new: true
  },
  {
    id: 35,
    name: "Pagani Huayra",
    brand: "Pagani",
    category: "hypercar",
    price: 220000000, // 22 crore INR
    description: "Artisanal Italian hypercar with aerospace-inspired design and intricate details.",
    specs: {
      engine: "6.0L V12 Twin-Turbo",
      power: "791 hp",
      topSpeed: "378 km/h",
      acceleration: "0-100 km/h in 2.8 sec"
    },
    image: "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000",
  },
  {
    id: 36,
    name: "Rimac Nevera",
    brand: "Rimac",
    category: "hypercar",
    price: 195000000, // 19.5 crore INR
    description: "All-electric hypercar with mind-bending acceleration and revolutionary technology.",
    specs: {
      engine: "Electric Quad Motor",
      power: "1914 hp",
      topSpeed: "412 km/h",
      acceleration: "0-100 km/h in 1.97 sec"
    },
    image: "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000",
    discount: 5
  },
  {
    id: 37,
    name: "Aston Martin Valkyrie",
    brand: "Aston Martin",
    category: "hypercar",
    price: 280000000, // 28 crore INR
    description: "Formula 1 technology in a road-legal car designed with Adrian Newey.",
    specs: {
      engine: "6.5L V12 Hybrid",
      power: "1160 hp",
      topSpeed: "402 km/h",
      acceleration: "0-100 km/h in 2.5 sec"
    },
    image: "https://images.unsplash.com/photo-1656468014942-f08398318d78?q=80&w=1000",
  },
  {
    id: 38,
    name: "Mercedes-AMG One",
    brand: "Mercedes-Benz",
    category: "hypercar",
    price: 240000000, // 24 crore INR
    description: "F1 hybrid powertrain in a road car with unprecedented technology transfer.",
    specs: {
      engine: "1.6L V6 Hybrid",
      power: "1063 hp",
      topSpeed: "352 km/h",
      acceleration: "0-100 km/h in 2.9 sec"
    },
    image: "https://images.unsplash.com/photo-1617196701537-7329482cc9fe?q=80&w=1000",
    new: true
  },
  {
    id: 39,
    name: "Gordon Murray T.50",
    brand: "Gordon Murray Automotive",
    category: "hypercar",
    price: 230000000, // 23 crore INR
    description: "Spiritual successor to the McLaren F1 with center driving position and fan-assisted aerodynamics.",
    specs: {
      engine: "4.0L V12",
      power: "654 hp",
      topSpeed: "375 km/h",
      acceleration: "0-100 km/h in 2.8 sec"
    },
    image: "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000",
  },
  {
    id: 40,
    name: "SSC Tuatara",
    brand: "SSC North America",
    category: "hypercar",
    price: 255000000, // 25.5 crore INR
    description: "American hypercar built to break speed records with extreme aerodynamics.",
    specs: {
      engine: "5.9L V8 Twin-Turbo",
      power: "1750 hp",
      topSpeed: "455 km/h",
      acceleration: "0-100 km/h in 2.5 sec"
    },
    image: "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000",
  },
  
  // Classic Cars
  {
    id: 41,
    name: "Jaguar E-Type",
    brand: "Jaguar",
    category: "classic",
    price: 85000000, // 8.5 crore INR
    description: "Legendary British sports car often called the most beautiful car ever made.",
    specs: {
      engine: "3.8L inline-6",
      power: "265 hp",
      topSpeed: "240 km/h",
      acceleration: "0-100 km/h in 6.9 sec"
    },
    image: "https://images.unsplash.com/photo-1645852704846-6fb3ccdc0f8c?q=80&w=1000",
    featured: true
  },
  {
    id: 42,
    name: "Mercedes-Benz 300SL Gullwing",
    brand: "Mercedes-Benz",
    category: "classic",
    price: 320000000, // 32 crore INR
    description: "Iconic gullwing doors, racing heritage and pioneering engineering.",
    specs: {
      engine: "3.0L inline-6",
      power: "215 hp",
      topSpeed: "260 km/h",
      acceleration: "0-100 km/h in 8.8 sec"
    },
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000",
  },
  {
    id: 43,
    name: "Porsche 911 Carrera RS 2.7",
    brand: "Porsche",
    category: "classic",
    price: 140000000, // 14 crore INR
    description: "The purest expression of the 911, a motorsport legend for the street.",
    specs: {
      engine: "2.7L Flat-6",
      power: "210 hp",
      topSpeed: "245 km/h",
      acceleration: "0-100 km/h in 5.8 sec"
    },
    image: "https://images.unsplash.com/photo-1584060622420-0673aad46076?q=80&w=1000",
    discount: 10
  },
  {
    id: 44,
    name: "Ferrari 250 GTO",
    brand: "Ferrari",
    category: "classic",
    price: 1500000000, // 150 crore INR
    description: "The world's most valuable car with legendary racing history and timeless beauty.",
    specs: {
      engine: "3.0L V12",
      power: "300 hp",
      topSpeed: "280 km/h",
      acceleration: "0-100 km/h in 6.1 sec"
    },
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000",
  },
  {
    id: 45,
    name: "Aston Martin DB5",
    brand: "Aston Martin",
    category: "classic",
    price: 79000000, // 7.9 crore INR
    description: "The iconic James Bond car with timeless elegance and British character.",
    specs: {
      engine: "4.0L inline-6",
      power: "282 hp",
      topSpeed: "233 km/h",
      acceleration: "0-100 km/h in 7.1 sec"
    },
    image: "https://images.unsplash.com/photo-1654655036436-e2ef9eeb18dd?q=80&w=1000",
    new: true
  },
  {
    id: 46,
    name: "Ford GT40",
    brand: "Ford",
    category: "classic",
    price: 125000000, // 12.5 crore INR
    description: "Legendary Le Mans winner born from Ford's rivalry with Ferrari.",
    specs: {
      engine: "4.7L V8",
      power: "335 hp",
      topSpeed: "321 km/h",
      acceleration: "0-100 km/h in 5.5 sec"
    },
    image: "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000",
  },
  {
    id: 47,
    name: "Lamborghini Miura",
    brand: "Lamborghini",
    category: "classic",
    price: 188000000, // 18.8 crore INR
    description: "The world's first supercar and a design masterpiece from Lamborghini's early days.",
    specs: {
      engine: "4.0L V12",
      power: "385 hp",
      topSpeed: "280 km/h",
      acceleration: "0-100 km/h in 6.7 sec"
    },
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000",
  },
  {
    id: 48,
    name: "Porsche 959",
    brand: "Porsche",
    category: "classic",
    price: 145000000, // 14.5 crore INR
    description: "Technological marvel from the 1980s that pioneered advanced AWD systems.",
    specs: {
      engine: "2.8L Flat-6 Twin-Turbo",
      power: "444 hp",
      topSpeed: "315 km/h",
      acceleration: "0-100 km/h in 3.7 sec"
    },
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
  },
  {
    id: 49,
    name: "BMW M1",
    brand: "BMW",
    category: "classic",
    price: 120000000, // 12 crore INR
    description: "BMW's first mid-engine sports car, designed by Giugiaro and developed with Lamborghini.",
    specs: {
      engine: "3.5L inline-6",
      power: "273 hp",
      topSpeed: "265 km/h",
      acceleration: "0-100 km/h in 5.6 sec"
    },
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000",
    discount: 7
  },
  {
    id: 50,
    name: "McLaren F1",
    brand: "McLaren",
    category: "classic",
    price: 370000000, // 37 crore INR
    description: "The benchmark supercar of the 1990s with center driver's seat and gold-lined engine bay.",
    specs: {
      engine: "6.1L V12",
      power: "618 hp",
      topSpeed: "386 km/h",
      acceleration: "0-100 km/h in 3.2 sec"
    },
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000",
  }
];

// Categories for filtering
export const categories = [
  { value: "all", label: "All Cars" },
  { value: "luxury", label: "Luxury" },
  { value: "sports", label: "Sports" },
  { value: "super", label: "Supercars" },
  { value: "hypercar", label: "Hypercars" },
  { value: "classic", label: "Classic" }
];

// Brands for filtering
export const brands = Array.from(
  new Set(cars.map(car => car.brand))
).map(brand => ({
  value: brand.toLowerCase(),
  label: brand
}));
