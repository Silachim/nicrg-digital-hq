/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationSearch
 * Version: 2.0.0
 *
 * Purpose:
 * Provides a reusable search interface
 * for discovering publications within
 * the NICRG knowledge repository.
 *
 * Used In:
 * • Publications Page
 * • Publication Repository
 * • Knowledge Search
 *
 * --------------------------------------------------------
 */

import { Search } from "lucide-react";

type PublicationSearchProps = {
  placeholder: string;

  value?: string;

  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  className?: string;
};

export default function PublicationSearch({
  placeholder,
  value,
  onChange,
  className = "",
}: PublicationSearchProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <Search
        className="
          absolute
          left-5
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-4
          pl-14
          pr-6
          text-base
          text-slate-700
          shadow-sm
          outline-none
          transition-all
          duration-200
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100
        "
      />
    </div>
  );
}