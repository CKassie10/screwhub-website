
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { BentoGrid } from '@/components/home/BentoGrid';
import { WhyShopHere } from '@/components/home/WhyShopHere';
import { ScrewAssistant } from '@/components/ai/ScrewAssistant';
import { PRODUCTS } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Kinetic Quick Links */}
        <section className="bg-[#0a0a0a] border-y border-white/5 py-8 overflow-x-auto">
          <div className="container mx-auto px-6 flex items-center justify-center gap-12 whitespace-nowrap">
            {['Titanium', 'Marine Grade', 'High Tensile', 'Architectural', 'Bulk Systems'].map((tag) => (
              <span key={tag} className="text-white/20 text-sm font-bold tracking-widest uppercase hover:text-secondary cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <BentoGrid />

        {/* Featured Showcase: The "Anti-Grid" */}
        <section className="py-32 bg-background relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl lg:text-7xl font-headline font-bold text-primary tracking-tighter leading-none mb-6">
                  ENGINEERED <br /><span className="text-secondary italic">EXCELLENCE.</span>
                </h2>
                <p className="text-muted-foreground text-xl">The world's most reliable fasteners, stress-tested for 2026 performance requirements.</p>
              </div>
              <Link href="/shop">
                <Button size="lg" className="rounded-full bg-primary text-white px-8 group">
                  View Full Catalog <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {featured.map((product, i) => (
                <Card key={product.id} className={`group border-none bg-transparent shadow-none ${i % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'}`}>
                  <div className="relative aspect-square mb-8 overflow-hidden rounded-[40px] bg-muted/30 p-8 hover:shadow-2xl transition-all duration-700">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-contain p-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white text-primary shadow-xl font-bold rounded-full">New Batch</Badge>
                    </div>
                  </div>
                  <div className="space-y-3 px-2">
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{product.category}</p>
                    <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-3xl font-headline font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </p>
                      <Button size="icon" className="rounded-full bg-primary text-white hover:bg-secondary transition-all w-12 h-12">
                        <ShoppingCart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <WhyShopHere />
        <ScrewAssistant />
      </main>
      <Footer />
    </>
  );
}
