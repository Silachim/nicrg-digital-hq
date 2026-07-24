type ProgressRingProps = {
  value: number;

  size?: number;

  strokeWidth?: number;

  color?:
    | "emerald"
    | "blue"
    | "purple"
    | "amber"
    | "rose"
    | "slate";

  showValue?: boolean;

  label?: string;

  className?: string;
};

export default function ProgressRing({
  value,

  size = 140,

  strokeWidth = 10,

  color = "emerald",

  showValue = true,

  label,

  className = "",
}: ProgressRingProps) {
  const progress = Math.min(Math.max(value, 0), 100);

  const radius =
    (size - strokeWidth) / 2;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) * circumference;

  const colors = {
    emerald: "#059669",

    blue: "#2563EB",

    purple: "#7C3AED",

    amber: "#D97706",

    rose: "#E11D48",

    slate: "#334155",
  };

  return (
    <div
      className={`flex flex-col items-center ${className}`}
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E2E8F0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors[color]}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition:
                "stroke-dashoffset 0.8s ease",
            }}
          />
        </svg>

        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-extrabold text-slate-900">
              {progress}%
            </span>
          </div>
        )}
      </div>

      {label && (
        <p className="mt-4 text-center text-sm font-semibold text-slate-600">
          {label}
        </p>
      )}
    </div>
  );
}