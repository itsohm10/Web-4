import { MapPin, Phone, Mail, Shield, Clock, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-inverse">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Shree Ganesh Engineering</h3>
            <p className="text-muted-custom mb-6 leading-relaxed">
              Excellence in scaffolding solutions with over two decades of experience 
              in providing safe, reliable, and innovative engineering services.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Safety First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-muted-custom" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-muted-custom text-sm">
                    123 Industrial Area, Sector 15<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
  <Phone className="h-5 w-5 text-muted-custom" />
  <div>
    <a href="tel:+919876543210" className="font-medium hover:underline">
      +91 98765 43210
    </a>
    <br />
    <a href="tel:+918765432109" className="text-muted-custom text-sm hover:underline">
      +91 87654 32109
    </a>
  </div>
</div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-custom" />
                <p className="font-medium">info@shreeganesheng.com</p>
              </div>
            </div>
          </div>

          {/* Services & Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services & Hours</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Our Services</p>
                <ul className="text-muted-custom text-sm space-y-1">
                  <li>• Scaffolding Design & Installation</li>
                  <li>• Industrial Engineering Solutions</li>
                  <li>• Safety Equipment Supply</li>
                  <li>• Project Consultation</li>
                </ul>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-muted-custom" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-muted-custom text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider opacity-20"></div>

        <div className="text-center">
          <p className="text-muted-custom text-sm">
            © 2024 Shree Ganesh Engineering. All rights reserved. | 
            Building Excellence, Ensuring Safety.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;