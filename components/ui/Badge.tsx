import { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "neutral";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary: "bg-emerald-100 text-emerald-700",
    secondary: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    neutral: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-4
        py-2
        text-sm
        font-semibold
        uppercase
        tracking-[0.18em]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}