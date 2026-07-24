type Status =
  | "Active"
  | "Growing"
  | "Building"
  | "Launching"
  | "Emerging"
  | "Developing"
  | "Expanding"
  | "Excellent"
  | "Good"
  | "Strong"
  | "Implemented"
  | "Operational"
  | "Strategic"
  | "Executive"
  | "Advisory"
  | "Planning"
  | "Completed"
  | "Paused"
  | "Archived"
  | "Low"
  | "Medium"
  | "High";

type StatusBadgeProps = {
  status: Status | string;
  className?: string;
};

const statusStyles: Record<
  string,
  {
    bg: string;
    text: string;
    dot: string;
  }
> = {
  Active: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },

  Growing: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },

  Building: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    dot: "bg-purple-500",
  },

  Launching: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },

  Emerging: {
    bg: "bg-cyan-100",
    text: "text-cyan-700",
    dot: "bg-cyan-500",
  },

  Developing: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    dot: "bg-indigo-500",
  },

  Expanding: {
    bg: "bg-rose-100",
    text: "text-rose-700",
    dot: "bg-rose-500",
  },

  Excellent: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },

  Good: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },

  Strong: {
    bg: "bg-green-100",
    text: "text-green-700",
    dot: "bg-green-500",
  },

  Implemented: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },

  Operational: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    dot: "bg-indigo-500",
  },

  Strategic: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    dot: "bg-violet-500",
  },

  Executive: {
    bg: "bg-sky-100",
    text: "text-sky-700",
    dot: "bg-sky-500",
  },

  Advisory: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    dot: "bg-orange-500",
  },

  Planning: {
    bg: "bg-slate-100",
    text: "text-slate-700",
    dot: "bg-slate-500",
  },

  Completed: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },

  Paused: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    dot: "bg-yellow-500",
  },

  Archived: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    dot: "bg-gray-500",
  },

  Low: {
    bg: "bg-green-100",
    text: "text-green-700",
    dot: "bg-green-500",
  },

  Medium: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    dot: "bg-yellow-500",
  },

  High: {
    bg: "bg-red-100",
    text: "text-red-700",
    dot: "bg-red-500",
  },
};

export default function StatusBadge({
  status,
  className = "",
}: StatusBadgeProps) {
  const style =
    statusStyles[status] ??
    {
      bg: "bg-slate-100",
      text: "text-slate-700",
      dot: "bg-slate-500",
    };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1.5
        text-xs
        font-semibold
        tracking-wide
        ${style.bg}
        ${style.text}
        ${className}
      `}
    >
      <span
        className={`h-2 w-2 rounded-full ${style.dot}`}
      />

      {status}
    </span>
  );
}