import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Zap, TrendingUp, Users, 
  Database, Laptop, BarChart, Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/hero-bg-63fcb3bc-1782381365152.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to <span className="text-accent">Khalil Tech & Care Solutions</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Providing professional IT services, Virtual Assistance, Database Management, Data Analytics, Web Development, Digital Support, and Technology Solutions across Nigeria and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8" asChild>
                <Link to="/contact">Request Service</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-12 left-0 right-0 z-10 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-3">
              <ShieldCheck className="text-accent" size={32} />
              <div className="text-white">
                <p className="font-bold text-sm uppercase">CAC Registered</p>
                <p className="text-xs text-white/60">Official Business</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-3">
              <Zap className="text-accent" size={32} />
              <div className="text-white">
                <p className="font-bold text-sm uppercase">Pro ICT Provider</p>
                <p className="text-xs text-white/60">Expert Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Technology • Data • Innovation</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-primary">
              Leading the Way in Digital Transformation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Khalil Tech & Care Solutions is a technology-driven company dedicated to providing innovative digital solutions for individuals, businesses, schools, and organizations. We specialize in turning complex challenges into seamless digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-bold">Growth Driven</p>
                  <p className="text-sm text-muted-foreground">Scaling your business with data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-bold">Client Centric</p>
                  <p className="text-sm text-muted-foreground">Personalized care for every project.</p>
                </div>
              </div>
            </div>
            <Button className="mt-10 group" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/founder-photo-544ef08f-1782381364640.webp" 
              alt="Khalil Abubakar Sadiq" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border hidden md:block max-w-[240px]">
              <p className="font-bold text-primary italic">"Our mission is to empower Africa through technology and data-driven solutions."</p>
              <p className="mt-4 text-sm font-bold">— Khalil Abubakar Sadiq</p>
              <p className="text-xs text-muted-foreground">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Preview) */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Our Core Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Laptop, title: 'IT Support', desc: 'Hardware troubleshooting, networking, and software maintenance.' },
              { icon: Database, title: 'Database Mgt', desc: 'Professional design, maintenance, and data recovery.' },
              { icon: BarChart, title: 'Data Analytics', desc: 'Advanced reporting, visualization, and decision support.' },
              { icon: Globe, title: 'Web Development', desc: 'Modern websites, portals, and complex business systems.' }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CardContent className="p-8">
                    <s.icon className="text-accent mb-6 w-12 h-12" />
                    <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                    <p className="text-white/60 mb-6">{s.desc}</p>
                    <Link to="/services" className="text-accent font-semibold flex items-center gap-2 group-hover:underline">
                      View Details <ArrowRight size={16} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Badges */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-3xl p-12 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70">
          <div className="flex flex-col items-center gap-3">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
               <span className="font-bold text-primary">CAC</span>
             </div>
             <p className="font-bold text-sm text-muted-foreground uppercase">Registered</p>
          </div>
          <div className="flex flex-col items-center gap-3">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
               <span className="font-bold text-primary">SMEDAN</span>
             </div>
             <p className="font-bold text-sm text-muted-foreground uppercase">Registered</p>
          </div>
          <div className="flex flex-col items-center gap-3">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
               <span className="font-bold text-primary text-xs text-center px-2">PROFESSIONAL ICT</span>
             </div>
             <p className="font-bold text-sm text-muted-foreground uppercase">Provider</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
