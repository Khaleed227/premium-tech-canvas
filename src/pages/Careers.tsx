import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const jobs = [
  {
    title: "Senior Web Developer",
    location: "Abuja / Remote",
    type: "Full-time",
    salary: "Competitive",
    description: "Looking for an experienced React developer to lead our web development projects."
  },
  {
    title: "Data Analyst",
    location: "Remote",
    type: "Contract",
    salary: "Project Based",
    description: "Seeking a data enthusiast proficient in Python, SQL, and visualization tools."
  },
  {
    title: "Virtual Assistant",
    location: "Abuja",
    type: "Full-time",
    salary: "Entry Level",
    description: "Join our VA team to provide administrative support to international clients."
  }
];

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Join Our Team</span>
        <h1 className="text-4xl font-bold mt-4 text-primary">Build the Future with Us</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          We are always looking for passionate, innovative, and driven individuals to join Khalil Tech & Care Solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-primary">Why Work With Us?</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Innovation First", desc: "Work with the latest technologies and digital tools." },
              { title: "Flexible Work", desc: "We offer remote and hybrid work options for many roles." },
              { title: "Career Growth", desc: "Continuous learning and professional development programs." },
              { title: "Impactful Work", desc: "Solve real-world problems for businesses across Africa." }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/service-training-71acc934-1782381366863.webp" 
            alt="Office Life" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl text-white shadow-xl max-w-[200px] hidden md:block">
            <p className="text-4xl font-bold text-accent">100%</p>
            <p className="text-sm font-medium opacity-70 mt-2">Remote-friendly Infrastructure</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-primary mb-12">Open Positions</h2>
      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-none">{job.type}</Badge>
                <Badge variant="outline">{job.location}</Badge>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{job.title}</h3>
              <p className="text-muted-foreground max-w-xl">{job.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Salary</p>
                <p className="font-bold text-primary">{job.salary}</p>
              </div>
              <Button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 font-bold group">
                Apply Now <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
