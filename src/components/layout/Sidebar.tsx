import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Info, Briefcase, Gift, FolderOpen, 
  DollarSign, BookOpen, UserPlus, Mail, LayoutDashboard, 
  Menu, X, Laptop, Phone, Database, BarChart, Globe, PenTool, GraduationCap, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Gifts Hub', href: '/store', icon: Gift },
  { name: 'Portfolio', href: '/portfolio', icon: FolderOpen },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: UserPlus },
  { name: 'Contact Us', href: '/contact', icon: Mail },
  { name: 'Client Portal', href: '/portal', icon: LayoutDashboard },
  { name: 'Admin Dashboard', href: '/admin', icon: Settings },
];

export const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        className="fixed top-0 left-0 bottom-0 w-64 bg-primary text-white z-50 flex flex-col shadow-xl"
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <span className="font-bold text-white">K</span>
            </div>
            <span className="font-bold text-lg leading-tight">Khalil Tech</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => {
                if (window.innerWidth < 1024) setIsOpen(false);
              }}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-accent text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <UserPlus size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold">Support Center</p>
              <p className="text-xs text-white/50">24/7 Assistance</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
