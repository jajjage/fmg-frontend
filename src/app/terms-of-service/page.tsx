import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - FMG Data Sub",
  description:
    "Terms of Service and user agreement for FMG Data Sub application and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="px-6 py-8 sm:p-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mb-8 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            FMG DATA SUB - TERMS AND CONDITIONS
          </p>

          <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
            {/* SECTION 1 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p>
                FMG Data Sub provides access to online resources including
                mobile data bundles, airtime/recharge, bill payments, networking
                services, and related digital services, subject to these Terms
                and Conditions (&quot;Terms&quot;).
              </p>
              <p className="mt-2">
                By creating an account or using our Service, you agree to comply
                with these Terms. Additional guidelines for specific services
                form part of this agreement.
              </p>
              <p className="mt-2">
                If you disagree with any portion of these Terms, your sole
                recourse is to discontinue using FMG Data Sub. FMG Data Sub
                reserves the right to enforce these Terms via account
                restrictions or legal action.
              </p>
            </section>

            {/* SECTION 2 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                2. MODIFICATIONS TO AGREEMENT
              </h2>
              <p>
                FMG Data Sub reserves the right to update or modify these Terms
                at any time. For material changes, we will notify you via email
                or app notification at least 7 days before they take effect.
                Continued use after changes means you accept the new Terms.
              </p>
              <p className="mt-2">Please review this agreement regularly.</p>
            </section>

            {/* SECTION 3 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                3. SERVICE DESCRIPTION &amp; AVAILABILITY
              </h2>
              <p>
                FMG Data Sub provides data subscription, airtime vending, bill
                payments, and networking services sourced from third-party
                network providers and billers including MTN, Glo, Airtel,
                9mobile, DSTV, GOTV, PHCN, and banks.
              </p>
              <p className="mt-2">
                Service delivery depends on third-party providers. FMG Data Sub
                is not liable for delays, downtime, failed transactions, or
                errors caused by network providers, banks, or payment
                gateways.
              </p>
            </section>

            {/* SECTION 4 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                4. ACCOUNT REGISTRATION &amp; KYC
              </h2>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  You must provide accurate information during registration:
                  name, email, phone number, and payment details.
                </li>
                <li>
                  FMG Data Sub may request NIN, BVN, or valid ID for verification
                  in line with CBN and AML regulations.
                </li>
                <li>
                  You are responsible for keeping your login details secure.
                </li>
                <li>
                  Creating multiple accounts to circumvent limits or providing
                  false information will lead to immediate suspension and possible
                  forfeiture of wallet balance in line with applicable laws.
                </li>
              </ol>
            </section>

            {/* SECTION 5 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                5. USER CONDUCT RULES
              </h2>
              <p className="mb-3">
                To maintain platform security, you agree NOT to:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <strong>Account Abuse:</strong> Create multiple accounts or
                  bypass restrictions.
                </li>
                <li>
                  <strong>Harassment:</strong> Stalk, harass, or send
                  unsolicited messages to other users.
                </li>
                <li>
                  <strong>Data Harvesting:</strong> Collect personal details of
                  other users for unlawful purposes.
                </li>
                <li>
                  <strong>Automation:</strong> Use bots, scrapers, or scripts to
                  extract data without written permission.
                </li>
                <li>
                  <strong>Platform Disruption:</strong> Attempt unauthorized
                  access, DDoS, or actions that degrade service.
                </li>
                <li>
                  <strong>Fraud:</strong> Use the platform for money laundering,
                  impersonation, or illegal activities.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                6. PROHIBITED CONTENT
              </h2>
              <p className="mb-3">
                You may not post or transmit content that is:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Illegal, threatening, abusive, or harmful to minors.</li>
                <li>Pornographic, discriminatory, or hateful.</li>
                <li>
                  False, misleading, or impersonating FMG Data Sub staff.
                </li>
                <li>
                  Infringing on copyright, trademarks, or IP. &quot;FMG DATA
                  SUB&quot; logo and brand are our property.
                </li>
                <li>Spam, chain letters, or unauthorized advertising.</li>
              </ol>
            </section>

            {/* SECTION 7 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                7. PAYMENT, REFUNDS &amp; ERRORS
              </h2>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  All prices are subject to change based on vendor rates without
                  prior notice.
                </li>
                <li>
                  <strong>Wrong details entered:</strong> If you enter a wrong
                  phone number, meter number, or smartcard number, FMG Data Sub is
                  not liable. Always double-check.
                </li>
                <li>
                  <strong>Failed Transactions:</strong> If payment is debited
                  but service not delivered, request a refund within 24 hours.
                  Verified refunds will be processed within 48 hours.
                </li>
                <li>
                  <strong>Duplicate debit:</strong> Will be reversed after
                  confirmation from payment provider.
                </li>
                <li>
                  All sales are final except where service was not delivered.
                </li>
              </ol>
            </section>

            {/* SECTION 8 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                8. LIMITATION OF LIABILITY
              </h2>
              <p>
                To the fullest extent allowed by law, FMG Data Sub shall not be
                liable for indirect, incidental, or consequential damages. Our
                total liability for any claim shall not exceed the amount you
                paid for the specific transaction in dispute.
              </p>
            </section>

            {/* SECTION 9 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                9. INTELLECTUAL PROPERTY
              </h2>
              <p>
                All content, logos, software, and the &quot;FMG DATA SUB&quot;
                brand are owned by FMG Data Sub. Unauthorized use is prohibited.
              </p>
            </section>

            {/* SECTION 10 */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                10. GOVERNING LAW &amp; DISPUTE RESOLUTION
              </h2>
              <p>
                These Terms are governed by the laws of the Federal Republic of
                Nigeria. Any dispute shall first be resolved amicably. If
                unresolved, it shall be referred to arbitration in Abuja, FCT.
              </p>
            </section>

            {/* CONTACT US */}
            <section className="border-t border-gray-200 pt-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Contact Us
              </h2>
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
