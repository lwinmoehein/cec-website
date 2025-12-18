"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "../../../public/images/playstore.png"; // Static import

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Clouds English Center Logo" width={32} height={32} />
                        <span className="text-xl font-bold tracking-tight text-primary">Clouds English Center</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </Button>
                </div>
                <div className="hidden md:flex">
                    <Button variant="default">Get the App</Button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "block rounded-md px-3 py-2 text-base font-medium",
                                    pathname === item.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-primary"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4">
                            <Button className="w-full">Get the App</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
