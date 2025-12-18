import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../../public/images/playstore.png";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image src={logo} alt="Clouds English Center Logo" width={32} height={32} />
                            <h3 className="text-lg font-bold text-primary">Clouds English Center</h3>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Learn English effectively with expert teachers and interactive tools.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: info@cloudsenglish.com</li>
                            <li>Phone: +1 234 567 890</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Clouds English Center. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
