/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Form Component
 * Component: Textarea
 * Version: 1.0.0
 * --------------------------------------------------------
 */

import { TextareaHTMLAttributes } from "react";

import FormField from "./FormField";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;

    required?: boolean;

    helperText?: string;

    error?: string;
  };

export default function Textarea({
  label,
  required,
  helperText,
  error,
  className = "",
  rows = 6,
  ...props
}: TextareaProps) {
  return (
    <FormField
      label={label}
      required={required}
      helperText={helperText}
      error={error}
    >
      <textarea
        rows={rows}
        {...props}
        className={`w-full rounded-xl border border-slate-300 px-4 py-3 transition duration-200 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${className}`}
      />
    </FormField>
  );
}