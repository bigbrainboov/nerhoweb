import React from 'react';
import { PolicyLayout } from './PolicyLayout';
import { FAQSection } from './FAQSection';

export const SupportPage: React.FC<{ onAskAnythingClick: () => void }> = ({ onAskAnythingClick }) => (
  <>
    <PolicyLayout title="Nerho App Support">
      <section><h2>How can we help?</h2><p>Contact our team for help with signing in, your account, products, orders, or Pay Small Small plans.</p><p><a href="mailto:nerho@gmail.com?subject=Nerho%20app%20support">Email nerho@gmail.com</a><br /><a href="tel:+2349127717176">Call +234 912 771 7176</a><br /><a href="https://wa.me/2349127717176" target="_blank" rel="noopener noreferrer">Chat with Nerho on WhatsApp</a></p><p>When reporting an app issue, include your device model, app version, and what happened. Do not share your password or sensitive payment details.</p></section>
      <section><h2>Account and privacy help</h2><p><a href="/delete-account">Request account deletion</a><br /><a href="/privacy-policy">Read our Privacy Policy</a><br /><a href="/terms">Read our Terms & Conditions</a><br /><a href="/contact">Visit a Nerho location</a></p></section>
    </PolicyLayout>
    <FAQSection onAskAnythingClick={onAskAnythingClick} />
  </>
);
