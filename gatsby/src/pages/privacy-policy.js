import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="prose prose-invert mx-auto">
        <h1>Privacy Policy</h1>
        <p>Last updated: July 22, 2025</p>
        <p>
          Thought Parameters LLC ("us", "we", or "our") operates the
          interview.thoughtparameters.com website (the "Service").
        </p>
        <p>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </p>
        <h2>Information Collection and Use</h2>
        <p>
          We collect several different types of information for various
          purposes to provide and improve our Service to you.
        </p>
        <h3>Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to: Email address, First name and
          last name, Cookies and Usage Data.
        </p>
        <h2>Use of Data</h2>
        <p>
          Thought Parameters LLC uses the collected data for various purposes:
          to provide and maintain our Service; to notify you about changes to
          our Service; to allow you to participate in interactive features of
          our Service when you choose to do so; to provide customer support; to
          gather analysis or valuable information so that we can improve our
          Service; to monitor the usage of our Service; to detect, prevent and
          address technical issues.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us by email: support@thoughtparameters.com.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
