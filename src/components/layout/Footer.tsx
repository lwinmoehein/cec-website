import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../../public/images/playstore.png";

export function Footer() {
    return (
        <footer className="bg-primary text-white border-t border-white/10">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src={logo} alt="Clouds English Center Logo" width={40} height={40} className="w-10 h-10 object-contain rounded-md bg-white/10 p-0.5" />
                            <h3 className="text-lg font-bold tracking-tight text-white">Clouds English Center</h3>
                        </div>
                        <p className="text-sm text-blue-100 max-w-xs leading-relaxed">
                            Empowering students with expert English education and modern learning tools. Join our global community today.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xs uppercase tracking-widest text-blue-200 mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/" className="text-blue-100 hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-blue-100 hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-blue-100 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xs uppercase tracking-widest text-blue-200 mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-blue-100">
                            <li className="flex items-center gap-2">
                                <span>Email:</span>
                                <a href="mailto:info@cloudsenglishcenter.com" className="text-white hover:underline decoration-white/30 underline-offset-4">info@cloudsenglishcenter.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xs uppercase tracking-widest text-blue-200 mb-6">Connect</h4>
                        <div className="flex space-x-5">
                            <a href="https://www.facebook.com/cloudsenglishcenter/" className="text-blue-100 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200">
                    <p>&copy; {new Date().getFullYear()} Clouds English Center. All rights reserved.</p>
                    <p>Designed for excellence.</p>
                </div>
            </div>
        </footer>
    );
}
