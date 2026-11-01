import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full rounded-lg border border-input bg-white px-3.5 py-2 text-sm text-foreground shadow-sm shadow-black/[0.015] outline-none transition placeholder:text-[#aaa49a] hover:border-[#d2c6b5] focus:border-[#b69a72] focus:ring-2 focus:ring-[#b69a72]/15 disabled:cursor-not-allowed disabled:bg-[#f5f3ef] disabled:opacity-60",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
