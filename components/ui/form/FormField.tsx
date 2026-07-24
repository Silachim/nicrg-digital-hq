/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Form Component
 * Component: FormField
 * Version: 1.0.0
 *
 * Purpose:
 * Standard wrapper for all NICRG form controls.
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

type FormFieldProps = {
  label: string;

  required?: boolean;

  helperText?: string;

  error?: string;

  children: ReactNode;
};

export default function FormField({
  label,
  required = false,
  helperText,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}

      {helperText && !error && (
        <p className="text-sm text-slate-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}