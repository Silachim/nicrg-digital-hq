type Statistic = {
  value: string;
  label: string;
};

type StatisticStripProps = {
  stats: Statistic[];
};

export default function StatisticStrip({
  stats,
}: StatisticStripProps) {
  return (
    <section className="rounded-3xl bg-emerald-700 px-10 py-16 text-white">
      <div className="grid gap-10 text-center md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-5xl font-extrabold">
              {stat.value}
            </div>

            <div className="mt-3 text-lg text-emerald-100">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}