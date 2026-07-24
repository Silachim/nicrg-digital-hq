import Card from "@/components/ui/Card";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type ActivitiesTimelineProps = {
  items: TimelineItem[];
};

export default function ActivitiesTimeline({
  items,
}: ActivitiesTimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <Card key={item.year}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            {item.year}
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}