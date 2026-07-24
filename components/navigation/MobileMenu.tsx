"use client";

import Link from "next/link";

import MobileAccordion from "./MobileAccordion";
import { navigation } from "./navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        top-20
        z-40
        overflow-y-auto
        bg-white
        px-8
        py-8
        xl:hidden
      "
    >
      {navigation.map((menu) => (
        <MobileAccordion
          key={menu.title}
          title={menu.title}
          href={menu.href}
          items={menu.items}
          onNavigate={onClose}
        />
      ))}

      <div className="mt-10 space-y-4">
        <Link
          href="/contact"
          onClick={onClose}
          className="
            block
            rounded-xl
            border
            border-slate-300
            px-5
            py-4
            text-center
          "
        >
          Contact
        </Link>

        <Link
          href="/membership"
          onClick={onClose}
          className="
            block
            rounded-xl
            bg-emerald-700
            px-5
            py-4
            text-center
            font-semibold
            text-white
          "
        >
          Become a Member
        </Link>
      </div>
    </div>
  );
}