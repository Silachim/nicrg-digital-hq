/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Form Component
 * Component: Checkbox
 * Version: 1.0.0
 * --------------------------------------------------------
 */

import { InputHTMLAttributes, ReactNode } from "react";

type CheckboxProps =
  InputHTMLAttributes<HTMLInputElement> & {
    children: ReactNode;

    error?: string;
  };

export default function Checkbox({
  children,
  error,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          {...props}
          className={`mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 ${className}`}
        />

        <span className="leading-7 text-slate-700">
          {children}
        </span>
      </label>

      {error && (
        <p className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}