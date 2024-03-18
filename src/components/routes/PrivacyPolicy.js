import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/sideSlice";

const PrivacyPolicy = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(closeMenu());
      });
      
  return (
    <div className="flex flex-col gap-6 px-32 py-10 max-sm:py-8 max-sm:px-6">
      <p>
        At Namaste React, we are committed to maintaining the privacy and
        security of your personal information. This Privacy Policy outlines how
        we collect, use, disclose, and protect the information you provide to us
        when you use our website, products, or services.
      </p>

      <div>
        <p className="font-bold">Information We Collect</p>
        <p>
          We may collect personal information from you when you interact with
          us, such as when you register an account, make a purchase, sign up for
          our newsletter, or contact customer support. The types of personal
          information we may collect include:
        </p>
        <ul className="list-disc ml-4">
          <li>
            Contact information (such as name, email address, phone number)
          </li>
          <li>Billing and payment information</li>
          <li>Shipping address</li>
          <li>Account login credentials</li>
          <li>Demographic information</li>
          <li>Communication pferences</li>
          <li>
            We may also automatically collect certain information when you visit
            our website, such as your IP address, browser type, device
            identifiers, and browsing activity.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">How We Use Your Information</p>
        <p>
          We use the information we collect for various purposes, including to:
          <ul className="list-disc ml-4">
            <li>Provide and personalize our products and services</li>
            <li>Process transactions and fulfill orders</li>
            <li>
              Communicate with you about your account, purchases, or inquiries
            </li>
            <li>
              Send you promotional offers, newsletters, and other marketing
              communications
            </li>
            <li>Improve our website, products, and services</li>
            <li>Prevent fraud and enhance the security of our systems</li>
            <li>Comply with legal obligations</li>
            <li>Data Sharing and Disclosure</li>
          </ul>
        </p>
      </div>

      <div>
        We may share your personal information with third parties in the
        following circumstances:
        <ul className="list-disc ml-4">
          <li>
            With service providers who assist us in operating our business and
            providing our products and services (e.g., payment processors,
            shipping carriers)
          </li>
          <li>With your consent or at your direction</li>
          <li>
            In connection with a business transaction, such as a merger,
            acquisition, or sale of assets
          </li>
          <li>
            To comply with legal requirements or respond to lawful requests from
            government authorities
          </li>
          <li>
            We do not sell or rent your personal information to third parties
            for their marketing purposes without your explicit consent.
          </li>
        </ul>
      </div>
      <div>
        <p>Data Security</p>
        <p>
          We take reasonable measures to protect the confidentiality and
          security of your personal information. However, please note that no
          method of transmission over the internet or method of electronic
          storage is completely secure. Therefore, while we strive to use
          commercially acceptable means to protect your personal information, we
          cannot guarantee its absolute security.
        </p>
      </div>

      <div>
        <p>Your Choices</p>
        <p>
          You have certain rights and choices regarding the personal information
          we collect and how it is used. You may:
        </p>

        <ul className="list-disc ml-4">
          <li> Update or correct your personal information</li>
          <li>Opt out of receiving marketing communications from us</li>
          <li>
            Request deletion of your account or personal information, subject to
            certain limitations and legal requirements
          </li>
          <li>Changes to this Privacy Policy</li>
        </ul>

        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          material changes by posting the updated Privacy Policy on our website
          and updating the "Last Updated" date at the top of the policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
