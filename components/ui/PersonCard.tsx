import Card from "./Card";

type PersonCardProps = {
  name: string;
  title: string;
  bio?: string;
};

export default function PersonCard({
  name,
  title,
  bio,
}: PersonCardProps) {
  return (
    <Card className="text-center">
      <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-slate-200" />

      <h3 className="text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 font-medium text-emerald-700">
        {title}
      </p>

      {bio && (
        <p className="mt-6 leading-7 text-slate-600">
          {bio}
        </p>
      )}
    </Card>
  );
}