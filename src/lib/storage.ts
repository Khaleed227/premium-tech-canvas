export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  brand: string;
}

const STORAGE_KEY = 'khalil_tech_products_v2';

const initialProducts: Product[] = [
  // Laptops
  { id: 1, name: 'HP EliteBook 840 G8', price: 450000, category: 'laptops', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-laptop-hp-444cc8a0-1782381366406.webp', brand: 'HP' },
  { id: 2, name: 'Dell Latitude 5420', price: 420000, category: 'laptops', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-laptop-hp-444cc8a0-1782381366406.webp', brand: 'Dell' },
  { id: 3, name: 'MacBook Air M2', price: 850000, category: 'laptops', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-laptop-hp-444cc8a0-1782381366406.webp', brand: 'Apple' },
  // Phones
  { id: 4, name: 'iPhone 15 Pro Max', price: 1200000, category: 'phones', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-phone-iphone-e0c89c3a-1782381366411.webp', brand: 'iPhone' },
  { id: 5, name: 'Samsung S24 Ultra', price: 1100000, category: 'phones', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-phone-iphone-e0c89c3a-1782381366411.webp', brand: 'Samsung' },
  { id: 6, name: 'Infinix Note 40', price: 280000, category: 'phones', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-phone-iphone-e0c89c3a-1782381366411.webp', brand: 'Infinix' },
  // Accessories
  { id: 7, name: 'Logitech Wireless Mouse', price: 15000, category: 'accessories', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-accessory-mouse-69e0669a-1782381367881.webp', brand: 'Logitech' },
  { id: 8, name: 'Mechanical Keyboard RGB', price: 45000, category: 'accessories', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-accessory-mouse-69e0669a-1782381367881.webp', brand: 'Razer' },
  { id: 9, name: 'TP-Link Router 4G', price: 35000, category: 'accessories', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/product-accessory-mouse-69e0669a-1782381367881.webp', brand: 'TP-Link' },
  // Gifts Hub
  { id: 10, name: 'Luxury Gift Hamper', price: 75000, category: 'gifts', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/gift-hamper-66cc8da1-1782388427570.webp', brand: 'Gifts Hub' },
  { id: 11, name: 'Personalized Mug & Keychain', price: 12000, category: 'gifts', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/personalized-gift-set-0892d4b0-1782388427709.webp', brand: 'Gifts Hub' },
  { id: 12, name: 'Luxury Watch Gift Box', price: 125000, category: 'gifts', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25332b9e-409f-49b9-bb6d-23243797919c/luxury-watch-gift-2c3831df-1782388427726.webp', brand: 'Gifts Hub' },
];

export const getProducts = (): Product[] => {
  if (typeof window === 'undefined') return initialProducts;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }
  return JSON.parse(stored);
};

export const saveProducts = (products: Product[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, 'id'>) => {
  const products = getProducts();
  const newProduct = { ...product, id: Date.now() };
  saveProducts([...products, newProduct]);
  return newProduct;
};

export const updateProduct = (updatedProduct: Product) => {
  const products = getProducts();
  const newProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
  saveProducts(newProducts);
};

export const deleteProduct = (id: number) => {
  const products = getProducts();
  const newProducts = products.filter(p => p.id !== id);
  saveProducts(newProducts);
};
