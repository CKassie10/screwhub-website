
'use client';

import { CATEGORIES } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function BentoGrid() {
  // Use indices that are likely to have good images and relevance
  const mainCat = CATEGORIES.find(c => c.id === 'screws') || CATEGORIES[0];
  const secondCat = CATEGORIES.find(c => c.id === 'bolts') || CATEGORIES[1];
  const thirdCat = CATEGORIES.find(c => c.id === 'roofing-screws') || CATEGORIES[2];
  const fourthCat = CATEGORIES.find(c => c.id === 'socket-head-fasteners') || CATEGORIES[3];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl lg:text-6xl font-headline font-bold text-primary mb-4"
          >
            Curated Discovery.
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Explore our vast catalog through an intelligent, high-density discovery grid designed for visual professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto lg:h-[800px]">
          {/* Main Large Item */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 bento-card glass group"
          >
            <Image src={mainCat.image} alt={mainCat.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 p-2">
              <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Professional Choice</span>
              <h3 className="text-4xl font-headline font-bold text-white mb-4 leading-none">{mainCat.name}</h3>
              <Link href={`/shop?category=${mainCat.id}`} className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group/link">
                Explore Series <ArrowUpRight className="h-5 w-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Secondary Items */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1 bento-card bg-primary group overflow-hidden"
          >
             <Image src={secondCat.image} alt={secondCat.name} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all" />
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-headline font-bold text-white">{secondCat.name}</h3>
                <p className="text-white/40 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all">Precision board fastening systems</p>
             </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1 bento-card bg-secondary group overflow-hidden"
          >
             <Image src={thirdCat.image} alt={thirdCat.name} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-headline font-bold text-white">{thirdCat.name}</h3>
                <Link href={`/shop?category=${thirdCat.id}`} className="text-white/60 text-xs mt-2 flex items-center gap-1">View Collection <ArrowUpRight className="h-3 w-3" /></Link>
             </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-1 bento-card glass group overflow-hidden"
          >
             <div className="absolute inset-0 flex items-center justify-around px-8">
               <div className="max-w-[50%]">
                 <h3 className="text-2xl font-headline font-bold text-primary leading-tight">{fourthCat.name}</h3>
                 <p className="text-muted-foreground text-sm mt-2">Zero-corrosion architecture for extreme environments.</p>
               </div>
               <div className="relative w-40 h-40 group-hover:rotate-[30deg] transition-transform duration-1000">
                  <Image src={fourthCat.image} alt={fourthCat.name} fill className="object-contain" />
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
