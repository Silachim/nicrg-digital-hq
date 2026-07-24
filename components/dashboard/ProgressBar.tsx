type ProgressBarProps = {
  value: number;
  label?: string;
  color?: "emerald" | "blue" | "purple" | "amber" | "rose";
  className?: string;
};

const colorStyles = {
  emerald: "bg-emerald-600",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  amber: "bg-amber-500",
  rose: "bg-rose-600",
};

export default function ProgressBar({
  value,
  label,
  color = "emerald",
  className = "",
}: ProgressBarProps) {
  // Keep values within range
  const percentage = Math.max(0, Math.min(value, 100));

  return (
    <div className={className}>
      {label && (
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">
            {label}
          </span>

          <span className="text-sm font-medium text-slate-500">
            {percentage}%
          </span>
        </div>
      )}

      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${colorStyles[color]}`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}