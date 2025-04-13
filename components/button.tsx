// app/components/button.tsx
"use client";
import * as React from "react";

import { cn } from "@/app/lib/utils";
import {
    Button as RadixButton,
} from "@heroui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";




const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-default-800 text-default-100 hover:bg-default-800/80",
                secondary:
                    "bg-default-100 text-default-800 hover:bg-default-100/80",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background text-primary-outline hover:bg-accent hover:text-accent-foreground",

                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2 rounded-md",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? RadixButton : 'button';
        return (
            <Comp
                className={buttonVariants({ variant, size, className })} // Directly use cva output
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };