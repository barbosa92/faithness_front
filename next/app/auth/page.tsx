// app/auth/page.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import { cn } from "@/app/lib/utils";
import { AlertComponent } from "@/components/alert"; // Asegúrate de que la ruta es correcta
import { Form as MyForm } from "@heroui/form"; // Asegúrate de que la ruta es correcta
import { useUser } from "@/hooks/use-user"; // Asegúrate de que la ruta es correcta
import React from "react";
import { Eye, EyeClosed } from "lucide-react"

// // Define the schema for user registration and login data
// const formSchema = z.object({
//     username: z.string().min(2, { message: "Username must be at least 2 characters." }),
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z.string().min(8, { message: "Password must be at least 8 characters." }),
//     name: z.string().min(2, { message: "Name must be at least 2 characters." }),
// });

export default function AuthPage() {
    const [submitted, setSubmitted] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const [isLoginMode, setIsLoginMode] = useState(true); // State to toggle forms

    // Separate visibility state for each password field
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log("Form Data Submitted:", data); // Log data for debugging
        setSubmitted(data);
        // TODO: Add actual login or signup logic here based on isLoginMode
        if (isLoginMode) {
            console.log("Attempting Login...");
            // Call login API
        } else {
            console.log("Attempting Sign Up...");
            // Call signup API (add validation for password match)
            if (data.password !== data.confirmPassword) {
                console.error("Passwords do not match!");
                // Handle password mismatch feedback to the user
                setSubmitted({ error: "Passwords do not match!", ...data }); // Show error in submitted data for now
                return; // Prevent submission
            }
        }
    };

    // --- Login Form Fields ---
    const renderLoginForm = () => (
        <>
            <Input
                isRequired
                // errorMessage="Please enter a valid email" // Use react-hook-form errors later
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                variant="bordered"
                classNames={{
                    inputWrapper: "border dark:border-zinc-700", // Example: Ensure border shows if variant="bordered" needs it explicitly
                    input: "border-0 focus:ring-0", // Ensure input itself has no border/ring if wrapper handles it
                }}
            />
            <Input
                isRequired
                // errorMessage="Please enter your password"
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <Eye className="text-xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeClosed className="text-xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type={isPasswordVisible ? "text" : "password"}
                variant="bordered"
                classNames={{
                    inputWrapper: "border dark:border-zinc-700",
                    input: "border-0 focus:ring-0",
                }}
            />
            <Button type="submit" variant="default" className="w-full"> {/* Added w-full for consistency */}
                Login
            </Button>
        </>
    );

    // --- Sign Up Form Fields ---
    const renderSignUpForm = () => (
        <>
            <Input
                isRequired
                // errorMessage="Please enter your full name"
                label="Full Name"
                labelPlacement="outside"
                name="name" // Add name attribute
                placeholder="Enter your full name"
                type="text"
                variant="bordered"
                classNames={{
                    inputWrapper: "border dark:border-zinc-700",
                    input: "border-0 focus:ring-0",
                }}
            />
            <Input
                isRequired
                // errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                variant="bordered"
                classNames={{
                    inputWrapper: "border dark:border-zinc-700",
                    input: "border-0 focus:ring-0",
                }}
            />
            <Input
                isRequired
                // errorMessage="Password must be at least 8 characters"
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <Eye className="text-xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeClosed className="text-xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Create a password"
                type={isPasswordVisible ? "text" : "password"}
                variant="bordered"
                classNames={{
                    inputWrapper: "border dark:border-zinc-700",
                    input: "border-0 focus:ring-0",
                }}
            />
            <Input
                isRequired
                // errorMessage="Passwords must match"
                endContent={
                    <button
                        aria-label="toggle confirm password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleConfirmPasswordVisibility} // Use separate toggle function
                    >
                        {isConfirmPasswordVisible ? ( // Use separate state variable
                            <Eye className="text-xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeClosed className="text-xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                label="Confirm Password"
                labelPlacement="outside"
                name="confirmPassword" // Add name attribute
                placeholder="Confirm your password"
                type={isConfirmPasswordVisible ? "text" : "password"} // Use separate state variable
                variant="bordered"
                classNames={{
                    inputWrapper: "border dark:border-zinc-700",
                    input: "border-0 focus:ring-0",
                }}
            />
            <Button type="submit" variant="default" className="w-full"> {/* Added w-full */}
                Sign Up
            </Button>
        </>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen "> {/* Added basic centering layout */}
            <Form
                className="space-y-6 p-6 md:p-8 lg:p-10 max-w-md w-full bg-white dark:bg-zinc-800 shadow-xl rounded-lg" // Adjusted padding/max-width slightly
                onSubmit={onSubmit}
            >
                <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                    {isLoginMode ? "Login" : "Sign Up"}
                </h2>

                {isLoginMode ? renderLoginForm() : renderSignUpForm()}

                {/* Display Submitted Data/Error */}
                {submitted && (
                    <div className={`mt-4 text-sm p-3 rounded-md ${submitted.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        <p className="font-medium">{submitted.error ? 'Error:' : 'Submitted Data:'}</p>
                        <code>{JSON.stringify(submitted)}</code>
                    </div>
                )}
            </Form>

            {/* Toggle Button */}
            <div className="mt-4 text-center text-sm">
                {isLoginMode ? (
                    <>
                        <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
                        <button
                            type="button"
                            onClick={() => { setIsLoginMode(false); setSubmitted(null); }} // Reset submitted state on toggle
                            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 focus:outline-none focus:underline"
                        >
                            Sign Up
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
                        <button
                            type="button"
                            onClick={() => { setIsLoginMode(true); setSubmitted(null); }} // Reset submitted state on toggle
                            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 focus:outline-none focus:underline"
                        >
                            Login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}