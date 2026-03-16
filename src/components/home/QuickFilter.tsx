
'use client';

import { CATEGORIES } from '@/app/lib/data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function QuickFilter() {
  const filters = [
    'Chipboard', 'Drywall', 'Roofing/Tek', 'Wood', 'Self Tapping', 'Stainless', 'Machine', 'Pozi Drive', 'Zinc Plated'
  ];

  return (
    <div className="bg-white border-y py-4 sticky top-16 z-40 overflow-x-auto scrollbar-hide">
      <div className="container mx-auto px-4 lg:px-8 flex items-center gap-3 whitespace-nowrap">
        <span className="text-sm font-bold text-muted-foreground mr-2">Quick Browse:</span>
        {filters.map((filter) => (
          <Link 
            key={filter} 
            href={`/shop?q=${filter.toLowerCase()}`}
            className="px-4 py-1.5 rounded-full bg-muted hover:bg-secondary hover:text-white text-sm font-medium transition-all duration-200 shadow-sm"
          >
            {filter}
          </Link>
        ))}
      </div>
    </div>
  );
}
