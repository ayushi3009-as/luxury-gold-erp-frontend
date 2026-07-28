"use client";

import { InputHTMLAttributes } from "react";
import { Calendar } from "lucide-react";

interface DateInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export default function DateInput({
  label,
  error,
  required = false,
  className = "",
  ...props
}: DateInputProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-300">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">

        <Calendar
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="date"
          {...props}
          className={`
            w-full
            rounded-xl
            border
            border-yellow-500/20
            bg-[#141414]
            py-3
            pl-11
            pr-4
            text-white
            outline-none
            transition
            focus:border-yellow-500
            ${className}
          `}
        />

      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}