const bar = 'rounded-full bg-white/25'

export default function ProjectThumb({ gradient, variant, image }) {
  return (
    <div
      className="relative aspect-[2/1] w-full overflow-hidden border-b border-white/10"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
      aria-hidden="true"
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/[0.04]" />
        </>
      ) : (
      <div className="absolute inset-x-4 top-4 bottom-0 rounded-t-[1.2rem] border border-white/20 bg-[#111827]/60 p-3 shadow-[0_18px_30px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:inset-x-6">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
        </div>

        {variant === 'dashboard' && (
          <div className="space-y-2">
            <div className="flex gap-2">
              {[52, 70, 40].map((w, i) => (
                <div key={i} className="h-10 flex-1 rounded-lg bg-white/10" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="flex h-16 items-end gap-1.5 rounded-lg bg-white/10 p-2">
              {[32, 55, 48, 74, 58, 88, 66, 42].map((h, i) => <div key={i} className="flex-1 rounded-sm bg-white/35" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        )}

        {variant === 'form' && (
          <div className="space-y-3 pt-1">
            <div className="h-2.5 w-1/3 rounded-full bg-white/25" />
            <div className="h-5 rounded-md bg-white/10" />
            <div className="h-5 rounded-md bg-white/10" />
            <div className="h-5 rounded-md bg-white/10" />
            <div className="h-9 w-1/2 rounded-md bg-white/25" />
          </div>
        )}

        {variant === 'list' && (
          <div className="space-y-2 pt-1">
            {[80, 90, 65, 78].map((w, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-white/10 p-2">
                <span className="h-4 w-4 rounded bg-white/35" />
                <div className={`h-1.5 ${bar}`} style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        )}
      </div>
      )}
    </div>
  )
}
