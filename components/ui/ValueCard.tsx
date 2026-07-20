import { LucideIcon } from "lucide-react";
import Icon from "./Icon";
import Card from "./Card";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ValueCard({
  icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <Card className="h-full text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
        <Icon
          icon={icon}
          size={32}
          className="text-emerald-700"
        />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}