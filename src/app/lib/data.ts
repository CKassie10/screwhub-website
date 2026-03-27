
import { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'All',
    description: 'Explore our complete range of high-performance fasteners.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-all')?.imageUrl || 'https://picsum.photos/seed/all/400/300',
  },
  {
    id: 'anchors',
    name: 'Anchors',
    description: 'Heavy duty anchoring systems for concrete and masonry.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-anchors')?.imageUrl || 'https://picsum.photos/seed/anchors/400/300',
  },
  {
    id: 'bits-sockets',
    name: 'Bits & Sockets',
    description: 'Industrial-grade driver bits, sockets, and accessories.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-bits-sockets')?.imageUrl || 'https://picsum.photos/seed/bits/400/300',
  },
  {
    id: 'bolts',
    name: 'Bolts',
    description: 'High-tensile hex bolts, carriage bolts, and specialized fasteners.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-bolts')?.imageUrl || 'https://picsum.photos/seed/bolts/400/300',
  },
  {
    id: 'new-screws',
    name: 'New Screws',
    description: 'The latest innovations in fastening technology and materials.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-new-screws')?.imageUrl || 'https://picsum.photos/seed/new/400/300',
  },
  {
    id: 'nuts',
    name: 'Nuts',
    description: 'Metric and imperial hex nuts, nyloc nuts, and wing nuts.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-nuts')?.imageUrl || 'https://picsum.photos/seed/nuts/400/300',
  },
  {
    id: 'rivets',
    name: 'Rivets',
    description: 'Complete range of blind rivets and installation tools.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-rivets')?.imageUrl || 'https://picsum.photos/seed/rivets/400/300',
  },
  {
    id: 'roofing-screws',
    name: 'Roofing Screws',
    description: 'Specialized fasteners for timber and steel roofing profiles.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-roofing-screws')?.imageUrl || 'https://picsum.photos/seed/roofing/400/300',
  },
  {
    id: 'screws',
    name: 'Screws',
    description: 'General purpose screws for wood, metal, and construction.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-screws')?.imageUrl || 'https://picsum.photos/seed/screws/400/300',
  },
  {
    id: 'self-drilling-screws',
    name: 'Self Drilling Screws',
    description: 'High-speed self-drilling fasteners for heavy metal applications.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-self-drilling-screws')?.imageUrl || 'https://picsum.photos/seed/self-drill/400/300',
  },
  {
    id: 'set-screws',
    name: 'Set Screws',
    description: 'Precision grubs and set screws for mechanical assemblies.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-set-screws')?.imageUrl || 'https://picsum.photos/seed/set/400/300',
  },
  {
    id: 'socket-head-fasteners',
    name: 'Socket Head Fasteners (Stainless Steel)',
    description: 'Marine-grade A2 and A4 stainless steel socket head screws.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-socket-head-fasteners')?.imageUrl || 'https://picsum.photos/seed/socket/400/300',
  },
  {
    id: 'threaded-rod',
    name: 'Threaded Rod',
    description: 'Continuous threaded rod in zinc and stainless steel finishes.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-threaded-rod')?.imageUrl || 'https://picsum.photos/seed/rod/400/300',
  },
  {
    id: 'wall-plugs',
    name: 'Wall Plugs',
    description: 'Professional grade nylon and universal wall plugs.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-wall-plugs')?.imageUrl || 'https://picsum.photos/seed/plugs/400/300',
  },
  {
    id: 'washers',
    name: 'Washers',
    description: 'Industrial flat, spring, and specialized washer varieties.',
    image: (PlaceHolderImages || []).find(img => img.id === 'cat-washers')?.imageUrl || 'https://picsum.photos/seed/washers/400/300',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Csk Pozi Chipboard Screw Z/P',
    description: 'Universal countersunk screw with Pozi drive, Zinc plated for general interior use.',
    category: 'screws',
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
    name: 'High Tensile M10 Hex Bolt',
    description: '8.8 Grade high-tensile bolt for structural applications.',
    category: 'bolts',
    material: 'Steel',
    finish: 'Zinc Plated',
    headStyle: 'Hex',
    driveType: 'External Hex',
    price: 1.20,
    image: 'https://picsum.photos/seed/bolt1/400/400',
    stockStatus: 'In Stock',
    specs: { length: '50mm', diameter: 'M10', threadType: 'Metric' }
  },
  {
    id: 'p3',
    name: 'Hex Washer Head Roofing Screw',
    description: 'Self-drilling roofing screw with bonded EPDM washer.',
    category: 'roofing-screws',
    material: 'Steel',
    finish: 'Climaseal',
    headStyle: 'Hex Washer',
    driveType: 'Hex',
    price: 0.45,
    image: 'https://picsum.photos/seed/p3/400/400',
    stockStatus: 'In Stock',
    specs: { length: '65mm', diameter: '5.5mm', threadType: 'Self-Drilling' }
  },
  {
    id: 'p4',
    name: 'Stainless A4 Socket Cap Screw',
    description: 'Marine-grade stainless steel socket head fastener.',
    category: 'socket-head-fasteners',
    material: 'Stainless Steel (A4)',
    finish: 'Natural',
    headStyle: 'Socket Cap',
    driveType: 'Hex Socket',
    price: 2.85,
    image: 'https://picsum.photos/seed/socket1/400/400',
    stockStatus: 'In Stock',
    specs: { length: '30mm', diameter: 'M8', threadType: 'Metric' }
  },
  {
    id: 'p5',
    name: 'Nylon Expansion Wall Plug',
    description: 'Professional grade nylon plug for secure masonry fixing.',
    category: 'wall-plugs',
    material: 'Nylon',
    finish: 'Natural',
    headStyle: 'Flanged',
    driveType: 'N/A',
    price: 0.08,
    image: 'https://picsum.photos/seed/plug1/400/400',
    stockStatus: 'In Stock',
    specs: { length: '40mm', diameter: '8mm', threadType: 'Universal' }
  }
];
