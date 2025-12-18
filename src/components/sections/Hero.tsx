"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/banner.jpg" // Using the provided banner image
                    alt="Clouds English Center Classroom"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        Unlock Your Potential with <br />
                        <span className="text-yellow-300">Clouds English Center</span>
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 text-white/90 font-medium max-w-2xl">
                        Experience a modern way to learn English with expert teachers, interactive apps, and a supportive community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-black hover:bg-black/80 text-white border border-white/20 h-14 px-6 rounded-xl flex items-center gap-3 transition-transform hover:scale-105">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M17.05 20.28c-.98.95-2.05 1.08-3.08 1.04-1.07-.05-2.54-.9-3.87-.9-1.4 0-2.8.92-3.8.92-1.6 0-3.3-1.62-4.24-3.55a8 8 0 0 1-.39-3.3c.13-2.6 1.9-4.22 4.09-4.22 1.34 0 2.27.66 3.03.66.75 0 1.96-.8 3.5-.8 1.45 0 2.58.74 3.3 1.83-3.23 1.6-2.5 5.86.35 6.94-.48 1.43-1.14 2.85-2.03 3.82M12.03 7.25c-.15 1.55-1.17 2.97-2.68 3.1-.4.01-.83-.07-1.22-.24-.2-.08-.4-.2-.56-.35a3.6 3.6 0 0 1-1.05-3.3c.09-1.37.95-2.78 2.37-3.15 1.54-.4 3.29.39 3.14 3.94Z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase font-medium text-white/80">Download on the</span>
                                <span className="text-lg font-bold">App Store</span>
                            </div>
                        </Button>

                        <Button size="lg" className="bg-black hover:bg-black/80 text-white border border-white/20 h-14 px-6 rounded-xl flex items-center gap-3 transition-transform hover:scale-105">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                <path d="M4.05 2.56a.7.7 0 0 0-.15.48v17.92c0 .2.05.37.15.48l.06.06 9.5-9.48-9.5-9.48-.06.02Zm10.97 10.95 3.32 3.32-.42.42c-1.35.79-2.9 1.68-3.95 2.29L12.92 14l2.1-1.49Zm1.1-2.02-1.1-1.1-2.1-2.09 1.04-.6c1.06-.61 2.6-1.5 3.96-2.29l.41.41-3.32 3.32.01.27.01.08Zm-9.98-9.58L12.06 13 5.08 1.85c-.47-.26-1.07-.38-1.74-.48l-1.4.03-.02-.02 4.22 4.35 9.01-3.83-9.01 3.83Z" />
                                <path d="M12.06 13 6.14 18.91 5.08 22.15l1.41-.03c.66-.1 1.27-.22 1.74-.48L15.02 12 12.06 13Z" />
                                <path d="M4.34 2.87 3.5 1.25l-.83 1.62-.01.02.04.04 1.4 1.4.24-.24-1.4-1.4.24.26 1.16-1.08Z" fill="none" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase font-medium text-white/80">Get it on</span>
                                <span className="text-lg font-bold">Google Play</span>
                            </div>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
