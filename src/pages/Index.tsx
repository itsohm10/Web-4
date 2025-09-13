import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award, ArrowRight, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';

const Index = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'ISO certified safety standards with comprehensive risk management protocols',
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      description: 'Proven track record of completing projects within scheduled timelines',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium materials and craftsmanship ensuring long-lasting durability',
    },
  ];

  const products = [
    {
      title: 'Scaffolding Systems',
      description: 'Complete scaffolding solutions for construction and industrial applications',
      image: '/placeholder-product.jpg',
    },
    {
      title: 'Safety Equipment',
      description: 'Professional safety gear and equipment for secure working environments',
      image: '/placeholder-product.jpg',
    },
    {
      title: 'Engineering Consultation',
      description: 'Expert engineering advice and project planning services',
      image: '/placeholder-product.jpg',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions for unique project requirements',
      image: '/placeholder-product.jpg',
    },
  ];

  const clients = [
    'TechCorp Industries',
    'BuildRight Construction',
    'Metro Engineering',
    'SafeWork Solutions',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative overflow-hidden"
        style={{ 
          height: 'min(calc(100vh - 72px), 720px)',
          marginTop: '72px'
        }}
      >
        <div className="container-custom h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* Hero Text */}
            <div 
              id="heroText"
              className={`space-y-8 transition-all duration-700 ${
                heroVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-6">
                <h1 className="text-hero">
                  Excellence in 
                  <span className="block">Scaffolding Solutions</span>
                </h1>
                <p className="text-body-large text-muted-custom max-w-lg">
                  Delivering innovative engineering services with uncompromising 
                  safety standards and precision craftsmanship for over two decades.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>

            {/* Hero Slider */}
            <div className="h-full min-h-[400px]">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-section-title leading-relaxed">
              Shree Ganesh Engineering stands as a beacon of reliability in the scaffolding 
              and engineering industry, combining traditional craftsmanship with modern innovation 
              to deliver exceptional results that exceed expectations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-card-title">{feature.title}</h3>
                  <p className="text-muted-custom">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Products & Services</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              Comprehensive solutions designed to meet the diverse needs of modern construction 
              and industrial projects with uncompromising quality standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card-peaceful group">
                <div className="aspect-square bg-secondary/50 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-muted rounded-full"></div>
                </div>
                <h3 className="text-card-title mb-3">{product.title}</h3>
                <p className="text-muted-custom mb-4">{product.description}</p>
                <Link 
                  to="/products"
                  className="inline-flex items-center text-foreground font-medium hover:text-primary transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Why Choose Shree Ganesh Engineering</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              Experience the difference that comes with choosing a partner committed 
              to excellence, safety, and innovation in every project we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-peaceful text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-card-title mb-4">{feature.title}</h3>
                <p className="text-muted-custom leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-section-title mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-muted-custom font-medium text-lg">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-section-title">Ready to Start Your Project?</h2>
            <p className="text-body-large text-muted-custom">
              Get in touch with our expert team today for a consultation 
              and discover how we can bring your engineering vision to life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Head Office</p>
                  <p className="text-muted-custom text-sm">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-medium">+91 98765 43210</p>
                  <p className="text-muted-custom text-sm">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
