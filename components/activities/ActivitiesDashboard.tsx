import ExecutiveDashboard from "@/components/dashboard/ExecutiveDashboard";

type ActivitiesDashboardProps = {
  badge: string;
  title: string;
  description: string;
  metrics: any[];
  indicators: any[];
  outlook: any;
  footer: any;
};

export default function ActivitiesDashboard(
  props: ActivitiesDashboardProps
) {
  return (
    <ExecutiveDashboard
      {...props}
    />
  );
}