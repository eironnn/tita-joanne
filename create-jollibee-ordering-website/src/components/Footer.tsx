export default function Footer() {
  return (
    <footer id="about" className="bg-gradient-to-br from-[#e5001f] to-[#8a0012] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="text-5xl">🐝</span>
            <div className="leading-none">
              <div className="font-display font-bold text-3xl">Jollibee</div>
              <div className="text-[#ffc72c] text-xs font-bold tracking-widest">BIDA ANG SAYA!</div>
            </div>
          </div>
          <p className="mt-3 text-white/80 text-sm max-w-md">
            The Philippines' favorite homegrown fast food chain serving joy since 1978.
            Crispylicious Chickenjoy, sweet Jolly Spaghetti, and more — made with love for every Filipino.
          </p>
          <div className="mt-4 flex gap-3">
            {['📘', '📷', '🐦', '▶️'].map((icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-lg transition">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#menu" className="hover:text-[#ffc72c]">Menu</a></li>
            <li><a href="#" className="hover:text-[#ffc72c]">Store Locator</a></li>
            <li><a href="#" className="hover:text-[#ffc72c]">Careers</a></li>
            <li><a href="#" className="hover:text-[#ffc72c]">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span>📞</span>
              <span>#8-7000 (Delivery)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span>
              <span>hello@jollibee.com.ph</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>Ortigas Center, Pasig City</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p>© 2026 Jollibee Foods Corporation. All rights reserved.</p>
          <p>Made with ❤️ for all Jollibee fans</p>
        </div>
      </div>
    </footer>
  );
}
