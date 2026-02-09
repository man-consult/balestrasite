import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  const lastUpdated = '30/12/2024'

  return (
    <>
      <section className="pt-32 pb-12 max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Privacy <span className="text-balestra-red italic">Policy</span>
        </h1>
        <div className="w-24 h-1 bg-balestra-red mb-8" />
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          Last Updated: {lastUpdated}
        </p>
      </section>

      <section className="pb-24 max-w-3xl mx-auto px-6 text-gray-300 leading-relaxed space-y-12">
        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">Introduction</h2>
          <p>
            This Privacy Policy explains how Balestra Group Limited collects, uses, discloses, and
            protects your personal information in accordance with the Privacy Act 2020 and other
            applicable New Zealand laws.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">Information We Collect</h2>
          <p className="mb-4">We collect the following types of personal information:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-balestra-red">
            <li>
              <strong className="text-white">Contact information:</strong> Name, email address,
              phone number, postal address
            </li>
            <li>
              <strong className="text-white">Account information:</strong> Username, password,
              account preferences
            </li>
            <li>
              <strong className="text-white">Transaction information:</strong> Purchase history,
              payment details
            </li>
            <li>
              <strong className="text-white">Usage information:</strong> How you interact with our
              services, including platform usage and time spent
            </li>
            <li>
              <strong className="text-white">Device information:</strong> IP address, browser type,
              operating system, and device identifiers
            </li>
            <li>
              <strong className="text-white">Communications:</strong> Records of your
              communications with us
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            How We Collect Information
          </h2>
          <p className="mb-4">We collect information through:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-balestra-red">
            <li>Direct interactions with you (when you register, purchase, or contact us)</li>
            <li>Automated technologies (cookies, web beacons, analytics tools)</li>
            <li>Third parties (business partners, service providers, public sources)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-balestra-red">
            <li>Provide and manage our services</li>
            <li>Process transactions and send related information</li>
            <li>Communicate with you about our services</li>
            <li>Personalize your experience</li>
            <li>Improve and develop our services</li>
            <li>Protect our legal rights and comply with obligations</li>
            <li>Send marketing communications (where you&apos;ve consented)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            Legal Basis for Processing
          </h2>
          <p className="mb-4">We process your information based on:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-balestra-red">
            <li>Your consent</li>
            <li>Necessity for performing our contract with you</li>
            <li>Our legitimate business interests</li>
            <li>Compliance with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            Information Sharing and Disclosure
          </h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-balestra-red mb-6">
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners with your consent</li>
            <li>Law enforcement or regulatory bodies when legally required</li>
            <li>Potential buyers in the event of a business sale, merger, or acquisition</li>
          </ul>
          <p className="italic border-l-2 border-balestra-red pl-4">
            We do not sell your personal information to third parties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-2xl text-balestra-red mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, loss, or alteration.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-balestra-red mb-4">Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            Your Rights Under the Privacy Act 2020
          </h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-balestra-red">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information in certain circumstances</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with the Privacy Commissioner</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            International Data Transfers
          </h2>
          <p>
            If we transfer your information outside New Zealand, we ensure that appropriate
            safeguards are in place to protect your information.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            Our services are not directed to individuals under 16. We do not knowingly collect
            personal information from children.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-balestra-red mb-4">Cookies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing
            activities. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        <div className="bg-balestra-black p-8 rounded-sm border border-white/5">
          <h2 className="font-serif text-2xl text-white mb-6">Contact Us</h2>

          <p className="mb-4">
            If you have questions about this Privacy Policy or our privacy practices, please contact
            our Privacy Officer at:
          </p>
          <a
            href="mailto:privacy@balestra.group"
            className="text-balestra-red hover:text-white transition underline decoration-white/10 underline-offset-4 mb-8 block"
          >
            privacy@balestra.group
          </a>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-lg font-serif text-balestra-red mb-2">
              Office of the Privacy Commissioner
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              If you are unsatisfied with our response to a privacy concern:
            </p>
            <address className="not-italic text-sm text-gray-300 space-y-1">
              <p>PO Box 10094, The Terrace, Wellington 6143</p>
              <p>Phone: 0800 803 909</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:enquiries@privacy.org.nz"
                  className="text-balestra-red hover:text-white"
                >
                  enquiries@privacy.org.nz
                </a>
              </p>
              <p>
                Website:{' '}
                <a
                  href="https://www.privacy.org.nz"
                  target="_blank"
                  rel="noopener"
                  className="text-balestra-red hover:text-white"
                >
                  www.privacy.org.nz
                </a>
              </p>
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
