import { Users, Target, Lightbulb, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  const timeline = [
    {
      year: '2000',
      title: 'Company Founded',
      description: 'Started as a small scaffolding service provider with a vision for excellence',
    },
    {
      year: '2005',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2000 certification for quality management systems',
    },
    {
      year: '2010',
      title: 'Major Expansion',
      description: 'Expanded operations to cover pan-India with regional offices',
    },
    {
      year: '2015',
      title: 'Technology Integration',
      description: 'Integrated advanced CAD design and project management systems',
    },
    {
      year: '2020',
      title: 'Industry Leadership',
      description: 'Recognized as a leading scaffolding solutions provider in Western India',
    },
    {
      year: '2024',
      title: 'Innovation Focus',
      description: 'Launched new sustainable engineering solutions and safety innovations',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision Excellence',
      description: 'Every project is executed with meticulous attention to detail and engineering precision that meets the highest industry standards.',
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'We build lasting relationships with our clients through transparent communication and collaborative problem-solving approaches.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Drive',
      description: 'Continuously investing in new technologies and methodologies to deliver cutting-edge solutions for complex challenges.',
    },
    {
      icon: Trophy,
      title: 'Quality Commitment',
      description: 'Uncompromising dedication to quality in materials, processes, and outcomes that exceed client expectations consistently.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[400px] mt-[72px] overflow-hidden">
        <img
          src={aboutHero}
          alt="Shree Ganesh Engineering office building"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
          <div className="text-center text-inverse">
            <h1 className="text-hero mb-4">About Our Company</h1>
            <p className="text-body-large max-w-2xl">
              Building excellence through innovation, safety, and unwavering commitment to quality
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-section-title mb-8">Our Story</h2>
            
            <div className="space-y-6 text-body-large leading-relaxed text-muted-custom">
              <p>
                Founded in 2000 with a simple yet powerful vision, Shree Ganesh Engineering 
                has evolved from a small local service provider into one of Western India's 
                most trusted scaffolding and engineering solution companies. Our journey 
                began with a commitment to safety, quality, and innovation that continues 
                to drive everything we do today.
              </p>
              
              <p>
                Over the past two decades, we have successfully completed thousands of 
                projects ranging from residential buildings to large-scale industrial 
                complexes. Our expertise spans across multiple sectors including construction, 
                manufacturing, petrochemicals, and infrastructure development, making us 
                a versatile partner for diverse engineering challenges.
              </p>
              
              <p>
                What sets us apart is our relentless focus on safety standards, quality 
                craftsmanship, and innovative problem-solving. Every member of our team 
                shares the same passion for excellence, ensuring that each project we 
                undertake reflects our commitment to building a safer, more reliable future 
                for the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Journey</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              Two decades of continuous growth, innovation, and excellence in engineering solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="card-peaceful">
                <div className="text-3xl font-bold text-primary mb-4">{item.year}</div>
                <h3 className="text-card-title mb-3">{item.title}</h3>
                <p className="text-muted-custom">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Core Values</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              The principles that guide our decisions and define our character as an organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-peaceful flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-inverse rounded-full flex items-center justify-center">
                  <value.icon size={28} />
                </div>
                <div>
                  <h3 className="text-card-title mb-3">{value.title}</h3>
                  <p className="text-muted-custom leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Workspace</h2>
            <p className="text-body-large text-muted-custom max-w-2xl mx-auto">
              A glimpse into our modern facilities and professional environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="image-hover aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;