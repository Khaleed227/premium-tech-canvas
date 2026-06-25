import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Headset, Database, BarChart, Globe, PenTool, GraduationCap, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'it-support',
    title: 'IT Support Services',
    description: 'Computer troubleshooting, networking, software installation, maintenance, and technical support.',
    icon: Laptop,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-it-support-3352ad8d-1782381364989.webp',
    color: 'bg-blue-500'
  },
  {
    id: 'va',
    title: 'Virtual Assistance',
    description: 'Email management, scheduling, administrative support, customer service, and business assistance.',
    icon: Headset,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-va-de4e611b-1782381364796.webp',
    color: 'bg-purple-500'
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Database design, maintenance, optimization, backup, and recovery.',
    icon: Database,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-database-0fa54564-1782381365538.webp',
    color: 'bg-green-500'
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Business analytics, reporting dashboards, data visualization, and decision support.',
    icon: BarChart,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-analytics-92ca056c-1782381365319.webp',
    color: 'bg-orange-500'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Professional websites, portals, landing pages, and business systems.',
    icon: Globe,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-web-dev-32c16071-1782381366303.webp',
    color: 'bg-indigo-500'
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    description: 'Business branding, flyers, logos, and marketing materials.',
    icon: PenTool,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-graphic-design-58a033f5-1782381366861.webp',
    color: 'bg-pink-500'
  },
  {
    id: 'training',
    title: 'ICT Training',
    description: 'Computer literacy and technology training programs.',
    icon: GraduationCap,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-training-71acc934-1782381366863.webp',
    color: 'bg-cyan-500'
  }
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">What We Offer</span>
        <h1 className="text-4xl font-bold mt-4 text-primary">Expert Digital Services</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Comprehensive technology solutions designed to help your business thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="md:w-2/5 relative overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${service.color} opacity-20 group-hover:opacity-10 transition-opacity`}></div>
            </div>
            <div className="md:w-3/5 p-8 flex flex-col justify-between">
              <div>
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Book Service</Link>
                </Button>
                <Button variant="ghost" className="text-accent hover:text-accent/80 hover:bg-accent/10" asChild>
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-32 bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <MessageSquare className="w-16 h-16 text-accent mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Every business is unique. We can tailor our services to fit your specific requirements and goals.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </section>
    </div>
  );
};

export default Services;
