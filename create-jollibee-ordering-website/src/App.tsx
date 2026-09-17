import { useEffect, useState } from 'react';
import type { CartItem, MenuItem, OrderDetails } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import Footer from './components/Footer';

type Screen = 'menu' | 'checkout' | 'success';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>('menu');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [orderNumber, setOrderNumber] = useState('');

  // Lock body scroll when drawer/modal open
  useEffect(() => {
    const locked = cartOpen || screen !== 'menu';
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen, screen]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
    }
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const startCheckout = () => {
    setCartOpen(false);
    setScreen('checkout');
  };

  const placeOrder = (details: OrderDetails) => {
    setOrderDetails(details);
    setOrderNumber('JB-' + Math.random().toString(36).substring(2, 8).toUpperCase());
    setScreen('success');
  };

  const resetAll = () => {
    setCart([]);
    setOrderDetails(null);
    setOrderNumber('');
    setScreen('menu');
  };

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fff8e7] flex flex-col">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Menu onAddToCart={addToCart} />
      </main>
      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeItem}
        onCheckout={startCheckout}
      />

      {screen === 'checkout' && (
        <Checkout
          items={cart}
          onClose={resetAll}
          onBack={() => setScreen('menu')}
          onSubmit={placeOrder}
        />
      )}

      {screen === 'success' && orderDetails && (
        <OrderSuccess
          orderNumber={orderNumber}
          details={orderDetails}
          total={cart.reduce((s, i) => s + i.price * i.quantity, 0) + (orderDetails.orderType === 'pickup' || cart.reduce((s, i) => s + i.price * i.quantity, 0) >= 500 ? 0 : 49)}
          onDone={resetAll}
        />
      )}

      {/* Floating cart button for mobile when cart has items and drawer closed */}
      {cartCount > 0 && !cartOpen && screen === 'menu' && (
        <button
          onClick={() => setCartOpen(true)}
          className="md:hidden fixed bottom-5 right-5 bg-[#e5001f] hover:bg-[#b8001a] text-white rounded-full px-5 py-3.5 shadow-2xl flex items-center gap-2 font-bold z-30 animate-slide-up"
        >
          <span className="text-xl">🛒</span>
          <span>{cartCount} {cartCount === 1 ? 'item' : 'items'}</span>
          <span className="bg-[#ffc72c] text-[#b8001a] px-2 py-0.5 rounded-full text-sm">
            ₱{cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(0)}
          </span>
        </button>
      )}
    </div>
  );
}
