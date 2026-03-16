
'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-headline font-bold tracking-tight">
              SCREW<span className="text-secondary">HUB</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-secondary transition-colors font-medium">Home</Link>
            <Link href="/screws" className="hover:text-secondary transition-colors font-medium">Screws</Link>
            <Link href="/shop" className="hover:text-secondary transition-colors font-medium">Shop All</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors font-medium">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center relative">
              <Input 
                type="text" 
                placeholder="Search screws..." 
                className="bg-white/10 border-none text-white placeholder:text-white/60 focus-visible:ring-secondary w-48 lg:w-64"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/60" />
            </div>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-foreground text-primary p-4 border-t shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="px-2 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/screws" className="px-2 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Screws</Link>
            <Link href="/shop" className="px-2 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Shop All</Link>
            <Link href="/contact" className="px-2 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="border-t pt-4 mt-2 flex flex-col gap-2">
              <Input type="text" placeholder="Search screws..." className="w-full" />
              <Button className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-white">Login / Register</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
