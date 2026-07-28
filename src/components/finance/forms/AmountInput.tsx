"use client";

import { InputHTMLAttributes } from "react";
import { IndianRupee } from "lucide-react";

interface AmountInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
  required?: boolean;
}

export default function AmountInput({
  label,
  error,
  required = false,
  className = "",
  ...props
}: AmountInputProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-300">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">
        <IndianRupee
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
        />

        <input
          type="number"
          step="0.01"
          min="0"
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
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-yellow-500
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
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