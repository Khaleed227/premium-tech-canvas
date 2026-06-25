import React from 'react';
import { Check, Zap, Rocket, Star, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 'Call for Quote',
    description: 'Perfect for individuals and small startups needing essential tech support.',
    icon: Zap,
    features: [
      'Basic IT Support',
      'Virtual Assistance (5 hrs/week)',
      'Single Landing Page',
      'Basic Branding Pack',
      'Email Support',
      'Phone Consultation'
    ],
    highlight: false,
    color: 'border-gray-200'
  },
  {
    name: 'Professional',
    price: 'Call for Quote',
    description: 'Comprehensive solutions for growing businesses and organizations.',
    icon: Rocket,
    features: [
      'Advanced IT Infrastructure',
      'Virtual Assistance (20 hrs/week)',
      'Multi-page Business Website',
      'Database Design & Setup',
      'Data Analytics Dashboard',
      'Priority Priority Support',
      'Monthly Strategy Session'
    ],
    highlight: true,
    color: 'border-accent ring-2 ring-accent ring-offset-2'
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    description: 'Customized technology ecosystem for large-scale operations.',
    icon: Star,
    features: [
      'Full Managed IT Services',
      'Dedicated VA Team',
      'Custom Software/Portals',
      'Big Data Analytics',
      'Enterprise Database Cluster',
      '24/7 Premium Support',
      'On-site Training'
    ],
    highlight: false,
    color: 'border-gray-200'
  }
];

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Flexible Plans</span>
        <h1 className="text-4xl font-bold mt-4 text-primary">Professional Service Packages</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the right level of support for your business growth. We offer transparent pricing and tailored solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div 
            key={plan.name}
            className={`bg-white rounded-3xl p-8 border transition-all hover:shadow-2xl flex flex-col ${plan.color} ${plan.highlight ? 'scale-105 z-10' : ''}`}
          >
            {plan.highlight && (
              <div className="bg-accent text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full self-start mb-6">
                Most Popular
              </div>
            )}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.highlight ? 'bg-accent text-white' : 'bg-primary/10 text-primary'}`}>
              <plan.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
            <p className="text-muted-foreground mb-6 h-12 line-clamp-2">
              {plan.description}
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">{plan.price}</span>
            </div>
            
            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map(feat => (
                <div key={feat} className="flex items-center gap-3">
                  <Check className="text-accent shrink-0" size={18} />
                  <span className="text-gray-700">{feat}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className={`w-full h-14 rounded-xl font-bold transition-all ${
                plan.highlight 
                  ? 'bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20' 
                  : 'bg-primary hover:bg-primary/90'
              }`}
              asChild
            >
              <Link to="/contact">Get Started Now</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gray-50 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-dashed border-gray-300">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <ShieldCheck size={32} className="text-accent" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-primary">Need a custom plan?</h4>
            <p className="text-muted-foreground">Contact our team for a personalized proposal tailored to your unique business needs.</p>
          </div>
        </div>
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-10" asChild>
          <Link to="/contact">Custom Consultation</Link>
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
