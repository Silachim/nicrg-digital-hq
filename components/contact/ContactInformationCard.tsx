/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactInformationCard
 * Version: 1.0.0
 *
 * Purpose:
 * Reusable information card for displaying
 * office details, contact channels, and
 * institutional information.
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";

type ContactInformationCardProps = {
  icon: ReactNode;

  title: string;

  children: ReactNode;

  className?: string;
};

export default function ContactInformationCard({
  icon,
  title,
  children,
  className = "",
}: ContactInformationCardProps) {
  return (
    <Card
      className={`flex gap-5 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-900">
          {title}
        </h3>

        <div className="mt-3 space-y-2 leading-7 text-slate-600">
          {children}
        </div>
      </div>
    </Card>
  );
}