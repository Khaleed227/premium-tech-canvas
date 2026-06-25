import React from 'react';
import { Menu, Phone, MessageSquare, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Navbar = ({ setIsOpen }: { setIsOpen: (val: boolean) => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b z-30 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu size={24} />
        </button>
        <Link to="/" className="flex items-center gap-2 lg:hidden">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="font-bold text-white text-xs">KT</span>
          </div>
          <span className="font-bold text-primary">Khalil Tech</span>
        </Link>
      </div>

      <div className="hidden lg:block">
        <h1 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Khalil Tech x Gifts Hub
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <a href="tel:08141669349" className="hidden md:flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <Phone size={18} />
          <span className="text-sm font-semibold">08141669349</span>
        </a>
        <Button variant="outline" size="sm" asChild className="hidden sm:flex border-accent text-accent hover:bg-accent hover:text-white">
          <Link to="/portal">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Client Portal
          </Link>
        </Button>
        <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
          <Link to="/contact">Request Service</Link>
        </Button>
      </div>
    </header>
  );
};
