import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10 lg:px-24 lg:py-16 text-gray-800 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-lora lg:text-4xl xl:text-5xl font-bold mb-6 text-center text-primary">
        Terms and Conditions
      </h1>
      <p className="mb-4 font-montserrat text-lg text-center max-w-3xl">
        Welcome to Perfect Profile! By accessing or using our website, you agree
        to comply with and be bound by the following terms and conditions.
        Please review them carefully.
      </p>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="font-montserrat">
          By accessing or using Perfect Profile, you confirm that you have read,
          understood, and agreed to these terms. If you do not agree, please
          refrain from using our site.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          2. Use of Our Services
        </h2>
        <p className="font-montserrat">
          Our resume-building platform is provided solely for personal and
          non-commercial use. You may not use it for any illegal or unauthorized
          purpose.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          3. User Responsibilities
        </h2>
        <p className="font-montserrat">
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to provide accurate information and to
          update it as needed.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          4. Intellectual Property
        </h2>
        <p className="font-montserrat">
          All content on Perfect Profile, including text, graphics, logos, and
          software, is our property or that of our licensors. You may not copy,
          distribute, or create derivative works without permission.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          5. Payment and Subscription
        </h2>
        <p className="font-montserrat">
          Certain features may require payment. By subscribing, you agree to our
          pricing and billing practices. All fees are non-refundable unless
          stated otherwise.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          6. Termination
        </h2>
        <p className="font-montserrat">
          We reserve the right to suspend or terminate your account if you
          violate any of these terms. Upon termination, your access to our
          services will cease immediately.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          7. Limitation of Liability
        </h2>
        <p className="font-montserrat">
          Perfect Profile is not liable for any indirect or consequential
          damages arising from the use of our services, including but not
          limited to data loss.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          8. Changes to Terms
        </h2>
        <p className="font-montserrat">
          We may update these terms periodically. Please review this page
          regularly to stay informed of any changes.
        </p>
      </section>

      <p className="mt-8 font-montserrat text-center text-sm text-gray-600 max-w-2xl">
        By using Perfect Profile, you acknowledge that you have read,
        understood, and agree to be bound by these Terms and Conditions. If you
        have any questions, please contact us.
      </p>
    </div>
  );
};

export default TermsAndConditions;
