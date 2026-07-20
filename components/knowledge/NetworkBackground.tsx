export default function NetworkBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft radial glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />

      {/* Network Nodes */}
      <div className="absolute left-[10%] top-20 h-3 w-3 rounded-full bg-emerald-300/60" />
      <div className="absolute left-[28%] top-52 h-2 w-2 rounded-full bg-slate-300/60" />
      <div className="absolute right-[15%] top-36 h-3 w-3 rounded-full bg-blue-300/60" />
      <div className="absolute right-[25%] bottom-24 h-3 w-3 rounded-full bg-emerald-300/60" />
      <div className="absolute left-[40%] bottom-16 h-2 w-2 rounded-full bg-slate-300/60" />

      {/* Connection Lines */}
      <div className="absolute left-[10%] top-20 h-px w-40 rotate-12 bg-slate-200" />
      <div className="absolute left-[28%] top-52 h-px w-36 -rotate-6 bg-slate-200" />
      <div className="absolute right-[15%] top-36 h-px w-48 -rotate-12 bg-slate-200" />
      <div className="absolute right-[25%] bottom-24 h-px w-40 rotate-6 bg-slate-200" />
    </div>
  );
}