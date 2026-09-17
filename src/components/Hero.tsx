export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ffc72c] via-[#ffdd5e] to-[#ffc72c]">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#e5001f] rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#e5001f] rounded-full opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-[#e5001f] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-lg">
            <span>🔥</span>
            <span>FREE DELIVERY on orders ₱500+</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-[#e5001f] leading-tight drop-shadow-sm">
            Bida ang <span className="text-[#b8001a]">Saya!</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-800 max-w-lg">
            Order your favorite Chickenjoy, Jolly Spaghetti, and more — delivered hot and fresh straight to your door! 🍗🍝
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-[#e5001f] hover:bg-[#b8001a] text-white font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
            >
              <span>Order Now</span>
              <span>→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#e5001f] font-bold px-6 py-3 rounded-full shadow-lg transition-all border-2 border-[#e5001f]"
            >
              <span>View Menu</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">30-min Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              <span className="font-semibold">4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">#1 in PH</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-[#e5001f] rounded-full blur-3xl opacity-30" />
            <div className="relative text-[14rem] md:text-[18rem] leading-none select-none drop-shadow-2xl">
              🍗
            </div>
          </div>
          <div className="absolute top-10 left-0 text-6xl animate-wiggle">🍔</div>
          <div className="absolute bottom-10 right-4 text-6xl animate-wiggle" style={{ animationDelay: '0.3s' }}>🍝</div>
          <div className="absolute top-1/2 right-0 text-5xl animate-float" style={{ animationDelay: '1s' }}>🥤</div>
        </div>
      </div>

      {/* Bottom wavy */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '40px' }}>
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#fff8e7" />
      </svg>
    </section>
  );
}
