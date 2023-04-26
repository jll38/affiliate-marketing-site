import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function Privacy() {
  const lastUpdated = "April 26th, 2023";
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Navbar />
      <main className="md:mt-0 md:min-h-screen bg-opacity-50 py-36 bg-gray-100">
        <div className="text-gray-800 w-1/2 mx-auto">
          <div className="mb-5">
            <h1 className="text-4xl font-semibold ">
              Privacy Policy for Home Sync Hub
            </h1>
            <p className="text-gray-600">Last Updated on {lastUpdated}</p>
          </div>
          At Home Sync Hub, we respect your privacy and are committed to
          protecting your personal information. This privacy policy explains how
          we collect, use, and protect your information when you use our
          website.
          <h2 className="text-2xl font-semibold my-3">
            Collection of Information
          </h2>
          We may collect personal information from you when you visit our
          website, such as your name, email address, and location. This
          information is collected in order to improve your experience on our
          website and to provide you with relevant information about smart home
          technology and automation.
          <h2 className="text-2xl font-semibold my-3">Use of Information</h2>
          We may use your personal information to send you promotional materials
          about our products and services, as well as to communicate with you
          about your account and any purchases you make on our website. We may
          also use your information to personalize your experience on our
          website and to analyze website usage trends.
          <h2 className="text-2xl font-semibold my-3">
            Protection of Information
          </h2>
          We take the protection of your personal information seriously and have
          implemented appropriate security measures to prevent unauthorized
          access, disclosure, or misuse of your information.
          <h2 className="text-2xl font-semibold my-3">
            Sharing of Information
          </h2>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent. However, we may share your
          information with our trusted affiliates, partners, or service
          providers who assist us in operating our website, conducting our
          business, or servicing you.
          <h2 className="text-2xl font-semibold my-3">Cookies</h2>
          We use cookies to improve your experience on our website and to
          personalize your experience. Cookies are small data files that are
          stored on your computer or mobile device when you visit our website.
          You can disable cookies in your browser settings, but this may limit
          your ability to use certain features of our website.
          <h2 className="text-2xl font-semibold my-3">Third-Party Links</h2>
          Our website may contain links to third-party websites or services that
          are not owned or controlled by us. We are not responsible for the
          privacy practices or content of these third-party websites or
          services.
          <h2 className="text-2xl font-semibold my-3">
            Children&apos;s Privacy
          </h2>
          Our website is not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          you believe we have collected personal information from a child under
          13, please contact us immediately.
          <h2 className="text-2xl font-semibold my-3">
            Changes to Privacy Policy
          </h2>
          We may update this privacy policy from time to time in order to
          reflect changes to our practices or for other operational, legal, or
          regulatory reasons. We will post the revised privacy policy on our
          website and update the date at the top of this page.
          <h2 className="text-2xl font-semibold my-3">Contact Us</h2>
          If you have any questions or concerns about this privacy policy or our
          practices, please contact us at [insert contact information]. This
          privacy policy was last updated on {lastUpdated}.
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Privacy;
