// app/components/card.tsx
"use client";
import * as React from "react";

import { cn } from "@/app/lib/utils";
import {
    Card as RadixCard,
    CardBody,
    CardHeader
} from "@heroui/card";

// Define the props for the Card component
const Card = React.forwardRef<
    React.ElementRef<typeof RadixCard>,
    React.ComponentPropsWithoutRef<typeof RadixCard>
>(({ className, ...props }, ref) => (
    // Render the RadixCard component with custom styling and props
    <RadixCard
        ref={ref}
        className={cn(
            "w-full rounded-lg border border-primary bg-card p-4 shadow-md",
            className
        )}
        {...props}
    />
));
Card.displayName = RadixCard.displayName;

// Export the Card, CardHeader, CardTitle, and CardContent components
export { Card, CardHeader, CardBody };