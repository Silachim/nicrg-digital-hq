import { LucideIcon } from "lucide-react";
import Icon from "./Icon";

type NetworkNodeProps = {
  icon: LucideIcon;
  title: string;
};

export default function NetworkNode({
  icon,
  title,
}: NetworkNodeProps) {
  return (
    <div className="group flex flex-col items-center">
      <div
        className="
          flex h-24 w-24 items-center justify-center
          rounded-full
          border border-emerald-200
          bg-white
          shadow-md
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:shadow-xl
          group-hover:border-emerald-500
        "
      >
        <Icon
          icon={icon}
          size={34}
          className="text-emerald-700"
        />
      </div>

      <h3 className="mt-4 text-center text-lg font-semibold text-slate-900">
        {title}
      </h3>
    </div>
  );
}