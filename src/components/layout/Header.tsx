
'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User, Hammer } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2 px-4' : 'py-4 px-4'
      }`}
    >
      <div 
        className={`container mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled ? 'glass px-6 shadow-2xl' : 'bg-transparent px-2'
        }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Hammer className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-headline font-bold tracking-tighter text-primary">
              SCREW<span className="text-secondary">HUB</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-white/20">
            {['Home', 'Shop', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-white transition-all duration-300 text-primary/80 hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center relative group">
              <Input 
                type="text" 
                placeholder="Find fasteners..." 
                className="bg-white/50 border-none rounded-full h-9 w-40 lg:w-56 focus-visible:ring-secondary transition-all group-hover:bg-white"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white transition-all relative">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">2</span>
              </Button>
            </Link>

            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white">
                <User className="h-5 w-5 text-primary" />
              </Button>
            </Link>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-2 glass rounded-3xl p-6 shadow-2xl overflow-hidden border-white/40"
          >
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-xl font-bold px-2 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/shop" className="text-xl font-bold px-2 py-2" onClick={() => setIsMenuOpen(false)}>Browse Catalog</Link>
              <Link href="/contact" className="text-xl font-bold px-2 py-2" onClick={() => setIsMenuOpen(false)}>Support Center</Link>
              <div className="border-t border-white/20 pt-6 mt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl h-12 text-lg font-bold">
                  Login / Account
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] glass-dark rounded-full h-16 flex items-center justify-around px-6 shadow-2xl border-white/5">
        <Link href="/" className="p-3"><Menu className="h-6 w-6 text-white/60" /></Link>
        <Link href="/shop" className="p-3 bg-secondary rounded-full -translate-y-4 shadow-xl border-4 border-background"><Search className="h-6 w-6 text-white" /></Link>
        <Link href="/cart" className="p-3"><ShoppingCart className="h-6 w-6 text-white/60" /></Link>
      </div>
    </header>
  );
}
