// app/components/navbar.tsx
"use client";

import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenu,
    NavbarMenuToggle
} from "@heroui/navbar";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cva, type VariantProps } from "class-variance-authority";

// Define variants for the navigation menu trigger
const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

// Define the Navbar component
export const Navbar = () => {
    return (
        <HeroUINavbar maxWidth="xl" position="sticky" className="bg-default-800 text-background"> {/* Apply background and text color */}
            {/* Left side content */}
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo />
                        <p className="font-bold text-inherit">Faithness</p> {/* Change name to Faithness */}
                    </NextLink>
                </NavbarBrand>

            </NavbarContent>

            {/* Right side content */}
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                {/* Navigation links */}
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href} className={navigationMenuTriggerStyle()}>
                            <NextLink href={item.href}> {/* Use NextLink for navigation */}
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            {/* Mobile menu toggle */}
            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            {/* Mobile menu (simplified) */}
            <NavbarMenu className="bg-foreground text-background"> {/* Apply background and text color */}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item) => (
                        <NavbarMenuItem key={item.href}>
                            <NextLink href={item.href}> {/* Use NextLink for navigation */}
                                {item.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </HeroUINavbar>
    );
};