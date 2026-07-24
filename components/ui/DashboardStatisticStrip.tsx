/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Component: StatisticStrip
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a responsive strip of institutional statistics.
 *
 * Used In:
 * • Executive Dashboard
 * • Research Dashboard
 * • Governance Dashboard
 * • Membership Dashboard
 * • Publications Dashboard
 * • Annual Reports
 *
 * Features
 * • Responsive layout
 * • Automatic separators
 * • Optional subtitle
 * • Consistent typography
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

type Statistic = {
  value: string | number;

  label: string;

  subtitle?: string;

  icon?: ReactNode;
};

type StatisticStripProps = {
  items: Statistic[];

  className?: string;
};

export default function DashboardStatisticStrip({
  items,
  className = "",
}: StatisticStripProps) {
  return (
    <div
      className={[
        "grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm",
        "sm:grid-cols-2",
        "xl:grid-cols-4",
        className,
      ].join(" ")}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={[
            "text-center",
            index < items.length - 1
              ? "xl:border-r xl:border-slate-200"
              : "",
          ].join(" ")}
        >
          {item.icon && (
            <div className="mb-4 flex justify-center">
              {item.icon}
            </div>
          )}

          <div className="text-4xl font-extrabold text-emerald-700">
            {item.value}
          </div>

          <div className="mt-2 text-lg font-semibold text-slate-900">
            {item.label}
          </div>

          {item.subtitle && (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {item.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}