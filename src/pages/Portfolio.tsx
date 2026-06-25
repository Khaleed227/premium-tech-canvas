import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Database', 'Analytics', 'IT Support', 'Web Dev', 'VA'];

const projects = [
  {
    title: 'Enterprise ERP Database',
    category: 'Database',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-database-0fa54564-1782381365538.webp',
    description: 'Architected and implemented a high-performance PostgreSQL database for a retail chain.'
  },
  {
    title: 'Sales Intelligence Dashboard',
    category: 'Analytics',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-analytics-92ca056c-1782381365319.webp',
    description: 'Real-time data visualization platform for executive decision makers using PowerBI.'
  },
  {
    title: 'Tech Hub Infrastructure',
    category: 'IT Support',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-it-support-3352ad8d-1782381364989.webp',
    description: 'Complete networking and server setup for a new innovation hub in Abuja.'
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Dev',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-web-dev-32c16071-1782381366303.webp',
    description: 'Full-stack React/Node.js application with integrated payment systems.'
  },
  {
    title: 'Executive VA Support',
    category: 'VA',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-va-de4e611b-1782381364796.webp',
    description: 'Managed administrative operations and scheduling for a tech startup CEO.'
  },
  {
    title: 'Health Data System',
    category: 'Database',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-database-0fa54564-1782381365538.webp',
    description: 'Patient record management system with HIPAA-compliant security.'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Work</span>
          <h1 className="text-4xl font-bold mt-4 text-primary">Project Portfolio</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl">
            A showcase of our successfully delivered technology and data solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-muted-foreground hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" className="gap-2">
                      View Details <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-accent border-accent/20 bg-accent/5">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
