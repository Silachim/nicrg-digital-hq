/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationAuthor
 * Version: 2.0.0
 *
 * Purpose:
 * Displays publication author
 * information and scholarly profile.
 *
 * Used In:
 * • Publications Page
 * • Publication Details
 * • Research Repository
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  UserRound,
  ArrowRight,
} from "lucide-react";

type PublicationAuthorProps = {
  name: string;

  affiliation: string;

  role?: string;

  publications?: string | number;

  biography?: string;

  href?: string;

  className?: string;
};

export default function PublicationAuthor({
  name,
  affiliation,
  role,
  publications,
  biography,
  href,
  className = "",
}: PublicationAuthorProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <UserRound className="h-10 w-10" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 font-medium text-emerald-700">
        {affiliation}
      </p>

      {role && (
        <p className="mt-1 text-sm text-slate-500">
          {role}
        </p>
      )}

      {publications && (
        <p className="mt-4 text-sm font-medium text-slate-700">
          {publications} Publications
        </p>
      )}

      {biography && (
        <p className="mt-5 flex-1 leading-8 text-slate-600">
          {biography}
        </p>
      )}

      {href && (
        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            View Profile

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}