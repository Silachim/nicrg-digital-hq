import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type FeaturedNewsCardProps = {
  title: string;
  category: string;
  date: string;
  summary: string;
};

export default function FeaturedNewsCard({
  title,
  category,
  date,
  summary,
}: FeaturedNewsCardProps) {
  return (
    <Card className="p-12">
      <Badge variant="primary">
        {category}
      </Badge>

      <h2 className="mt-6 text-4xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {date}
      </p>

      <p className="mt-8 text-lg leading-9 text-slate-600">
        {summary}
      </p>
    </Card>
  );
}