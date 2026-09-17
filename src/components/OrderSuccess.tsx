import type { OrderDetails } from '../types';

interface OrderSuccessProps {
  orderNumber: string;
  details: OrderDetails;
  total: number;
  onDone: () => void;
}

export default function OrderSuccess({ orderNumber, details, total, onDone }: OrderSuccessProps) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-pop">
        <div className="jb-stripes p-6 text-center">
          <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center text-6xl shadow-xl animate-wiggle">
            🐝
          </div>
        </div>

        <div className="p-6 text-center">
          <h2 className="font-display font-bold text-3xl text-[#e5001f]">Bida ang Saya!</h2>
          <p className="mt-2 text-gray-700">
            Your order has been placed successfully! 🎉
          </p>

          <div className="mt-5 bg-[#fff8e7] rounded-xl p-4 text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase">Order #</span>
              <span className="font-mono font-bold text-[#e5001f]">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase">Type</span>
              <span className="font-semibold">{details.orderType === 'delivery' ? '🛵 Delivery' : '🏪 Pickup'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase">Name</span>
              <span className="font-semibold">{details.name}</span>
            </div>
            {details.orderType === 'delivery' && (
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase">Address</span>
                <p className="text-sm mt-0.5">{details.address}</p>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-[#ffe8a3]">
              <span className="text-xs font-semibold text-gray-500 uppercase">Total</span>
              <span className="font-display font-bold text-lg text-[#e5001f]">₱{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">
            <div className="flex items-center gap-2 justify-center font-semibold">
              <span>⏱️</span>
              <span>
                Estimated {details.orderType === 'delivery' ? 'delivery in 30 min' : 'ready in 15 min'}
              </span>
            </div>
            <p className="mt-1 text-xs text-green-700">
              We'll send you a confirmation SMS at {details.phone}
            </p>
          </div>

          <button
            onClick={onDone}
            className="mt-5 w-full bg-[#e5001f] hover:bg-[#b8001a] text-white font-display font-bold text-lg py-3 rounded-full shadow-lg transition-all"
          >
            Order More! 🍗
          </button>
        </div>
      </div>
    </div>
  );
}
