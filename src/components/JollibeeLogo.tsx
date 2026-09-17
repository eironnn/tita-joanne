export default function JollibeeLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-7xl',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizes[size]}`}>
        <span className="inline-block">🐝</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-[#e5001f]" style={{ fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.75rem' : '2.5rem' }}>
          Jollibee
        </span>
        {size !== 'sm' && (
          <span className="text-[#f0a500] font-semibold" style={{ fontSize: size === 'md' ? '0.7rem' : '1rem', letterSpacing: '0.1em' }}>
            BIDA ANG SAYA!
          </span>
        )}
      </div>
    </div>
  );
}
