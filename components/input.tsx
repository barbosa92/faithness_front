// app/components/input.tsx
"use client";
import * as React from "react";

import { cn } from "@/app/lib/utils";
import { Input as RadixInput } from "@heroui/input";
import { cva } from "class-variance-authority";

const inputVariants = cva(
    "flex w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            size: {
                sm: "h-8",
                md: "h-10",
                lg: "h-12",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

interface InputProps extends Omit<React.ComponentProps<typeof RadixInput>, 'ref'> {
    size?: "sm" | "md" | "lg";
}

const Input = React.forwardRef<
    React.ElementRef<typeof RadixInput>,
    InputProps
>(({ className, size, ...props }, ref) => (
    <RadixInput
        ref={ref}
        className={cn(
            inputVariants({ size }),
            className
        )}
        {...props}
    />
));
Input.displayName = RadixInput.displayName;

export { Input, inputVariants };