/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationEmptyState
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import {
  BookOpenText,
} from "lucide-react";

type PublicationEmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
};

export default function PublicationEmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  className = "",
}: PublicationEmptyStateProps) {
  return (
    <Card
      className={`flex flex-col items-center py-16 text-center ${className}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icon ?? <BookOpenText className="h-10 w-10" />}
      </div>

      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        {description}
      </p>

      {actionLabel && actionHref && (
        <div className="mt-10">
          <Button
            href={actionHref}
            variant="primary"
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </Card>
  );
}