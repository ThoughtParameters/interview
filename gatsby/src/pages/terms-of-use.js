import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const TermsOfUsePage = () => {
  return (
    <Layout>
      <SEO title="Terms of Use" />
      <div className="prose prose-invert mx-auto">
        <h1>Terms of Use</h1>
        <p>Last updated: July 22, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Thought Parameters LLC ("Company", "we", "our", "us")!
          These Terms of Use govern your use of our website located at
          interview.thoughtparameters.com (together or individually "Service")
          operated by Thought Parameters LLC.
        </p>

        <h2>2. Communications</h2>
        <p>
          By using our Service, you agree to subscribe to newsletters,
          marketing or promotional materials and other information we may send.
          However, you may opt out of receiving any, or all, of these
          communications from us by following the unsubscribe link or by
          emailing us.
        </p>

        <h2>3. Contests, Sweepstakes and Promotions</h2>
        <p>
          Any contests, sweepstakes or other promotions (collectively,
          "Promotions") made available through Service may be governed by rules
          that are separate from these Terms of Use. If you participate in any
          Promotions, please review the applicable rules as well as our Privacy
          Policy.
        </p>

        <h2>4. Content</h2>
        <p>
          Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material ("Content"). You are responsible for Content that you post on
          or through Service, including its legality, reliability, and
          appropriateness.
        </p>

        <h2>5. Prohibited Uses</h2>
        <p>
          You may use Service only for lawful purposes and in accordance with
          Terms. You agree not to use Service in any way that violates any
          applicable national or international law or regulation.
        </p>

        <h2>6. Amendments To Terms</h2>
        <p>
          We may amend Terms at any time by posting the amended terms on this
          site. It is your responsibility to review these Terms periodically.
        </p>

        <h2>7. Acknowledgment</h2>
        <p>
          BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
          THAT YOU HAVE READ THESE TERMS OF USE AND AGREE TO BE BOUND BY THEM.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          Please send your feedback, comments, requests for technical support by
          email: support@thoughtparameters.com.
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfUsePage;
