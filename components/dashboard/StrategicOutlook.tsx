import Card from "@/components/ui/Card";

type StrategicOutlookProps = {
  phase: string;
  priority: string;
  milestone: string;
  vision: string;
  className?: string;
};

export default function StrategicOutlook({
  phase,
  priority,
  milestone,
  vision,
  className = "",
}: StrategicOutlookProps) {
  return (
    <Card
      className={`
        border
        border-slate-200
        bg-gradient-to-br
        from-white
        via-white
        to-slate-50
        p-10
        shadow-sm
        ${className}
      `}
    >
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">

        {/* Left Column */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Current Institutional Phase
          </span>

          <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900">
            {phase}
          </h2>

          <div className="mt-10">

            <h3 className="text-lg font-semibold text-slate-900">
              Current Strategic Priority
            </h3>

            <p className="mt-3 leading-8 text-slate-600">
              {priority}
            </p>

          </div>

        </div>

        {/* Right Column */}

        <div className="space-y-8">

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Next Milestone
            </p>

            <p className="mt-3 text-lg font-semibold text-slate-900">
              {milestone}
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Long-Term Vision
            </p>

            <p className="mt-3 text-lg font-bold text-slate-900">
              {vision}
            </p>

          </div>

        </div>

      </div>
    </Card>
  );
}