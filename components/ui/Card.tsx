import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
};

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variants = {
    default:
      "rounded-3xl border border-slate-200 bg-white shadow-sm",

    outlined:
      "rounded-3xl border-2 border-slate-300 bg-white",

    elevated:
      "rounded-3xl bg-white shadow-xl",
  };

  return (
    <div
      className={`
        ${variants[variant]}
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}