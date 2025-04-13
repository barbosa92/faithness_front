// app/components/alert.tsx
"use client";
import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/app/lib/utils";
import { Alert } from "@heroui/alert";

// Define the props for the Alert component
const AlertComponent = React.forwardRef<
    React.ElementRef<typeof Alert>,
    React.ComponentPropsWithoutRef<typeof Alert>
>(({ className, title, description, ...props }, ref) => (
    // Render the RadixAlert component with custom styling and props
    <Alert
        ref={ref}
        className={cn(
            "flex w-full flex-col space-y-2 rounded-md border border-primary bg-primary/20 p-4 text-sm text-primary",
            className
        )}
        {...props}
    >
        <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-1">
                {title && <div className="font-semibold">{title}</div>}
                {description && <div>{description}</div>}
                {props.children}
            </div>
            {props.onClose && (
                <button
                    type="button"
                    onClick={props.onClose}
                    className="text-primary hover:opacity-70"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    </Alert>
));
AlertComponent.displayName = Alert.displayName;

// Export the Alert, AlertTitle, and AlertDescription components
export { AlertComponent };