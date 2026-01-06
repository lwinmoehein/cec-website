"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <header className="sticky top-0 z-50 w-full bg-primary border-b border-white/10 shadow-sm transition-all">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src={logo} alt="Clouds English Center Logo" width={40} height={40} className="w-10 h-10 object-contain rounded-md bg-white/10 p-0.5" />
                        <span className="text-lg font-bold tracking-tight text-white leading-none">Clouds English Center</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-8 items-center">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-all hover:text-white",
                                pathname === item.href
                                    ? "text-white font-bold"
                                    : "text-blue-100 hover:text-white"
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
                        className="hover:bg-white/10"
                    >
                        <span className="sr-only">Open main menu</span>
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="h-6 w-6 text-white" aria-hidden="true" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-6 w-6 text-white" aria-hidden="true" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </div>
            </div>

            {/* Mobile menu with animations */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden border-t border-white/10 overflow-hidden"
                    >
                        <motion.div
                            className="space-y-1 px-4 pb-3 pt-2 bg-primary/95 backdrop-blur-sm"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                                            pathname === item.href
                                                ? "bg-white/10 text-white font-bold"
                                                : "text-blue-100 hover:bg-white/10 hover:text-white"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
