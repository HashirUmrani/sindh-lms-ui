import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b69a72] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-[#6d573b] hover:shadow-md",
        secondary: "border border-[#e7dfd2] bg-secondary text-secondary-foreground hover:bg-[#ede4d5]",
        outline: "border border-border bg-white text-foreground hover:border-[#d2c3ad] hover:bg-[#faf8f4]",
        ghost: "text-[#625b50] hover:bg-[#f3eee5] hover:text-foreground",
        link: "text-[#806746] underline-offset-4 hover:underline",
        beige: "bg-[#ede4d5] text-[#684f33] hover:bg-[#e5d8c4] shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-5",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
