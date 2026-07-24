/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Component
 * Component: StatisticStrip
 * Version: 2.1.0
 * --------------------------------------------------------
 */

type Statistic = {
  value: string | number;
  label: string;
};

type StatisticStripProps = {
  stats?: Statistic[];
  className?: string;
};

export default function StatisticStrip({
  stats = [],
  className = "",
}: StatisticStripProps) {

  console.log("StatisticStrip received:", stats);

  return (
    <section
      className={`
        rounded-3xl
        bg-emerald-700
        px-10
        py-16
        text-white
        ${className}
      `}
    >
      <div className="grid gap-10 text-center md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={`${stat.label}-${index}`}>
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