import { ArrowRight, Shield, Settings, Wrench, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import productsHero from '@/assets/products-hero.jpg';

const Products = () => {
  const products = [
    {
      title: 'Scaffolding Systems',
      description: 'Complete scaffolding solutions including tube and clamp, frame scaffolding, and mobile towers designed for safety and efficiency in construction projects.',
      icon: Settings,
      features: ['Tube & Clamp Systems', 'Mobile Towers', 'Frame Scaffolding', 'Custom Designs'],
    },
    {
      title: 'Safety Equipment',
      description: 'Comprehensive range of safety equipment including harnesses, helmets, safety nets, and protective gear meeting international safety standards.',
      icon: Shield,
      features: ['Safety Harnesses', 'Protective Helmets', 'Safety Nets', 'Fall Protection'],
    },
    {
      title: 'Engineering Tools',
      description: 'Professional-grade tools and equipment for scaffolding installation, maintenance, and inspection to ensure optimal performance and safety.',
      icon: Wrench,
      features: ['Installation Tools', 'Inspection Equipment', 'Maintenance Kits', 'Measuring Instruments'],
    },
    {
      title: 'Consultation Services',
      description: 'Expert engineering consultation including project planning, safety assessments, custom design solutions, and on-site support services.',
      icon: Users,
      features: ['Project Planning', 'Safety Assessment', 'Custom Design', 'On-site Support'],
    },
  ];

  const specifications = [
    {
      category: 'Materials',
      items: ['High-grade steel construction', 'Galvanized coating for corrosion resistance', 'Load-tested components', 'ISO certified materials'],
    },
    {
      category: 'Safety Standards',
      items: ['IS 4656 compliance', 'OSHA safety requirements', 'CE marking where applicable', 'Regular safety audits'],
    },
    {
      category: 'Customization',
      items: ['Project-specific designs', 'Load calculation services', 'CAD drawing support', 'Technical documentation'],
    },
    {
      category: 'Support',
      items: ['Installation guidance', '24/7 technical support', 'Maintenance services', 'Training programs'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[400px] mt-[72px] overflow-hidden">
        <img
          src={productsHero}
          alt="Scaffolding products and equipment"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h1 className="text-hero mb-4">Our Products & Services</h1>
            <p className="text-body-large max-w-2xl">
              Comprehensive solutions for all your scaffolding and engineering needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Product Categories</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              Discover our comprehensive range of products and services designed to meet 
              the diverse needs of modern construction and industrial projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card-peaceful group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <product.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-card-title mb-3">{product.title}</h3>
                    <p className="text-muted-custom mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-custom">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-foreground font-medium hover:text-primary transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      Enquire Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Technical Specifications</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              Our products meet the highest industry standards and specifications 
              for safety, durability, and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="card-peaceful">
                <h3 className="text-card-title mb-6 text-center">{spec.category}</h3>
                <div className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-custom text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section-title mb-6">Quality Assurance</h2>
              <div className="space-y-6 text-body-large text-muted-custom">
                <p>
                  At Shree Ganesh Engineering, quality is not just a promise – it's our 
                  foundation. Every product undergoes rigorous testing and quality control 
                  processes to ensure it meets the highest industry standards.
                </p>
                <p>
                  Our manufacturing facilities are equipped with state-of-the-art testing 
                  equipment and are regularly audited to maintain our ISO certifications. 
                  We believe that superior quality products are essential for the safety 
                  and success of every project.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">ISO 9001</div>
                  <div className="text-sm text-muted-custom">Certified Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+ Years</div>
                  <div className="text-sm text-muted-custom">Industry Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-custom">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-custom">Safety Record</div>
                </div>
              </div>
            </div>
            
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-section-title">Ready to Get Started?</h2>
            <p className="text-body-large text-muted-custom">
              Contact our expert team today to discuss your project requirements 
              and discover the perfect solution for your needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;