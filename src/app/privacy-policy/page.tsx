import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Clouds English Center',
    description: 'Privacy Policy for Clouds English Center - Transparent data practices for our students.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight text-primary mb-8">Privacy Policy</h1>

                <div className="prose text-muted-foreground">
                    <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                    <p className="mb-6">
                        At Clouds English Center, we are committed to protecting your privacy. This policy outlines how our platform and mobile applications collect, use, and handle your data.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Account Creation and Course Access</h2>
                    <p className="mb-4">
                        <strong>Account creation is restricted to administrators only.</strong> Students cannot self-register.
                        Access credentials are provided directly by Clouds English Center. We only store student progress data
                        and basic profile information created by the administration to provide this educational service.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Information We Collect</h2>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Profile Information:</strong> Name, email address, and profile picture (optional) provided by the administration.</li>
                        <li><strong>Learning Data:</strong> Course progress, quiz scores, and attendance records.</li>
                        <li><strong>Device Information:</strong> Basic device information to ensure app compatibility and security.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. App Permissions</h2>
                    <p className="mb-4">
                        Our mobile application may request the following permissions:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Notifications:</strong> We request permission to send notifications to keep you updated on class schedules, new course content, and learning reminders. You can manage these preferences in your device settings at any time.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Data Usage and Storage</h2>
                    <p className="mb-4">
                        We use your data strictly to:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Authenticate user access to enrolled courses.</li>
                        <li>Track and display your individual learning progress.</li>
                        <li>Improve the functionality of our educational platform.</li>
                    </ul>
                    <p className="mb-4">
                        We do not share your personal data with third parties for marketing purposes.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Data Erasure</h2>
                    <p className="mb-4">
                        You represent the right to request the deletion of your account and associated data. Please contact us at info@cloudsenglish.com to initiate a data deletion request.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions regarding this Privacy Policy or our data practices, please contact our support team at info@cloudsenglish.com.
                    </p>
                </div>
            </div>
        </div>
    );
}
