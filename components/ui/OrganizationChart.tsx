type OrganizationLevel = {
  title: string;
  members: string[];
};

type OrganizationChartProps = {
  levels: OrganizationLevel[];
};

export default function OrganizationChart({
  levels,
}: OrganizationChartProps) {
  return (
    <div className="space-y-10">
      {levels.map((level) => (
        <div
          key={level.title}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-emerald-700">
            {level.title}
          </h3>

          <div className="mt-6 flex flex-wrap gap-4">
            {level.members.map((member) => (
              <div
                key={member}
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-700"
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}