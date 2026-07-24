/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchClusterCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a research cluster within the NICRG
 * Research Ecosystem.
 *
 * Used In:
 * • Research Overview
 * • Research Clusters
 * • Research Dashboard
 * • Research Strategy
 * • Annual Report
 * • Future NIIRP Platform
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
} from "lucide-react";

type ResearchClusterCardProps = {
  cluster: string;

  shortName: string;

  description: string;

  icon: ReactNode;

  accentColor?: string;

  href?: string;
};

export default function ResearchClusterCard({
  cluster,

  shortName,

  description,

  icon,

  accentColor = "bg-emerald-100 text-emerald-700",

  href,
}: ResearchClusterCardProps) {
  return (
    <Card className="group flex h-full flex-col">
      <div
        className={[
          "flex h-16 w-16 items-center justify-center rounded-2xl",
          accentColor,
        ].join(" ")}
      >
        {icon}
      </div>

      <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
        {shortName}
      </p>

      <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
        {cluster}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8">
        {href ? (
          <Button
            href={href}
            variant="secondary"
            className="group inline-flex items-center gap-2"
          >
            Explore Cluster

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        ) : (
          <div className="inline-flex items-center gap-2 font-semibold text-emerald-700">
            Explore Cluster

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </Card>
  );
}