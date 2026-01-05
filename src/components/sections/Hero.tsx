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
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl mb-8 leading-tight">
                        Unlock Your Potential with <br />
                        <span className="text-yellow-400 drop-shadow-md">Clouds English Center</span>
                    </h1>
                    <p className="text-xl sm:text-2xl mb-12 text-white/95 font-medium max-w-2xl leading-relaxed drop-shadow-sm">
                        Experience a modern way to learn English with expert teachers, interactive apps, and a supportive community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Apple App Store Button */}
                        <Button size="lg" className="bg-black hover:bg-zinc-900 text-white border border-white/20 h-16 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl group">
                            <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8 group-hover:text-white/90">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 43.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none gap-0.5">
                                <span className="text-[11px] uppercase font-semibold text-zinc-400 tracking-wide">Download on the</span>
                                <a href="https://apps.apple.com/us/app/clouds-english/id6756755121"><span className="text-2xl font-bold tracking-tight">App Store</span></a>
                            </div>
                        </Button>

                        {/* Google Play Store Button */}
                        <Button size="lg" className="bg-black hover:bg-zinc-900 text-white border border-white/20 h-16 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl group">
                            <svg viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 group-hover:text-white/90">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.2-60.1-60.1L104.6 499z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none gap-0.5">
                                <span className="text-[11px] uppercase font-semibold text-zinc-400 tracking-wide">GET IT ON</span>
                                <a href="https://play.google.com/store/apps/details?id=lab.justonebyte.cecstudentapp&hl=en">
                                    <span className="text-2xl font-bold tracking-tight">Google Play</span>
                                </a>
                            </div>
                        </Button>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
