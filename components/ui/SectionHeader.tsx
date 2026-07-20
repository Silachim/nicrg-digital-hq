import { ReactNode } from "react";
import Badge from "./Badge";

type SectionHeaderProps = {
  badge?: string;
  badgeVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "neutral";
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  badge,
  badgeVariant = "primary",
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl";

  return (
    <div className={alignment}>
      {badge && (
        <Badge variant={badgeVariant}>
          {badge}
        </Badge>
      )}

      <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}