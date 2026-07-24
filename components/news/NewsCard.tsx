import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type NewsCardProps = {
  title: string;
  category: string;
  date: string;
  summary: string;
};

export default function NewsCard({
  title,
  category,
  date,
  summary,
}: NewsCardProps) {
  return (
    <Card className="h-full p-8 hover:-translate-y-1 transition-all">
      <Badge variant="primary">
        {category}
      </Badge>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm text-slate-500">
        {date}
      </p>

      <p className="mt-6 leading-8 text-slate-600">
        {summary}
      </p>
    </Card>
  );
}