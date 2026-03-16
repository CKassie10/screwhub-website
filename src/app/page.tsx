
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { QuickFilter } from '@/components/home/QuickFilter';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { WhyShopHere } from '@/components/home/WhyShopHere';
import { ScrewAssistant } from '@/components/ai/ScrewAssistant';
import { PRODUCTS } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickFilter />
        
        {/* Featured Collections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold text-primary mb-2">Bestsellers & Popular Ranges</h2>
              <p className="text-muted-foreground">Trusted by trade professionals across the country.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-none bg-muted/30">
                  <CardContent className="p-4">
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-white">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-4 group-hover:scale-105 transition-transform"
                      />
                      <Badge className="absolute top-2 right-2 bg-secondary hover:bg-secondary">New</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{product.category}</p>
                      <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />)}
                        <span className="text-[10px] text-muted-foreground ml-1">(24 Reviews)</span>
                      </div>
                      <p className="text-lg font-bold text-primary pt-2">
                        ${product.price.toFixed(2)} <span className="text-xs font-normal text-muted-foreground">/ unit</span>
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <WhyShopHere />
        <CategoryGrid />
        <ScrewAssistant />
      </main>
      <Footer />
    </>
  );
}
