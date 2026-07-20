import { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export default function Icon({
  icon: IconComponent,
  size = 28,
  className = "",
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={1.8}
      className={className}
    />
  );
}