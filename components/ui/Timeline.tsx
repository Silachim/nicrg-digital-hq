type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({
  items,
}: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl">

      {/* Vertical Line */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-emerald-200 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={`${item.year}-${item.title}`}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Timeline Marker */}
            <div className="absolute left-5 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-emerald-600 shadow md:left-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}