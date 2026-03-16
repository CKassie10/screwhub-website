
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImg = (PlaceHolderImages || []).find(img => img.id === 'hero-screw-montage');

  return (
    <section className="relative h-[500px] lg:h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImg?.imageUrl || 'https://picsum.photos/seed/screw-hero/1200/600'} 
          alt="Premium industrial screws"
          fill
          className="object-cover opacity-30 mix-blend-multiply"
          priority
          data-ai-hint="industrial screws"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Professional Grade Fasteners
          </div>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary leading-tight">
            Premium Screws – Massive Range, In-Stock & Ready to Ship
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From marine-grade stainless steel to high-tensile construction screws, we stock thousands of variations in every finish and drive style imaginable.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12">
                Shop All Screws
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 h-12">
                Browse by Type
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
