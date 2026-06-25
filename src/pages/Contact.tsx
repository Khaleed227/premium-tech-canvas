import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { toast } from 'sonner';

const faqs = [
  {
    question: "What areas do you cover for IT support?",
    answer: "We provide on-site IT support across Abuja and neighboring states. Remote support is available for clients worldwide."
  },
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation by filling out the form on this page, calling us directly, or using the WhatsApp button for instant response."
  },
  {
    question: "Do you offer training for corporate organizations?",
    answer: "Yes, we provide tailored ICT training programs for schools, businesses, and government organizations."
  },
  {
    question: "How long does it take to develop a business website?",
    answer: "A standard business website typically takes 2-4 weeks depending on the complexity and requirements."
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Get In Touch</span>
        <h1 className="text-4xl font-bold mt-4 text-primary">Contact Khalil Tech</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
          Have a question or ready to start your next project? Reach out to our expert team today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Phone size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/60 mb-4">Available Mon-Sat, 8am-6pm</p>
              <a href="tel:08141669349" className="text-2xl font-bold hover:text-accent transition-colors">08141669349</a>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
              <Mail size={24} className="text-accent group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">Drop us a line anytime</p>
            <a href="mailto:khaleedsadiq73@gmail.com" className="text-lg font-semibold text-accent break-all">khaleedsadiq73@gmail.com</a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
              <MapPin size={24} className="text-accent group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Our Office</h3>
            <p className="text-muted-foreground mb-4">Visit us for consultation</p>
            <p className="text-lg font-semibold text-primary">Abuja, Nigeria</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="081 4166 9349" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Inquiry" required className="h-12 rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] rounded-xl" required />
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto px-12 h-14 bg-primary hover:bg-primary/90 text-lg rounded-xl gap-2">
              Send Message <Send size={20} />
            </Button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 rounded-3xl p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 text-accent mb-4">
              <HelpCircle size={28} />
              <span className="font-bold uppercase tracking-wider">Common Questions</span>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Quick answers to some of our most common inquiries. Can't find what you're looking for? Reach out to us.
            </p>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
               <ShieldCheck className="text-green-500 shrink-0" size={32} />
               <p className="text-sm font-medium text-primary italic">"We prioritize your data security and privacy in every interaction."</p>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-primary hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-32 h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
            <MapPin size={32} className="text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Find Us in Abuja</h3>
          <p className="text-primary/70 font-medium">Headquarters Location • Nigeria</p>
          <Button variant="secondary" className="mt-6 shadow-lg">Get Directions</Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
