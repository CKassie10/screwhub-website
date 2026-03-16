
import { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const CATEGORIES: Category[] = [
  {
    id: 'chipboard',
    name: 'Chipboard Screws',
    description: 'Coarse thread for MDF, particle board and general woodwork.',
    image: (PlaceHolderImages || []).find(img => img.id === 'category-chipboard')?.imageUrl || 'https://picsum.photos/seed/chipboard/400/300',
  },
  {
    id: 'drywall',
    name: 'Drywall & Board Screws',
    description: 'Bugle head with fine or coarse threads for plasterboard and metal studs.',
    image: (PlaceHolderImages || []).find(img => img.id === 'category-drywall')?.imageUrl || 'https://picsum.photos/seed/drywall/400/300',
  },
  {
    id: 'roofing',
    name: 'Roofing & Tek Screws',
    description: 'Hex washer head with bonded washers for timber and steel roofing.',
    image: (PlaceHolderImages || []).find(img => img.id === 'category-roofing')?.imageUrl || 'https://picsum.photos/seed/roofing/400/300',
  },
  {
    id: 'stainless',
    name: 'Stainless Steel Screws',
    description: 'A2 and A4 marine-grade screws for corrosion resistance.',
    image: (PlaceHolderImages || []).find(img => img.id === 'category-stainless')?.imageUrl || 'https://picsum.photos/seed/stainless/400/300',
  },
  {
    id: 'machine',
    name: 'Machine Screws',
    description: 'Precision screws for mechanical assemblies and metal fastening.',
    image: (PlaceHolderImages || []).find(img => img.id === 'category-machine')?.imageUrl || 'https://picsum.photos/seed/machine/400/300',
  },
  {
    id: 'selftapping',
    name: 'Self Tapping Screws',
    description: 'Screws that create their own thread as they are driven into the material.',
    image: (PlaceHolderImages || []).find(img => img.id === 'category-selftapping')?.imageUrl || 'https://picsum.photos/seed/selftap/400/300',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Csk Pozi Chipboard Screw Z/P',
    description: 'Universal countersunk screw with Pozi drive, Zinc plated for general interior use.',
    category: 'chipboard',
    material: 'Steel',
    finish: 'Zinc Plated (Z/P)',
    headStyle: 'Countersunk',
    driveType: 'Pozi',
    price: 0.15,
    image: 'https://picsum.photos/seed/p1/400/400',
    stockStatus: 'In Stock',
    specs: { length: '40mm', diameter: '4.0mm', threadType: 'Full Thread' }
  },
  {
    id: 'p2',
    name: 'Bugle Head Drywall Screw Black',
    description: 'Sharp point drywall screw with bugle head, black phosphate finish.',
    category: 'drywall',
    material: 'Steel',
    finish: 'Black Phosphate',
    headStyle: 'Bugle',
    driveType: 'Phillips',
    price: 0.10,
    image: 'https://picsum.photos/seed/p2/400/400',
    stockStatus: 'In Stock',
    specs: { length: '35mm', diameter: '3.5mm', threadType: 'Fine Thread' }
  },
  {
    id: 'p3',
    name: 'Hex Washer Head Tek Screw #12',
    description: 'Self-drilling roofing screw with bonded EPDM washer.',
    category: 'roofing',
    material: 'Steel',
    finish: 'Zinc Plated',
    headStyle: 'Hex Washer',
    driveType: 'Hex',
    price: 0.45,
    image: 'https://picsum.photos/seed/p3/400/400',
    stockStatus: 'In Stock',
    specs: { length: '65mm', diameter: '5.5mm', threadType: 'Self-Drilling' }
  },
  {
    id: 'p4',
    name: 'Pan Pozi Machine Screw M6',
    description: 'Stainless Steel A2 machine screw for precision engineering.',
    category: 'machine',
    material: 'Stainless Steel (A2)',
    finish: 'Natural',
    headStyle: 'Pan',
    driveType: 'Pozi',
    price: 0.85,
    image: 'https://picsum.photos/seed/p4/400/400',
    stockStatus: 'In Stock',
    specs: { length: '20mm', diameter: 'M6', threadType: 'Metric' }
  },
  {
    id: 'p5',
    name: 'Coach Screw Hex Head Z/Y',
    description: 'Heavy duty timber screw with hex head, Zinc Yellow plated.',
    category: 'chipboard',
    material: 'Steel',
    finish: 'Zinc Yellow (Z/Y)',
    headStyle: 'Hex',
    driveType: 'External Hex',
    price: 1.25,
    image: 'https://picsum.photos/seed/p5/400/400',
    stockStatus: 'In Stock',
    specs: { length: '100mm', diameter: '8.0mm', threadType: 'Lag Thread' }
  }
];
