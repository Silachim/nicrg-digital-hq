"use client";

import { Menu, X } from "lucide-react";

type Props = {
  open: boolean;
  onClick: () => void;
};

export default function MenuButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        xl:hidden
        rounded-xl
        p-2
        transition
        hover:bg-slate-100
      "
      aria-label="Toggle Menu"
    >
      {open ? (
        <X className="h-7 w-7" />
      ) : (
        <Menu className="h-7 w-7" />
      )}
    </button>
  );
}