export interface ProductItem {
  name: string;
  description: string;
  cover: string;
  link: string;
}

export interface ProductCollection {
  collection: string;
  description: string;
  items: ProductItem[];
}
