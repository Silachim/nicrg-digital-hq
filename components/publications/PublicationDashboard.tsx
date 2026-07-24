import ExecutiveDashboard from "@/components/dashboard/ExecutiveDashboard";

type PublicationsDashboardProps = {
  badge: string;
  title: string;
  description: string;
  metrics: any[];
  indicators: any[];
  outlook: any;
  footer: any;
};

export default function PublicationsDashboard(
  props: PublicationsDashboardProps
) {
  return (
    <ExecutiveDashboard
      {...props}
    />
  );
}