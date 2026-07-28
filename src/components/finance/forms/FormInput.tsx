"use client";

import { InputHTMLAttributes } from "react";

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  label,
  error,
  required = false,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-300">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
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
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-yellow-500
          ${className}
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}