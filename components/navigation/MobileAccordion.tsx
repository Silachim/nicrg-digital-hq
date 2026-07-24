"use client";

import { useState } from "react";

import Link from "next/link";

import { ChevronDown } from "lucide-react";

type Item = {
  title: string;
  href: string;
};

type Props = {
  title: string;
  href: string;
  items: Item[];
  onNavigate: () => void;
};

export default function MobileAccordion({
  title,
  href,
  items,
  onNavigate,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
    onNavigate();
  };

  return (
    <div className="border-b border-slate-200">
      <button
        className="
          flex
          w-full
          items-center
          justify-between
          py-5
          text-left
          font-semibold
        "
        onClick={() => setOpen(!open)}
      >
        {title}

        <ChevronDown
          className={`
            transition
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div className="pb-4">
          <Link
            href={href}
            onClick={handleNavigate}
            className="
              block
              py-2
              font-semibold
              text-emerald-700
            "
          >
            Overview
          </Link>

          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={handleNavigate}
              className="
                block
                py-2
                pl-5
                text-slate-600
              "
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}