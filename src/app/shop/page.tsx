
'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PRODUCTS, CATEGORIES } from '@/app/lib/data';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Filter, LayoutGrid, List, SlidersHorizontal, Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialCategory && initialCategory !== 'all') {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // If no categories are selected, or "all" is selected, match all products
      const isAllSelected = selectedCategories.includes('all') || selectedCategories.length === 0;
      const matchesCategory = isAllSelected || selectedCategories.includes(p.category);
      
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategories, searchQuery, priceRange]);

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev => {
      if (id === 'all') {
        // If "All" is clicked, clear everything else and just set "all"
        return ['all'];
      }
      
      // If another category is clicked, remove "all"
      const filtered = prev.filter(c => c !== 'all');
      return filtered.includes(id) 
        ? filtered.filter(c => c !== id) 
        : [...filtered, id];
    });
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 space-y-8">
              <div>
                <h2 className="text-xl font-headline font-bold mb-6 flex items-center gap-2 text-primary">
                  <Filter className="h-5 w-5 text-secondary" /> Browse Categories
                </h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Search</h3>
                    <div className="relative">
                      <Input 
                        placeholder="Find specification..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 h-11 rounded-xl"
                      />
                      <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Fastener Type</h3>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {CATEGORIES.map(cat => (
                        <div key={cat.id} className="flex items-center space-x-3 p-1 group">
                          <Checkbox 
                            id={cat.id} 
                            checked={selectedCategories.includes(cat.id)}
                            onCheckedChange={() => toggleCategory(cat.id)}
                            className="rounded-md data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                          />
                          <Label 
                            htmlFor={cat.id} 
                            className={`text-sm font-medium leading-none cursor-pointer transition-colors ${selectedCategories.includes(cat.id) ? 'text-secondary font-bold' : 'text-primary/70 group-hover:text-primary'}`}
                          >
                            {cat.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Price Bracket</h3>
                      <span className="text-xs font-bold text-secondary">${priceRange[0]} - ${priceRange[1]}</span>
                    </div>
                    <Slider 
                      defaultValue={[0, 5]} 
                      max={5} 
                      step={0.1} 
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary text-white rounded-[24px] shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <SlidersHorizontal className="h-16 w-16" />
                </div>
                <h4 className="font-headline font-bold mb-2 relative z-10">Spec Expert</h4>
                <p className="text-xs text-white/60 mb-4 relative z-10 leading-relaxed">Can't find an exact DIN or ISO spec? Our team handles bespoke industrial orders.</p>
                <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10 relative z-10 rounded-xl">Contact Kamal</Button>
              </div>
            </aside>

            {/* Product Listing */}
            <div className="flex-grow space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-center glass p-4 rounded-2xl border shadow-sm gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    Engineering <span className="font-bold text-primary">{filteredProducts.length}</span> verified results
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-muted/50 p-1 rounded-xl">
                    <Button 
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                      size="icon" 
                      className="rounded-lg h-9 w-9"
                      onClick={() => setViewMode('grid')}
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                      size="icon" 
                      className="rounded-lg h-9 w-9"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[160px] h-10 rounded-xl">
                      <SelectValue placeholder="Sort results" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Demand Rate</SelectItem>
                      <SelectItem value="price-low">Price: Low - High</SelectItem>
                      <SelectItem value="price-high">Price: High - Low</SelectItem>
                      <SelectItem value="name">Name (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}>
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className={viewMode === 'grid' ? "group hover:shadow-2xl transition-all duration-500 border-none bg-white rounded-[32px] overflow-hidden" : "flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-500 border-none bg-white rounded-[32px] overflow-hidden min-h-[220px]"}>
                      <div className={viewMode === 'grid' ? "relative aspect-square overflow-hidden bg-muted/20" : "relative w-full sm:w-64 h-64 sm:h-auto bg-muted/20 shrink-0"}>
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="flex flex-col justify-between p-8 flex-grow">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{product.category.replace(/-/g, ' ')}</p>
                            <Badge className="bg-primary/5 text-primary border-none rounded-full text-[10px] px-3 font-bold">{product.stockStatus}</Badge>
                          </div>
                          <h3 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">{product.description}</p>
                          <div className="pt-4 flex flex-wrap gap-2">
                             <span className="text-[10px] font-bold bg-muted/50 px-3 py-1 rounded-full text-primary/60 uppercase">{product.material}</span>
                             <span className="text-[10px] font-bold bg-muted/50 px-3 py-1 rounded-full text-primary/60 uppercase">{product.finish}</span>
                             <span className="text-[10px] font-bold bg-secondary/10 px-3 py-1 rounded-full text-secondary uppercase">{product.specs.length}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                          <div>
                            <p className="text-2xl font-headline font-bold text-primary">
                              ${product.price.toFixed(2)}
                            </p>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">per assembly</p>
                          </div>
                          <Button size="lg" className="bg-primary hover:bg-secondary text-white rounded-2xl h-12 px-6 transition-all group-hover:scale-105">
                            Add to Cart <ShoppingCart className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center flex flex-col items-center justify-center glass rounded-[40px] border-2 border-dashed border-muted">
                  <div className="bg-muted/30 p-8 rounded-full mb-8">
                    <Search className="h-16 w-16 text-muted-foreground/40" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary">No Matching Specs</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto mt-4 leading-relaxed">Adjust your engineering filters or search query to find the specific fastener required.</p>
                  <Button variant="link" className="text-secondary font-bold mt-6 h-auto p-0" onClick={() => {
                    setSelectedCategories(['all']);
                    setSearchQuery('');
                    setPriceRange([0, 5]);
                  }}>Reset to All Categories</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
