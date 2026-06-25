import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Phone, Laptop, Smartphone, MousePointer, Search, MessageSquare, Plus, Minus, Trash2, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { toast } from 'sonner';
import { getProducts, Product } from '../lib/storage';

const categories = [
  { id: 'all', name: 'All Products', icon: null },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
  { id: 'phones', name: 'Phones', icon: Smartphone },
  { id: 'accessories', name: 'Accessories', icon: MousePointer },
  { id: 'gifts', name: 'Gifts Hub', icon: Gift },
];

const Store = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const filteredProducts = products.filter(p => 
    (filter === 'all' || p.category === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppOrder = () => {
    const nl = String.fromCharCode(10);
    const itemsList = cart.map(item => "- " + item.name + " (" + item.quantity + "x) - ₦" + (item.price * item.quantity).toLocaleString()).join(nl);
    const message = "Hello Khalil Tech," + nl + nl + "I want to place an order for:" + nl + itemsList + nl + nl + "*Total: ₦" + total.toLocaleString() + "*";
    window.open("https://wa.me/08141669349?text=" + encodeURIComponent(message), "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Khalil Tech x Gifts Hub</span>
          <h1 className="text-4xl font-bold mt-4 text-primary">Products & Gift Shop</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search products..." 
              className="pl-10 h-12 rounded-xl bg-white border-gray-100 shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="h-12 w-12 rounded-xl bg-primary relative">
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold flex items-center gap-3">
                  <ShoppingCart className="text-accent" />
                  Your Cart
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto mt-8 pr-2 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20 opacity-50">
                    <ShoppingCart size={64} className="mx-auto mb-4" />
                    <p className="text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-20 h-20 rounded-xl bg-white overflow-hidden shrink-0 border">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-primary truncate">{item.name}</h4>
                        <p className="text-accent font-bold mt-1">₦{item.price.toLocaleString()}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 bg-white border rounded-lg px-2">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-accent"><Minus size={14} /></button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-accent"><Plus size={14} /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <SheetFooter className="mt-auto pt-8 border-t flex-col gap-4">
                  <div className="flex items-center justify-between w-full mb-4">
                    <span className="text-muted-foreground font-medium">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">₦{total.toLocaleString()}</span>
                  </div>
                  <Button onClick={handleWhatsAppOrder} className="w-full h-14 bg-green-500 hover:bg-green-600 font-bold text-lg gap-3">
                    <MessageSquare size={20} />
                    Order via WhatsApp
                  </Button>
                </SheetFooter>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => (
          <Button
            key={cat.id}
            variant={filter === cat.id ? 'default' : 'outline'}
            onClick={() => setFilter(cat.id)}
            className={`rounded-xl h-12 gap-2 ${filter === cat.id ? 'bg-primary' : 'hover:border-accent hover:text-accent'}`}
          >
            {cat.icon && <cat.icon size={18} />}
            {cat.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="group h-full flex flex-col overflow-hidden border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md">
                    {product.brand}
                  </Badge>
                </div>
                <CardContent className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-2xl font-black text-accent">₦{product.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 gap-2">
                  <Button onClick={() => addToCart(product)} variant="outline" className="flex-1 hover:border-accent hover:text-accent border-gray-200">
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={() => {
                      const msg = "Hello Khalil Tech, I'm interested in the " + product.name + " (₦" + product.price.toLocaleString() + ")";
                      window.open("https://wa.me/08141669349?text=" + encodeURIComponent(msg), "_blank");
                    }}
                    className="bg-green-500 hover:bg-green-600"
                    size="icon"
                  >
                    <MessageSquare size={18} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Store;
