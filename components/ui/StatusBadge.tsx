import Badge from "./Badge";

type Status =
  | "Active"
  | "Building"
  | "Launching"
  | "Growing"
  | "Emerging"
  | "Expanding"
  | "Planning"
  | "Completed"
  | "Paused"
  | "Archived";

type StatusBadgeProps = {
  status: Status;

  className?: string;

  showDot?: boolean;
};

export default function StatusBadge({
  status,
  className = "",

  showDot = true,
}: StatusBadgeProps) {
  const variantMap = {
    Active: "success",

    Building: "warning",

    Launching: "secondary",

    Growing: "primary",

    Emerging: "secondary",

    Expanding: "primary",

    Planning: "neutral",

    Completed: "success",

    Paused: "warning",

    Archived: "outline",
  } as const;

  return (
    <Badge
      variant={variantMap[status]}
      dot={showDot}
      className={className}
    >
      {status}
    </Badge>
  );
}