"use client";

import { motion } from "framer-motion";
import { GraduationCap, Smartphone, Users, Globe } from "lucide-react";

const features = [
    {
        name: "Expert Teachers",
        description:
            "Learn from a diverse team of qualified and passionate English teachers dedicated to your success.",
        icon: GraduationCap,
    },
    {
        name: "Interactive Apps",
        description:
            "Practice anywhere, anytime with our custom-built mobile applications designed for seamless learning.",
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
            "Connect with fellow learners, share experiences, and practice English in a supportive environment.",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            </div>
        </section>
    );
}
