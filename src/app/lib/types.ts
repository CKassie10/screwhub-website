export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  material: string;
  finish: string;
  headStyle: string;
  driveType: string;
  price: number;
  image: string;
  images?: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  sizes?: string[];
  variants?: {
    type: string;
    options: string[];
  }[];
  specs: {
    length: string;
    diameter: string;
    threadType: string;
  };
}

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};
