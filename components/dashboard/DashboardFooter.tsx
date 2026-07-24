type DashboardFooterProps = {
  lastUpdated: string;
  reportingCycle: string;
  framework: string;
  dataSource?: string;
  version?: string;
  className?: string;
};

export default function DashboardFooter({
  lastUpdated,
  reportingCycle,
  framework,
  dataSource = "NICRG Institutional Records",
  version = "v0.5",
  className = "",
}: DashboardFooterProps) {
  const items = [
    {
      label: "Last Updated",
      value: lastUpdated,
    },
    {
      label: "Reporting Cycle",
      value: reportingCycle,
    },
    {
      label: "Framework",
      value: framework,
    },
    {
      label: "Data Source",
      value: dataSource,
    },
    {
      label: "Version",
      value: version,
    },
  ];

  return (
    <div
      className={`
        mt-12
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-6
        ${className}
      `}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {item.label}
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}