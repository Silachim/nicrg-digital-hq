/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Form Component
 * Component: TextInput
 * --------------------------------------------------------
 */

import InputHTMLAttributes from "react";
import FormField from "./FormField";

type TextInputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;

    required?: boolean;

    helperText?: string;

    error?: string;
  };

export default function TextInput({
  label,
  required,
  helperText,
  error,
  className = "",
  ...props
}: TextInputProps) {
  return (
    <FormField
      label={label}
      required={required}
      helperText={helperText}
      error={error}
    >
      <input
        {...props}
        className={`w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${className}`}
      />
    </FormField>
  );
}