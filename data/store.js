export const store = {
  name: 'TechVision Electronics',
  tagline: 'Smart Living, Smart Choices',
  description: 'Your trusted destination for premium Smart TVs, CCTV security solutions, laptops, and accessories. Quality electronics with expert guidance since 2015.',
  phone: '+91-9876543210',
  whatsapp: '919876543210',
  email: 'info@techvisionstore.com',
  address: '123, Electronics Market, MG Road, Ahmedabad - 380001, Gujarat, India',
  mapUrl: 'https://maps.google.com/?q=23.0225,72.5714',
  hours: {
    weekdays: '10:00 AM - 9:00 PM',
    saturday: '10:00 AM - 9:00 PM',
    sunday: '11:00 AM - 6:00 PM',
  },
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
    twitter: '#',
  },
  stats: [
    { value: '5000', suffix: '+', label: 'Products Sold' },
    { value: '8', suffix: '+', label: 'Years Experience' },
    { value: '4.8', suffix: '★', label: 'Customer Rating' },
    { value: '2000', suffix: '+', label: 'Happy Customers' },
  ],
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories/smart-tvs' },
  { name: 'Brands', href: '/brands/samsung' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const categories = [
  { id: 'smart-tvs', name: 'Smart TVs', icon: 'Monitor', description: 'Premium 4K & 8K Smart TVs from top brands', count: 45, image: '/images/products/tv-category.jpg' },
  { id: 'cctv-cameras', name: 'CCTV Cameras', icon: 'Camera', description: 'HD security cameras for home & office', count: 38, image: '/images/products/cctv-category.jpg' },
  { id: 'laptops', name: 'Second-Hand Laptops', icon: 'Laptop', description: 'Quality pre-owned laptops with warranty', count: 32, image: '/images/products/laptop-category.jpg' },
  { id: 'laptop-accessories', name: 'Laptop Accessories', icon: 'Mouse', description: 'Chargers, bags, keyboards & more', count: 56, image: '/images/products/laptop-acc.jpg' },
  { id: 'cctv-accessories', name: 'CCTV Accessories', icon: 'Cable', description: 'DVR, NVR, cables, connectors & mounts', count: 28, image: '/images/products/cctv-acc.jpg' },
  { id: 'tv-accessories', name: 'TV Accessories', icon: 'Plug', description: 'Wall mounts, remotes, soundbars', count: 22, image: '/images/products/tv-acc.jpg' },
  { id: 'networking', name: 'Networking Devices', icon: 'Wifi', description: 'Routers, switches, extenders', count: 18, image: '/images/products/networking.jpg' },
  { id: 'computer-accessories', name: 'Computer Accessories', icon: 'Keyboard', description: 'Monitors, keyboards, mice, USB hubs', count: 42, image: '/images/products/computer-acc.jpg' },
];

export const brands = [
  { id: 'samsung', name: 'Samsung', logo: '/images/brands/samsung.svg', categories: ['smart-tvs', 'laptop-accessories'] },
  { id: 'lg', name: 'LG', logo: '/images/brands/lg.svg', categories: ['smart-tvs', 'tv-accessories'] },
  { id: 'sony', name: 'Sony', logo: '/images/brands/sony.svg', categories: ['smart-tvs'] },
  { id: 'xiaomi', name: 'Xiaomi', logo: '/images/brands/xiaomi.svg', categories: ['smart-tvs', 'networking'] },
  { id: 'tcl', name: 'TCL', logo: '/images/brands/tcl.svg', categories: ['smart-tvs'] },
  { id: 'oneplus', name: 'OnePlus', logo: '/images/brands/oneplus.svg', categories: ['smart-tvs'] },
  { id: 'hikvision', name: 'Hikvision', logo: '/images/brands/hikvision.svg', categories: ['cctv-cameras', 'cctv-accessories'] },
  { id: 'cpplus', name: 'CP Plus', logo: '/images/brands/cpplus.svg', categories: ['cctv-cameras', 'cctv-accessories'] },
  { id: 'dahua', name: 'Dahua', logo: '/images/brands/dahua.svg', categories: ['cctv-cameras', 'cctv-accessories'] },
  { id: 'dell', name: 'Dell', logo: '/images/brands/dell.svg', categories: ['laptops', 'computer-accessories'] },
  { id: 'hp', name: 'HP', logo: '/images/brands/hp.svg', categories: ['laptops', 'computer-accessories'] },
  { id: 'lenovo', name: 'Lenovo', logo: '/images/brands/lenovo.svg', categories: ['laptops'] },
  { id: 'asus', name: 'ASUS', logo: '/images/brands/asus.svg', categories: ['laptops', 'networking'] },
  { id: 'acer', name: 'Acer', logo: '/images/brands/acer.svg', categories: ['laptops'] },
];
