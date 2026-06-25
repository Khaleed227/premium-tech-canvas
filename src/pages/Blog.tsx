import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "5 Essential Data Security Tips for Small Businesses",
    excerpt: "Protect your business data from cyber threats with these simple yet effective security measures every entrepreneur should know.",
    author: "Khalil Abubakar Sadiq",
    date: "March 15, 2026",
    category: "Security",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-database-0fa54564-1782381365538.webp"
  },
  {
    title: "How Data Analytics Can Transform Your Growth Strategy",
    excerpt: "Learn how to leverage business intelligence tools to make data-driven decisions that propel your organization forward.",
    author: "Khalil Abubakar Sadiq",
    date: "March 10, 2026",
    category: "Analytics",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-analytics-92ca056c-1782381365319.webp"
  },
  {
    title: "The Future of Remote Work: Virtual Assistance in 2026",
    excerpt: "Discover why virtual assistance is becoming the backbone of modern efficient business operations worldwide.",
    author: "Khalil Abubakar Sadiq",
    date: "March 05, 2026",
    category: "Business",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-va-de4e611b-1782381364796.webp"
  }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Tech Insights</span>
        <h1 className="text-4xl font-bold mt-4 text-primary">Our Latest Articles</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest trends in technology, data management, and business solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <Button variant="link" className="p-0 h-auto text-accent font-bold hover:no-underline flex items-center gap-2">
                Read Full Story <ArrowRight size={16} />
              </Button>
            </CardContent>
          </motion.article>
        ))}
      </div>

      <div className="mt-24 bg-primary rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Subscribe to get monthly tech tips and business insights directly to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 h-12 rounded-xl px-6 bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white"
          />
          <Button className="bg-accent hover:bg-accent/90 h-12 px-8 font-bold">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
