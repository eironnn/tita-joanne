import { useState } from 'react';
import type { CartItem, OrderDetails, OrderType } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onClose: () => void;
  onSubmit: (details: OrderDetails) => void;
  onBack: () => void;
}

export default function Checkout({ items, onClose, onSubmit, onBack }: CheckoutProps) {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [payment, setPayment] = useState<'cash' | 'card' | 'gcash'>('cash');

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = subtotal >= 500 || orderType === 'pickup' ? 0 : 49;
  const total = subtotal + deliveryFee;

  const canSubmit = name.trim() && phone.trim() && (orderType === 'pickup' || address.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit({ orderType, name, phone, address, notes, payment });
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#e5001f] to-[#b8001a] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-xl"
              aria-label="Back"
            >
              ←
            </button>
            <div>
              <h2 className="font-display font-bold text-2xl">Checkout</h2>
              <p className="text-sm text-white/80">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Order type */}
          <div>
            <label className="block font-display font-bold text-gray-900 mb-2">Order Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  orderType === 'delivery'
                    ? 'border-[#e5001f] bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-3xl">🛵</span>
                <span className="font-bold text-sm">Delivery</span>
                <span className="text-xs text-gray-500">30 min</span>
              </button>
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  orderType === 'pickup'
                    ? 'border-[#e5001f] bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-3xl">🏪</span>
                <span className="font-bold text-sm">Pickup</span>
                <span className="text-xs text-gray-500">15 min</span>
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <label className="block font-display font-bold text-gray-900">Your Details</label>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Juan Dela Cruz"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#e5001f] focus:ring-2 focus:ring-[#e5001f]/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="09XX XXX XXXX"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#e5001f] focus:ring-2 focus:ring-[#e5001f]/20 outline-none"
                required
              />
            </div>

            {orderType === 'delivery' && (
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Delivery Address *</label>
                <textarea
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="House/Unit, Street, Barangay, City"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#e5001f] focus:ring-2 focus:ring-[#e5001f]/20 outline-none resize-none"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Order Notes (optional)</label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. Extra gravy please!"
                rows={2}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#e5001f] focus:ring-2 focus:ring-[#e5001f]/20 outline-none resize-none"
              />
            </div>
          </div>

          {/* Payment */}
          <div>
            <label className="block font-display font-bold text-gray-900 mb-2">Payment Method</label>
            <div className="grid grid-cols-3 gap-2">
              {([
                { id: 'cash', label: 'Cash', icon: '💵' },
                { id: 'card', label: 'Card', icon: '💳' },
                { id: 'gcash', label: 'GCash', icon: '📱' },
              ] as const).map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPayment(p.id)}
                  className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-1 ${
                    payment === p.id
                      ? 'border-[#e5001f] bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="font-semibold text-xs">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#fff8e7] rounded-xl p-4 space-y-2">
            <h3 className="font-display font-bold text-gray-900">Order Summary</h3>
            <div className="space-y-1 text-sm">
              {items.map(i => (
                <div key={i.id} className="flex justify-between text-gray-700">
                  <span className="truncate">
                    <span className="mr-1">{i.emoji}</span>
                    {i.name} × {i.quantity}
                  </span>
                  <span className="font-semibold">₱{(i.price * i.quantity).toFixed(0)}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 mt-2 border-t border-[#ffe8a3] space-y-1 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className={deliveryFee === 0 ? 'text-green-600 font-semibold' : ''}>
                  {deliveryFee === 0 ? 'FREE' : `₱${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between font-display font-bold text-lg text-gray-900 pt-1">
                <span>Total</span>
                <span className="text-[#e5001f]">₱{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-2">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3 rounded-full font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex-[2] py-3 rounded-full font-display font-bold text-lg bg-[#e5001f] hover:bg-[#b8001a] text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Place Order ₱{total.toFixed(0)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
