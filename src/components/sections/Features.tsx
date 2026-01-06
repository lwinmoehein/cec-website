"use client";

import { motion } from "framer-motion";
import { GraduationCap, Smartphone, Users, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        name: "Expert Teachers",
        description:
            "Learn from a diverse team of qualified and passionate English teachers dedicated to your success.",
        icon: GraduationCap,
    },
    {
        name: "Mobile Learning",
        description:
            "Study on iOS and Android devices with our feature-rich mobile app. Download lessons for offline access.",
        icon: Smartphone,
    },
    {
        name: "Small Group Classes",
        description:
            "Engage in interactive small group sessions ensuring personalized attention and plenty of speaking practice.",
        icon: Users,
    },
    {
        name: "Global Community",
        description:
            "Connect with fellow learners worldwide, share experiences, and practice English in a supportive environment.",
        icon: Globe,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A Better Way to Learn English
                    </p>
                    <p className="mt-4 text-xl text-muted-foreground">
                        We combine traditional teaching excellence with modern technology to deliver the best learning experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Download CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary text-white rounded-3xl p-12 text-center shadow-xl"
                >
                    <Download className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Download our app today and begin your English learning journey with Clouds English Center.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://apps.apple.com/us/app/clouds-english/id6756755121"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 h-14 rounded-xl transition-all hover:scale-105">
                                Download for iOS
                            </Button>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=lab.justonebyte.cecstudentapp&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 h-14 rounded-xl transition-all hover:scale-105">
                                Download for Android
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
