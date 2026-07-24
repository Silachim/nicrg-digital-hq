import Card from "@/components/ui/Card";

import {
  Award,
  BookOpen,
  FileText,
  Landmark,
  Lightbulb,
  Network,
} from "lucide-react";

type MembershipBenefitCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
};

const iconMap = {
  network: Network,
  book: BookOpen,
  award: Award,
  lightbulb: Lightbulb,
  landmark: Landmark,
  file: FileText,
};

export default function MembershipBenefitCard({
  title,
  description,
  icon,
  className = "",
}: MembershipBenefitCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Network;

  return (
    <Card
      className={`flex h-full flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}