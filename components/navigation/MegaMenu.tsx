"use client";

import Link from "next/link";

type Item = {
  title: string;
  href: string;
};

type Props = {
  items: Item[];
};

export default function MegaMenu({
  items,
}: Props) {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-full
        z-50
        mt-6
        w-[340px]
        -translate-x-1/2
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        opacity-0
        shadow-2xl
        transition-all
        duration-200
        group-hover:visible
        group-hover:opacity-100
      "
    >
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="
              block
              rounded-lg
              px-4
              py-3
              transition
              hover:bg-slate-100
              hover:text-emerald-700
            "
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}