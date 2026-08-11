import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FMG Data Sub",
  description:
    "Privacy Policy and data protection guidelines for FMG Data Sub application and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="px-6 py-8 sm:p-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            FMG DATA SUB - PRIVACY POLICY
          </p>

          <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
            {/* SECTION 1 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                1. OVERVIEW &amp; DATA CONTROLLER
              </h2>
              <p>
                This Privacy Policy explains how <strong>FMG Data Sub</strong>{" "}
                (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects,
                uses, stores, shares, and protects your information across our
                website, mobile application, APIs, and associated services.
              </p>
              <p className="mt-2">
                FMG Data Sub is the Data Controller responsible for your
                personal information in line with the{" "}
                <strong>Nigeria Data Protection Act 2023 (NDPA)</strong>.
              </p>
              <p className="mt-2">
                By using our services, you consent to the collection and
                processing of your data as described in this policy.
              </p>
            </section>

            {/* SECTION 2 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                2. INFORMATION WE COLLECT
              </h2>
              <p className="mb-3">
                We collect information you provide and data we receive
                automatically:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    1. Personal Data You Provide
                  </h3>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>Registration Details:</strong> Full name, email
                      address, phone number, password
                    </li>
                    <li>
                      <strong>Transaction Details:</strong> Bank account
                      details, payment card info, wallet transactions
                    </li>
                    <li>
                      <strong>Verification Data:</strong> NIN, BVN, or
                      Government ID when required for KYC
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    2. Technical &amp; Usage Data
                  </h3>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>Device Information:</strong> IP address, device
                      ID, browser type, operating system
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages visited, services used,
                      transaction logs
                    </li>
                    <li>
                      <strong>Location Data:</strong> Used for fraud prevention
                      and service delivery
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    3. Third-Party Data
                  </h3>
                  <p className="mt-1">
                    We may receive verification data from financial
                    institutions, NIN database, and network providers to confirm
                    your identity.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                3. HOW WE USE YOUR DATA
              </h2>
              <p className="mb-3">We process your data to:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  Provide and deliver services: data, airtime, bill payments,
                  and networking
                </li>
                <li>Verify your identity and secure your account</li>
                <li>Process transactions and send receipts/notifications</li>
                <li>
                  Prevent, detect, and investigate fraud and illegal activity
                </li>
                <li>
                  Comply with legal obligations to CBN, NCC, and other
                  regulators
                </li>
                <li>
                  Improve our platform, customer support, and user experience
                </li>
                <li>
                  Send service updates. With your consent, we may send
                  promotional messages
                </li>
              </ol>
            </section>

            {/* SECTION 4 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                4. HOW WE SHARE YOUR DATA
              </h2>
              <p className="mb-3">
                We do NOT sell your personal data. We only share data with:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <strong>Service Providers:</strong> MTN, Glo, Airtel, 9mobile,
                  DSTV, banks, payment gateways to deliver your requested service
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, court
                  order, or to prevent fraud
                </li>
                <li>
                  <strong>Business Partners:</strong> With your explicit consent
                </li>
              </ol>
              <p className="mt-3">
                All third parties are required to protect your data and use it
                only for the purpose we specify.
              </p>
            </section>

            {/* SECTION 5 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                5. DATA SECURITY
              </h2>
              <p>
                We implement industry-standard security measures including SSL
                encryption, firewalls, and role-based access controls to protect
                your data from unauthorized access, loss, or misuse.
              </p>
              <p className="mt-2">
                However, no internet transmission is 100% secure. You are also
                responsible for protecting your password and account access.
              </p>
            </section>

            {/* SECTION 6 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                6. COOKIES
              </h2>
              <p>
                We use cookies to remember your login details, improve user
                experience, and analyze website traffic.
              </p>
              <p className="mt-2">
                You can disable cookies in your browser settings, but this may
                limit access to key features of our platform.
              </p>
            </section>

            {/* SECTION 7 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                7. DATA RETENTION
              </h2>
              <p>
                We retain your personal data for as long as your account is
                active.
              </p>
              <p className="mt-2">
                After account deactivation, we securely archive your data for up
                to <strong>7 years</strong> to meet legal, tax, and regulatory
                obligations under Nigerian law. After this period, data is
                permanently and securely deleted.
              </p>
            </section>

            {/* SECTION 8 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                8. YOUR RIGHTS UNDER NDPA 2023
              </h2>
              <p className="mb-3">
                Under the Nigeria Data Protection Act 2023, you have the right
                to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Access:</strong> Request a copy of the data we hold
                  about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your data,
                  subject to legal obligations
                </li>
                <li>
                  <strong>Object:</strong> Object to processing for marketing
                  purposes
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent at any
                  time
                </li>
              </ul>
              <p className="mt-3">
                To exercise these rights, email us at:{" "}
                <a
                  href="mailto:fmgdatasub@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  fmgdatasub@gmail.com
                </a>
              </p>
            </section>

            {/* SECTION 9 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                9. CHANGES TO THIS POLICY
              </h2>
              <p>
                We may update this Privacy Policy. We will notify you of material
                changes via email or app notification. Continued use means you
                accept the updated policy.
              </p>
            </section>

            {/* CONTACT US */}
            <section className="border-t border-gray-200 pt-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="mb-2">
                If you have questions about this Privacy Policy, contact our Data
                Protection Officer at:
              </p>
              <ul className="list-none space-y-1">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:fmgdatasub@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    fmgdatasub@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Kano, Nigeria
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
