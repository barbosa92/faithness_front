// app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';

// Define metadata for the application
export const metadata: Metadata = {
  title: 'FaithFitness',
  description: 'A faith-based fitness app',
};
import { Navbar } from "@/components/navbar2"
import { Footer } from "@/components/footer"
import { Providers } from "./providers";


// RootLayout component to wrap the application
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
        <Navbar />
        {children}
        <Footer />
        {/* </Providers> */}

      </body>
    </html>
  );
}