import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type ActivitiesProgramCardProps = {
  title: string;
  category: string;
  description: string;
  icon: ReactNode;
  className?: string;
};

export default function ActivitiesProgramCard({
  title,
  category,
  description,
  icon,
  className = "",
}: ActivitiesProgramCardProps) {
  return (
    <Card className={className}>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        {icon}
      </div>

      <Badge
        variant="secondary"
        className="mt-6"
      >
        {category}
      </Badge>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}