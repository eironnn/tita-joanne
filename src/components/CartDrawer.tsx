import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemove,
  onCheckout,
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = subtotal >= 500 || subtotal === 0 ? 0 : 49;
  const total = subtotal + deliveryFee;
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#e5001f] to-[#b8001a] text-white p-5 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-2xl">Your Cart</h2>
            <p className="text-sm text-white/80">{count} {count === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-2xl leading-none"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="text-7xl mb-4 animate-float">🛒</div>
              <h3 className="font-display font-bold text-xl text-gray-800">Your cart is empty</h3>
              <p className="mt-1 text-gray-500 text-sm">Add some yummy food to get started!</p>
              <button
                onClick={onClose}
                className="mt-5 bg-[#e5001f] hover:bg-[#b8001a] text-white font-bold px-5 py-2.5 rounded-full"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="bg-[#fff8e7] rounded-xl p-3 flex gap-3 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fff4d6] to-[#ffe494] rounded-lg flex items-center justify-center text-3xl shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm text-gray-900 truncate">{item.name}</h4>
                  <p className="text-[#e5001f] font-bold text-sm mt-0.5">₱{item.price}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-white rounded-full p-1 shadow-sm">
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-[#e5001f] text-white font-bold hover:bg-[#b8001a] transition"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-7 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-[#e5001f] text-white font-bold hover:bg-[#b8001a] transition"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-gray-900">
                        ₱{(item.price * item.quantity).toFixed(0)}
                      </span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 hover:text-red-700 text-lg"
                        aria-label="Remove"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-white space-y-3">
            {subtotal < 500 && subtotal > 0 && (
              <div className="bg-[#fff4d6] border border-[#ffc72c] rounded-lg p-2.5 text-xs text-gray-700">
                💡 Add <b>₱{(500 - subtotal).toFixed(0)}</b> more for <b className="text-[#e5001f]">FREE delivery!</b>
              </div>
            )}

            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className={deliveryFee === 0 ? 'text-green-600 font-semibold' : ''}>
                  {deliveryFee === 0 ? 'FREE' : `₱${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between font-display font-bold text-lg text-gray-900 pt-2 border-t">
                <span>Total</span>
                <span className="text-[#e5001f]">₱{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-[#e5001f] hover:bg-[#b8001a] text-white font-display font-bold text-lg py-3.5 rounded-full shadow-lg transition-all hover:shadow-xl"
            >
              Checkout →
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
