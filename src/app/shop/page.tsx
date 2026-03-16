
'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PRODUCTS, CATEGORIES } from '@/app/lib/data';
import { useState, useMemo } from 'react';
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

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategories, searchQuery, priceRange]);

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
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
                <h2 className="text-xl font-headline font-bold mb-6 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-secondary" /> Filters
                </h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Search</h3>
                    <div className="relative">
                      <Input 
                        placeholder="Search items..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                      />
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Categories</h3>
                    <div className="space-y-3">
                      {CATEGORIES.map(cat => (
                        <div key={cat.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={cat.id} 
                            checked={selectedCategories.includes(cat.id)}
                            onCheckedChange={() => toggleCategory(cat.id)}
                          />
                          <Label htmlFor={cat.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {cat.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Price Range</h3>
                      <span className="text-xs font-bold text-secondary">${priceRange[0]} - ${priceRange[1]}</span>
                    </div>
                    <Slider 
                      defaultValue={[0, 5]} 
                      max={5} 
                      step={0.1} 
                      onValueChange={setPriceRange}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary text-white rounded-xl">
                <h4 className="font-headline font-bold mb-2">Expert Help</h4>
                <p className="text-xs text-white/60 mb-4">Can't find the exact specification? Call our team for custom orders.</p>
                <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">Contact Support</Button>
              </div>
            </aside>

            {/* Product Listing */}
            <div className="flex-grow space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border shadow-sm gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-bold text-primary">{filteredProducts.length}</span> results
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <Button 
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                      size="icon" 
                      className="rounded-none h-9 w-9"
                      onClick={() => setViewMode('grid')}
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                      size="icon" 
                      className="rounded-none h-9 w-9"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px] h-9">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Popularity</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Name (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className={viewMode === 'grid' ? "group hover:shadow-lg transition-all border-none bg-white overflow-hidden shadow-sm" : "flex flex-col sm:flex-row group hover:shadow-lg transition-all border-none bg-white shadow-sm overflow-hidden h-full sm:h-48"}>
                      <div className={viewMode === 'grid' ? "relative aspect-square overflow-hidden bg-muted/20" : "relative w-full sm:w-48 h-48 sm:h-full bg-muted/20 shrink-0"}>
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-between p-6 flex-grow">
                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{product.category}</p>
                            <Badge variant="outline" className="text-[10px]">{product.stockStatus}</Badge>
                          </div>
                          <h3 className="text-lg font-headline font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
                          <div className="pt-2 flex flex-wrap gap-2">
                             <span className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground">{product.material}</span>
                             <span className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground">{product.finish}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-xl font-bold text-primary">
                            ${product.price.toFixed(2)} <span className="text-xs font-normal text-muted-foreground">/ unit</span>
                          </p>
                          <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                            Add <ShoppingCart className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-muted">
                  <Search className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold">No screws found</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto mt-2">Try adjusting your filters or search query to find what you're looking for.</p>
                  <Button variant="link" className="text-secondary mt-4" onClick={() => {
                    setSelectedCategories([]);
                    setSearchQuery('');
                    setPriceRange([0, 5]);
                  }}>Clear all filters</Button>
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
