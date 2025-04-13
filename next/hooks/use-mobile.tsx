// app/hooks/use-mobile.tsx
"use client";
import { useEffect, useState } from "react";

// Define the useMobile hook
export function useMobile() {
    // State to store whether the device is mobile or not
    const [isMobile, setIsMobile] = useState(false);

    // Function to check if the device is mobile
    const checkIsMobile = () => {
        // Check if the screen width is less than 768px
        setIsMobile(window.innerWidth < 768);
    };

    // Effect to update the isMobile state when the screen size changes
    useEffect(() => {
        // Add an event listener for screen resize and call the checkIsMobile function
        window.addEventListener("resize", checkIsMobile);
        // Call the checkIsMobile function initially
        checkIsMobile();

        // Remove the event listener when the component unmounts
        return () => window.removeEventListener("resize", checkIsMobile);
    },);

    // Return the isMobile state
    return isMobile;
}