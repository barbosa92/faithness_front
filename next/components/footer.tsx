// components/Footer.tsx

import {
    Link,
} from "@heroui/link";
import { siteConfig } from "@/config/site";
import { Cat, Triangle } from "lucide-react";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import NextLink from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-default-800">
            <div className="w-full max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-background">Quick Links</h4>
                        <ul className="space-y-2">
                            {siteConfig.navItems.map((item) => (
                                <li key={item.href}>
                                    <NextLink
                                        href={item.href}
                                        className="text-sm text-default-100 hover:text-foreground"
                                    >
                                        {item.label}
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-background">
                            Social Media
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    isExternal
                                    aria-label="Github"
                                    href={siteConfig.links.github}
                                    className="text-sm text-default-100 hover:text-foreground"
                                >
                                    <Cat className="h-4 w-4" />
                                    GitHub
                                </Link>
                            </li>
                            {/* Add other social media links here */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-background">
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    isExternal
                                    aria-label="Vercel"
                                    href={siteConfig.links.vercel}
                                    className="text-sm text-default-100 hover:text-foreground"
                                >
                                    <Triangle className="h-4 w-4" />
                                    Vercel
                                </Link>
                            </li>
                            {/* Add other resources here */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 py-4 border-t border-border">
                <div className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Faithness. All rights reserved.
                </div>
            </div>
        </footer>
    );
};