"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Smartphone, Download, CheckCircle2 } from "lucide-react";
import appMockup from "../../../public/images/app-mock-up.png";

const appFeatures = [
    {
        icon: Download,
        title: "Offline Access",
        description: "Download lessons and practice materials to study without an internet connection."
    },
    {
        icon: CheckCircle2,
        title: "Track Your Progress",
        description: "Monitor your learning journey with detailed progress tracking and achievements."
    },
    {
        icon: Smartphone,
        title: "Interactive Quizzes",
        description: "Test your knowledge with engaging quizzes and get instant feedback on your performance."
    }
];

export function AppShowcase() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: App Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-md lg:max-w-lg">
                            <Image
                                src={appMockup}
                                alt="Clouds English Center Mobile App"
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl"></div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-base font-semibold text-primary tracking-wide uppercase mb-3">
                            Mobile Learning
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Learn English Anywhere, Anytime
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our mobile app brings professional English education to your fingertips.
                            Practice lessons, track progress, and improve your skills on iOS and Android devices.
                        </p>

                        {/* Features List */}
                        <div className="space-y-6 mb-10">
                            {appFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Platform Badges */}
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium">
                                <Apple className="w-5 h-5" />
                                <span>iOS</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                                </svg>
                                <span>Android</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
