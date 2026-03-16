
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Box, ShieldCheck, Zap } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const heroImg = (PlaceHolderImages || []).find(img => img.id === 'hero-screw-montage');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Immersive Background */}
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
        <Image 
          src={heroImg?.imageUrl || 'https://picsum.photos/seed/screw-hero/1200/800'} 
          alt="Premium industrial screws"
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
          data-ai-hint="industrial hardware"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
      </motion.div>

      {/* Kinetic Text Overlay */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full text-secondary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Zap className="h-3 w-3 fill-secondary" /> Next-Gen Hardware Marketplace
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-headline font-bold text-white leading-[0.9] tracking-tighter">
              BEYOND <span className="text-secondary italic">FASTENING</span>.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-2xl font-medium">
              Precision-engineered components for creators who demand zero-tolerance excellence. Thousands of variations, synced in real-time.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/shop">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 rounded-2xl text-lg font-bold group">
                  Enter Catalog <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/10 px-10 h-14 rounded-2xl text-lg font-bold backdrop-blur-sm">
                  3D AR View
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Stats Floating */}
      <div className="absolute bottom-12 right-12 hidden lg:grid grid-cols-1 gap-4 z-20">
        {[
          { icon: <Box className="h-4 w-4" />, label: "Available SKUs", val: "12,400+" },
          { icon: <ShieldCheck className="h-4 w-4" />, label: "ISO Rated", val: "100%" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className="glass-dark p-4 rounded-2xl min-w-[200px]"
          >
            <div className="flex items-center gap-2 text-white/40 mb-1">
              {stat.icon} <span className="text-[10px] font-bold uppercase tracking-tighter">{stat.label}</span>
            </div>
            <div className="text-2xl font-headline font-bold text-secondary">{stat.val}</div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Parallax Layers */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-1/4 right-[15%] w-64 h-64 bg-secondary/5 rounded-full blur-[100px] z-0"
      />
    </section>
  );
}
