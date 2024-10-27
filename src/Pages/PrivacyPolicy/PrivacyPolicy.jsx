import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10 lg:px-24 lg:py-16 text-gray-800 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-lora lg:text-4xl xl:text-5xl font-bold mb-6 text-center text-primary">
        Privacy Policy
      </h1>
      <p className="mb-4 font-montserrat text-lg text-center max-w-3xl">
        At Perfect Profile, your privacy is of utmost importance to us. This
        Privacy Policy outlines how we collect, use, and protect your
        information when you use our website.
      </p>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="font-montserrat">
          We collect both personal and non-personal information. Personal
          information may include your name, email address, and any other
          details necessary for providing our services. Non-personal information
          may include usage data such as device type, browser type, and time
          spent on our site.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="font-montserrat">
          We use your information to provide, maintain, and improve our
          services. This includes creating and customizing your resume,
          enhancing your user experience, and providing customer support.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          3. Data Sharing and Disclosure
        </h2>
        <p className="font-montserrat">
          We do not share your personal information with third parties except as
          required by law or with your consent. Certain third-party service
          providers may access data as part of our operations, such as hosting
          and analytics, but they are obligated to protect it.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="font-montserrat">
          We implement security measures to protect your information from
          unauthorized access, alteration, or disclosure. However, please note
          that no method of online transmission is completely secure.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          5. Cookies and Tracking Technologies
        </h2>
        <p className=" font-montserrat">
          We use cookies to enhance your browsing experience and analyze site
          usage. You can disable cookies through your browser settings, but this
          may affect certain functionalities on our website.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">6. Data Retention</h2>
        <p className="font-montserrat">
          We retain your information for as long as necessary to fulfill the
          purposes outlined in this policy, or as required by law. You may
          request deletion of your information by contacting us.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          7. Your Rights and Choices
        </h2>
        <p className="font-montserrat">
          You have the right to access, update, or delete your personal
          information. You can manage your privacy settings or contact us
          directly to exercise your rights.
        </p>
      </section>

      <section className="max-w-4xl w-full mb-8">
        <h2 className="text-xl font-lora font-semibold mt-6 mb-2">
          8. Changes to Our Privacy Policy
        </h2>
        <p className="font-montserrat">
          We may update this Privacy Policy to reflect changes in our practices
          or relevant laws. Please review this page periodically to stay
          informed of any updates.
        </p>
      </section>

      <p className="mt-8 text-center text-sm font-montserrat text-gray-600 max-w-2xl">
        If you have any questions or concerns about our Privacy Policy, please
        contact us. By using Perfect Profile, you acknowledge and agree to our
        practices as outlined in this policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
