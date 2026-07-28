"use client";

import { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  required?: boolean;
}

export default function FormSelect({
  label,
  options,
  error,
  required = false,
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-300">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <select
        {...props}
        className={`
          w-full
          rounded-xl
          border
          border-yellow-500/20
          bg-[#141414]
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-yellow-500
          ${className}
        `}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#141414]"
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}