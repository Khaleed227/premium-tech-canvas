import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="font-bold text-white text-lg">K</span>
              </div>
              <span className="font-bold text-xl">Khalil Tech</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Technology, Data & Digital Solutions for Businesses and Individuals. Dedicated to innovation and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">Quick Links</h3>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/store" className="hover:text-accent transition-colors">Gifts Hub</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">Contact Us</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span>08141669349</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="break-all">khaleedsadiq73@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">Accreditations</h3>
            <div className="space-y-4">
              <div className="p-3 bg-white/10 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">CAC</span>
                </div>
                <span className="text-sm">Registered with CAC</span>
              </div>
              <div className="p-3 bg-white/10 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">SM</span>
                </div>
                <span className="text-sm">SMEDAN Registered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© 2026 Khalil Tech & Care Solutions. All Rights Reserved.</p>
          <p className="mt-2 text-white/30 italic">Technology • Data • Innovation</p>
        </div>
      </div>
    </footer>
  );
};
