import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, User, CheckCircle2, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-20">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Story</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 text-primary">About Khalil Tech & Care Solutions</h1>
        <div className="w-24 h-1 bg-accent mt-6"></div>
      </div>

      {/* Founder Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/founder-photo-544ef08f-1782381364640.webp" 
              alt="Khalil Abubakar Sadiq" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-accent mb-2">
            <User size={24} />
            <span className="font-bold text-lg uppercase tracking-wider">The Visionary</span>
          </div>
          <h2 className="text-3xl font-bold text-primary">Khalil Abubakar Sadiq</h2>
          <p className="text-xl font-medium text-muted-foreground italic">Founder & CEO</p>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Khalil Tech & Care Solutions is a technology-driven company dedicated to providing innovative digital solutions for individuals, businesses, schools, and organizations.
            </p>
            <p>
              Founded by Khalil Abubakar Sadiq, the company specializes in IT support, database management, data analytics, virtual assistance, web development, computer services, and technology consulting.
            </p>
            <p>
              Under Khalil's leadership, we have grown from a local service provider to a regional leader in digital transformation, helping businesses navigate the complexities of the modern tech landscape.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="bg-primary text-white p-12 rounded-3xl relative overflow-hidden group">
          <Target className="w-16 h-16 text-accent mb-8" />
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-white/70 leading-relaxed relative z-10">
            To provide cutting-edge, reliable, and affordable technology solutions that empower our clients to achieve their digital goals and operational excellence.
          </p>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
        </div>
        <div className="bg-accent text-white p-12 rounded-3xl relative overflow-hidden group">
          <Eye className="w-16 h-16 text-white mb-8" />
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-xl text-white/90 leading-relaxed relative z-10">
            To be the most trusted name in technology and digital support across Nigeria and Africa, known for innovation, integrity, and exceptional customer service.
          </p>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: 'Professionalism', desc: 'Highest standards of work in every project.' },
            { icon: Heart, title: 'Integrity', desc: 'Honest and transparent business practices.' },
            { icon: Zap, title: 'Innovation', desc: 'Constantly evolving with technology trends.' },
            { icon: CheckCircle2, title: 'Satisfaction', desc: 'Committed to exceeding client expectations.' }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <val.icon className="w-12 h-12 text-accent mx-auto mb-6" />
              <h4 className="text-xl font-bold text-primary mb-3">{val.title}</h4>
              <p className="text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
