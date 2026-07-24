import Card from "@/components/ui/Card";

type PublicationSeriesCardProps = {
  title: string;
  description: string;
};

export default function PublicationSeriesCard({
  title,
  description,
}: PublicationSeriesCardProps) {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}