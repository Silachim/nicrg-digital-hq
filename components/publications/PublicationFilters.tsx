/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationFilters
 * Version: 2.1.0
 *
 * Purpose:
 * Displays reusable publication
 * filtering controls for the NICRG
 * Publication Repository.
 *
 * --------------------------------------------------------
 */

import Badge from "@/components/ui/Badge";

type Filter = {
  label: string;
  value: string;
  active?: boolean;
};

type PublicationFiltersProps = {
  filters: Filter[];
  className?: string;
};

export default function PublicationFilters({
  filters,
  className = "",
}: PublicationFiltersProps) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${className}`}
    >
      {filters.map((filter, index) => (
        <Badge
          key={`${filter.value}-${index}`}
          variant={
            filter.active
              ? "primary"
              : "outline"
          }
          className="
            cursor-default
            transition-all
            duration-200
          "
        >
          {filter.label}
        </Badge>
      ))}
    </div>
  );
}