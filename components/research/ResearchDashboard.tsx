import ExecutiveDashboard from "@/components/dashboard/ExecutiveDashboard";
import { research } from "@/content";

export default function ResearchDashboard() {
  return (
    <ExecutiveDashboard
      badge={research.dashboard.badge}
      title={research.dashboard.title}
      description={research.dashboard.description}
      metrics={research.dashboard.metrics}
      indicators={research.dashboard.indicators}
      outlook={research.dashboard.outlook}
      footer={research.dashboard.footer}
    />
  );
}