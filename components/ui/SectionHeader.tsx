import { ReactNode } from "react";
import Badge from "./Badge";

type SectionHeaderProps = {
  badge?: string;

  badgeVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "neutral"
    | "outline"
    | "research"
    | "executive";

  title: ReactNode;

  description?: ReactNode;

  align?: "left" | "center";

  maxWidth?: "md" | "lg" | "xl";

  divider?: boolean;

  eyebrow?: ReactNode;

  action?: ReactNode;

  className?: string;
};

export default function SectionHeader({
  badge,

  badgeVariant = "primary",

  title,

  description,

  align = "center",

  maxWidth = "lg",

  divider = false,

  eyebrow,

  action,

  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "";

  const widths = {
    md: "max-w-2xl",

    lg: "max-w-3xl",

    xl: "max-w-5xl",
  };

  return (
    <div
      className={[
        alignment,

        widths[maxWidth],

        className,
      ].join(" ")}
    >
      {eyebrow && (
        <div className="mb-4">
          {eyebrow}
        </div>
      )}

      {badge && (
        <Badge variant={badgeVariant}>
          {badge}
        </Badge>
      )}

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

      {divider && (
        <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-emerald-600" />
      )}

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}