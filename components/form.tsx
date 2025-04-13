// app/components/form.tsx
"use client";
import * as React from "react";

import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import { Form } from "@heroui/form";
import { UseFormReturn } from "react-hook-form";


const formVariants = cva(
    "grid gap-4",
    {
        variants: {
            size: {
                small: "text-sm",
                large: "text-lg",
            },
            theme: {
                primary: "bg-blue-100 border-blue-500",
                secondary: "bg-gray-100 border-gray-500",
            },
        },
        defaultVariants: {
            size: "small",
        },
    }
);

interface FormProps extends React.ComponentPropsWithoutRef<typeof Form> {
    children: React.ReactNode;
    size?: "small" | "large";
    onSubmit: (data: any) => void; // Add onSubmit prop
    form: UseFormReturn<any>; // Add this line

}

const MyForm = React.forwardRef<
    React.ElementRef<typeof Form>,
    FormProps
>(({ className, children, size, onSubmit, form, ...props }, ref) => {
    const { register, handleSubmit, ...formMethods } = form; // Destructure from 'form'

    return (
        <Form
            ref={ref}
            className={cn(
                formVariants({ size }),
                className
            )}
            onSubmit={handleSubmit(onSubmit)}
            {...formMethods}
        >
            {children}
        </Form>
    );
});

MyForm.displayName = "MyForm";

export { MyForm };