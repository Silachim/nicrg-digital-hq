/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Form Component
 * Component: Select
 * Version: 1.0.0
 * --------------------------------------------------------
 */

import { SelectHTMLAttributes } from "react";

import FormField from "./FormField";

type Option = {
  label: string;
  value: string;
};

type SelectProps =
  SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;

    options: Option[];

    placeholder?: string;

    required?: boolean;

    helperText?: string;

    error?: string;
  };

export default function Select({
  label,
  options,
  placeholder = "Select an option",
  required,
  helperText,
  error,
  className = "",
  ...props
}: SelectProps) {
  return (
    <FormField
      label={label}
      required={required}
      helperText={helperText}
      error={error}
    >
      <select
        {...props}
        className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition duration-200 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${className}`}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}