import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  CalendarDays,
  MapPin,
  ArrowRight,
} from "lucide-react";

type ActivitiesEventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  status?: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
};

export default function ActivitiesEventCard({
  title,
  date,
  location,
  description,
  status,
  icon,
  href,
  className = "",
}: ActivitiesEventCardProps) {
  return (
    <Card className={`flex h-full flex-col ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon ?? <CalendarDays className="h-8 w-8" />}
        </div>

        {status && (
          <Badge variant="primary">
            {status}
          </Badge>
        )}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-slate-600">
        <CalendarDays className="h-4 w-4" />
        {date}
      </div>

      <div className="mt-2 flex items-center gap-2 text-slate-600">
        <MapPin className="h-4 w-4" />
        {location}
      </div>

      <p className="mt-6 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      {href && (
        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            View Event
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}