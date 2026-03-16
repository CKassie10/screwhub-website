
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
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
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
