import Card from "@/components/ui/Card";

type PublicationTimelineItem = {
  year: string;
  title: string;
  journal: string;
};

type PublicationTimelineProps = {
  items: PublicationTimelineItem[];
};

export default function PublicationTimeline({
  items,
}: PublicationTimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <Card key={`${item.year}-${item.title}`}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            {item.year}
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 text-slate-600">
            {item.journal}
          </p>
        </Card>
      ))}
    </div>
  );
}