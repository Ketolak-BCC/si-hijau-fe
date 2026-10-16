"use client";

import * as React from "react";
import { cn } from "cn";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.ComponentProps<"input"> {
  showPasswordToggle?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, showPasswordToggle = true, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";

    const effectiveType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : type;

    if (isPassword && showPasswordToggle) {
      return (
        <div className="relative flex w-full items-center">
          <input
            ref={ref}
            type={effectiveType}
            data-slot="input"
            className={cn(
              "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
              className,
              "!pr-11",
            )}
            {...props}
          />
          <button
            type="button"
            tabIndex={-1}
            aria-label={showPassword ? "Sembunyikan password" : "Lihat password"}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPassword((prev) => !prev);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-7 items-center justify-center rounded-md text-neutral-500 hover:text-neutral-700 transition-colors focus:outline-none cursor-pointer select-none"
          >
            {showPassword ? (
              <EyeOff className="size-5 pointer-events-none" aria-hidden="true" />
            ) : (
              <Eye className="size-5 pointer-events-none" aria-hidden="true" />
            )}
          </button>
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
