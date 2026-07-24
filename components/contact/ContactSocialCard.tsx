/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactSocialCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a single official
 * NICRG digital platform.
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type ContactSocialCardProps = {
  title: string;

  description: string;

  value: string;

  href: string;

  icon: ReactNode;
};

export default function ContactSocialCard({
  title,
  description,
  value,
  href,
  icon,
}: ContactSocialCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        {icon}
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      <p className="mt-6 break-all rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
        {value}
      </p>

      <div className="mt-8">
        <Button
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="w-full"
        >
          Visit Platform
        </Button>
      </div>
    </Card>
  );
}