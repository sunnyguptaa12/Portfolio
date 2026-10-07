// Fixed, subtle ambient background: grid + two slow-floating gradient orbs.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 20%, #000 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, #000 20%, transparent 70%)',
        }}
      />
      <div className="absolute -left-40 top-10 h-[420px] w-[420px] animate-float rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-[460px] w-[460px] animate-float rounded-full bg-accent-violet/20 blur-[130px] [animation-delay:-7s]" />
    </div>
  )
}
