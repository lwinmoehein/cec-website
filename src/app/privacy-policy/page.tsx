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
                        At Clouds English Center, we are committed to protecting your privacy. This policy outlines how our platform and mobile applications collect, use, and handle your data in compliance with Google Play Developer Policies.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Account Creation and Access</h2>
                    <p className="mb-4">
                        <strong>Account creation is restricted to administrators only.</strong> Students cannot self-register through the app.
                        Login credentials (Phone Number and Password) are provided directly by Clouds English Center.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Information We Collect</h2>
                    <p className="mb-4">To provide our educational services, we collect the following data:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Personal Identifiers:</strong> Name and Phone Number (used for authentication).</li>
                        <li><strong>Learning Activity:</strong> Course progress, quiz scores, history of content viewed, and earned points.</li>
                        <li><strong>Device Information:</strong> Device model, OS version, and unique identifiers to ensure security and prevent unauthorized multi-device access.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. App Permissions & Third Parties</h2>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Notifications:</strong> Used for class reminders and course updates.</li>
                        <li><strong>Service Providers:</strong> We may use third-party services (like Google Firebase) for push notifications and app analytics. These services do not use your data for marketing.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Data Security</h2>
                    <p className="mb-4">
                        We utilize industry-standard encryption to protect your data in transit and at rest. We do not sell or share student data with third-party advertisers.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Account Deletion & Data Retention</h2>
                    <p className="mb-4">
                        Users have the right to request the deletion of their account and all associated personal data.
                    </p>
                    <p className="mb-4">
                        To delete your account, you can:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Use the <strong>“Delete Account”</strong> button directly in the app.</li>
                        <li>Or, contact us via email at <strong>apragmaticdev@gmail.com</strong>.</li>
                    </ul>
                    <p className="mb-4 text-sm italic">
                        Once a deletion request is verified, all personal data, including learning history and scores, will be permanently removed from our active databases within 30 days.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Children's Privacy</h2>
                    <p className="mb-4">
                        As an educational provider, we ensure that any data regarding students under the age of 18 is handled with the utmost care and only with the consent of the enrolling institution or parent/guardian.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Contact Us</h2>
                    <p className="mb-4">
                        For questions regarding this policy, contact: <strong>apragmaticdev@gmail.com</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
