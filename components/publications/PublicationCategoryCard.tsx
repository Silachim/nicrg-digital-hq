import Card from "@/components/ui/Card";

type PublicationCategoryCardProps = {
  title: string;
  description: string;
};

export default function PublicationCategoryCard({
  title,
  description,
}: PublicationCategoryCardProps) {
  return (
    <Card className="h-full p-8 text-center">
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}