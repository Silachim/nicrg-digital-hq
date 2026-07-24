type ProgressBarProps = {
  value: number;

  color?:
    | "emerald"
    | "blue"
    | "purple"
    | "amber"
    | "rose"
    | "slate";

  size?: "sm" | "md" | "lg";

  showValue?: boolean;

  animated?: boolean;

  className?: string;
};

export default function ProgressBar({
  value,

  color = "emerald",

  size = "md",

  showValue = true,

  animated = true,

  className = "",
}: ProgressBarProps) {
  const colors = {
    emerald: "bg-emerald-600",

    blue: "bg-blue-600",

    purple: "bg-purple-600",

    amber: "bg-amber-500",

    rose: "bg-rose-500",

    slate: "bg-slate-700",
  };

  const heights = {
    sm: "h-2",

    md: "h-3",

    lg: "h-4",
  };

  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className={className}>
      {showValue && (
        <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
          <span>Progress</span>

          <span>{progress}%</span>
        </div>
      )}

      <div
        className={`overflow-hidden rounded-full bg-slate-200 ${heights[size]}`}
      >
        <div
          className={`
            ${colors[color]}
            ${heights[size]}
            rounded-full
            ${
              animated
                ? "transition-all duration-700 ease-out"
                : ""
            }
          `}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}