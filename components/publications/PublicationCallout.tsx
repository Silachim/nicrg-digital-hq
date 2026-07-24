/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationCallout
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

import {
  BookMarked,
} from "lucide-react";

type PublicationCalloutProps = {
  title: string;
  description: string;
  badge?: string;
  icon?: ReactNode;
  className?: string;
};

export default function PublicationCallout({
  title,
  description,
  badge,
  icon,
  className = "",
}: PublicationCalloutProps) {
  return (
    <Card
      className={`border-l-4 border-l-blue-600 ${className}`}
    >
      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          {icon ?? <BookMarked className="h-8 w-8" />}
        </div>

        <div className="flex-1">
          {badge && (
            <Badge variant="secondary">
              {badge}
            </Badge>
          )}

          <h3 className="mt-4 text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}