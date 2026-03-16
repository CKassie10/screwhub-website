
import { CATEGORIES } from '@/app/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CategoryGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary mb-2">Shop by Screw Type</h2>
            <p className="text-muted-foreground">Specialized solutions for every project and material.</p>
          </div>
          <Link href="/shop" className="text-secondary font-bold flex items-center gap-2 hover:underline">
            View All Categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} href={`/shop?category=${cat.id}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-headline font-bold text-white">{cat.name}</h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
