import JollibeeLogo from './JollibeeLogo';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b-4 border-[#e5001f]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <JollibeeLogo size="sm" />
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-700">
            <a href="#menu" className="hover:text-[#e5001f] transition">Menu</a>
            <a href="#about" className="hover:text-[#e5001f] transition">About</a>
            <a href="#locations" className="hover:text-[#e5001f] transition">Stores</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e5001f] transition"
            aria-label="Location"
          >
            <span>📍</span>
            <span>Manila, PH</span>
          </button>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-[#e5001f] hover:bg-[#b8001a] text-white font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span className="text-lg">🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ffc72c] text-[#b8001a] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pop border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
