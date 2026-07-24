import Link from "next/link";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "executive";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type ButtonProps = {
  children: ReactNode;

  href?: string;

  onClick?: () => void;

  variant?: ButtonVariant;

  size?: ButtonSize;

  className?: string;

  fullWidth?: boolean;

  disabled?: boolean;

  icon?: LucideIcon;

  iconPosition?: "left" | "right";
};

export default function Button({
  children,

  href,

  onClick,

  variant = "primary",

  size = "md",

  className = "",

  fullWidth = false,

  disabled = false,

  icon: Icon,

  iconPosition = "right",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500";

  const variants = {
    primary:
      "bg-[#0C8A5A] text-white hover:bg-[#096E49]",

    secondary:
      "border border-[#112B45] text-[#112B45] hover:bg-[#112B45] hover:text-white",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    success:
      "bg-emerald-600 text-white hover:bg-emerald-700",

    executive:
      "bg-slate-900 text-white hover:bg-slate-800",
  };

  const sizes = {
    sm: "rounded-lg px-4 py-2 text-sm",

    md: "rounded-xl px-6 py-3 text-base",

    lg: "rounded-2xl px-8 py-4 text-lg",
  };

  const classes = [
    base,

    variants[variant],

    sizes[size],

    fullWidth ? "w-full" : "",

    disabled
      ? "cursor-not-allowed opacity-50"
      : "",

    className,
  ].join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="h-5 w-5" />
      )}

      {children}

      {Icon && iconPosition === "right" && (
        <Icon className="h-5 w-5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}