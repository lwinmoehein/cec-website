import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Clouds English Center',
    description: 'Learn about our mission to provide high-quality English education.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-primary mb-8">About Clouds English Center</h1>

                <div className="prose prose-lg text-muted-foreground">
                    <p className="mb-6">
                        Clouds English Center is a premier English learning platform dedicated to helping students of all levels master the English language. Our mission is to provide accessible, high-quality education through a blend of expert instruction and modern technology.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
                    <p className="mb-6">
                        To empower individuals with the communication skills they need to succeed in a globalized world. We believe that learning English opens doors to new opportunities, and we are here to guide you every step of the way.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Approach</h2>
                    <p className="mb-6">
                        We combine traditional teaching methods with interactive digital tools. Our students benefit from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Experienced and certified teachers</li>
                        <li>Small class sizes for personalized attention</li>
                        <li>Custom mobile apps for practice on the go</li>
                        <li>A supportive and engaging learning community</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
