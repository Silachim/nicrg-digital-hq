import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type PublicationCardProps = {
  title: string;
  category: string;
  year: string;
  authors: string;
  description: string;
};

export default function PublicationCard({
  title,
  category,
  year,
  authors,
  description,
}: PublicationCardProps) {
  return (
    <Card className="h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Badge variant="primary">
        {category}
      </Badge>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium text-slate-500">
        {authors} • {year}
      </p>

      <p className="mt-6 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}