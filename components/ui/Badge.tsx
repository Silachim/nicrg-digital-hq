import { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "outline"
  | "research"
  | "executive";

type BadgeSize =
  | "sm"
  | "md"
  | "lg";

type BadgeProps = {
  children: ReactNode;

  variant?: BadgeVariant;

  size?: BadgeSize;

  rounded?: boolean;

  dot?: boolean;

  className?: string;
};

export default function Badge({
  children,

  variant = "primary",

  size = "md",

  rounded = true,

  dot = false,

  className = "",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-emerald-100 text-emerald-700",

    secondary:
      "bg-blue-100 text-blue-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-amber-100 text-amber-700",

    danger:
      "bg-red-100 text-red-700",

    neutral:
      "bg-slate-100 text-slate-700",

    outline:
      "border border-slate-300 bg-white text-slate-700",

    research:
      "bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800",

    executive:
      "bg-slate-900 text-white",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",

    md: "px-4 py-2 text-sm",

    lg: "px-5 py-2.5 text-base",
  };

  return (
    <span
      className={[
        "inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em]",

        rounded
          ? "rounded-full"
          : "rounded-lg",

        variants[variant],

        sizes[size],

        className,
      ].join(" ")}
    >
      {dot && (
        <span className="h-2 w-2 rounded-full bg-current opacity-80" />
      )}

      {children}
    </span>
  );
}