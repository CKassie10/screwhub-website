
'use client';

import { ShieldCheck, Truck, Package, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyShopHere() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      title: "ISO/DIN 2026",
      description: "Our range exceeds the latest international quality thresholds for 2026 engineering."
    },
    {
      icon: <Layers className="h-10 w-10 text-secondary" />,
      title: "Metallic Tech",
      description: "Proprietary finishes including Black Dacromet and A5 Ultra-Marine variants."
    },
    {
      icon: <Package className="h-10 w-10 text-secondary" />,
      title: "Smart Inventory",
      description: "Real-time stock syncing across 14 distribution nodes for zero-lag availability."
    },
    {
      icon: <Truck className="h-10 w-10 text-secondary" />,
      title: "Instant Logistics",
      description: "Hyper-optimized fulfillment ensuring your site is never stalled by missing parts."
    }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl lg:text-7xl font-headline font-bold tracking-tighter"
          >
            THE HUB <span className="text-secondary italic">STANDARD.</span>
          </motion.h2>
          <p className="text-white/40 text-xl leading-relaxed">Fasteners are the DNA of structure. We deliver the most advanced genetic code in the industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="flex flex-col items-start p-10 rounded-[40px] glass-dark border-white/5 group hover:border-secondary/30 transition-all duration-500"
            >
              <div className="p-4 bg-white/5 rounded-2xl mb-8 group-hover:bg-secondary/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
